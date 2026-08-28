import { createContext, useContext, useState, type ReactNode } from "react"

interface BlueprintContextType {
  blueprintMode: boolean
  setBlueprintMode: (mode: boolean) => void
}

const BlueprintContext = createContext<BlueprintContextType | undefined>(undefined)

export function BlueprintProvider({ children }: { children: ReactNode }) {
  const [blueprintMode, setBlueprintMode] = useState(false)

  return (
    <BlueprintContext.Provider value={{ blueprintMode, setBlueprintMode }}>
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
