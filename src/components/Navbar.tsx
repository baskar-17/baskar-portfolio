import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon, LayoutGrid } from "lucide-react"
import { useBlueprint } from "../context/BlueprintContext"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { blueprintMode, setBlueprintMode, theme, toggleTheme } = useBlueprint()
  const location = useLocation()

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/companies" },
    { label: "Contact", path: "/contact" },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50">
      {/* Main Navbar Row */}
      <div className="glass-card bg-white/80 dark:bg-black/80 rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between border border-black/[0.06] dark:border-white/[0.06] shadow-[0_8px_32px_rgba(24,18,12,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-colors duration-350">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-black dark:text-white font-bricolage hover:opacity-85 transition-opacity"
        >
          Baskar S<span className="text-[#E25A3C] font-mono">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex font-mono">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-xs uppercase tracking-widest transition-colors hover:text-black dark:hover:text-white ${
                  isActive ? "text-black dark:text-white font-semibold" : "text-black/60 dark:text-white/60"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA Button & Toggles (Desktop) */}
        <div className="hidden items-center gap-3 md:flex font-mono">
          
          {/* Blueprint Mode Toggle */}
          <button
            onClick={() => setBlueprintMode(!blueprintMode)}
            title="Toggle Blueprint Grid Overlay"
            className={`flex h-9 items-center justify-center gap-1.5 rounded-full px-3 text-[10px] uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
              blueprintMode
                ? "bg-[#E25A3C]/10 border-[#E25A3C]/30 text-[#E25A3C] font-semibold"
                : "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 text-black/75 dark:text-white/75 hover:bg-black/10 dark:hover:bg-white/10"
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>{blueprintMode ? "DRAFT_ON" : "DRAFT"}</span>
          </button>

          {/* Theme Mode Toggle */}
          <button
            onClick={toggleTheme}
            title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-black/75 dark:text-white/75 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4 text-amber-500 animate-[spin_10s_linear_infinite]" />
            )}
          </button>

          <Link
            to="/contact"
            className="flex h-9 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-4 text-[10px] uppercase tracking-wider font-semibold transition-transform hover:scale-105"
          >
            Let's Talk
          </Link>
        </div>

        {/* Hamburger Toggle (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-black dark:text-white transition-transform active:scale-90 md:hidden cursor-pointer"
          aria-label="Toggle Menu"
        >
          <div className="relative h-6 w-6">
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <Menu className="h-6 w-6" />
            </div>
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            >
              <X className="h-6 w-6" />
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute left-0 right-0 top-16 z-40 overflow-hidden bg-white/95 dark:bg-[#0E0E10]/95 backdrop-blur-xl rounded-2xl border border-black/[0.08] dark:border-white/[0.08] shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen ? "max-h-[350px] opacity-100 py-6 px-8" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5 font-mono">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={handleLinkClick}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-black dark:hover:text-white ${
                  isActive ? "text-black dark:text-white font-semibold" : "text-black/60 dark:text-white/60"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          
          {/* Toggles (Mobile) */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            {/* Blueprint Mode Toggle */}
            <button
              onClick={() => setBlueprintMode(!blueprintMode)}
              className={`flex items-center justify-center gap-2 rounded-xl py-3 text-xs uppercase tracking-wider border transition-all duration-300 w-full cursor-pointer ${
                blueprintMode
                  ? "bg-[#E25A3C]/10 border-[#E25A3C]/30 text-[#E25A3C] font-semibold"
                  : "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 text-black/75 dark:text-white/75"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              <span>{blueprintMode ? "DRAFT_ON" : "DRAFT"}</span>
            </button>

            {/* Theme Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs uppercase tracking-wider border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-black/75 dark:text-white/75 w-full cursor-pointer"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-4 w-4" />
                  <span>DARK</span>
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4 text-amber-500" />
                  <span>LIGHT</span>
                </>
              )}
            </button>
          </div>

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="mt-1 rounded-xl bg-black dark:bg-white py-3 text-center text-xs uppercase tracking-wider font-semibold text-white dark:text-black hover:bg-neutral-850 dark:hover:bg-neutral-200 transition-transform block"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  )
}
