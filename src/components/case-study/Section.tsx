import { motion } from "framer-motion"

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  withDivider?: boolean
  children: React.ReactNode
}

export default function Section({
  id,
  title,
  eyebrow,
  withDivider = true,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className={`py-10 ${withDivider ? "border-t border-[color:var(--border)]" : ""}`}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[var(--ink)]">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </motion.section>
  )
}
