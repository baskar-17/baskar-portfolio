import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import CaseStudy from "./pages/CaseStudy"
import CompaniesIndex from "./pages/CompaniesIndex"
import CompanyPage from "./pages/CompanyPage"
import NotFound from "./pages/NotFound"
import CaseStudyDemo from "./pages/case-studies/CaseStudyDemo"
import Navbar from "./components/Navbar"
import Preloader from "./components/Preloader"
import { BlueprintProvider, useBlueprint } from "./context/BlueprintContext"

function AppContent() {
  const { blueprintMode } = useBlueprint()

  return (
    <div className={`relative min-h-screen w-full bg-[#FAF9F5] font-geist text-black overflow-x-hidden selection:bg-black/5 selection:text-black transition-colors duration-500 ${blueprintMode ? "blueprint-active" : ""}`}>
      {/* Boot Loading Micro-animation */}
      <Preloader />

      <div className="relative z-10">
        <Navbar />
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

export default function App() {
  return (
    <BlueprintProvider>
      <AppContent />
    </BlueprintProvider>
  )
}
