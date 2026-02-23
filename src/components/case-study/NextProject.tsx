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
    <div className="grid gap-6 md:grid-cols-2">
      {[prev, next].map((item, index) => {
        if (!item) return <div key={index} />
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="flex h-full"
          >
            <Link
              to={item.href}
              className="group flex w-full flex-col justify-between"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-full flex-col justify-between rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)] transition-shadow group-hover:shadow-[var(--shadow-strong)]"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                    {item.label}
                  </div>
                  <div className="mt-4 text-xl font-semibold text-[var(--ink)]">
                    {item.title}
                  </div>
                </div>
                <div className="mt-8 text-sm font-medium text-[var(--ink)] opacity-60 group-hover:opacity-100 transition-opacity">
                  View case study →
                </div>
              </motion.div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
