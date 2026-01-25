import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden py-16 md:py-28"
    >
      <div className="hero-ambient" />
      <div className="hero-orbit" />
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-1 text-xs font-semibold text-[var(--accent-dark)]">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          Available for new projects
        </div>

        <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
          I design digital experiences that feel simple, clear, and honestly… nice to use.
        </h1>

        <p className="mt-5 max-w-2xl text-[var(--muted)] text-base md:text-lg leading-relaxed">
          I’m Baskar — I enjoy turning complicated requirements into clean, friendly products.
          I care about usability, good structure, and the little details that make an interface feel effortless.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-[var(--accent)] text-white shadow-[0_12px_30px_rgba(255,122,61,0.35)] hover:bg-[var(--accent-dark)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            See what I’ve built
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-[color:var(--border)] bg-white/70 hover:bg-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Say hello
          </a>
        </div>
      </div>
    </motion.section>
  )
}
