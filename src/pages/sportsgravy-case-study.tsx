import BeforeAfterSplit from "../components/case-study/BeforeAfterSplit"
import CaseStudyShell from "../components/case-study/CaseStudyShell"
import DecisionCards from "../components/case-study/DecisionCards"
import MetaGrid from "../components/case-study/MetaGrid"
import NextProject from "../components/case-study/NextProject"
import StorySection from "../components/case-study/StorySection"
import { getAdjacentWorkItems } from "../data/work"

const HERO_VISUAL = `${import.meta.env.BASE_URL}work/sportsgravy-banner.png`

const META = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Duration", value: "Pre-launch MVP" },
  { label: "Team", value: "PM + Engineers + Me" },
  { label: "Platform", value: "Web + Mobile" },
  { label: "Scope", value: "Registration, CRM, Fundraising" },
]

const EXECUTIVE_SUMMARY = [
  {
    label: "Problem",
    text: "Youth sports organizations relied on fragmented tools, creating confusion across registration, communication, and day-to-day operations.",
  },
  {
    label: "Intervention",
    text: "I redesigned the experience around role-specific workflows and introduced shared UI patterns across key modules.",
  },
  {
    label: "Outcome",
    text: "The product moved toward a clearer MVP with reduced flow ambiguity and stronger delivery alignment.",
  },
  {
    label: "My ownership",
    text: "I owned end-to-end UX from workflow definition and IA to final interaction design and handoff-ready UI patterns.",
  },
]

const PROBLEM_BULLETS = [
  "Admins managed setup across disconnected tools, causing duplicated effort and support overhead.",
  "Parents and coaches lacked a role-focused experience, so routine tasks felt slower than necessary.",
  "Monetization features needed to be added without breaking trust in core product workflows.",
]

const CONSTRAINTS = [
  {
    title: "Technical limitations",
    detail: "No production analytics; decisions relied on discovery interviews and workflow walkthroughs.",
  },
  {
    title: "Stakeholder expectations",
    detail: "Product needed immediate breadth across modules while preserving an intuitive first-use experience.",
  },
  {
    title: "Timeline pressure",
    detail: "MVP scope required rapid iteration and clear prioritization to avoid late-stage redesign churn.",
  },
  {
    title: "Legacy patterns",
    detail: "Existing structures varied by module, so consistency had to be introduced without a full rebuild.",
  },
  {
    title: "Business risk",
    detail: "Fundraising surfaces had to support revenue goals without feeling like interruption-driven UI.",
  },
]

const DECISIONS = [
  {
    decision: "Role-specific entry points",
    why: "Each user type had distinct top tasks and needed immediate relevance on entry.",
    alternatives: "Single shared dashboard with filtered content.",
    tradeoffs: "More upfront IA decisions, less short-term flexibility.",
    outcome: "Faster path to core actions for admins, coaches, and parents.",
  },
  {
    decision: "Progressive disclosure for setup",
    why: "Admin setup complexity was causing drop-off and decision fatigue.",
    alternatives: "One-page setup with all settings exposed.",
    tradeoffs: "Additional step design and state handling complexity.",
    outcome: "Clearer setup progression and fewer handoff clarifications.",
  },
  {
    decision: "Reusable cross-module patterns",
    why: "Parallel module development needed visual and behavioral consistency.",
    alternatives: "Module-specific UI treatments.",
    tradeoffs: "Reduced visual variety in exchange for speed and coherence.",
    outcome: "Improved implementation predictability and shared design language.",
  },
  {
    decision: "Contextual fundraising integration",
    why: "Monetization needed to feel relevant to user intent, not intrusive.",
    alternatives: "Standalone fundraising pages disconnected from daily workflows.",
    tradeoffs: "More nuanced placement strategy and prioritization work.",
    outcome: "Balanced business visibility with user-task continuity.",
  },
]

const SCALE_SIGNALS = [
  "Reusable components for forms, status states, and role navigation.",
  "Consistent interaction patterns across registration, CRM, and communication surfaces.",
  "Responsive logic designed for admin-heavy desktop workflows and mobile quick actions.",
  "Structured pattern decisions that reduce future redesign cost when adding new modules.",
]

const IMPACT = [
  "Simplified workflow architecture",
  "Improved role clarity",
  "Reduced operational friction",
  "Increased team alignment",
  "Strengthened product consistency",
]

const REFLECTION = [
  "What worked: role-first workflow mapping made decisions faster and more defensible.",
  "What I would improve: add earlier instrumentation to validate assumptions with behavioral data.",
  "Key learning: system-level consistency is a strategic multiplier when product scope expands quickly.",
]

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

export default function SportsGravyCaseStudy() {
  const { prev, next } = getAdjacentWorkItems("sportsgravy")

  return (
    <CaseStudyShell
      hideIntro
      title="SportsGravy"
      summary="Redesigning a multi-role sports platform to reduce operational friction and create a scalable product foundation."
      role="UI/UX Designer (end-to-end)"
      timeline="Pre-launch MVP"
      navItems={NAV_ITEMS}
    >
      <section id="overview" className="py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Case Study</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[var(--ink)] md:text-7xl">
            SportsGravy
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--muted)] md:text-2xl">
            Reframed a fragmented youth sports product into a role-driven system that improved clarity, delivery confidence, and scalability.
          </p>
        </div>

        <div className="mt-10">
          <MetaGrid items={META} />
        </div>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          I owned the product experience strategy and execution across discovery,
          information architecture, interaction design, and engineering handoff.
          The redesign moved the team from fragmented flows to a guided, reusable system.
        </p>

        <figure className="mt-12 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
          <img
            src={HERO_VISUAL}
            alt="SportsGravy platform overview"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
      </section>

      <StorySection
        id="executive-summary"
        title="Executive Summary"
        subtitle="A concise view of the product challenge, intervention, and strategic outcome."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {EXECUTIVE_SUMMARY.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)]">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="problem-framing"
        title="Fragmented Operations Were Blocking Product Confidence"
        subtitle="The core issue was not visual polish. It was workflow fragmentation across roles and modules."
        muted
      >
        <div className="grid gap-4 md:grid-cols-3">
          {PROBLEM_BULLETS.map((bullet) => (
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
        subtitle="This redesign required balancing technical realities, stakeholder pressure, and business goals."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CONSTRAINTS.map((item) => (
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
        subtitle="I shifted the product from module-first screens to role-first workflows with predictable transitions."
        centered
        muted
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface)] p-8 text-center text-sm text-[var(--muted)]">
            Workflow transformation diagram placeholder
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-[var(--muted)] md:text-base">
            Before: users jumped between disconnected modules to complete one task.
            After: role-driven entry points and guided transitions made each workflow more coherent and easier to execute.
          </p>
        </div>
      </StorySection>

      <StorySection
        id="decisions"
        title="Key Design Decisions"
        subtitle="Each decision reflects business trade-offs, alternatives, and outcomes."
      >
        <DecisionCards items={DECISIONS} />
      </StorySection>

      <StorySection
        id="before-after"
        title="Before to After Transformation"
        subtitle="How the redesign changed user experience quality and operational clarity."
        muted
      >
        <div className="space-y-5">
          <BeforeAfterSplit
            beforeTitle="From Fragmented to Guided"
            beforeText="Users pieced together workflows across disconnected screens with inconsistent decision points."
            afterTitle="Role-based guided journey"
            afterText="Task paths became structured by role, reducing friction and uncertainty in high-frequency actions."
          />
          <BeforeAfterSplit
            beforeTitle="From Manual to Structured"
            beforeText="Setup and coordination depended on manual steps and ad hoc team communication."
            afterTitle="From repetitive to reusable"
            afterText="Reusable patterns and clearer handoff logic increased implementation consistency across modules."
          />
        </div>
      </StorySection>

      <StorySection
        id="design-system"
        title="Design System & Scale"
        subtitle="Scalability came from reusable interaction logic, not isolated screen improvements."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {SCALE_SIGNALS.map((signal) => (
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
        subtitle="Strategic product impact, expressed as execution and system quality gains."
        centered
        muted
      >
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {IMPACT.map((item) => (
            <p
              key={item}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-8 text-center text-lg font-semibold tracking-tight text-[var(--ink)] md:text-xl"
            >
              {item}
            </p>
          ))}
        </div>
      </StorySection>

      <StorySection id="reflection" title="Reflection" subtitle="Senior-level takeaway from this engagement.">
        <ul className="space-y-4">
          {REFLECTION.map((item) => (
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
