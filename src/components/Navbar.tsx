import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useBlueprint } from "../context/BlueprintContext"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { blueprintMode, setBlueprintMode } = useBlueprint()
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
      <div className="glass-card rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-white sm:text-xl font-geist hover:opacity-85 transition-opacity"
        >
          Baskar S.
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-white/60"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA Button & Blueprint Toggle (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Blueprint Mode Toggle */}
          <button
            onClick={() => setBlueprintMode(!blueprintMode)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
              blueprintMode
                ? "bg-red-500/10 border-red-500/30 text-red-400"
                : "bg-white/5 border-white/10 text-white/75 hover:bg-white/10"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${blueprintMode ? "bg-red-400" : "bg-white/40"}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${blueprintMode ? "bg-red-500" : "bg-white/60"}`}></span>
            </span>
            {blueprintMode ? "Blueprint ON" : "Blueprint Mode"}
          </button>

          <Link
            to="/contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 inline-block"
          >
            Let's Talk
          </Link>
        </div>

        {/* Hamburger Toggle (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform active:scale-90 md:hidden"
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
        className={`absolute left-0 right-0 top-16 z-40 overflow-hidden bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen ? "max-h-[350px] opacity-100 py-6 px-8" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={handleLinkClick}
                className={`text-xl font-medium transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-white/60"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          
          {/* Blueprint Mode Toggle (Mobile) */}
          <button
            onClick={() => setBlueprintMode(!blueprintMode)}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold uppercase tracking-wider border transition-all duration-300 w-full ${
              blueprintMode
                ? "bg-red-500/10 border-red-500/30 text-red-400"
                : "bg-white/5 border-white/10 text-white/75"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${blueprintMode ? "bg-red-400" : "bg-white/40"}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${blueprintMode ? "bg-red-500" : "bg-white/60"}`}></span>
            </span>
            {blueprintMode ? "Blueprint Mode: ON" : "Enable Blueprint Mode"}
          </button>

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="mt-2 rounded-xl bg-white py-3 text-center text-base font-medium text-black transition-transform hover:scale-105 block"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  )
}
