"use client"

import { Rocket, FileSpreadsheet, ShieldCheck, HeartHandshake, Sparkles, Zap, ArrowRight, CheckCircle2, Users, Brain, XCircle, Search, Settings, Handshake } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { useCalendly } from "@/components/calendly-provider"

const whatYouGet = [
  { 
    icon: FileSpreadsheet, 
    label: "We Rebuild Your Financial Model",
    desc: "Our team migrates your complex Excel models into FinaPilot — structured, auditable, and error-free."
  },
  { 
    icon: HeartHandshake, 
    label: "Direct Access to Founders",
    desc: "Weekly calls + dedicated Slack/WhatsApp channel. You talk to the people building the product, not support tickets."
  },
  { 
    icon: Sparkles, 
    label: "Custom Features for Your Workflow",
    desc: "Need a specific report format? A custom scenario template? We build it for you during the pilot."
  },
  { 
    icon: Rocket, 
    label: "Priority Roadmap Influence",
    desc: "Your feedback directly shapes what we build next. Design partners get first access to every new feature."
  },
  { 
    icon: Brain, 
    label: "AI Agents Configured for You",
    desc: "We set up and tune all AI risk, variance, forecasting, and reporting components for your specific business context."
  },
  { 
    icon: ShieldCheck, 
    label: "Founding Member Pricing",
    desc: "Lock in discounted lifetime pricing as a founding design partner. Early believers get rewarded."
  },
]

const qualifications = [
  "You have complex Excel financial models that break or are hard to maintain",
  "You run an FP&A, finance, or accounting team",
  "You need a solution that bridges the gap between AI speed and human-verified trust",
]

const disqualifications = [
  "You're looking for a free tool",
  "You don't have an existing financial model",
  "You're not actively doing FP&A or reporting"
]

export function ProgramSection() {
  const { ref, isVisible } = useScrollReveal()
  const { openCalendly } = useCalendly()

  return (
    <section id="program" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative section-divider overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent mb-6">
            <Rocket className="w-3.5 h-3.5" />
            Limited to 10 teams
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
            Founding <span className="text-gradient-accent">Design Partner</span> Program
          </h2>
          <p className="text-base sm:text-lg text-white/50 mb-10 leading-relaxed max-w-3xl mx-auto">
             We partner with exactly 10 finance teams on a <span className="text-white font-semibold">skin-in-the-game, paid engagement</span> to ensure deep mutual commitment. We don't just hand you software — we rebuild your models with you.
          </p>

          {/* ═══ EXPECTED OUTCOMES (Before vs After) ═══ */}
          <div className={`mb-24 max-w-4xl mx-auto w-full relative z-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">Expected Outcomes <span className="text-white/40 font-normal">(based on pilot goals)</span></h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative text-left">
               {/* Divider Line (Desktop) */}
               <div className="hidden md:block absolute top-[50%] bottom-8 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 -translate-y-1/2" />
               
               {/* Before Column */}
               <div className="glass-premium p-8 rounded-2xl border border-red-500/10 bg-red-500/5 relative overflow-hidden group hover:border-red-500/20 transition-colors">
                  <div className="text-red-400 font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                     <XCircle className="w-4 h-4" /> Before FinaPilot
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 opacity-50" />
                       <p className="text-white/60 text-sm leading-relaxed">3–5 days to update models across departments</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 opacity-50" />
                       <p className="text-white/60 text-sm leading-relaxed">Excel errors and circular logic you can't trace easily</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 opacity-50" />
                       <p className="text-white/60 text-sm leading-relaxed">Manual board reporting taking days of formatting</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 opacity-50" />
                       <p className="text-white/60 text-sm leading-relaxed">No confidence in generic AI or LLM math outputs</p>
                     </div>
                  </div>
               </div>

               {/* After Column */}
               <div className="glass-premium p-8 rounded-2xl border border-accent/20 bg-accent/5 relative overflow-hidden group hover:border-accent/40 transition-colors shadow-[0_0_40px_rgba(0,242,255,0.05)]">
                  <div className="text-accent font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4" /> After Switching
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                       <p className="text-white/90 font-medium text-sm leading-relaxed">Update forecasts and run scenarios in minutes</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                       <p className="text-white/90 font-medium text-sm leading-relaxed">Every number, assumption, and cell is traceable</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                       <p className="text-white/90 font-medium text-sm leading-relaxed">Live, read-only board reporting portals generated instantly</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                       <p className="text-white/90 font-medium text-sm leading-relaxed">Human-controlled AI suggestions you can actually trust</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* What you get grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
            {whatYouGet.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-start gap-4 p-6 sm:p-7 rounded-2xl glass-premium glass-hover border border-white/5 text-left transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                    <h3 className="text-base font-bold text-white mb-1.5 leading-tight">{feature.label}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Qualification Grid (For you / Not for you) */}
          <div className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
             {/* For You */}
             <div className="glass-premium rounded-2xl p-8 border border-white/10 text-left bg-emerald-500/5 hover:border-emerald-500/20 transition-colors">
               <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                 This is for you if:
               </h3>
               <div className="space-y-4">
                 {qualifications.map((q, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 opacity-70" />
                     <span className="text-sm text-white/70 leading-relaxed">{q}</span>
                   </div>
                 ))}
               </div>
             </div>

             {/* Not For You */}
             <div className="glass-premium rounded-2xl p-8 border border-white/10 text-left bg-red-500/5 hover:border-red-500/20 transition-colors">
               <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                 <XCircle className="w-5 h-5 text-red-400" />
                 Not for you if:
               </h3>
               <div className="space-y-4">
                 {disqualifications.map((q, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 opacity-70" />
                     <span className="text-sm text-white/70 leading-relaxed">{q}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* What Happens After You Apply */}
          <div className={`max-w-4xl mx-auto text-left mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">What Happens After You Apply?</h3>
            <div className="grid sm:grid-cols-4 gap-4">
               {/* Step 1 */}
               <div className="glass-premium p-6 rounded-xl border border-white/5 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,242,255,0.5)]">1</div>
                  <h4 className="text-white font-semibold text-sm mb-2 mt-2">30-min Intro Call</h4>
                  <p className="text-xs text-white/50 leading-relaxed">We understand your current financial model</p>
               </div>
               {/* Step 2 */}
               <div className="glass-premium p-6 rounded-xl border border-white/5 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#1A2333] border border-white/20 text-white font-bold flex items-center justify-center text-sm">2</div>
                  <h4 className="text-white font-semibold text-sm mb-2 mt-2">Deep Assessment</h4>
                  <p className="text-xs text-white/50 leading-relaxed">We assess if FinaPilot can actually help you</p>
               </div>
               {/* Step 3 */}
               <div className="glass-premium p-6 rounded-xl border border-white/5 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#1A2333] border border-white/20 text-white font-bold flex items-center justify-center text-sm">3</div>
                  <h4 className="text-white font-semibold text-sm mb-2 mt-2">Partnership Fit</h4>
                  <p className="text-xs text-white/50 leading-relaxed">If fit → we onboard you as a design partner</p>
               </div>
               {/* Step 4 */}
               <div className="glass-premium p-6 rounded-xl border border-white/5 border-accent/20 bg-accent/5 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,242,255,0.5)]">4</div>
                  <h4 className="text-white font-semibold text-sm mb-2 mt-2">Active Rebuild</h4>
                  <p className="text-xs text-white/50 leading-relaxed">We rebuild your financial model together</p>
               </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground px-10 h-14 text-sm font-bold rounded-xl shadow-[0_15px_40px_rgba(0,242,255,0.2)] hover:shadow-[0_20px_50px_rgba(0,242,255,0.3)] hover:scale-[1.02] transition-all group w-full sm:w-auto"
                onClick={openCalendly}
              >
                Apply to Become a Founding Design Partner
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-white/80 font-bold mb-1">
                We’ll rebuild your financial model with you.
              </p>
              <p className="text-xs text-white/40 font-medium">
                Limited to 10 teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
