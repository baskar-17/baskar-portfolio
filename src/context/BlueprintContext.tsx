import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface BlueprintContextType {
  blueprintMode: boolean
  setBlueprintMode: (mode: boolean) => void
  theme: "light" | "dark"
  toggleTheme: () => void
}

const BlueprintContext = createContext<BlueprintContextType | undefined>(undefined)

export function BlueprintProvider({ children }: { children: ReactNode }) {
  const [blueprintMode, setBlueprintMode] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme")
    return (saved as "light" | "dark") || "light"
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <BlueprintContext.Provider value={{ blueprintMode, setBlueprintMode, theme, toggleTheme }}>
      {children}
    </BlueprintContext.Provider>
  )
}

export function useBlueprint() {
  const context = useContext(BlueprintContext)
  if (context === undefined) {
    throw new Error("useBlueprint must be used within a BlueprintProvider")
  }
  return context
}
