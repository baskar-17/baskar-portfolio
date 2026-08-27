import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import InteractiveCanvas from "../components/InteractiveCanvas"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* 3D Interactive Grid Canvas Background */}
      <InteractiveCanvas />

      {/* Dark Ambient Vignette (Keeps text highly readable and canvas elegant) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />

      {/* Navbar (z-30) */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        {/* Left Side: Logo & Desktop Links */}
        <div className="flex items-center gap-10">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            Baskar S.
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="/"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Home
            </a>
            <a
              href="/companies"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Reach Us
            </a>
          </div>
        </div>

        {/* Right Side: Desktop CTA / Mobile Menu Button */}
        <div>
          {/* Desktop Button */}
          <a
            href="/contact"
            className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:inline-block"
          >
            Let's Talk
          </a>

          {/* Mobile hamburger toggle (z-50) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform active:scale-90 md:hidden"
            aria-label="Toggle Menu"
          >
            <div className="relative h-6 w-6">
              {/* Menu Icon */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  mobileMenuOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              >
                <Menu className="h-6 w-6" />
              </div>
              {/* X Icon */}
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
      </nav>

      {/* Mobile Menu Overlay (z-20) */}
      <div
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen
            ? "h-screen opacity-100"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-transform duration-500 ${
            mobileMenuOpen ? "translate-y-0 opacity-100 delay-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-medium text-white/90 transition-colors hover:text-white"
            >
              Home
            </a>
            <a
              href="/companies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-medium text-white/90 transition-colors hover:text-white"
            >
              Projects
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-medium text-white/90 transition-colors hover:text-white"
            >
              Reach Us
            </a>

            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 text-center text-base font-medium text-black transition-transform hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content (z-10) */}
      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        {/* Top Section */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:mb-6 sm:text-sm animate-[fadeSlideUp_0.8s_ease_0.2s_both]">
            Senior UI/UX & Product Designer
          </p>
          <h1 className="text-4xl font-light leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
            Designing <span className="font-script italic text-white/90 font-light tracking-wide text-[1.2em] inline-block px-2">products</span> <br />
            that turn complexity <br />
            into <span className="font-script italic text-white/90 font-light tracking-wide text-[1.2em] inline-block px-2">clarity.</span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div>
          <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/70 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg animate-[fadeSlideUp_0.8s_ease_0.7s_both]">
            I am Baskar S, a Chennai-based designer. Partnering with teams at SportsGravy, BrainVault, and MyKinderPass to ship clean, workflow-driven web and mobile applications.
          </p>
          <a
            href="/companies"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-black transition-transform hover:scale-105 animate-[fadeSlideUp_0.8s_ease_0.9s_both]"
          >
            Explore Work
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
