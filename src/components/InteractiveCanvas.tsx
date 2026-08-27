import { useEffect, useRef, useState } from "react"

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      setDimensions({ width: rect.width, height: rect.height })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Set initial mouse target position to the center of the screen
    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX
      mouseRef.current.targetY = e.clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX
        mouseRef.current.targetY = e.touches[0].clientY
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set up Retina (High DPI) scaling
    const dpr = window.devicePixelRatio || 1
    canvas.width = dimensions.width * dpr
    canvas.height = dimensions.height * dpr
    ctx.scale(dpr, dpr)

    // Grid configuration
    const spacing = 50 // distance between nodes
    const cols = Math.ceil(dimensions.width / spacing) + 4
    const rows = Math.ceil(dimensions.height / spacing) + 4
    const focalLength = 300 // 3D projection focal length

    let animationFrameId: number
    const startTime = Date.now()

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      const time = (Date.now() - startTime) * 0.001
      const mouse = mouseRef.current

      // Smooth mouse position with easing (spring effect)
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      const points: { x: number; y: number; opacity: number; size: number }[][] = []

      // 1. Calculate 3D points and apply perspective projection
      for (let r = 0; r < rows; r++) {
        points[r] = []
        for (let c = 0; c < cols; c++) {
          // Calculate grid node coordinates centered on canvas
          const baseX = (c - cols / 2) * spacing + dimensions.width / 2
          const baseY = (r - rows / 2) * spacing + dimensions.height / 2

          // Compute distance to smoothed mouse position
          const dx = mouse.x - baseX
          const dy = mouse.y - baseY
          const dist = Math.sqrt(dx * dx + dy * dy)

          // 3D displacement (Z depth)
          // Base waving animation (sine wave simulation)
          let z = Math.sin(c * 0.25 + time) * Math.cos(r * 0.25 + time) * 15

          // Hover interaction: push/deform mesh in 3D space near mouse
          const maxDist = 250
          let push = 0
          if (dist < maxDist) {
            push = (maxDist - dist) / maxDist
            // Smooth easing function for cleaner displacement curve
            const smoothPush = Math.pow(push, 2)
            z -= smoothPush * 45 // push back into screen for 3D depth wave
          }

          // 3D perspective projection formula
          const scale = focalLength / (focalLength + z)
          const px = (baseX - dimensions.width / 2) * scale + dimensions.width / 2
          const py = (baseY - dimensions.height / 2) * scale + dimensions.height / 2

          points[r][c] = {
            x: px,
            y: py,
            opacity: 0.04 + push * 0.22, // brighter near mouse
            size: 0.75 + push * 1.5,
          }
        }
      }

      // 2. Draw connections (lines) to form a responsive mesh
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = points[r][c]

          // Right neighbor line
          if (c < cols - 1) {
            const pRight = points[r][c + 1]
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(pRight.x, pRight.y)
            const avgOpacity = (p.opacity + pRight.opacity) / 2
            ctx.strokeStyle = `rgba(255, 255, 255, ${avgOpacity})`
            ctx.lineWidth = 0.5 + (p.size + pRight.size) * 0.15
            ctx.stroke()
          }

          // Bottom neighbor line
          if (r < rows - 1) {
            const pBottom = points[r + 1][c]
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(pBottom.x, pBottom.y)
            const avgOpacity = (p.opacity + pBottom.opacity) / 2
            ctx.strokeStyle = `rgba(255, 255, 255, ${avgOpacity})`
            ctx.lineWidth = 0.5 + (p.size + pBottom.size) * 0.15
            ctx.stroke()
          }
        }
      }

      // 3. Draw intersection nodes (dots)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = points[r][c]
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity + 0.1})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full bg-black pointer-events-none"
      style={{ touchAction: "none" }}
    />
  )
}
