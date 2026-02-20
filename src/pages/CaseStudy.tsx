import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import BeforeAfterSplit from "../components/case-study/BeforeAfterSplit"
import CaseStudyShell from "../components/case-study/CaseStudyShell"
import DecisionCards from "../components/case-study/DecisionCards"
import MetaGrid from "../components/case-study/MetaGrid"
import NextProject from "../components/case-study/NextProject"
import StorySection from "../components/case-study/StorySection"
import { WORK_ITEMS, getAdjacentWorkItems } from "../data/work"
import SportsGravyCaseStudy from "./sportsgravy-case-study"

const NAV_ITEMS = [
  { id: "overview", label: "Hero" },
  { id: "executive-summary", label: "Summary" },
  { id: "problem-framing", label: "Problem" },
  { id: "constraints", label: "Constraints" },
  { id: "system-redesign", label: "System" },
  { id: "decisions", label: "Decisions" },
  { id: "before-after", label: "Before/After" },
  { id: "design-system", label: "Scale" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
]

export default function CaseStudy() {
  const { slug } = useParams()
  const location = useLocation()
  const project = WORK_ITEMS.find((p) => p.slug === slug)

  useEffect(() => {
    const state = location.state as { preserveScrollPosition?: boolean } | null
    const shouldPreserve = Boolean(state?.preserveScrollPosition)

    if (shouldPreserve) {
      const savedY = Number(sessionStorage.getItem("portfolio:homeScrollY") ?? "0")
      window.scrollTo({ top: Number.isFinite(savedY) ? savedY : 0, behavior: "auto" })
      sessionStorage.removeItem("portfolio:homeScrollY")
      return
    }

    window.scrollTo({ top: 0, behavior: "auto" })
  }, [slug, location.state])

  if (!project) {
    return (
      <div className="min-h-screen px-4 py-10 text-[var(--ink)]">
        <div className="mx-auto max-w-[1200px]">Project not found.</div>
      </div>
    )
  }

  if (project.slug === "sportsgravy") {
    return <SportsGravyCaseStudy />
  }

  const { prev, next } = getAdjacentWorkItems(project.slug)
  const learnings = project.caseStudy.learnings ?? []

  const insights = project.caseStudy.personas.flatMap((persona) =>
    persona.painPoints.map((point) => point),
  )

  const problemBullets =
    insights.length >= 3
      ? insights.slice(0, 3)
      : [
          project.caseStudy.goals[0] ?? "Clarify core product workflows.",
          project.caseStudy.goals[1] ?? "Reduce operational complexity across user roles.",
          project.caseStudy.goals[2] ?? "Create a scalable interaction foundation.",
        ]

  const executiveSummary = [
    {
      label: "Problem",
      text: `${project.title} had workflow complexity across ${project.caseStudy.informationArchitecture.slice(0, 3).join(", ")}${project.caseStudy.informationArchitecture.length > 3 ? ", and other modules" : ""}, creating inconsistency as scope expanded.`,
    },
    {
      label: "Intervention",
      text: "I restructured the experience into clearer workflow paths and introduced reusable interaction patterns across key journeys.",
    },
    {
      label: "My ownership",
      text: `I owned UX strategy, IA, interaction decisions, and engineering handoff while aligning closely with ${project.caseStudy.team}.`,
    },
    {
      label: "Outcome",
      text: "The product moved from fragmented feature execution to a more coherent, scalable system with stronger delivery clarity.",
    },
  ]

  const constraints = [
    {
      title: "Technical limitations",
      detail:
        "Production instrumentation was limited, so decisions were grounded in interviews, product reviews, and workflow analysis.",
    },
    {
      title: "Stakeholder alignment",
      detail: `Cross-functional alignment across ${project.caseStudy.team} was required to keep scope and quality aligned.`,
    },
    {
      title: "Timeline pressure",
      detail: `The delivery window (${project.caseStudy.timeline}) required prioritizing system clarity over one-off UI exploration.`,
    },
    {
      title: "Legacy complexity",
      detail:
        "Information architecture had uneven patterns across modules, requiring consolidation without slowing release velocity.",
    },
    {
      title: "Business risk",
      detail:
        "Product priorities had to balance operational workflows with growth goals while avoiding experience fragmentation.",
    },
  ]

  const decisions =
    project.caseStudy.decisions && project.caseStudy.decisions.length > 0
      ? project.caseStudy.decisions
      : project.caseStudy.designJourney.slice(0, 4).map((step, index) => ({
          title: `System decision ${index + 1}`,
          detail: step,
          tradeoff: "Trade-off: prioritized implementation clarity and scalability over short-term customization.",
        }))

  const decisionCards = decisions.map((decision, index) => ({
    decision: decision.title,
    why: decision.detail,
    alternatives:
      index % 2 === 0
        ? "Localized screen-level changes without system-level pattern alignment."
        : "One-size-fits-all flows with minimal role differentiation.",
    tradeoffs:
      decision.tradeoff ??
      "Required stronger upfront coordination with engineering, but reduced long-term interaction and maintenance debt.",
    outcome:
      project.caseStudy.outcomes[index % project.caseStudy.outcomes.length] ??
      "Improved product consistency and implementation predictability.",
  }))

  const beforeAfterPairs = [
    {
      beforeTitle: "From Fragmented to Guided",
      beforeText:
        problemBullets[0] ??
        "Users relied on disconnected screens and inconsistent workflow decisions.",
      afterTitle: "Role-based workflow progression",
      afterText:
        project.caseStudy.userFlows[0] ??
        "Core tasks were reorganized into clearer paths with predictable transitions.",
    },
    {
      beforeTitle: "From Manual to Structured",
      beforeText:
        problemBullets[1] ??
        "Execution depended on ad hoc handoffs and inconsistent decision logic.",
      afterTitle: "Reusable system primitives",
      afterText:
        project.caseStudy.designJourney[0] ??
        "Shared interaction patterns reduced ambiguity and improved delivery consistency.",
    },
  ]

  const scaleSignals = [
    `Reusable patterns across ${project.caseStudy.informationArchitecture.slice(0, 3).join(", ")}${project.caseStudy.informationArchitecture.length > 3 ? ", and additional modules" : ""}.`,
    "Interaction logic designed for consistency across primary user journeys.",
    `System decisions documented to support future iteration beyond ${project.caseStudy.timeline}.`,
    "Cross-functional handoff structure that improves scalability and reduces rework.",
  ]

  const reflections =
    learnings.length > 0
      ? learnings.slice(0, 3)
      : [
          "System-level framing improves decision quality when product scope is broad.",
          "Earlier instrumentation would strengthen confidence in prioritization decisions.",
          "Scalable interaction logic reduces downstream design and engineering debt.",
        ]

  const metaItems = [
    { label: "Role", value: project.caseStudy.role },
    { label: "Duration", value: project.caseStudy.timeline },
    { label: "Team", value: project.caseStudy.team },
    { label: "Platform", value: project.productType },
    { label: "Scope", value: project.caseStudy.informationArchitecture.slice(0, 3).join(", ") },
  ]

  return (
    <CaseStudyShell
      hideIntro
      title={project.title}
      summary={project.caseStudy.overview}
      role={project.caseStudy.role}
      timeline={project.caseStudy.timeline}
      navItems={NAV_ITEMS}
    >
      <section id="overview" className="py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Case Study</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[var(--ink)] md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--muted)] md:text-2xl">
            Transformed a complex product area into a clearer workflow system with stronger delivery alignment and long-term scalability.
          </p>
        </div>

        <div className="mt-10">
          <MetaGrid items={metaItems} />
        </div>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          I owned system-level UX strategy and execution from problem framing to
          implementation-ready design decisions, aligning product and engineering
          on priorities, constraints, and delivery quality.
        </p>

        <figure className="mt-12 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
          <img
            src={project.thumbnailSrc}
            alt={`${project.title} hero visual`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
      </section>

      <StorySection
        id="executive-summary"
        title="Executive Summary"
        subtitle="Problem, intervention, ownership, and outcome in one senior-level view."
      >
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-8">
          <div className="space-y-4">
            {executiveSummary.map((item) => (
              <article
                key={item.label}
                className="grid gap-2 border-b border-[color:var(--border)] pb-4 last:border-b-0 last:pb-0 md:grid-cols-[170px_1fr] md:gap-4"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)]">
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </StorySection>

      <StorySection
        id="problem-framing"
        title="Product Complexity Was Slowing Decision Quality"
        subtitle="The core challenge was system clarity across modules and user roles, not isolated interface polish."
        muted
      >
        <div className="grid gap-4 md:grid-cols-3">
          {problemBullets.map((bullet) => (
            <article
              key={bullet}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm leading-relaxed text-[var(--muted)]"
            >
              {bullet}
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="constraints"
        title="Constraints & Complexity"
        subtitle="Execution required balancing platform constraints, stakeholder needs, and delivery timelines."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {constraints.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
            >
              <h3 className="text-base font-semibold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="system-redesign"
        title="System Redesign"
        subtitle="I shifted the product from isolated screens to connected workflow logic that scales across modules."
        centered
        muted
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface)] p-8 text-center text-sm text-[var(--muted)]">
            Workflow transformation diagram placeholder
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-[var(--muted)] md:text-base">
            Before: users moved through disconnected screens with inconsistent logic.
            After: workflow paths became role-aware, predictable, and implementation-ready.
          </p>
        </div>
      </StorySection>

      <StorySection
        id="decisions"
        title="Key Design Decisions"
        subtitle="Each decision links system-level reasoning, trade-offs, and delivery impact."
      >
        <DecisionCards items={decisionCards} />
      </StorySection>

      <StorySection
        id="before-after"
        title="Before to After Transformation"
        subtitle="How the redesign shifted the product from fragmented execution to structured delivery."
        muted
      >
        <div className="space-y-5">
          {beforeAfterPairs.map((pair) => (
            <BeforeAfterSplit
              key={pair.beforeTitle}
              beforeTitle={pair.beforeTitle}
              beforeText={pair.beforeText}
              afterTitle={pair.afterTitle}
              afterText={pair.afterText}
            />
          ))}
        </div>
      </StorySection>

      <StorySection
        id="design-system"
        title="Design System & Scale"
        subtitle="Scalability was enabled through reusable interaction logic and structured cross-functional handoff."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {scaleSignals.map((signal) => (
            <article
              key={signal}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm leading-relaxed text-[var(--muted)]"
            >
              {signal}
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="impact"
        title="Outcome"
        subtitle="Impact statements focused on product maturity, system coherence, and delivery quality."
        centered
        muted
      >
        <div className="mx-auto max-w-5xl space-y-5">
          {project.caseStudy.outcomes.map((item) => (
            <p
              key={item}
              className="border-l-2 border-[color:var(--ink)] pl-5 text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)] md:text-4xl"
            >
              {item}
            </p>
          ))}
        </div>
      </StorySection>

      <StorySection id="reflection" title="Reflection" subtitle="Senior-level takeaway from this engagement.">
        <ul className="space-y-4">
          {reflections.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <NextProject
            prev={
              prev
                ? {
                    label: "Previous",
                    title: prev.title,
                    href: `/work/${prev.slug}`,
                  }
                : undefined
            }
            next={
              next
                ? {
                    label: "Next",
                    title: next.title,
                    href: `/work/${next.slug}`,
                  }
                : undefined
            }
          />
        </div>
      </StorySection>
    </CaseStudyShell>
  )
}
