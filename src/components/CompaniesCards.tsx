import { motion } from "framer-motion"
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
        className="h-14 w-14 rounded-2xl object-cover border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm shrink-0"
        loading="lazy"
      />
    )
  }

  return (
    <div className="h-14 w-14 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] flex items-center justify-center font-semibold text-[var(--muted)] shrink-0">
      {initials}
    </div>
  )
}

export default function CompaniesCards({ items }: { items: CompanyData[] }) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {items.map((c) => (
        <motion.div
          key={c.slug}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={c.website}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-start gap-5 rounded-3xl glass-card border border-[rgba(255,255,255,0.4)] p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]"
          >
            <Logo company={c.company} logoSrc={c.logoSrc} />

            <div className="min-w-0 flex-1 pt-0.5">
              <div className="font-semibold text-lg tracking-tight text-[var(--ink)]">
                {c.company}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.95rem]">
                <span className="font-medium text-[var(--ink)]">{c.role}</span>
                <span className="text-[var(--muted)]">・</span>
                <span className="text-[var(--muted)]">{c.duration}</span>
                {c.location ? (
                  <>
                    <span className="text-[var(--muted)]">・</span>
                    <span className="text-[var(--muted)]">{c.location}</span>
                  </>
                ) : null}
              </div>
            </div>

            {/* Arrow Element */}
            <span className="pointer-events-none absolute right-6 top-6 inline-flex items-center text-[var(--muted)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--ink)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </motion.div>
      ))}
    </div>
  )
}
