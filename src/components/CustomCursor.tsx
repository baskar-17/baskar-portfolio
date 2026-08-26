import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  // Use framer-motion values for GPU-accelerated transforms
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 320, mass: 0.3 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (isHidden) setIsHidden(false)
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    // Detect clickable elements for hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") !== null || 
        target.closest("button") !== null ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer")

      setIsHovered(isClickable)
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [isHidden, cursorX, cursorY])

  if (isHidden) return null

  return (
    <>
      {/* Outer follow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--ink)] pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.05)" : "rgba(0, 0, 0, 0)",
          borderColor: isHovered ? "var(--ink)" : "var(--muted)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
      {/* Inner solid dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[var(--ink)] rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  )
}
