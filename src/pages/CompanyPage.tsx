import { Link, useLocation, useParams } from "react-router-dom"
import { COMPANIES } from "../data/companies"

export default function CompanyPage() {
  const { slug } = useParams()
  const location = useLocation()
  const company = COMPANIES.find((c) => c.slug === slug)

  const fromProjects = location.state?.from === "projects"
  const backPath = fromProjects ? "/companies" : "/"
  const backLabel = fromProjects ? "[← BACK_TO_PROJECTS]" : "[← BACK_HOME]"

  if (!company) {
    return (
      <div className="min-h-screen px-4 pt-28 pb-10 text-[var(--ink)] bg-transparent">
        <Link className="font-mono text-xs uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors" to={backPath}>{backLabel}</Link>
        <h1 className="mt-6 text-xl font-bricolage font-bold text-black dark:text-white">Company not found</h1>
        <p className="mt-2 text-[var(--muted)] font-geist text-sm">That page doesn’t exist yet.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 pt-28 pb-10 text-[var(--ink)] bg-transparent">
      <div className="mx-auto w-full max-w-[1200px] animate-[fadeSlideUp_0.8s_ease_both]">
        <Link className="font-mono text-xs uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors" to={backPath}>{backLabel}</Link>

        <div className="mt-8">
          <h1 className="text-3xl md:text-5xl font-bricolage font-bold tracking-tight text-black dark:text-white leading-tight">
            {company.company}
          </h1>

          <div className="mt-3 text-[var(--muted)] text-sm">
            <span className="font-semibold text-black dark:text-white">{company.role}</span>
            <span> • </span>
            <span className="font-mono">{company.duration}</span>
            {company.location ? <span> • {company.location}</span> : null}
          </div>

          {company.website ? (
            <a
              className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-[#E25A3C] hover:opacity-85 transition-opacity"
              href={company.website}
              target="_blank"
              rel="noreferrer"
            >
              Visit website →
            </a>
          ) : null}

          {company.intro ? (
            <p className="mt-6 max-w-3xl text-[var(--muted)] leading-relaxed font-geist text-sm sm:text-base">
              {company.intro}
            </p>
          ) : null}

          {company.highlights?.length ? (
            <div className="mt-8">
              <h2 className="text-lg font-bricolage font-bold text-black dark:text-white">// What I worked on</h2>
              <ul className="mt-4 space-y-3 text-[var(--muted)] font-geist text-sm">
                {company.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E25A3C] shrink-0" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {company.story?.length ? (
            <div className="mt-10">
              <h2 className="text-lg font-bricolage font-bold text-black dark:text-white">// A little more context</h2>
              <div className="mt-4 space-y-4 max-w-3xl text-[var(--muted)] leading-relaxed font-geist text-sm sm:text-base">
                {company.story.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12 pt-6 border-t border-black/5 dark:border-white/5">
            <Link className="font-mono text-xs uppercase tracking-wider text-[#E25A3C] hover:opacity-85 transition-opacity" to="/companies">
              See all companies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
