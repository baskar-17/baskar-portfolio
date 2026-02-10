import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

const TESTIMONIALS = [
  {
    name: "Arjun Menon",
    role: "Product Manager",
    company: "SportsGravy",
    quote:
      "Baskar brings clarity to messy problems. He mapped the flows fast, validated them with users, and delivered UI that engineers could ship without constant back-and-forth.",
  },
  {
    name: "Priya Shah",
    role: "Founder",
    company: "MyKinderPass",
    quote:
      "He helped us turn a complex childcare journey into something parents could trust. The structure, tone, and UI decisions made our product feel calm and credible. Baskar brings clarity to messy problems. He mapped the flows fast, validated them with users, and delivered UI that engineers could ship without constant back-and-forth Baskar brings clarity to messy problems. He mapped the flows fast, validated them with users, and delivered UI that engineers could ship without constant back-and-forth Baskar brings clarity to messy problems. He mapped the flows fast, validated them with users, and delivered UI that engineers could ship without constant back-and-forth",
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
  const isMobile = useMediaQuery("(max-width: 768px)")

  const ordered = useMemo(
    () =>
      TESTIMONIALS.map((_, offset) => TESTIMONIALS[(index + offset) % TESTIMONIALS.length]),
    [index]
  )

  const offsets = isMobile
    ? { y: 18, scaleStep: 0.035, rotate: 1.5 }
    : { y: 24, scaleStep: 0.045, rotate: 2.5 }

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="py-16 md:py-24 reveal">
      <div className="text-left">
        <h2 className="section-title">What people say</h2>
        <p className="mt-2 text-sm md:text-base section-lead">
          A few notes from teammates and partners I've collaborated with.
        </p>
      </div>

      <div className="mt-10 relative min-h-[360px] md:min-h-[420px] mx-auto w-full max-w-[620px]">
        {ordered.map((item, position) => (
          <motion.div
            key={item.name}
            className="absolute left-1/2 w-full max-w-[560px] -translate-x-1/2 rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 shadow-[var(--shadow-soft)]"
            style={{ zIndex: 4 - position }}
            animate={{
              y: position * offsets.y,
              scale: 1 - position * offsets.scaleStep,
              rotate: position === 0 ? 0 : position % 2 === 0 ? offsets.rotate : -offsets.rotate,
              opacity: 1 - position * 0.12,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
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
    </section>
  )
}
