"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"

export function FinalCTASection() {
  const { openCalendly } = useCalendly()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Ready to shape the future of finance?</h2>
        <p className="text-lg opacity-90 mb-8">
          Join our exclusive Design Partner Program and be among the first to experience AI-powered financial planning.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 h-12"
          onClick={openCalendly}
        >
          <span className="flex items-center gap-2">
            Apply to be part of Design Partner Program
            <ArrowRight className="w-4 h-4" />
          </span>
        </Button>
      </div>
    </section>
  )
}
