type BeforeAfterSplitProps = {
  beforeTitle: string
  beforeText: string
  afterTitle: string
  afterText: string
}

export default function BeforeAfterSplit({
  beforeTitle,
  beforeText,
  afterTitle,
  afterText,
}: BeforeAfterSplitProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
          Before
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--ink)]">
          {beforeTitle}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
          {beforeText}
        </p>
      </article>

      <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">After</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--ink)]">
          {afterTitle}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
          {afterText}
        </p>
      </article>
    </div>
  )
}
