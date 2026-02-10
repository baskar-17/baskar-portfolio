import CaseStudyShell from "../../components/case-study/CaseStudyShell"
import Section from "../../components/case-study/Section"
import ProblemCards from "../../components/case-study/ProblemCards"
import GoalsSplit from "../../components/case-study/GoalsSplit"
import ResearchBlock from "../../components/case-study/ResearchBlock"
import Gallery from "../../components/case-study/Gallery"
import Callout from "../../components/case-study/Callout"
import NextProject from "../../components/case-study/NextProject"

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problems", label: "Problems" },
  { id: "goals", label: "Goals" },
  { id: "research", label: "Research" },
  { id: "insights", label: "Insights" },
  { id: "decisions", label: "Decisions" },
  { id: "final-designs", label: "Final Designs" },
  { id: "validation", label: "Validation" },
  { id: "learnings", label: "Learnings" },
]

export default function CaseStudyDemo() {
  return (
    <CaseStudyShell
      title="Signal — A modern platform for product teams"
      summary="A premium case study layout showcasing problem framing, goals, research, and final design moments. Placeholder content only — swap with your real project story."
      role="Lead Product Designer"
      timeline="10 weeks • 2025"
      navItems={NAV_ITEMS}
    >
      <Section id="overview" title="Overview" withDivider={false}>
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            This project focuses on clarifying complex workflows into a clear
            structure for teams. The goal was to build a system that feels
            calm, fast, and confident for daily use.
          </p>
          <p>
            The case study highlights decisions, tradeoffs, and the design
            system built to keep experiences consistent across web and mobile.
          </p>
        </div>
      </Section>

      <Section id="problems" title="Problems">
        <ProblemCards
          items={[
            {
              title: "Fragmented flows",
              detail:
                "Users bounced between tools and lost context, making key tasks feel slower than necessary.",
            },
            {
              title: "Low visibility",
              detail:
                "Critical updates were buried in secondary screens, causing missed actions.",
            },
            {
              title: "Uneven hierarchy",
              detail:
                "Dense layouts masked the most important actions and created decision fatigue.",
            },
            {
              title: "Inconsistent patterns",
              detail:
                "Similar workflows behaved differently across modules, eroding trust.",
            },
          ]}
        />
      </Section>

      <Section id="goals" title="Goals">
        <GoalsSplit
          left={{
            title: "Business goals",
            items: [
              "Increase activation for first-time teams.",
              "Reduce time to complete core workflows.",
              "Create a scalable design language for new modules.",
            ],
          }}
          right={{
            title: "User goals",
            items: [
              "Understand what matters without digging.",
              "Finish key tasks in a single focused flow.",
              "Trust that states and actions are consistent.",
            ],
          }}
        />
      </Section>

      <Section id="research" title="Research & Inputs">
        <ResearchBlock
          stats={[
            { label: "Interviews", value: "12 sessions" },
            { label: "Survey", value: "148 responses" },
            { label: "Usability", value: "6 flows tested" },
            { label: "Workshops", value: "3 alignment rounds" },
          ]}
          bullets={[
            "Shadowed teams during weekly planning rituals.",
            "Mapped the top 3 failure points in onboarding.",
            "Validated a reduced set of navigation patterns.",
          ]}
        />
      </Section>

      <Section id="insights" title="Insights">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Clear hierarchy changes adoption faster than feature depth.",
            "Teams prefer guided defaults over endless configuration.",
            "Consistency across surfaces creates trust in the system.",
            "The fastest workflows feel invisible, not clever.",
          ].map((insight) => (
            <div
              key={insight}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              {insight}
            </div>
          ))}
        </div>
      </Section>

      <Section id="decisions" title="Design Decisions">
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            We centered the experience around a single primary action per
            screen, removing duplicate decisions and clarifying what “done”
            looks like at each step.
          </p>
          <p>
            A modular layout system allowed teams to scan status quickly while
            keeping detail on-demand rather than always visible.
          </p>
        </div>
        <div className="mt-6">
          <Callout
            title="Decisions became a product feature"
            body="The navigation and layout system now guides teams toward the highest-impact actions with fewer steps and clearer intent."
          />
        </div>
      </Section>

      <Section id="final-designs" title="Final Designs">
        <Gallery
          items={[
            {
              title: "Focused dashboard",
              caption: "A simplified overview that prioritizes what’s urgent.",
            },
            {
              title: "Guided setup",
              caption: "A step-based flow that reduces early drop-off.",
            },
            {
              title: "Workflow detail",
              caption: "Structured information blocks with clear hierarchy.",
            },
            {
              title: "Action states",
              caption: "Consistent feedback patterns across modules.",
            },
          ]}
        />
      </Section>

      <Section id="validation" title="Validation">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Activation improved in pilot groups within two weeks.",
            "Task completion time dropped for repeat workflows.",
            "Support requests decreased after onboarding changes.",
          ].map((result) => (
            <div
              key={result}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              {result}
            </div>
          ))}
        </div>
      </Section>

      <Section id="learnings" title="Learnings">
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            The smallest structural changes can unlock the biggest perception
            shifts. Staying close to real workflows helped keep the design
            grounded and believable.
          </p>
          <p>
            Building a shared language early made handoff and iteration feel
            faster, calmer, and more aligned.
          </p>
        </div>
        <div className="mt-8">
          <NextProject
            prev={{ label: "Previous", title: "Beacon — Support Toolkit", href: "/" }}
            next={{ label: "Next", title: "Relay — Analytics Suite", href: "/" }}
          />
        </div>
      </Section>
    </CaseStudyShell>
  )
}
