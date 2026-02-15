type StorySectionProps = {
  id: string
  title: string
  subtitle?: string
  muted?: boolean
  centered?: boolean
  children: React.ReactNode
}

export default function StorySection({
  id,
  title,
  subtitle,
  muted = false,
  centered = false,
  children,
}: StorySectionProps) {
  return (
    <section id={id} className="py-24 md:py-28">
      <div
        className={
          muted
            ? "rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-6 py-10 md:px-10"
            : ""
        }
      >
        <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
