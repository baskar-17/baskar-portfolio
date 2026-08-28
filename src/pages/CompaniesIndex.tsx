import { Link } from "react-router-dom"
import CompaniesCards from "../components/CompaniesCards"
import { COMPANIES } from "../data/companies"

export default function CompaniesIndex() {
  return (
    <div className="min-h-screen px-4 pt-28 pb-10 text-[var(--ink)] bg-transparent">
      <div className="mx-auto w-full max-w-[1200px] animate-[fadeSlideUp_0.8s_ease_both]">
        <Link className="font-mono text-xs uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors" to="/">[← BACK_HOME]</Link>

        <div className="mt-8">
          <p className="font-mono text-[10px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
            // Professional History
          </p>
          <h1 className="text-3xl md:text-5xl font-bricolage font-bold tracking-tight text-black dark:text-white leading-tight">
            Selected <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-normal text-[0.8em] inline-block px-2.5 py-0.5 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">companies</span>
          </h1>
          <p className="mt-3 text-[var(--muted)] max-w-2xl leading-relaxed text-sm font-geist">
            A quick look at the places I’ve worked and the roles I held.
          </p>
        </div>

        <CompaniesCards items={COMPANIES} />
      </div>
    </div>
  )
}
