import { FiZap, FiHeart, FiCheckCircle, FiAperture } from "react-icons/fi"
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

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 reveal">
      <h2 className="section-title">A bit about me</h2>

      <div className="mt-4 max-w-3xl space-y-8">
        <p className="text-[var(--muted)] leading-relaxed">
          I am a UI/UX designer with experience across product features, design systems, and delivery.
          Most of my work sits at the intersection of user needs, business goals, and engineering constraints.
          I focus on making decisions clear, documenting intent, and helping teams ship with confidence.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-[var(--ink)]">How I usually work</h3>
        <div className="mt-4">
          <div className="relative hidden sm:grid grid-cols-5 gap-6 text-xs text-[var(--muted)]">
            <div className="absolute left-0 right-0 top-5 h-[2px] bg-[color:var(--border)]" />
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="relative z-10 flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white font-semibold shadow-[0_4px_12px_rgba(26,115,232,0.3)]">
                  {index + 1}
                </div>
                <div className="mt-3 text-sm font-semibold text-[var(--ink)]">
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.title} className="space-y-4">
                <div className="flex items-center gap-3 sm:hidden">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white text-xs font-semibold">
                    {step.title[0]}
                  </div>
                  <div className="text-sm font-semibold text-[var(--ink)]">
                    {step.title}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.24em] text-[var(--muted)]">
                    ACTIVITIES
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                    {step.activities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[var(--accent)]">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.24em] text-[var(--muted)]">
                    OUTPUTS
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                    {step.outputs.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Tools />

      {/* ✅ Design Principles (added inside the same About section) */}
      <div className="mt-12 md:mt-16">
        <h3 className="text-lg font-semibold text-[var(--ink)]">A few principles I come back to</h3>
        <p className="mt-2 text-sm md:text-base section-lead">
          These principles help me stay consistent across discovery, design, and handoff.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition hover:shadow-[var(--shadow-strong)]"
            >
              <div className="text-[var(--accent)]">{p.icon}</div>
              <div className="mt-4 text-lg font-semibold text-[var(--ink)]">{p.title}</div>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
