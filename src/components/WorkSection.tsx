import WorkCards from "./WorkCards"
import { WORK_ITEMS } from "../data/work"

export default function WorkSection() {
  return (
    <section id="work" className="py-16 md:py-24 reveal">
      <h2 className="section-title">Projects</h2>
      <p className="mt-2 text-sm md:text-base section-lead">
        Selected case studies from web and mobile products.
        Each project covers the problem, process, and outcomes.
      </p>

      <WorkCards items={WORK_ITEMS} />
    </section>
  )
}
