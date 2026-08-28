import { Link } from "react-router-dom"
import type { CompanyData } from "../data/companies"

function Logo({ company, logoSrc }: { company: string; logoSrc?: string }) {
  const initials = company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("")

  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={`${company} logo`}
        className="h-12 w-12 rounded-xl object-cover border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#121214] shadow-sm shrink-0"
        loading="lazy"
      />
    )
  }

  return (
    <div className="h-12 w-12 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/5 dark:bg-white/5 flex items-center justify-center font-mono font-bold text-black/50 dark:text-white/50 shrink-0 text-sm">
      {initials}
    </div>
  )
}

export default function CompaniesCards({ items }: { items: CompanyData[] }) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((c, index) => (
        <div
          key={c.slug}
          className="animate-[fadeSlideUp_0.8s_ease_both]"
          style={{ animationDelay: `${0.1 + index * 0.08}s` }}
        >
          <Link
            to={`/companies/${c.slug}`}
            className="group relative flex items-start gap-5 rounded-2xl glass-card bg-white/50 dark:bg-black/50 border border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.12] dark:hover:border-white/[0.12] p-6 transition-all duration-300 hover:-translate-y-1 block shadow-[0_8px_32px_rgba(24,18,12,0.02)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          >
            <Logo company={c.company} logoSrc={c.logoSrc} />

            <div className="min-w-0 flex-1 pt-0.5">
              <div className="font-bricolage font-bold text-lg tracking-tight text-black dark:text-white">
                {c.company}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm text-black/60 dark:text-white/60">
                <span className="font-medium text-black dark:text-white">{c.role}</span>
                <span className="text-black/30 dark:text-white/30">・</span>
                <span className="font-mono text-xs">{c.duration}</span>
                {c.location ? (
                  <>
                    <span className="text-black/30 dark:text-white/30">・</span>
                    <span className="font-geist">{c.location}</span>
                  </>
                ) : null}
              </div>
            </div>

            {/* Arrow Element */}
            <span className="pointer-events-none absolute right-6 top-6 inline-flex items-center text-black/40 dark:text-white/40 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-black dark:group-hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </div>
      ))}
    </div>
  )
}
