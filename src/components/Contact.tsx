import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

const WORDS = ["Design", "Food", "Business Ideas", "Components", "Experience"]

export default function Contact() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="contact" className="py-16 md:py-24 reveal">
      <div 
        className="relative rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-10 md:p-16 text-center flex flex-col items-center justify-center max-w-4xl mx-auto shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 overflow-hidden"
      >
        {/* Premium Grid Background Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        />

        <p className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)] mb-2">
          Get in touch
        </p>

        <h2 className="relative z-10 mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl leading-[1.2] text-center max-w-2xl">
          Let&apos;s talk about{" "}
          <span className="inline-block relative overflow-hidden h-[1.25em] text-[var(--accent)] font-bold text-left align-bottom min-w-[220px] md:min-w-[340px]">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={index}
                initial={{ y: "80%", opacity: 0, scale: 0.96 }}
                animate={{ y: "0%", opacity: 1, scale: 1 }}
                exit={{ y: "-80%", opacity: 0, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="absolute left-0 bottom-[0.08em] block w-full whitespace-nowrap text-[var(--accent)]"
              >
                {WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <p className="relative z-10 mt-6 text-sm md:text-base text-[var(--muted)] max-w-md leading-relaxed">
          Whether you are looking for a designer, interested in a collaboration, or just want to chat—I&apos;d love to hear from you.
        </p>

        <div className="relative z-10 mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:bg-[#252525]"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  )
}
