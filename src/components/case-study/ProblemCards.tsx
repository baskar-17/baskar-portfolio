import { motion } from "framer-motion"

type ProblemItem = {
  title: string
  detail: string
}

type ProblemCardsProps = {
  items: ProblemItem[]
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function ProblemCards({ items }: ProblemCardsProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-4 md:grid-cols-2"
    >
      {items.map((problem) => (
        <motion.div
          key={problem.title}
          variants={item}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)]"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            {problem.title}
          </div>
          <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
            {problem.detail}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
