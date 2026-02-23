import { motion } from "framer-motion"
import Header from "../components/Header"
import Hero from "../components/Hero"
import WorkSection from "../components/WorkSection"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CompaniesCards from "../components/CompaniesCards"
import { COMPANIES } from "../data/companies"

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--ink)]">
      <Header />

      <main className="w-full pb-28 md:pb-24 overflow-x-hidden">
        <Hero />
        <div className="mx-auto max-w-[1200px] px-4">
          <WorkSection />

          <section id="companies" className="py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="section-title">Teams I have worked with</h2>
              <p className="mt-2 text-sm md:text-base section-lead">
                Companies where I contributed as a UI/UX or product designer across discovery, execution, and delivery.
              </p>
            </motion.div>

            <CompaniesCards items={COMPANIES} />
          </section>

          <About />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}
