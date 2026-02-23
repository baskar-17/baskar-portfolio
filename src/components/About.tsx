import { FiZap, FiHeart, FiCheckCircle, FiAperture } from "react-icons/fi"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import Tools from "./Tools"

type Principle = {
  title: string
  description: string
  icon: React.ReactNode
}

type ProcessStep = {
  title: string
  activities: string[]
  outputs: string[]
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discover",
    activities: ["Stakeholder interviews", "User conversations", "Audit existing flows"],
    outputs: ["Problem statements", "User quotes", "Pain point map"],
  },
  {
    title: "Define",
    activities: ["Synthesize research", "Prioritize problems", "Set constraints"],
    outputs: ["Design principles", "Success criteria", "Scope doc"],
  },
  {
    title: "Ideate",
    activities: ["Sketch solutions", "Explore patterns", "Quick prototypes"],
    outputs: ["Flow diagrams", "Low-fi wireframes", "Options deck"],
  },
  {
    title: "Design",
    activities: ["Wireframes", "Component specs", "Interaction details"],
    outputs: ["Mid-fi screens", "Dev handoff", "Edge cases"],
  },
  {
    title: "Iterate",
    activities: ["Dev pairing", "QA review", "User feedback"],
    outputs: ["Refined designs", "Bug fixes", "Documentation"],
  },
]

const PRINCIPLES: Principle[] = [
  {
    title: "Small steps, consistently",
    description:
      "I try not to force perfection in one pass. I move in small iterations and keep improving.",
    icon: <FiZap className="text-2xl" />,
  },
  {
    title: "People first",
    description:
      "People are usually busy and under pressure. The interface should support them, not test them.",
    icon: <FiHeart className="text-2xl" />,
  },
  {
    title: "Clarity over novelty",
    description:
      "If someone has to decode the UI, I have not done enough. Clear hierarchy and obvious actions matter most.",
    icon: <FiCheckCircle className="text-2xl" />,
  },
  {
    title: "Details build trust",
    description:
      "Spacing, microcopy, and interaction states are small things, but they shape how reliable a product feels.",
    icon: <FiAperture className="text-2xl" />,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 24 } },
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <h2 className="section-title reveal">A bit about me</h2>

      <div className="mt-6 max-w-3xl space-y-8 reveal reveal-delay-1">
        <p className="text-[var(--muted)] leading-relaxed text-lg">
          I am a UI/UX designer with experience across product features, design systems, and delivery.
          Most of my work sits at the intersection of user needs, business goals, and engineering constraints.
          I focus on making decisions clear, documenting intent, and helping teams ship with confidence.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">How I usually work</h3>
        <div className="mt-8">
          <div className="relative hidden sm:grid grid-cols-5 gap-6 text-xs text-[var(--muted)]">
            <div className="absolute left-0 right-0 top-5 h-[1px] bg-[color:var(--border)]" />
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="relative z-10 flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-white font-semibold shadow-[var(--shadow-soft)]">
                  {index + 1}
                </div>
                <div className="mt-4 text-[0.95rem] font-semibold text-[var(--ink)]">
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div key={step.title} variants={stepVariants} className="space-y-5">
                <div className="flex items-center gap-3 sm:hidden">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)] text-white text-xs font-semibold shadow-sm">
                    {step.title[0]}
                  </div>
                  <div className="text-base font-semibold text-[var(--ink)]">
                    {step.title}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--muted)] uppercase">
                    Activities
                  </div>
                  <ul className="mt-3 space-y-2.5 text-[0.95rem] text-[var(--muted)]">
                    {step.activities.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-[var(--ink)] font-bold opacity-60">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--muted)] uppercase">
                    Outputs
                  </div>
                  <ul className="mt-3 space-y-2.5 text-[0.95rem] text-[var(--muted)]">
                    {step.outputs.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Tools />

      <div className="mt-20 md:mt-24">
        <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">Principles I come back to</h3>
        <p className="mt-3 text-base text-[var(--muted)] max-w-2xl">
          These help me stay consistent across discovery, design, and handoff.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 shadow-sm transition-shadow duration-300 hover:shadow-[var(--shadow-strong)]"
            >
              <div className="text-[var(--ink)]">{p.icon}</div>
              <div className="mt-5 text-lg font-semibold text-[var(--ink)] tracking-tight">{p.title}</div>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
