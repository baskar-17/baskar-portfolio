import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { WORK_ITEMS } from "../data/work"
import FrictionSandbox from "../components/FrictionSandbox"

export default function Home() {
  const rails = [
    { label: "Currently", value: "Lead Designer at SportsGravy" },
    { label: "Previously", value: "BrainVault · MyKinderPass · Smytten" },
    { label: "Expertise", value: "Complex Workflows · Design Systems" },
    { label: "Based in", value: "Chennai, India" },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-y-auto bg-transparent pb-24 pt-28 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16 md:gap-24">
        
        {/* Top Hero Section */}
        <div className="max-w-4xl space-y-8">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-black/50 animate-[fadeSlideUp_0.8s_ease_0.2s_both]">
              // Senior UI/UX & Product Designer · 5+ Years
            </p>
            <h1 className="text-4xl font-bricolage font-bold leading-[1.15] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
              Designing <span className="font-mono text-emerald-600 font-semibold tracking-normal text-[0.8em] inline-block px-3 py-1 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl">systems</span> <br />
              that connect research <br />
              with <span className="font-mono text-blue-600 font-semibold tracking-normal text-[0.8em] inline-block px-3 py-1 border border-blue-500/20 bg-blue-500/5 rounded-2xl">interface.</span>
            </h1>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base md:text-lg animate-[fadeSlideUp_0.8s_ease_0.6s_both] font-geist">
            I partner with high-growth teams to structure complex data into simple, focused workflows. Driven by visual precision, design systems, and rigorous usability decisions.
          </p>

          {/* Sarthak-style Metadata Rails */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-0 border-t border-b border-black/10 divide-y sm:divide-y-0 sm:divide-x divide-black/10 mt-12 animate-[fadeSlideUp_0.8s_ease_0.7s_both]">
            {rails.map((rail, idx) => (
              <div key={idx} className="py-5 px-0 sm:px-6 first:pl-0 last:pr-0 flex flex-col gap-1.5 justify-start">
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/40">// {rail.label}</span>
                <span className="font-geist text-xs md:text-sm font-medium text-black/80 leading-relaxed">{rail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Sandbox Section */}
        <div className="space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-wider text-black/40 mb-2">
            // INTERACTIVE STRESS TEST
          </div>
          <FrictionSandbox />
        </div>

        {/* Featured Case Study Cards Section */}
        <div className="space-y-8 animate-[fadeSlideUp_0.8s_ease_1s_both]">
          <div className="flex items-end justify-between gap-4 border-b border-black/10 pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-black/40">
                // Selected Works
              </span>
              <h2 className="text-2xl md:text-3xl font-bricolage font-bold tracking-tight text-black mt-1">
                Featured Case Studies
              </h2>
            </div>
            <Link
              to="/companies"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-xs font-mono font-medium text-white transition-transform hover:scale-105"
            >
              All Experience
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Featured cards mapped with techy structure */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {WORK_ITEMS.slice(0, 3).map((project, index) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="glass-card bg-white/50 hover:bg-white border border-black/[0.06] hover:border-black/[0.12] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 block shadow-[0_8px_32px_rgba(24,18,12,0.02)] group relative overflow-hidden"
              >
                {/* Floating Index Identifier */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-black/20 group-hover:text-black/40 transition-colors">
                  [0{index + 1}]
                </div>

                <div className="flex flex-col h-full justify-between min-h-[140px]">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-black/40 block mb-1">
                      {project.productType}
                    </span>
                    <h3 className="text-lg font-bricolage font-bold text-black group-hover:text-black/85 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-black/60 line-clamp-2 leading-relaxed font-geist">
                      {project.caseStudy.overview}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-black/80 group-hover:text-black transition-colors">
                    <span>EXPLORE_CASE_STUDY</span>
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
