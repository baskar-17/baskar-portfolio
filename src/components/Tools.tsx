import { motion } from "framer-motion"

type ToolItem = {
  name: string
  imageSrc: string
}

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`

const TOOLS: ToolItem[] = [
  { name: "Figma", imageSrc: withBase("/tools/figma.png") },
  { name: "Miro", imageSrc: withBase("/tools/miro.png") },
  { name: "Webflow", imageSrc: withBase("/tools/webflow.png") },
  { name: "Notion", imageSrc: withBase("/tools/notion.png") },
  { name: "Lyssna", imageSrc: withBase("/tools/lyssna.png") },
  { name: "SurveyMonkey", imageSrc: withBase("/tools/surveymonkey.png") },
  { name: "HotJar", imageSrc: withBase("/tools/hotjar.png") },
  { name: "Atlassian", imageSrc: withBase("/tools/atlassian.png") },
  { name: "Photoshop", imageSrc: withBase("/tools/photoshop.png") },
  { name: "Illustrator", imageSrc: withBase("/tools/illustrator.png") },
  { name: "AfterEffects", imageSrc: withBase("/tools/after-effects.png") },
  { name: "Claude", imageSrc: withBase("/tools/claude.png") },
  { name: "ChatGPT", imageSrc: withBase("/tools/chatgpt.png") },
  { name: "Lovable", imageSrc: withBase("/tools/loveable.png") },
  { name: "HTML", imageSrc: withBase("/tools/html.png") },
  { name: "CSS", imageSrc: withBase("/tools/css.png") },
]

export default function Tools() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">Tools I use regularly</h3>
      <div className="mt-6 flex flex-wrap gap-4">
        {TOOLS.map((tool) => (
          <div key={tool.name} className="group relative">
            <motion.div
              whileHover={{ scale: 1.15, rotate: [-2, 2, -1, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="h-12 w-12 rounded-2xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]"
            >
              <img
                src={tool.imageSrc}
                alt={tool.name}
                className="h-full w-full object-cover rounded-xl"
                loading="lazy"
              />
            </motion.div>
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 opacity-0 scale-95 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-100 group-hover:scale-100 text-[11px] font-semibold text-white bg-[var(--ink)] px-3 py-1.5 rounded-full shadow-[var(--shadow-strong)] whitespace-nowrap z-10">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
