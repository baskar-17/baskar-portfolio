import { useEffect, useMemo, useState } from "react"

type NavItem = {
  id: string
  label: string
}

type CaseStudyShellProps = {
  title: string
  summary: string
  role?: string
  timeline?: string
  navItems: NavItem[]
  children: React.ReactNode
  hideIntro?: boolean
}

export default function CaseStudyShell({
  title,
  summary,
  role,
  timeline,
  navItems,
  children,
  hideIntro = false,
}: CaseStudyShellProps) {
  const [activeId, setActiveId] = useState(navItems[0]?.id)

  const ids = useMemo(() => navItems.map((item) => item.id), [navItems])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))

        if (visible[0]?.target) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.4, 0.8],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return (
    <div className="min-h-screen text-[var(--ink)]">
      {!hideIntro ? (
        <section className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Case Study
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-[var(--accent)]">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-[var(--muted)] leading-relaxed">
            {summary}
          </p>

          {(role || timeline) && (
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              {role ? <span>{role}</span> : null}
              {role && timeline ? <span>•</span> : null}
              {timeline ? <span>{timeline}</span> : null}
            </div>
          )}
        </section>
      ) : null}

      <section className="mx-auto max-w-[1200px] px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm text-[var(--muted)]">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-3">
                Jump to
              </div>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block rounded-lg px-3 py-2 transition ${
                      activeId === item.id
                        ? "bg-[color:var(--surface-muted)] text-[var(--ink)]"
                        : "hover:bg-[color:var(--surface-muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="space-y-16">
            {children}
          </main>
        </div>
      </section>
    </div>
  )
}
