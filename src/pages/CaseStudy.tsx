import { useParams, Link } from "react-router-dom"
import { WORK_ITEMS } from "../data/work"

export default function CaseStudy() {
  const { slug } = useParams()
  const project = WORK_ITEMS.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen mx-auto max-w-[1200px] px-4 py-10">
        <Link to="/" className="underline">← Back home</Link>
        <h1 className="mt-6 text-2xl font-semibold">Project not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen mx-auto max-w-[1200px] px-4 py-10">
      <Link to="/" className="underline">← Back home</Link>

      {/* Hero image */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full object-cover max-h-[520px]"
        />
      </div>

      {/* Title */}
      <h1 className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
        {project.title}
      </h1>

      {/* Product type */}
      <p className="mt-3 text-neutral-600 text-base">
        {project.productType}
      </p>

      {/* Placeholder content (optional for now) */}
      <div className="mt-10 max-w-3xl text-neutral-600 leading-relaxed space-y-4">
        <p>
          This project focuses on designing a clear, user-friendly experience
          while balancing real product constraints.
        </p>
        <p>
          I’ll be adding deeper insights, flows, and outcomes here soon.
        </p>
      </div>
    </div>
  )
}
