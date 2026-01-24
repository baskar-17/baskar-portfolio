import { Link } from "react-router-dom"
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
          <Link
            to={`/companies/${c.slug}`}
            className="group block rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 hover:shadow-[0_14px_30px_rgba(20,20,20,0.08)] transition"
          >
            <div className="flex items-start gap-4">
              <Logo company={c.company} logoSrc={c.logoSrc} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-semibold tracking-tight group-hover:underline">
                      {c.company}
                    </div>
                    <div className="mt-1 text-sm text-[var(--muted)]">
                      <span className="font-medium text-[var(--ink)]">{c.role}</span>
                      <span className="text-[var(--muted)]"> • {c.duration}</span>
                      {c.location ? <span className="text-[var(--muted)]"> • {c.location}</span> : null}
                    </div>
                  </div>
                </div>

                {c.intro ? (
                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                    {c.intro}
                  </p>
                ) : null}

                {c.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-[var(--muted)] bg-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 text-sm text-[var(--ink)]">
                  See details →{" "}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
