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
    <div className="grid gap-6 md:grid-cols-2">
      <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)]">
        <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 backdrop-blur-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Before
          </p>
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--ink)]">
          {beforeTitle}
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--muted)]">
          {beforeText}
        </p>
      </article>

      <article className="relative rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-muted)] to-transparent opacity-50 pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center rounded-full bg-[var(--ink)] px-3 py-1.5 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              After
            </p>
          </div>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--ink)]">
            {afterTitle}
          </h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--ink)] opacity-80">
            {afterText}
          </p>
        </div>
      </article>
    </div>
  )
}
