import { useState, useEffect } from "react"
import { ArrowRight, Menu, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  // Initialize mouse position in the center after mounting
  useEffect(() => {
    setIsMounted(true)
    setMousePos({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePos({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "70% center" }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
          type="video/mp4"
        />
      </video>

      {/* Interactive Cursor Spotlight Overlay */}
      {isMounted && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.95) 100%)`,
          }}
        />
      )}

      {/* Navbar (z-30) */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        {/* Left Side: Logo & Desktop Links */}
        <div className="flex items-center gap-10">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            Foldcraft
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="/"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Projects
            </a>
            <a
              href="#studio"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Studio
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
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-medium text-white/90 transition-colors hover:text-white"
            >
              Projects
            </a>
            <a
              href="#studio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-medium text-white/90 transition-colors hover:text-white"
            >
              Studio
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
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/90 sm:mb-6 sm:text-sm animate-[fadeSlideUp_0.8s_ease_0.2s_both]">
            Brand & Visual Storytelling
          </p>
          <h1 className="text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
            Shaping visual <br />
            narratives, <br />
            one pixel at a time.
          </h1>
        </div>

        {/* Bottom Section */}
        <div>
          <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/60 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg animate-[fadeSlideUp_0.8s_ease_0.7s_both]">
            Turning vision into reality through craft, motion, and an endless
            pursuit of beauty.
          </p>
          <a
            href="#projects"
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
