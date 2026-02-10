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
    ? { y: 14, scaleStep: 0.028 }
    : { y: 18, scaleStep: 0.035 }

  const handleNext = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  const handlePrev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [shouldReduceMotion, isPaused])

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "ArrowRight") handleNext()
    if (event.key === "ArrowLeft") handlePrev()
  }

  return (
    <section className="py-16 md:py-24 reveal">
      <div className="text-left">
        <h2 className="section-title">From the Teams I’ve Collaborated With</h2>
        <p className="mt-2 text-sm md:text-base section-lead">
          A few notes from owners, product and engineering people I have worked with.
        </p>
      </div>

      <div
        className="mt-10 relative min-h-[360px] md:min-h-[420px] mx-auto w-full max-w-[620px]"
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
            className="absolute inset-x-0 mx-auto w-full max-w-[560px] rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 shadow-[var(--shadow-soft)]"
            style={{ zIndex: 4 - position }}
            drag={position === 0 && !shouldReduceMotion ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.06}
            onDragEnd={(_, info) => {
              if (position !== 0) return
              if (info.offset.x < -60) handleNext()
              if (info.offset.x > 60) handlePrev()
            }}
            animate={{
              y: position * offsets.y,
              scale: 1 - position * offsets.scaleStep,
              rotate: 0,
              opacity: 1 - position * 0.12,
            }}
            whileHover={position === 0 ? { y: -2 } : undefined}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { type: "spring", stiffness: 220, damping: 24 }
            }
          >
            <p className="text-sm md:text-base text-[var(--ink)] leading-relaxed">
              "{item.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-sm font-semibold text-[var(--muted)]">
                {item.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div className="font-semibold text-[var(--ink)]">{item.name}</div>
                <div className="text-xs text-[var(--muted)]">
                  {item.role} • {item.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Show previous testimonial"
          className="h-11 w-11 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)] text-[var(--ink)]"
        >
          ←
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Show next testimonial"
          className="h-11 w-11 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)] text-[var(--ink)]"
        >
          →
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((item, dotIndex) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2 rounded-full transition ${
              dotIndex === index ? "w-7 bg-[var(--accent)]" : "w-2 bg-[color:var(--border)] hover:bg-[var(--muted)]"
            }`}
            aria-label={`Show testimonial ${dotIndex + 1}`}
            aria-current={dotIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  )
}
