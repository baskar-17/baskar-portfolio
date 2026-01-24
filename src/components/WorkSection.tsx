import WorkCards from "./WorkCards"
import { WORK_ITEMS } from "../data/work"

export default function WorkSection() {
  return (
    <section id="work" className="py-12 md:py-16">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="mt-2 text-sm md:text-base text-[var(--muted)] max-w-2xl">
        A small gallery of things I’ve designed — product features, flows, and UI work I genuinely enjoyed building.
        Hover to peek, click to explore.
      </p>

      <WorkCards items={WORK_ITEMS} />
    </section>
  )
}
