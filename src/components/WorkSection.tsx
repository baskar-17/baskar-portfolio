import { motion } from "framer-motion"
import WorkCards from "./WorkCards"
import { WORK_ITEMS } from "../data/work"

export default function WorkSection() {
  return (
    <section id="work" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="mt-2 text-sm md:text-base section-lead">
          Selected case studies from web and mobile products.
          Each project covers the problem, process, and outcomes.
        </p>
      </motion.div>

      <WorkCards items={WORK_ITEMS} />
    </section>
  )
}
