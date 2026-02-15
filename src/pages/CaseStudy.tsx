import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import CaseStudyShell from "../components/case-study/CaseStudyShell"
import Section from "../components/case-study/Section"
import ProblemCards from "../components/case-study/ProblemCards"
import Gallery from "../components/case-study/Gallery"
import Callout from "../components/case-study/Callout"
import NextProject from "../components/case-study/NextProject"
import { WORK_ITEMS, getAdjacentWorkItems } from "../data/work"
import { COMPANIES } from "../data/companies"
import SportsGravyCaseStudy from "./sportsgravy-case-study"

const NAV_ITEMS = [
  { id: "overview", label: "Snapshot" },
  { id: "problems", label: "Problem" },
  { id: "responsibilities", label: "My Role" },
  { id: "process", label: "Process" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
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
  const decisions = project.caseStudy.decisions ?? []
  const finalDesigns = project.caseStudy.finalDesigns ?? []
  const learnings = project.caseStudy.learnings ?? []
  const insights = personas.flatMap((persona) =>
    persona.painPoints.map((point) => ({
      title: persona.name,
      detail: point,
    })),
  )
  const { prev, next } = getAdjacentWorkItems(project.slug)
  const companyData = company || fallbackCompany

  const roleResponsibilities =
    companyData?.highlights?.length && companyData.highlights.length > 0
      ? companyData.highlights
      : [
          "Owned end-to-end UX from discovery to final UI delivery.",
          "Worked closely with product and engineering on scope and priorities.",
          "Delivered implementation-ready interaction and visual specs.",
        ]

  const processSteps = project.caseStudy.designJourney.length
    ? project.caseStudy.designJourney
    : [
        "Aligned on business goals and user needs.",
        "Mapped workflows and translated them into wireframes.",
        "Finalized high-fidelity UI and delivery specs.",
      ]

  const galleryItems = finalDesigns.length
    ? finalDesigns
    : processSteps.slice(0, 4).map((step, index) => ({
        title: `Design milestone ${index + 1}`,
        caption: step,
      }))

  return (
    <CaseStudyShell
      title={project.title}
      summary={project.caseStudy.overview}
      role={project.caseStudy.role}
      timeline={project.caseStudy.timeline}
      navItems={NAV_ITEMS}
    >
      <Section id="overview" title="Project Snapshot" withDivider={false}>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>{project.caseStudy.overview}</p>
            <p>
              This case study focuses on the decisions I drove, how I worked with
              cross-functional partners, and what changed in product readiness.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] shadow-[var(--shadow-soft)]">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              At a glance
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
              <div>
                <span className="font-semibold text-[var(--ink)]">Product:</span>
                <span className="ml-2">{project.productType}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="text-3xl font-bold text-[var(--ink)]">{goals.length}</div>
            <div className="mt-2 text-xs text-[var(--muted)]">Goals</div>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="text-3xl font-bold text-[var(--ink)]">
              {project.caseStudy.research.length}
            </div>
            <div className="mt-2 text-xs text-[var(--muted)]">Research inputs</div>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="text-3xl font-bold text-[var(--ink)]">{personas.length}</div>
            <div className="mt-2 text-xs text-[var(--muted)]">Personas</div>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="text-3xl font-bold text-[var(--ink)]">
              {project.caseStudy.outcomes.length}
            </div>
            <div className="mt-2 text-xs text-[var(--muted)]">Impact points</div>
          </div>
        </div>
      </Section>

      <Section id="problems" title="Problem Space">
        <ProblemCards items={insights.slice(0, 4)} />
      </Section>

      <Section id="responsibilities" title="My Role & Responsibilities">
        <div className="grid gap-4 md:grid-cols-3">
          {roleResponsibilities.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5 text-sm text-[var(--muted)] leading-relaxed">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            Collaboration model
          </div>
          <p className="mt-3">
            I worked with {project.caseStudy.team} to prioritize scope, validate
            assumptions, and keep product and engineering aligned from discovery
            through delivery.
          </p>
        </div>
      </Section>

      <Section id="process" title="Process at a Glance">
        <div className="space-y-3">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-muted)] text-xs font-semibold text-[var(--ink)]">
                {index + 1}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)]">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Key user flows
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {project.caseStudy.userFlows.map((flow) => (
                <li key={flow} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{flow}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)]">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Information architecture
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.caseStudy.informationArchitecture.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="solution" title="Solution Highlights">
        <div className="space-y-4">
          {decisions.map((decision) => (
            <div
              key={decision.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] leading-relaxed shadow-[var(--shadow-soft)]"
            >
              <div className="font-semibold text-[var(--ink)]">{decision.title}</div>
              <p className="mt-2">{decision.detail}</p>
              {decision.tradeoff ? (
                <p className="mt-2 text-xs text-[var(--muted)]">{decision.tradeoff}</p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Gallery
            items={galleryItems.map((item) => ({
              title: item.title,
              caption: item.caption,
            }))}
          />
        </div>

        <div className="mt-6">
          <Callout
            title="Why this mattered for delivery"
            body="The final interaction patterns reduced decision churn and gave engineering a clearer path to implementation."
          />
        </div>
      </Section>

      <Section id="impact" title="Outcome & Impact">
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
        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5 text-sm text-[var(--muted)] leading-relaxed">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            Success criteria
          </div>
          <ul className="mt-3 space-y-2">
            {goals.map((goal) => (
              <li key={goal} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="learnings" title="What I Learned">
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          {learnings.map((learning) => (
            <p key={learning}>{learning}</p>
          ))}
        </div>

        <div className="mt-10">
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
      </Section>
    </CaseStudyShell>
  )
}
