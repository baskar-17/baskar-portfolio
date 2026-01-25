import Header from "../components/Header"
import Hero from "../components/Hero"
import WorkSection from "../components/WorkSection"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CompaniesCards from "../components/CompaniesCards"
import { COMPANIES } from "../data/companies"

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--ink)]">
      <Header />

      {/* ✅ max width 1200px for entire site */}
      <main className="mx-auto max-w-[1200px] px-5 md:px-6 pb-16 md:pb-24">
        <Hero />
        <WorkSection />

        <section id="companies" className="py-12 md:py-16">
          <h2 className="text-3xl font-semibold">Places I’ve been part of</h2>
          <p className="mt-2 text-sm md:text-base text-[var(--muted)] max-w-2xl">
            Quick snapshots of the teams I’ve worked with — deeper context lives in each project case study.
          </p>

          <CompaniesCards items={COMPANIES} />
        </section>

        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
