export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f8f5ef]/90 backdrop-blur border-b border-[color:var(--border)] shadow-[0_8px_20px_rgba(22,22,22,0.04)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 py-4 flex items-center justify-between">
        <div className="font-semibold tracking-tight text-[var(--ink)]">Baskar</div>

        <nav className="text-sm flex items-center gap-4 text-[var(--muted)]">
          <a className="hover:text-[var(--ink)] transition" href="#work">Projects</a>
          <a className="hover:text-[var(--ink)] transition" href="#companies">Companies</a>
          <a className="hover:text-[var(--ink)] transition" href="#about">About</a>
          <a className="hover:text-[var(--ink)] transition" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
