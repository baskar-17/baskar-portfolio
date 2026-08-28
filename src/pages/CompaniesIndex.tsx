import { Link } from "react-router-dom"
import CompaniesCards from "../components/CompaniesCards"
import { COMPANIES } from "../data/companies"

export default function CompaniesIndex() {
  return (
    <div className="min-h-screen px-4 pt-28 pb-10 text-[var(--ink)] bg-transparent">
      <div className="mx-auto w-full max-w-[1200px] reveal">
        <Link className="link-underline" to="/">← Back home</Link>

        <h1 className="mt-6 text-3xl md:text-5xl font-light tracking-tight">
          Selected <span className="font-script italic text-white/90 font-light tracking-wide text-[1.25em] inline-block px-1">companies</span>
        </h1>
        <p className="mt-3 text-[var(--muted)] max-w-2xl leading-relaxed text-sm sm:text-base">
          A quick look at the places I’ve worked and the roles I held.
        </p>

        <CompaniesCards items={COMPANIES} />
      </div>
    </div>
  )
}
