import { useEffect, useState } from "react"

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setVisible(false), 300)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 60)

    return () => clearInterval(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-[#FAF9F5] z-[9999] flex flex-col items-center justify-center font-mono">
      <div className="w-64 space-y-3">
        <div className="flex justify-between text-[10px] tracking-wider text-black/50">
          <span>SYS_BOOTSTRAP_LOAD</span>
          <span className="tabular-nums font-semibold">{Math.min(progress, 100)}%</span>
        </div>
        <div className="h-[2px] w-full bg-black/10 overflow-hidden relative rounded-full">
          <div
            className="h-full bg-[#E25A3C] transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="text-[9px] text-black/40 text-center tracking-widest uppercase pt-1">
          BASKAR S // PRODUCT_DESIGNER_2026
        </div>
      </div>
    </div>
  )
}
