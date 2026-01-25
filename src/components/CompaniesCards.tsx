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
        className="h-12 w-12 rounded-xl object-cover border border-[color:var(--border)] bg-white"
        loading="lazy"
      />
    )
  }

  return (
    <div className="h-12 w-12 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] flex items-center justify-center font-semibold text-[var(--muted)]">
      {initials}
    </div>
  )
}

export default function CompaniesCards({ items }: { items: CompanyData[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((c) => (
        <motion.div
          key={c.slug}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <a
            href={c.website}
            target="_blank"
            rel="noreferrer"
            className="group relative block rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_18px_40px_rgba(40,24,16,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(40,24,16,0.16)] backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <Logo company={c.company} logoSrc={c.logoSrc} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-semibold tracking-tight">
                      {c.company}
                    </div>
                    <div className="mt-1 text-sm text-[var(--muted)]">
                      <span className="font-medium text-[var(--ink)]">{c.role}</span>
                      <span className="text-[var(--muted)]"> • {c.duration}</span>
                      {c.location ? <span className="text-[var(--muted)]"> • {c.location}</span> : null}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <span className="pointer-events-none absolute right-5 top-5 inline-flex items-center text-sm text-[var(--muted)] opacity-0 translate-x-2 transition group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </motion.div>
      ))}
    </div>
  )
}
