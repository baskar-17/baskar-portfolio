import { useParams, Link } from "react-router-dom"
import { WORK_ITEMS } from "../data/work"
import { COMPANIES } from "../data/companies"

export default function CaseStudy() {
  const { slug } = useParams()
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

  if (!project) {
    return (
      <div className="min-h-screen mx-auto max-w-[1200px] px-4 py-10">
        <Link to="/" className="underline">← Back home</Link>
        <h1 className="mt-6 text-2xl font-semibold">Project not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen mx-auto max-w-[1200px] px-4 py-10">
      <Link to="/" className="underline">← Back home</Link>

      {/* Hero image */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full object-cover max-h-[520px]"
        />
      </div>

      {/* Title */}
      <h1 className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
        {project.title}
      </h1>

      {/* Product type */}
      <p className="mt-3 text-neutral-600 text-base">
        {project.productType}
      </p>

      <div className="mt-10 grid gap-10">
        <section className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <h2 className="text-xl font-semibold text-neutral-900">
              Project Overview
            </h2>
            <p>{project.caseStudy.overview}</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5 text-sm text-neutral-700 space-y-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Role
              </div>
              <div className="font-medium text-neutral-900">
                {project.caseStudy.role}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Team
              </div>
              <div className="font-medium text-neutral-900">
                {project.caseStudy.team}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Timeline
              </div>
              <div className="font-medium text-neutral-900">
                {project.caseStudy.timeline}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Company Context
          </h2>
          <div className="rounded-2xl border border-neutral-200 p-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-lg font-semibold text-neutral-900">
                {(company ?? fallbackCompany)?.company}
              </div>
              <div className="text-sm text-neutral-600">
                {(company ?? fallbackCompany)?.role}
                {(company ?? fallbackCompany)?.duration
                  ? ` • ${(company ?? fallbackCompany)?.duration}`
                  : ""}
                {(company ?? fallbackCompany)?.location
                  ? ` • ${(company ?? fallbackCompany)?.location}`
                  : ""}
              </div>
            </div>

            {(company ?? fallbackCompany)?.intro ? (
              <p className="text-sm text-neutral-700 leading-relaxed">
                {(company ?? fallbackCompany)?.intro}
              </p>
            ) : null}

            {(company ?? fallbackCompany)?.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {(company ?? fallbackCompany)?.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {(company ?? fallbackCompany)?.highlights?.length ? (
              <div className="grid gap-2 text-sm text-neutral-700">
                {(company ?? fallbackCompany)?.highlights?.map((item) => (
                  <div key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-300 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {(company ?? fallbackCompany)?.story?.length ? (
              <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                {(company ?? fallbackCompany)?.story?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">Goals</h2>
          <ul className="grid gap-2 text-neutral-700 list-disc list-inside">
            {project.caseStudy.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Mixed Research Methods
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.caseStudy.research.map((entry) => (
              <div
                key={entry.method}
                className="rounded-2xl border border-neutral-200 p-5"
              >
                <div className="font-semibold text-neutral-900">
                  {entry.method}
                </div>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  {entry.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            User Personas + Pain Points
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.caseStudy.personas.map((persona) => (
              <div
                key={persona.name}
                className="rounded-2xl border border-neutral-200 p-5"
              >
                <div className="font-semibold text-neutral-900">
                  {persona.name}
                </div>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  {persona.summary}
                </p>
                <ul className="mt-3 grid gap-1 text-sm text-neutral-700 list-disc list-inside">
                  {persona.painPoints.map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">User Flow</h2>
          <ul className="grid gap-2 text-neutral-700 list-disc list-inside">
            {project.caseStudy.userFlows.map((flow) => (
              <li key={flow}>{flow}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Information Architecture
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.caseStudy.informationArchitecture.map((item) => (
              <span
                key={item}
                className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Design Journey
          </h2>
          <ul className="grid gap-2 text-neutral-700 list-disc list-inside">
            {project.caseStudy.designJourney.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">Outcomes</h2>
          <ul className="grid gap-2 text-neutral-700 list-disc list-inside">
            {project.caseStudy.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
