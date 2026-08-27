import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import CaseStudy from "./pages/CaseStudy"
import CompaniesIndex from "./pages/CompaniesIndex"
import CompanyPage from "./pages/CompanyPage"
import NotFound from "./pages/NotFound"
import CaseStudyDemo from "./pages/case-studies/CaseStudyDemo"
import CustomCursor from "./components/CustomCursor"
import InteractiveCanvas from "./components/InteractiveCanvas"

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black font-geist text-white overflow-x-hidden selection:bg-white/10 selection:text-white">
      {/* Global 3D Interactive Grid Canvas Background */}
      <InteractiveCanvas />

      {/* Global Dark Ambient Vignette (Ensures contrast across all pages) */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none z-[1]" />

      <div className="relative z-10">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          {/* Case studies */}
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/case-studies/demo" element={<CaseStudyDemo />} />

          {/* Companies */}
          <Route path="/companies" element={<CompaniesIndex />} />
          <Route path="/companies/:slug" element={<CompanyPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
