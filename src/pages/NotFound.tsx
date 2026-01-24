import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link className="mt-4 underline" to="/">Go home</Link>
    </div>
  )
}
