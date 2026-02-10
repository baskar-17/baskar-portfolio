import CaseStudyShell from "../components/case-study/CaseStudyShell"
import Section from "../components/case-study/Section"
import ProblemCards from "../components/case-study/ProblemCards"
import GoalsSplit from "../components/case-study/GoalsSplit"
import ResearchBlock from "../components/case-study/ResearchBlock"
import Gallery from "../components/case-study/Gallery"
import Callout from "../components/case-study/Callout"
import NextProject from "../components/case-study/NextProject"

const PROBLEM_AREAS = [
  {
    title: "Registration",
    detail:
      "Prevented a bloated, one-size-fits-all flow by designing guided steps for admins while keeping parent enrollment fast and low-friction.",
  },
  {
    title: "CRM",
    detail:
      "Avoided scattered contact data by introducing a consistent structure for organizations to manage families, teams, and communication history.",
  },
  {
    title: "Fundraising",
    detail:
      "Reduced the risk of sponsorship feeling like an ad by integrating fundraising moments into relevant, role-specific workflows.",
  },
  {
    title: "Website Builder",
    detail:
      "Prevented early confusion by providing a simple, guided structure for organizations to launch a credible public presence quickly.",
  },
]

const BUSINESS_GOALS = [
  "Establish a scalable UX foundation for a multi-role platform.",
  "Enable monetization features without disrupting core tasks.",
  "Align web and mobile patterns for consistent adoption.",
]

const USER_GOALS = [
  "Give parents and coaches fast access to schedules and updates.",
  "Help admins manage registrations, rosters, and communications with clarity.",
  "Reduce confusion caused by fragmented tools and inconsistent information.",
]

const INSIGHTS = [
  {
    title: "Role priorities are fundamentally different",
    detail:
      "Parents want immediate updates, coaches prioritize team operations, and admins need structure. A single workflow slowed everyone down.",
  },
  {
    title: "Mobile is the default touchpoint",
    detail:
      "Parents and coaches often check updates between work or practices, so key actions needed to be short, clear, and forgiving.",
  },
  {
    title: "Admins need guided setup",
    detail:
      "Team creation, registration setup, and scheduling performed better when broken into predictable steps.",
  },
  {
    title: "Consistency builds confidence",
    detail:
      "Non-technical users trusted the product more when patterns and language were stable across web and mobile.",
  },
]

const DECISIONS = [
  {
    title: "Role-specific entry points",
    detail:
      "Designed entry flows by role so users could reach their most common tasks without extra navigation.",
  },
  {
    title: "Progressive disclosure for setup",
    detail:
      "Revealed complexity only when needed to keep admin workflows structured without overwhelming them.",
  },
  {
    title: "Unified component system",
    detail:
      "Standardized layouts and components so web and mobile stayed consistent and the team could iterate faster.",
    tradeoff:
      "Trade-off: reused existing patterns to meet timelines, which limited short-term flexibility but preserved consistency and reduced dev effort.",
  },
  {
    title: "Integrated fundraising surfaces",
    detail:
      "Placed sponsorship and fundraising cues inside relevant workflows instead of isolated marketing sections.",
  },
]

const FINAL_DESIGNS = [
  {
    title: "Registration flow",
    caption: "Role-aware registration steps for admins and a fast parent checkout.",
  },
  {
    title: "CRM workspace",
    caption: "Unified profiles and communication history for clearer follow-ups.",
  },
  {
    title: "Fundraising module",
    caption: "Sponsorship placements embedded in team and event views.",
  },
  {
    title: "Website builder",
    caption: "Guided structure for launching a credible public site quickly.",
  },
]

const READINESS_SIGNALS = [
  "Reusable components and layouts adopted across multiple modules.",
  "Clearer flows and specs reduced back-and-forth with engineering.",
  "Scope aligned to a pre-launch MVP with a shared definition of ‘ready’.",
]

const LEARNINGS = [
  "Designing without analytics requires tighter alignment, faster iteration, and stronger assumptions that can be tested later.",
  "Role-based UX decisions made complexity manageable, but they need early validation before scaling IA.",
]

const NEXT_STEPS = [
  "Add structured post-launch research and instrumentation to validate core workflows.",
  "Pilot role entry points with a small cohort before expanding the information architecture.",
]

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problems", label: "Problems" },
  { id: "goals", label: "Goals" },
  { id: "research", label: "Research" },
  { id: "insights", label: "Insights" },
  { id: "decisions", label: "Decisions" },
  { id: "final-designs", label: "Final Designs" },
  { id: "readiness", label: "Readiness" },
  { id: "learnings", label: "Learnings" },
]

export default function SportsGravyCaseStudy() {
  return (
    <CaseStudyShell
      title="SportsGravy"
      summary="Designing a multi-role youth sports platform from the ground up, balancing clarity for non-technical users with the needs of a scalable business."
      role="UI/UX Designer (end-to-end)"
      timeline="Pre-launch MVP"
      navItems={NAV_ITEMS}
    >
      <Section id="overview" title="Overview" withDivider={false}>
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            SportsGravy is an early-stage sports-tech platform that helps youth
            and amateur organizations manage their digital presence and
            operations in one place. It supports schedules, registration,
            communication, content, and sponsorship visibility for organization
            managers, coaches, parents, and players.
          </p>
          <p>
            It matters because many youth sports programs still rely on
            fragmented tools or manual workflows, which leads to missed updates,
            unclear responsibilities, and poor engagement.
          </p>
        </div>
      </Section>

      <Section id="problems" title="Problems">
        <ProblemCards items={PROBLEM_AREAS} />
      </Section>

      <Section id="goals" title="Goals">
        <GoalsSplit
          left={{
            title: "Business goals",
            items: BUSINESS_GOALS,
          }}
          right={{
            title: "User goals",
            items: USER_GOALS,
          }}
        />
      </Section>

      <Section id="research" title="Research & Inputs">
        <ResearchBlock
          stats={[
            { label: "Discovery interviews", value: "6 total" },
            { label: "Parents", value: "2" },
            { label: "Coaches", value: "2" },
            { label: "Org managers", value: "2" },
          ]}
          bullets={[
            "Stakeholder interviews and PM syncs",
            "Early discovery notes and workflow mapping",
            "Alignment on MVP scope and rollout",
          ]}
        />
      </Section>

      <Section id="insights" title="Key Insights">
        <div className="grid gap-4 md:grid-cols-2">
          {INSIGHTS.map((insight) => (
            <div
              key={insight.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              <div className="font-semibold text-[var(--ink)]">
                {insight.title}
              </div>
              <p className="mt-2">{insight.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="decisions" title="Design Decisions">
        <div className="space-y-4">
          {DECISIONS.map((decision) => (
            <div
              key={decision.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              <div className="font-semibold text-[var(--ink)]">
                {decision.title}
              </div>
              <p className="mt-2">{decision.detail}</p>
              {decision.tradeoff ? (
                <p className="mt-2 text-xs text-[var(--muted)]">
                  {decision.tradeoff}
                </p>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Callout
            title="Role-aware flows simplified setup"
            body="Breaking setup into predictable steps kept admins in control without overwhelming new organizations." 
          />
        </div>
      </Section>

      <Section id="final-designs" title="Final Designs">
        <Gallery
          items={FINAL_DESIGNS.map((design) => ({
            title: design.title,
            caption: design.caption,
          }))}
        />
      </Section>

      <Section id="readiness" title="Readiness">
        <div className="grid gap-4 md:grid-cols-3">
          {READINESS_SIGNALS.map((signal) => (
            <div
              key={signal}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              {signal}
            </div>
          ))}
        </div>
      </Section>

      <Section id="learnings" title="Learnings">
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          {LEARNINGS.map((learning) => (
            <p key={learning}>{learning}</p>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5 text-sm text-[var(--muted)] leading-relaxed">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            Next steps
          </div>
          <ul className="mt-3 space-y-2">
            {NEXT_STEPS.map((step) => (
              <li key={step} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <NextProject
            prev={{ label: "Previous", title: "Previous case study", href: "/" }}
            next={{ label: "Next", title: "Next case study", href: "/" }}
          />
        </div>
      </Section>
    </CaseStudyShell>
  )
}
