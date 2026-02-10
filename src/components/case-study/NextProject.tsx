import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type ProjectLink = {
  label: string
  title: string
  href: string
}

type NextProjectProps = {
  prev?: ProjectLink
  next?: ProjectLink
}

export default function NextProject({ prev, next }: NextProjectProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[prev, next].map((item, index) => {
        if (!item) return <div key={index} />
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              to={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                {item.label}
              </div>
              <div className="mt-4 text-lg font-semibold text-[var(--ink)]">
                {item.title}
              </div>
              <div className="mt-6 text-sm text-[var(--muted)]">
                View case study →
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
