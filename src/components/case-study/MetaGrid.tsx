import { motion } from "framer-motion"

type MetaItem = {
  label: string
  value: string
}

type MetaGridProps = {
  items: MetaItem[]
}

export default function MetaGrid({ items }: MetaGridProps) {
  return (
    <dl className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.05 }}
          whileHover={{ y: -2 }}
          className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)] transition-colors hover:bg-[var(--surface-muted)]"
        >
          <dt className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
            // {item.label}
          </dt>
          <dd className="mt-2 text-xs md:text-sm font-semibold leading-relaxed text-black dark:text-white">
            {item.value}
          </dd>
        </motion.div>
      ))}
    </dl>
  )
}
