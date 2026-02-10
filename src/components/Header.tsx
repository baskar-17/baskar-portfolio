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
      <header className="sticky top-0 z-50 hidden lg:block">
        <div className="mx-auto max-w-[1200px] px-4 py-4">
          <div
            className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
              isScrolled
                ? "border-[color:var(--border)] bg-[color:var(--surface-glass)] shadow-[var(--shadow-strong)] backdrop-blur"
                : "border-transparent bg-[color:var(--surface)]/80 shadow-[var(--shadow-soft)]"
            }`}
          >
            <a href="#" className="font-semibold tracking-tight text-[var(--ink)]">
              Baskar
            </a>

            <nav className="flex items-center gap-2 text-sm" aria-label="Primary">
              {NAV_ITEMS.map((item) => {
                const active = activeId === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 transition ${
                      active
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "text-[var(--muted)] hover:bg-[color:var(--surface-muted)] hover:text-[var(--ink)]"
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
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)]"
            >
              <FiDownload className="text-base" />
              <span>Resume/CV</span>
            </a>
          </div>
        </div>
      </header>

      <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[620px] -translate-x-1/2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-glass)] px-2 py-2 shadow-[var(--shadow-strong)] backdrop-blur lg:hidden">
        <div className="grid grid-cols-4 gap-1 text-[10px]">
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-1 rounded-xl px-2 py-1.5 transition ${
                  active
                    ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "text-[var(--muted)] hover:bg-[color:var(--surface)] hover:text-[var(--ink)]"
                }`}
              >
                {item.id === "work" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ) : null}
                {item.id === "companies" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M3 21h18M6 21V7a2 2 0 0 1 2-2h3v16M13 9h3a2 2 0 0 1 2 2v10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ) : null}
                {item.id === "about" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM4 20a8 8 0 0 1 16 0"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ) : null}
                {item.id === "contact" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4V8a2 2 0 0 1 2-2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ) : null}
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
