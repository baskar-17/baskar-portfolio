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
      <h3 className="text-lg font-semibold text-[var(--ink)]">Tools</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {TOOLS.map((tool) => (
          <div key={tool.name} className="group relative">
            <div className="h-11 w-11 rounded-xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]">
              <img
                src={tool.imageSrc}
                alt={tool.name}
                className="h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-3 opacity-0 scale-95 group-hover:-translate-y-6 group-hover:opacity-100 group-hover:scale-100 transition text-[11px] font-semibold text-white bg-[var(--ink)] px-2.5 py-1 rounded-full shadow-[var(--shadow-strong)]">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
