import { useEffect, useMemo, useState, type KeyboardEventHandler } from "react"
import { motion, useReducedMotion } from "framer-motion"

const TESTIMONIALS = [
  {
    name: "Niko Polydorou",
    role: "Product Manager",
    company: "SportsGravy",
    quote:
      "It has been excellent to watch Baskar learn and accomplish so much over the past year. He has successfully transitioned from a pure Ul focus to a broader role, assisting with requirements gathering as I shift toward sales and marketing. Baskar is a highly talented Ul designer who knows Figma inside and out; his ability to organize screens and build components into scalable files has been incredible for the team. Additionally, his willingness to learn, his flexibility, and his dedication to putting in extra hours when necessary have been evident from day one.",
  },
  {
    name: "Priya Shah",
    role: "Founder",
    company: "MyKinderPass",
    quote:
      "He helped us simplify a complex childcare journey. The final flows felt calm, structured, and easier for parents to trust.",
  },
  {
    name: "Karan Patel",
    role: "Engineering Lead",
    company: "OnHand",
    quote:
      "Designs were thoughtful and production-friendly. He anticipated edge cases and delivered flows that reduced support tickets after launch.",
  },
]

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [query])

  return matches
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const shouldReduceMotion = useReducedMotion()

  const ordered = useMemo(
    () =>
      TESTIMONIALS.map((_, offset) => TESTIMONIALS[(index + offset) % TESTIMONIALS.length]),
    [index]
  )

  const offsets = isMobile
    ? { y: 16, scaleStep: 0.03 }
    : { y: 20, scaleStep: 0.04 }

  const handleNext = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  const handlePrev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [shouldReduceMotion, isPaused])

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "ArrowRight") handleNext()
    if (event.key === "ArrowLeft") handlePrev()
  }

  return (
    <section className="py-20 md:py-28 reveal">
      <div className="text-center md:text-left">
        <h2 className="section-title">From the Teams I’ve Collaborated With</h2>
        <p className="mt-4 text-base md:text-lg section-lead mx-auto md:mx-0">
          A few notes from owners, product and engineering people I have worked closely with.
        </p>
      </div>

      <div
        className="mt-14 relative min-h-[380px] md:min-h-[440px] mx-auto w-full max-w-[660px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onKeyDown={onKeyDown}
        tabIndex={0}
        aria-label="Testimonials carousel"
      >
        {ordered.map((item, position) => (
          <motion.div
            key={item.name}
            className="absolute inset-x-0 mx-auto w-full max-w-[600px] rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:p-10 shadow-[var(--shadow-soft)] cursor-grab active:cursor-grabbing"
            style={{ zIndex: 4 - position }}
            drag={position === 0 && !shouldReduceMotion ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              if (position !== 0) return
              if (info.offset.x < -80) handleNext()
              if (info.offset.x > 80) handlePrev()
            }}
            animate={{
              y: position * offsets.y,
              scale: 1 - position * offsets.scaleStep,
              rotate: 0,
              opacity: 1 - position * 0.15,
            }}
            whileHover={position === 0 ? { y: -6, scale: 1.01 } : undefined}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { type: "spring", stiffness: 350, damping: 28 }
            }
          >
            <p className="text-base md:text-lg text-[var(--ink)] leading-[1.7] md:leading-[1.8] tracking-tight">
              "{item.quote}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-sm font-semibold text-[var(--muted)] border border-[color:var(--border)] shadow-sm shrink-0">
                {item.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-lg text-[var(--ink)] tracking-tight">{item.name}</div>
                <div className="text-sm text-[var(--muted)] mt-0.5">
                  {item.role} • {item.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Show previous testimonial"
          className="h-12 w-12 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)] hover:bg-[color:var(--surface-muted)] text-[var(--ink)] flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Show next testimonial"
          className="h-12 w-12 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)] hover:bg-[color:var(--surface-muted)] text-[var(--ink)] flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2.5">
        {TESTIMONIALS.map((item, dotIndex) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 rounded-full transition-all duration-300 ${dotIndex === index ? "w-8 bg-[var(--ink)] shadow-sm" : "w-2.5 bg-[color:var(--border)] hover:bg-[var(--muted)] hover:scale-110"
              }`}
            aria-label={`Show testimonial ${dotIndex + 1}`}
            aria-current={dotIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  )
}
