import { motion } from "framer-motion"

type StatItem = {
  label: string
  value: string
}

type ResearchBlockProps = {
  stats: StatItem[]
  bullets: string[]
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function ResearchBlock({ stats, bullets }: ResearchBlockProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)]"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              {stat.label}
            </div>
            <div className="mt-3 text-2xl font-semibold text-[var(--ink)]">
              {stat.value}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6"
      >
        <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
          Key inputs
        </div>
        <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
          {bullets.map((bullet) => (
            <motion.li key={bullet} variants={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
