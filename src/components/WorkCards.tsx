import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import type { WorkItem } from "../data/work"
import { FiArrowRight } from "react-icons/fi"

export default function WorkCards({ items }: { items: WorkItem[] }) {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {items.map((item) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to={`/work/${item.slug}`}
            state={{ preserveScrollPosition: true }}
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.setItem("portfolio:homeScrollY", String(window.scrollY))
              }
            }}
            className="group flex flex-col gap-5 rounded-3xl"
            aria-label={`${item.title} project`}
          >
            <div className="relative rounded-3xl overflow-hidden bg-[color:var(--surface-muted)] shadow-[var(--shadow-soft)]">
              <img
                src={item.thumbnailSrc}
                alt={`${item.title} thumbnail`}
                className="w-full object-cover aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                <span className="flex items-center gap-2 text-white font-medium text-sm bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 delay-100">
                  View Case Study <FiArrowRight />
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 px-2">
              <div className="h-12 w-12 rounded-[14px] overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm shrink-0">
                <img
                  src={item.logoSrc}
                  alt={`${item.title} logo`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 pt-1">
                <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-base text-[var(--muted)] leading-relaxed">
                  {item.productType}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
