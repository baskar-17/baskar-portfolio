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
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="eyebrow">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          Open to work
        </div>

        <p className="mt-6 text-sm md:text-base text-[var(--muted)]">
          Hi, I am Baskar.
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-[var(--ink)]">
          I design product experiences that are clear, practical, and ready to ship.
        </h1>

        <p className="mt-5 max-w-2xl text-[var(--muted)] text-base md:text-lg leading-relaxed">
          I work closely with product managers and engineers to simplify complex flows,
          improve usability, and move ideas into production with minimal handoff friction.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#work" className="btn-primary">
            View selected work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>
    </motion.section>
  )
}
