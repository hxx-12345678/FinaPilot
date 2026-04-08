"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Brain, CheckCircle2 } from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import SplashCursor from "@/components/splash-cursor"

export function FinalCTASection() {
  const { openCalendly } = useCalendly()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-emerald-700 to-teal-900" />
      {/* ═══ SPLASH CURSOR (REACT BITS) ═══ */}
      <SplashCursor 
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1024}
        SPLAT_RADIUS={0.2}
        COLOR_UPDATE_SPEED={12}
        BACK_COLOR={{ r: 0.05, g: 0.2, b: 0.2 }} 
      />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
           Stop fighting spreadsheets.<br />Start building with confidence.
        </h2>
        <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          We're looking for 10 finance teams who are ready to replace brittle Excel models and supercharge their existing workflows with 12 specialized AI agents — all under full human control. If that's you, let's talk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            { icon: Shield, label: "Encrypted & GDPR Ready" },
            { icon: CheckCircle2, label: "Human Approval Required" },
            { icon: Brain, label: "12 AI Agents" },
            { icon: Zap, label: "Instant Recalculation" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/15 border border-white/10 backdrop-blur-sm">
              <badge.icon className="w-3.5 h-3.5 text-white/80" />
              <span className="text-[10px] font-semibold text-white uppercase tracking-wider">{badge.label}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-3">
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-gray-100 px-10 h-14 text-base font-bold shadow-2xl rounded-xl group"
              onClick={openCalendly}
            >
                Apply for Design Partner Program
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-white/60 font-medium mt-1">30 min intro call · 10 spots available</p>
        </div>
      </div>
    </section>
  )
}
