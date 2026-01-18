"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"

export function HeroSection() {
  const { openCalendly } = useCalendly()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Limited to 10 Design Partners
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              FinaPilot Design Partner Program
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              Help shape the future of financial planning.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Join our exclusive Design Partner Program and get early access to the most advanced AI-powered financial
              planning, forecasting, and scenario modeling platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12"
                onClick={openCalendly}
              >
                <span className="flex items-center gap-2">
                  Apply to be part of Design Partner Program
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative">
              <div className="bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">FinaPilot Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-xs text-muted-foreground mb-1">Revenue Forecast</p>
                      <p className="text-xl font-semibold text-foreground">$2.4M</p>
                      <p className="text-xs text-accent">+12.5%</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-xs text-muted-foreground mb-1">Cash Runway</p>
                      <p className="text-xl font-semibold text-foreground">18 mo</p>
                      <p className="text-xs text-accent">Healthy</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-xs text-muted-foreground mb-1">Burn Rate</p>
                      <p className="text-xl font-semibold text-foreground">$125K</p>
                      <p className="text-xs text-muted-foreground">Monthly</p>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 h-40 flex items-end gap-2">
                    {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 82, 95].map((height, i) => (
                      <div key={i} className="flex-1 bg-primary/80 rounded-t" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
