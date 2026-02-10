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
          Available for new projects
        </div>

        <p className="mt-6 text-sm md:text-base text-[var(--muted)]">
          Hello 👋, great to have you here
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-[var(--ink)]">
          I design digital experiences that feel simple, clear, and honestly… nice to use.
        </h1>

        <p className="mt-5 max-w-2xl text-[var(--muted)] text-base md:text-lg leading-relaxed">
          I'm Baskar — I enjoy turning complicated requirements into clean, friendly products.
          I care about usability, good structure, and the little details that make an interface feel effortless.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#work" className="btn-primary">
            See what I've built
          </a>
          <a href="#contact" className="btn-secondary">
            Say hello
          </a>
        </div>
      </div>
    </motion.section>
  )
}
