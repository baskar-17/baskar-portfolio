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
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.decision}
          className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
        >
          <h3 className="text-xl font-semibold text-[var(--ink)]">{item.decision}</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
            <li>
              <span className="font-medium text-[var(--ink)]">Why it mattered:</span>{" "}
              {item.why}
            </li>
            <li>
              <span className="font-medium text-[var(--ink)]">Alternatives:</span>{" "}
              {item.alternatives}
            </li>
            <li>
              <span className="font-medium text-[var(--ink)]">Trade-offs:</span>{" "}
              {item.tradeoffs}
            </li>
            <li>
              <span className="font-medium text-[var(--ink)]">Outcome:</span>{" "}
              {item.outcome}
            </li>
          </ul>
        </article>
      ))}
    </div>
  )
}
