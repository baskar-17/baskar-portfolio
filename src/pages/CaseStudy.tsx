import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import CaseStudyShell from "../components/case-study/CaseStudyShell"
import Section from "../components/case-study/Section"
import ProblemCards from "../components/case-study/ProblemCards"
import GoalsSplit from "../components/case-study/GoalsSplit"
import ResearchBlock from "../components/case-study/ResearchBlock"
import Gallery from "../components/case-study/Gallery"
import Callout from "../components/case-study/Callout"
import NextProject from "../components/case-study/NextProject"
import { WORK_ITEMS } from "../data/work"
import { COMPANIES } from "../data/companies"
import SportsGravyCaseStudy from "./sportsgravy-case-study"

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

export default function CaseStudy() {
  const { slug } = useParams()
  const location = useLocation()
  const project = WORK_ITEMS.find((p) => p.slug === slug)
  const companySlug =
    project?.slug === "onhand-pos" || project?.slug === "onhand-dairy"
      ? "onhand"
      : project?.slug
  const company = COMPANIES.find((c) => c.slug === companySlug)
  const fallbackCompany = project
    ? {
        company: project.title,
        role: "Product designer",
        duration: "Project engagement",
        location: "Remote",
        intro:
          "I partnered closely with product and engineering to define the experience, map the user journey, and deliver a polished interface.",
        highlights: [
          "Translated goals into clear flows, wireframes, and UI.",
          "Balanced usability with visual clarity across screens.",
          "Aligned decisions with real constraints and timelines.",
        ],
        story: [
          "This project strengthened my focus on outcomes, clarity, and collaboration.",
        ],
        tags: ["Product Design"],
      }
    : null

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

  const goals = project.caseStudy.goals
  const personas = project.caseStudy.personas
  const insights = personas.flatMap((persona) =>
    persona.painPoints.map((point) => ({
      title: persona.name,
      detail: point,
    })),
  )

  const companyData = company || fallbackCompany

  return (
    <CaseStudyShell
      title={project.title}
      summary={project.caseStudy.overview}
      role={project.caseStudy.role}
      timeline={project.caseStudy.timeline}
      navItems={NAV_ITEMS}
    >
      <Section id="overview" title="Overview" withDivider={false}>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>{project.caseStudy.overview}</p>
            <p>
              I partnered with the team ({project.caseStudy.team}) to align on
              goals, define the experience, and deliver a consistent product
              across devices.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] shadow-[var(--shadow-soft)]">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Project Reality
            </div>
            <div className="mt-3 space-y-2">
              <div>
                <span className="font-semibold text-[var(--ink)]">Role:</span>
                <span className="ml-2">{project.caseStudy.role}</span>
              </div>
              <div>
                <span className="font-semibold text-[var(--ink)]">Team:</span>
                <span className="ml-2">{project.caseStudy.team}</span>
              </div>
              <div>
                <span className="font-semibold text-[var(--ink)]">Timeline:</span>
                <span className="ml-2">{project.caseStudy.timeline}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="text-3xl font-bold text-[var(--ink)]">
              {goals.length}
            </div>
            <div className="text-xs text-[var(--muted)] mt-2">Goals</div>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="text-3xl font-bold text-[var(--ink)]">
              {project.caseStudy.research.length}
            </div>
            <div className="text-xs text-[var(--muted)] mt-2">Research inputs</div>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="text-3xl font-bold text-[var(--ink)]">
              {project.caseStudy.personas.length}
            </div>
            <div className="text-xs text-[var(--muted)] mt-2">Personas</div>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="text-3xl font-bold text-[var(--ink)]">
              {project.caseStudy.outcomes.length}
            </div>
            <div className="text-xs text-[var(--muted)] mt-2">Outcomes</div>
          </div>
        </div>
      </Section>

      <Section id="problems" title="Problems">
        <ProblemCards items={insights.slice(0, 4)} />
      </Section>

      <Section id="goals" title="Goals">
        <GoalsSplit
          left={{
            title: "Product goals",
            items: goals,
          }}
          right={{
            title: "Personas",
            items: personas.map((p) => p.summary),
          }}
        />
      </Section>

      <Section id="research" title="Research & Inputs">
        <ResearchBlock
          stats={project.caseStudy.research.map((entry) => ({
            label: entry.method,
            value: entry.detail,
          }))}
          bullets={project.caseStudy.research.map((entry) => entry.detail)}
        />
      </Section>

      <Section id="insights" title="Insights">
        <div className="grid gap-4 md:grid-cols-2">
          {insights.map((insight) => (
            <div
              key={`${insight.title}-${insight.detail}`}
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
          {project.caseStudy.decisions.map((decision) => (
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
            title="Decisions aligned the whole team"
            body="The final set of patterns helped product and engineering iterate faster with fewer surprises during build." 
          />
        </div>
      </Section>

      <Section id="final-designs" title="Final Designs">
        <Gallery
          items={project.caseStudy.finalDesigns.map((item) => ({
            title: item.title,
            caption: item.caption,
          }))}
        />
      </Section>

      <Section id="readiness" title="Readiness">
        <div className="grid gap-4 md:grid-cols-3">
          {project.caseStudy.outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              {outcome}
            </div>
          ))}
        </div>
      </Section>

      <Section id="learnings" title="Learnings">
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          {project.caseStudy.learnings.map((learning) => (
            <p key={learning}>{learning}</p>
          ))}
        </div>

        {companyData?.highlights?.length ? (
          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              What I worked on
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {companyData.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border)] shrink-0" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

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
