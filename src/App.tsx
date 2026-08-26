import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import CaseStudy from "./pages/CaseStudy"
import CompaniesIndex from "./pages/CompaniesIndex"
import CompanyPage from "./pages/CompanyPage"
import NotFound from "./pages/NotFound"
import CaseStudyDemo from "./pages/case-studies/CaseStudyDemo"
import CustomCursor from "./components/CustomCursor"

export default function App() {
  return (
    <>
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
    </>
  )
}
