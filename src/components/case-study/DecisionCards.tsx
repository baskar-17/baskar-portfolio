import { motion } from "framer-motion"

type DecisionItem = {
  decision: string
  why: string
  alternatives: string
  tradeoffs: string
  outcome: string
}

type DecisionCardsProps = {
  items: DecisionItem[]
}

export default function DecisionCards({ items }: DecisionCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <motion.article
          key={item.decision}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-strong)]"
        >
          <h3 className="text-xl font-semibold text-[var(--ink)]">{item.decision}</h3>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
            <li className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink)] opacity-70">Why it mattered</span>
              <span className="text-base">{item.why}</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink)] opacity-70">Alternatives considered</span>
              <span className="text-base">{item.alternatives}</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink)] opacity-70">Trade-offs</span>
              <span className="text-base">{item.tradeoffs}</span>
            </li>
            <li className="mt-6 rounded-xl bg-[var(--surface-muted)] p-4 pr-6 border-l-2 border-[var(--ink)]">
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink)] opacity-70 mb-1">Outcome</span>
              <span className="text-base font-medium text-[var(--ink)]">{item.outcome}</span>
            </li>
          </ul>
        </motion.article>
      ))}
    </div>
  )
}
