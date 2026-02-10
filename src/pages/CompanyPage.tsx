import { Link, useParams } from "react-router-dom"
import { COMPANIES } from "../data/companies"

export default function CompanyPage() {
  const { slug } = useParams()
  const company = COMPANIES.find((c) => c.slug === slug)

  if (!company) {
    return (
      <div className="min-h-screen px-4 py-10 text-[var(--ink)]">
        <Link className="link-underline" to="/">← Back home</Link>
        <h1 className="mt-6 text-2xl font-semibold">Company not found</h1>
        <p className="mt-2 text-[var(--muted)]">That page doesn’t exist yet.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-10 text-[var(--ink)]">
      <div className="mx-auto w-full max-w-[1200px] reveal">
        <Link className="link-underline" to="/">← Back home</Link>

        <div className="mt-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {company.company}
          </h1>

          <div className="mt-3 text-[var(--muted)]">
            <span className="font-medium text-[var(--ink)]">{company.role}</span>
            <span> • {company.duration}</span>
            {company.location ? <span> • {company.location}</span> : null}
          </div>

          {company.website ? (
            <a
              className="mt-3 inline-block link-underline text-sm"
              href={company.website}
              target="_blank"
              rel="noreferrer"
            >
              Visit website →
            </a>
          ) : null}

          {company.intro ? (
            <p className="mt-6 max-w-3xl text-[var(--muted)] leading-relaxed">
              {company.intro}
            </p>
          ) : null}

          {company.highlights?.length ? (
            <div className="mt-8">
              <h2 className="text-lg font-semibold">What I worked on</h2>
              <ul className="mt-4 space-y-2 text-[var(--muted)]">
                {company.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border)] shrink-0" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {company.story?.length ? (
            <div className="mt-10">
              <h2 className="text-lg font-semibold">A little more context</h2>
              <div className="mt-4 space-y-4 max-w-3xl text-[var(--muted)] leading-relaxed">
                {company.story.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12">
            <Link className="link-underline" to="/companies">
              See all companies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
