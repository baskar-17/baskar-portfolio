import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen px-4 py-10 text-[var(--ink)] reveal">
      <div className="mx-auto max-w-[1200px] flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <Link className="mt-4 link-underline" to="/">Go home</Link>
      </div>
    </div>
  )
}
