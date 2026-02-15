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
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4"
        >
          <dt className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm font-medium leading-snug text-[var(--ink)]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
