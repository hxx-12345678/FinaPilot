"use client"

import { createContext, useContext, type ReactNode } from "react"

interface CalendlyContextType {
  openCalendly: () => void
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined)

export function useCalendly() {
  const context = useContext(CalendlyContext)
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider")
  }
  return context
}

interface CalendlyProviderProps {
  children: ReactNode
}

export function CalendlyProvider({ children }: CalendlyProviderProps) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/finapilot/30min"

  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}
    </CalendlyContext.Provider>
  )
}
