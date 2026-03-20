"use client"

import { Rocket, FileSpreadsheet, ShieldCheck, Gem, Sparkles, UserCheck, HeartHandshake, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { useCalendly } from "@/components/calendly-provider"

const programFeatures = [
  { 
    icon: Rocket, 
    label: "Zero-Day Infrastructure Access",
    desc: "Deploy the Hyperblock™ compute engine into your operations ahead of the general market."
  },
  { 
    icon: FileSpreadsheet, 
    label: "Concierge Model Migration",
    desc: "Our quantitative engineers will port your complex, brittle Excel models into scalable AI architectures."
  },
  { 
    icon: ShieldCheck, 
    label: "CFO-Directed Governance",
    desc: "Dedicated instances ensuring total isolation, immutable audit logs, and European compliance readiness."
  },
  { 
    icon: HeartHandshake, 
    label: "Founder-Direct Coordination",
    desc: "Get unfiltered access to our technical founders to ensure the FinaPilot engine bends to your exact logic."
  },
  { 
    icon: Gem, 
    label: "Strategic Engineering Line",
    desc: "Direct access to our product leadership to shape features mapping specifically to your industry shifts."
  },
  { 
    icon: Sparkles, 
    label: "Co-Built Implementation",
    desc: "We don't just sell software. We partner to co-build your initial model logic to ensure absolute accuracy."
  },
]

export function ProgramSection() {
  const { ref, isVisible } = useScrollReveal()
  const { openCalendly } = useCalendly()

  return (
    <section id="program" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative section-divider overflow-hidden" ref={ref}>
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium border border-white/10 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-accent mb-6 animate-pulse-glow">
            <Gem className="w-3.5 h-3.5" />
            Enterprise Pilot Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase font-heading leading-[1.1]">
            High-Touch <span className="text-gradient-accent">Implementation Sprint</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-12 sm:mb-16 leading-relaxed max-w-4xl mx-auto font-medium">
            We partner intimately with visionary finance teams for a white-glove onboarding phase. Secure your position for concierge migration, dedicated engineering quants, and a system engineered for human-verified intelligence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-start gap-4 p-6 sm:p-8 rounded-[2rem] glass-premium glass-hover border border-white/5 text-left transition-all duration-700 bg-gradient-to-br from-white/3 to-transparent ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <div className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center shrink-0 border border-accent/20 bg-accent/5 transition-transform duration-500 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{feature.label}</h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-mono tracking-tight">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Mobile Optimization */}
          <div className={`mt-14 sm:mt-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 sm:px-12 h-14 sm:h-16 text-sm sm:text-base font-black rounded-2xl shadow-[0_20px_40px_rgba(0,242,255,0.2)] hover:shadow-[0_25px_50px_rgba(0,242,255,0.3)] animate-pulse-glow group w-full sm:w-auto uppercase tracking-widest"
              onClick={openCalendly}
            >
              Request Access to Pilot
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <div className="flex items-center justify-center gap-4 mt-6">
               <div className="h-px w-6 bg-white/10" />
               <p className="text-[10px] sm:text-[11px] text-white/40 font-black uppercase tracking-[0.25em]">Pilot Launch Subject to Approval</p>
               <div className="h-px w-6 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
