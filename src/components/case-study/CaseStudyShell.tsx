import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

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

    const visibleSections = new Map<string, boolean>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target.id, entry.isIntersecting)
        })

        const active = ids.find((id) => visibleSections.get(id))
        if (active) {
          setActiveId(active)
        }
      },
      {
        rootMargin: "-15% 0px -40% 0px",
        threshold: 0.15,
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return (
    <div className="min-h-screen text-[var(--ink)] bg-transparent pt-20">
      {!hideIntro ? (
        <section className="mx-auto max-w-[1200px] gap-6 px-4 py-16 md:py-24">
          <div className="reveal">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Case Study
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>

          <div className="reveal reveal-delay-1">
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl lg:text-2xl">
              {summary}
            </p>
          </div>

          {(role || timeline) && (
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-[var(--ink)] reveal reveal-delay-2">
              {role ? (
                <span className="rounded-full bg-[var(--surface-muted)] px-4 py-1.5 border border-[color:var(--border)] shadow-[var(--shadow-soft)]">
                  {role}
                </span>
              ) : null}
              {timeline ? (
                <span className="rounded-full bg-[var(--surface-muted)] px-4 py-1.5 border border-[color:var(--border)] shadow-[var(--shadow-soft)]">
                  {timeline}
                </span>
              ) : null}
            </div>
          )}
        </section>
      ) : null}

      <section className="mx-auto max-w-[1200px] px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-32 rounded-3xl border border-[color:var(--border)] glass-card p-5 text-sm text-[var(--muted)] shadow-[var(--shadow-soft)] reveal-fade reveal-delay-2">
              <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                // Contents
              </div>
              <nav className="space-y-1 font-mono">
                {navItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`block rounded-xl px-3 py-2 text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 ${isActive
                        ? "bg-black dark:bg-white text-white dark:text-black shadow-md"
                        : "text-black/60 dark:text-white/60 hover:bg-[color:var(--surface-muted)] hover:text-black dark:hover:text-white"
                        }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>
            </div>
          </aside>

          <main className="space-y-16 lg:space-y-24">
            {children}
          </main>
        </div>
      </section>
    </div>
  )
}
