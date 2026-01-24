type ToolItem = {
  name: string
  imageSrc: string
}

const TOOLS: ToolItem[] = [
  { name: "Figma", imageSrc: "/tools/figma.png" },
  { name: "Miro", imageSrc: "/tools/miro.png" },
  { name: "Webflow", imageSrc: "/tools/webflow.png" },
  { name: "Notion", imageSrc: "/tools/notion.png" },
  { name: "Lyssna", imageSrc: "/tools/lyssna.png" },
  { name: "SurveyMonkey", imageSrc: "/tools/surveymonkey.png" },
  { name: "HotJar", imageSrc: "/tools/hotjar.png" },
  { name: "Atlassian", imageSrc: "/tools/atlassian.png" },
  { name: "Photoshop", imageSrc: "/tools/photoshop.png" },
  { name: "Illustrator", imageSrc: "/tools/illustrator.png" },
  { name: "AfterEffects", imageSrc: "/tools/after-effects.png" },
  { name: "Claude", imageSrc: "/tools/claude.png" },
  { name: "ChatGPT", imageSrc: "/tools/chatgpt.png" },
  { name: "Lovable", imageSrc: "/tools/loveable.png" },
  { name: "HTML", imageSrc: "/tools/html.png" },
  { name: "CSS", imageSrc: "/tools/css.png" },
 
]

export default function Tools() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">Tools</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {TOOLS.map((tool) => (
          <div key={tool.name} className="group relative">
            <div className="h-11 w-11 rounded-xl overflow-hidden border border-[color:var(--border)] bg-white shadow-[0_10px_20px_rgba(20,20,20,0.04)]">
              <img
                src={tool.imageSrc}
                alt={tool.name}
                className="h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-3 opacity-0 scale-95 group-hover:-translate-y-6 group-hover:opacity-100 group-hover:scale-100 transition text-[11px] font-semibold text-white bg-black px-2.5 py-1 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
