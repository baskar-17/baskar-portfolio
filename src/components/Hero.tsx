import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-28"
    >
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
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-[var(--accent)] text-white shadow-[0_12px_30px_rgba(255,122,61,0.35)] hover:bg-[var(--accent-dark)] transition"
        >
          See what I’ve built
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-[color:var(--border)] bg-white/70 hover:bg-white transition"
        >
          Say hello
        </a>
      </div>
    </motion.section>
  )
}
