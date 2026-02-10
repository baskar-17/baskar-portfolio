import { Link } from "react-router-dom"
import type { WorkItem } from "../data/work"

export default function WorkCards({ items }: { items: WorkItem[] }) {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <Link
          key={item.slug}
          to={`/work/${item.slug}`}
          className="group flex flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-glass)] p-4 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-strong)] backdrop-blur"
          aria-label={`${item.title} project`}
        >
          <div className="rounded-2xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
            <img
              src={item.thumbnailSrc}
              alt={`${item.title} thumbnail`}
              className="w-full object-cover aspect-[4/3] transition duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>

          <div className="flex items-start gap-3">
            <div className="h-11 w-11 rounded-xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_20px_rgba(20,20,20,0.04)]">
              <img
                src={item.logoSrc}
                alt={`${item.title} logo`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <div className="text-base font-semibold text-[var(--ink)]">
                {item.title}
              </div>
              <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
                {item.productType}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
