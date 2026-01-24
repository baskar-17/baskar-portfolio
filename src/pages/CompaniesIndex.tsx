import { Link } from "react-router-dom"
import CompaniesCards from "../components/CompaniesCards"
import { COMPANIES } from "../data/companies"

export default function CompaniesIndex() {
  return (
    <div className="min-h-screen px-4 md:px-12 py-10">
      <Link className="underline" to="/">← Back home</Link>

      <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight">
        Companies
      </h1>
      <p className="mt-3 text-neutral-600 max-w-2xl">
        A quick look at the places I’ve worked and what I built there.
      </p>

      <CompaniesCards items={COMPANIES} />
    </div>
  )
}
