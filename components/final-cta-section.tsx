"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Lock, Zap, Shield, Brain, UserCheck } from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function FinalCTASection() {
  const { openCalendly } = useCalendly()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-emerald-800 to-teal-950" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/40 rounded-full blur-[100px]" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-black/20 text-xs font-bold uppercase tracking-widest text-white/90 mb-6 backdrop-blur-sm">
          <Lock className="w-3 h-3 text-white" /> 
          Exclusive Enterprise Rollout
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
           Take Control of the <br /> New Standard in Finance.
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Deploy the Hyperblock™ engine. Eradicate spreadsheet fragility. Maintain total human governance. Secure your spot in the FinaPilot Enterprise Pilot today.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {[
            { icon: Shield, label: "Advanced Security & GDPR" },
            { icon: UserCheck, label: "Total Human Oversight" },
            { icon: Brain, label: "Mathematical AI" },
            { icon: Zap, label: "<4ms Recalc" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/10 backdrop-blur-md">
              <badge.icon className="w-4 h-4 text-white" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{badge.label}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-white text-emerald-950 hover:bg-gray-100 px-12 h-16 text-lg sm:text-xl font-bold shadow-2xl rounded-xl group"
              onClick={openCalendly}
            >
                Start Your Enterprise Pilot
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-white/80 font-bold tracking-wider uppercase mt-2 drop-shadow-md">Requires Board / CFO Approval · Paid Pilot Engagement</p>
        </div>
      </div>
    </section>
  )
}
