import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { WORK_ITEMS } from "../data/work"

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-transparent font-geist">
      {/* Hero Content (z-10) */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-24 sm:pb-12 md:px-12 lg:px-16">
        {/* Top Section */}
        <div className="max-w-3xl pt-6 sm:pt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:mb-6 sm:text-sm animate-[fadeSlideUp_0.8s_ease_0.2s_both]">
            Senior UI/UX & Product Designer
          </p>
          <h1 className="text-4xl font-light leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
            Designing <span className="font-script italic text-white/90 font-light tracking-wide text-[1.2em] inline-block px-2">products</span> <br />
            that turn complexity <br />
            into <span className="font-script italic text-white/90 font-light tracking-wide text-[1.2em] inline-block px-2">clarity.</span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <p className="max-w-md text-xs leading-relaxed text-white/70 sm:text-sm md:text-base animate-[fadeSlideUp_0.8s_ease_0.7s_both]">
              I am Baskar S, a Chennai-based designer. Partnering with teams at SportsGravy, BrainVault, and MyKinderPass to ship clean, workflow-driven web and mobile applications.
            </p>
            <Link
              to="/companies"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-medium text-black transition-transform hover:scale-105 shrink-0 self-start sm:self-auto animate-[fadeSlideUp_0.8s_ease_0.8s_both]"
            >
              All Experience
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Featured Case Study Glassmorphism Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-[fadeSlideUp_0.8s_ease_0.9s_both]">
            {WORK_ITEMS.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="glass-card bg-white/[0.02] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 block shadow-[0_8px_32px_rgba(0,0,0,0.3)] group"
              >
                <div className="flex flex-col h-full justify-between min-h-[110px]">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block mb-1">
                      {project.productType}
                    </span>
                    <h3 className="text-base font-semibold text-white group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] text-white/60 line-clamp-2 leading-relaxed">
                      {project.caseStudy.overview}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-white/80 group-hover:text-white transition-colors">
                    Read Case Study
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
