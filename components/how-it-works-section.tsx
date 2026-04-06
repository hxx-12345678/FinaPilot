"use client"

import { Database, Link2, LineChart, FileText, ArrowDown, FileSpreadsheet, Hammer } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  {
    icon: Database,
    title: "1. Connect Your Data",
    desc: "Upload your Excel models, CSVs, or connect accounting tools like QuickBooks and Xero. Encrypted from the first byte.",
    highlight: "Day 1 Ready"
  },
  {
    icon: Hammer,
    title: "2. We Build It Together",
    desc: "Our team maps your exact financial logic into FinaPilot. We don't force you into a template — we adapt to your workflow.",
    highlight: "Co-Built"
  },
  {
    icon: LineChart,
    title: "3. Run Scenarios Instantly",
    desc: "AI suggests forecasts across thousands of paths. Your FP&A team reviews, adjusts assumptions, and approves the final output.",
    highlight: "You're in Control"
  },
  {
    icon: FileText,
    title: "4. Report With Confidence",
    desc: "Generate board-ready reports with full audit trails. Every number is traceable — no more \"where did this come from?\" questions.",
    highlight: "Audit Ready"
  }
]

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="how-it-works" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent mb-6">
            <Link2 className="w-3.5 h-3.5" />
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            From Excel chaos to <span className="text-gradient-accent">clarity in 4 steps.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Moving off spreadsheets is a partnership, not a software install. We work alongside your team to get it right.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-5 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${100 + i * 120}ms` }}
              >
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-6 text-white/10 left-1/2 -translate-x-1/2">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
                
                <div className="absolute -top-3 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[9px] font-semibold text-accent uppercase tracking-wider z-10 hidden lg:block">
                   {step.highlight}
                </div>

                <div className="w-16 h-16 glass-premium rounded-2xl flex items-center justify-center mb-5 relative z-0 border border-white/5 shadow-lg">
                  <step.icon className="w-7 h-7 text-white/60" />
                </div>
                
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>

                <div className="lg:hidden mt-3 inline-flex px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[9px] font-semibold text-accent uppercase tracking-wider">
                   {step.highlight}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto glass-premium rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-accent/10 overflow-hidden relative">
            <div className="text-center sm:text-left">
               <h4 className="text-base font-bold text-white mb-1">Zero implementation risk for your team.</h4>
               <p className="text-sm text-white/50 leading-relaxed">During the pilot, our team does the heavy lifting. Your FP&A team provides the knowledge — we handle the tech.</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
               <FileSpreadsheet className="w-4 h-4 text-accent" />
               <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Excel → FinaPilot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
