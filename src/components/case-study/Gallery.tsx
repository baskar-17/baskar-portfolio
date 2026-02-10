import { motion } from "framer-motion"

type GalleryItem = {
  title: string
  caption: string
  imageSrc?: string
}

type GalleryProps = {
  items: GalleryItem[]
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-4 sm:grid-cols-2"
    >
      {items.map((entry) => (
        <motion.figure
          key={entry.title}
          variants={item}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            {entry.imageSrc ? (
              <img
                src={entry.imageSrc}
                alt={entry.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(186,255,106,0.2),rgba(17,24,17,0.2))] flex items-center justify-center text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Placeholder
              </div>
            )}
          </div>
          <figcaption className="p-4">
            <div className="text-sm font-semibold text-[var(--ink)]">
              {entry.title}
            </div>
            <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
              {entry.caption}
            </p>
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  )
}
