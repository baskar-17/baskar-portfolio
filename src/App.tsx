import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CaseStudy from "./pages/CaseStudy"
import CompaniesIndex from "./pages/CompaniesIndex"
import CompanyPage from "./pages/CompanyPage"
import NotFound from "./pages/NotFound"
import CaseStudyDemo from "./pages/case-studies/CaseStudyDemo"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Case studies */}
      <Route path="/work/:slug" element={<CaseStudy />} />
      <Route path="/case-studies/demo" element={<CaseStudyDemo />} />

      {/* Companies */}
      <Route path="/companies" element={<CompaniesIndex />} />
      <Route path="/companies/:slug" element={<CompanyPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
