import { motion } from "framer-motion"

type CalloutProps = {
  title: string
  body: string
}

export default function Callout({ title, body }: CalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6"
    >
      <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
        Highlight
      </div>
      <h3 className="mt-3 text-xl font-semibold text-[var(--ink)]">
        {title}
      </h3>
      <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
        {body}
      </p>
    </motion.div>
  )
}
