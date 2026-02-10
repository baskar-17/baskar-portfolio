export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 hidden lg:block">
        <div className="mx-auto max-w-[1200px] px-4 py-4">
          <div className="flex items-center justify-between rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 shadow-[var(--shadow-soft)]">
            <div className="font-semibold tracking-tight text-[var(--ink)]">Baskar</div>

            <nav className="text-sm flex items-center gap-5 text-[var(--muted)]">
              <a className="hover:text-[var(--ink)] transition" href="#work">Projects</a>
              <a className="hover:text-[var(--ink)] transition" href="#companies">Companies</a>
              <a className="hover:text-[var(--ink)] transition" href="#about">About</a>
              <a className="hover:text-[var(--ink)] transition" href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-glass)] px-3 py-3 shadow-[var(--shadow-strong)] backdrop-blur lg:hidden">
        <div className="grid grid-cols-4 gap-2 text-[10px] text-[var(--muted)]">
          <a
            href="#work"
            className="flex flex-col items-center gap-1 rounded-xl px-2 py-1 transition text-[var(--ink)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Projects
          </a>
          <a
            href="#companies"
            className="flex flex-col items-center gap-1 rounded-xl px-2 py-1 transition hover:text-[var(--ink)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 21h18M6 21V7a2 2 0 0 1 2-2h3v16M13 9h3a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Companies
          </a>
          <a
            href="#about"
            className="flex flex-col items-center gap-1 rounded-xl px-2 py-1 transition hover:text-[var(--ink)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            About
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center gap-1 rounded-xl px-2 py-1 transition hover:text-[var(--ink)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Contact
          </a>
        </div>
      </nav>
    </>
  )
}
