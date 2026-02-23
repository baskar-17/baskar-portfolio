import { useEffect, useMemo, useState } from "react"
import { FiDownload } from "react-icons/fi"

const NAV_ITEMS = [
  { id: "work", label: "Projects" },
  { id: "companies", label: "Companies" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const

const RESUME_URL =
  "https://drive.google.com/file/d/1WlTS7_37XJKg03P6ZnhxdopXF8QYXVRq/view?usp=sharing"

type NavId = (typeof NAV_ITEMS)[number]["id"]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeId, setActiveId] = useState<NavId>(() => {
    if (typeof window === "undefined") return "work"
    const hash = window.location.hash.replace("#", "")
    return NAV_ITEMS.some((item) => item.id === hash) ? (hash as NavId) : "work"
  })

  const ids = useMemo(() => NAV_ITEMS.map((item) => item.id), [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (ids.includes(hash as NavId)) {
        setActiveId(hash as NavId)
      }
    }

    const observed = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id && ids.includes(visible[0].target.id as NavId)) {
          setActiveId(visible[0].target.id as NavId)
        }
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-30% 0px -40% 0px" }
    )

    observed.forEach((section) => observer.observe(section))
    window.addEventListener("hashchange", onHashChange)

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [ids])

  return (
    <>
      <header className="sticky top-0 z-50 hidden md:block">
        <div className="mx-auto max-w-[1200px] px-4 py-5">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
              ? "glass-card border-[color:var(--border)]"
              : "bg-transparent"
              }`}
          >
            <a href="#" className="font-semibold text-lg tracking-tight text-[var(--ink)]">
              Baskar
            </a>

            <nav className="flex items-center gap-1 text-sm font-medium" aria-label="Primary">
              {NAV_ITEMS.map((item) => {
                const active = activeId === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-5 py-2 transition-colors duration-300 ${active
                      ? "text-[var(--ink)] bg-[var(--surface-muted)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                      }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open resume"
              title="Resume/CV"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:bg-[#252525]"
            >
              <FiDownload className="text-base" />
              <span>Resume/CV</span>
            </a>
          </div>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 w-full glass-card border-t border-[rgba(255,255,255,0.4)] px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-2 md:hidden">
        <div className="mx-auto flex max-w-sm items-center justify-between px-2">
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1.5 rounded-xl px-3 py-2 transition-all duration-300 ${active
                    ? "text-[var(--ink)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
              >
                <div
                  className={`flex h-8 w-12 items-center justify-center rounded-full transition-colors duration-300 ${active ? "bg-[var(--surface-muted)]" : "bg-transparent"
                    }`}
                >
                  {item.id === "work" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"
                        stroke="currentColor"
                        strokeWidth={active ? "2" : "1.5"}
                      />
                    </svg>
                  ) : null}
                  {item.id === "companies" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M3 21h18M6 21V7a2 2 0 0 1 2-2h3v16M13 9h3a2 2 0 0 1 2 2v10"
                        stroke="currentColor"
                        strokeWidth={active ? "2" : "1.5"}
                      />
                    </svg>
                  ) : null}
                  {item.id === "about" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM4 20a8 8 0 0 1 16 0"
                        stroke="currentColor"
                        strokeWidth={active ? "2" : "1.5"}
                      />
                    </svg>
                  ) : null}
                  {item.id === "contact" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4V8a2 2 0 0 1 2-2z"
                        stroke="currentColor"
                        strokeWidth={active ? "2" : "1.5"}
                      />
                    </svg>
                  ) : null}
                </div>
                <span className={`text-[10px] ${active ? "font-semibold" : "font-medium"}`}>
                  {item.label}
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
