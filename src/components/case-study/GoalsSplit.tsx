import { motion } from "framer-motion"

type GoalsColumn = {
  title: string
  items: string[]
}

type GoalsSplitProps = {
  left: GoalsColumn
  right: GoalsColumn
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
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function GoalsSplit({ left, right }: GoalsSplitProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 md:grid-cols-2"
    >
      {[left, right].map((column) => (
        <motion.div
          key={column.title}
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            {column.title}
          </div>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {column.items.map((itemText) => (
              <li key={itemText} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span>{itemText}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}
