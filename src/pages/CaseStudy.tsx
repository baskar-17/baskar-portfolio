import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import CaseStudyShell from "../components/case-study/CaseStudyShell"
import MetaGrid from "../components/case-study/MetaGrid"
import NextProject from "../components/case-study/NextProject"
import StorySection from "../components/case-study/StorySection"
import { WORK_ITEMS, getAdjacentWorkItems } from "../data/work"

const NAV_ITEMS = [
  { id: "overview", label: "Hero" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "personas", label: "Personas" },
  { id: "architecture-and-flows", label: "Architecture" },
  { id: "wireframes", label: "Early Concepts" },
  { id: "iteration", label: "Iteration" },
  { id: "design-journey", label: "Journey" },
  { id: "outcomes", label: "Outcomes" },
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

  const { prev, next } = getAdjacentWorkItems(project.slug)

  const metaItems = [
    { label: "Role", value: project.caseStudy.role },
    { label: "Duration", value: project.caseStudy.timeline },
    { label: "Platform", value: project.productType },
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
            {project.caseStudy.overview}
          </p>
        </div>

        <div className="mt-10">
          <MetaGrid items={metaItems} />
        </div>

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
        id="problem"
        title="1. The Problem"
        subtitle="Why does this project exist?"
        muted
      >
        <div className="mb-10 text-xl leading-relaxed text-[var(--ink)]">
          {project.caseStudy.problemStatement}
        </div>

        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ink)] opacity-60">Project Goals</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {project.caseStudy.goals.map((goal, index) => (
            <article
              key={index}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm leading-relaxed text-[var(--muted)]"
            >
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink)] opacity-60">Goal 0{index + 1}</div>
              {goal}
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="research"
        title="2. Research & Discovery"
        subtitle="How we understood the problem and validated our assumptions."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {project.caseStudy.research.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
            >
              <h3 className="text-base font-semibold text-[var(--ink)]">{item.method}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="personas"
        title="Target Personas"
        subtitle="Who we were designing for and their primary pain points."
        muted
      >
        <div className="grid gap-6 md:grid-cols-2">
          {project.caseStudy.personas.map((persona, index) => (
            <div key={index} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-[var(--ink)]">{persona.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{persona.summary}</p>

              <div className="mt-6 flex-grow">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink)] opacity-60 mb-3">Pain Points</h4>
                <ul className="space-y-2">
                  {persona.painPoints.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-[var(--muted)]">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--ink)] shrink-0 opacity-40" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="architecture-and-flows"
        title="3. Architecture & User Flows"
        subtitle="Structuring the experience to remove friction."
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-semibold text-[var(--ink)] mb-4">Information Architecture</h3>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.informationArchitecture.map((item, idx) => (
                <span key={idx} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[var(--ink)] mb-4">Key User Flows</h3>
            <div className="space-y-4">
              {project.caseStudy.userFlows.map((flow, idx) => (
                <div key={idx} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)]">
                  <div className="flex flex-wrap items-center gap-2">
                    {flow.split('→').map((step, stepIdx, arr) => (
                      <div key={stepIdx} className="flex items-center gap-2">
                        <span className="font-medium text-[var(--ink)] bg-[var(--surface-muted)] px-3 py-1.5 rounded-lg border border-[var(--border)]">{step.trim()}</span>
                        {stepIdx < arr.length - 1 && <span className="text-[var(--border)]">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StorySection>

      {project.caseStudy.wireframes && (
        <StorySection
          id="wireframes"
          title="4. Wireframing & Explorations"
          subtitle="Early concepts and structural thinking before high-fidelity."
          muted
        >
          <div className="grid gap-6 md:grid-cols-2">
            {project.caseStudy.wireframes.map((wf, idx) => (
              <article key={idx} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 overflow-hidden">
                <h3 className="text-lg font-semibold text-[var(--ink)]">{wf.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] mb-4">{wf.description}</p>
                {wf.imageSrc ? (
                  <img src={wf.imageSrc} alt={`Wireframe: ${wf.title}`} className="w-full rounded-xl border border-[var(--border)]" />
                ) : (
                  <div className="w-full h-48 bg-[var(--surface-muted)] rounded-xl border border-[var(--border)] border-dashed flex items-center justify-center text-[var(--muted)] text-sm">
                    Wireframe Placeholder
                  </div>
                )}
              </article>
            ))}
          </div>
        </StorySection>
      )}

      {project.caseStudy.iteration && (
        <StorySection
          id="iteration"
          title="5. Iteration & Trade-offs"
          subtitle="What didn't work and how feedback shaped the final design."
        >
          <div className="space-y-6">
            {project.caseStudy.iteration.map((iter, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 md:p-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e05d5d] mb-3">What Failed</h4>
                  <p className="text-sm leading-relaxed text-[var(--ink)]">{iter.whatFailed}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b9f7a] mb-3">How We Fixed It</h4>
                  <p className="text-sm leading-relaxed text-[var(--ink)]">{iter.howWeFixedIt}</p>
                </div>
              </div>
            ))}
          </div>
        </StorySection>
      )}

      <StorySection
        id="design-journey"
        title="6. Final Design Journey"
        subtitle="Key steps and decisions in the final design process."
        muted
      >
        <div className="space-y-4">
          {project.caseStudy.designJourney.map((step, index) => (
            <article
              key={index}
              className="flex gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm leading-relaxed text-[var(--muted)]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-muted)] border border-[color:var(--border)] text-xs font-semibold text-[var(--ink)]">
                {index + 1}
              </div>
              <div className="pt-1.5">{step}</div>
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="outcomes"
        title="7. Business & User Impact"
        subtitle="The results of the engagement."
        centered
        muted={false}
      >
        <div className="mx-auto max-w-4xl space-y-6">
          {project.caseStudy.outcomes.map((item, index) => (
            <p
              key={index}
              className="border-l-[3px] border-[color:var(--ink)] pl-6 text-xl tracking-tight text-[var(--ink)] md:text-3xl text-left font-medium"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="mt-20">
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
