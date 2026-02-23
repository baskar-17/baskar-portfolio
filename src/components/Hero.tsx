import { motion, useScroll, useTransform } from "framer-motion"
import type { Variants } from "framer-motion"

export default function Hero() {
  const { scrollY } = useScroll()

  // Parallax values
  const textY = useTransform(scrollY, [0, 600], [0, 150])
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const orb1Y = useTransform(scrollY, [0, 600], [0, -120])
  const orb2Y = useTransform(scrollY, [0, 600], [0, 100])

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section className="relative overflow-hidden py-24 md:py-32 h-[90vh] min-h-[600px] flex items-center">
      {/* Background Orbs with Parallax */}
      <div className="hero-orb-wrap">
        <motion.div style={{ y: orb1Y }} className="hero-orb hero-orb-1" />
        <motion.div style={{ y: orb2Y }} className="hero-orb hero-orb-2" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.div variants={item} className="eyebrow inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            Open for opportunities
          </motion.div>

          <motion.p variants={item} className="mt-8 text-lg font-medium text-[var(--muted)]">
            Hi, I am Baskar —
          </motion.p>

          <motion.h1 variants={item} className="mt-4 max-w-4xl text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)]">
            Designing product experiences that are clear, practical, and ready to ship.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-[var(--muted)] text-lg md:text-xl leading-relaxed">
            I work closely with product managers and engineers to simplify complex flows,
            improve usability, and move ideas into production with minimal handoff friction.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#work" className="btn-primary">
              View selected work
            </a>
            <a href="#about" className="btn-secondary">
              About me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
