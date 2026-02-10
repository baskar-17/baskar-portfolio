import WorkCards from "./WorkCards"
import { WORK_ITEMS } from "../data/work"

export default function WorkSection() {
  return (
    <section id="work" className="py-16 md:py-24 reveal">
      <h2 className="section-title">Projects</h2>
      <p className="mt-2 text-sm md:text-base section-lead">
        A small gallery of things I’ve designed — product features, flows, and UI work I genuinely enjoyed building.
        Hover to peek, click to explore.
      </p>

      <WorkCards items={WORK_ITEMS} />
    </section>
  )
}
