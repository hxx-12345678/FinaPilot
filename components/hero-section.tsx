"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Shield, Zap, TrendingUp, Users, FileSpreadsheet, Brain, XCircle } from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import SplashCursor from "@/components/splash-cursor"

const proofPoints = [
  { text: "Replace complex Excel models with structured financial logic", icon: FileSpreadsheet },
  { text: "Run scenario planning & Monte Carlo in seconds", icon: TrendingUp },
  { text: "Full audit trail — every number is traceable", icon: Shield },
  { text: "Powered by structured financial logic and human-controlled AI", icon: Brain },
]

export function HeroSection() {
  const { openCalendly } = useCalendly()
  const { ref, isVisible } = useScrollReveal()
  const [headlineIndex, setHeadlineIndex] = useState(0)

  const headlines = [
    <>Rebuild Your Financial Model in Days — <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Not Weeks</span></>,
    <>Financial Models You Can <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Actually Trust</span></>
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} data-hero-section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* ═══ PREMIUM ANIMATED BACKGROUND ═══ */}
      <div className="absolute inset-0 bg-[#050810]" />
      
      {/* ═══ SPLASH CURSOR (REACT BITS) ═══ */}
      <SplashCursor 
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1024}
        SPLAT_RADIUS={0.2}
        COLOR_UPDATE_SPEED={10}
        BACK_COLOR={{ r: 0.02, g: 0.03, b: 0.06 }} 
      />
      
      {/* Static Background Ambient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-20 animate-float" style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, transparent 70%)', animationDuration: '12s' }} />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-15 animate-float" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', animationDuration: '15s', animationDelay: '3s' }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B0F19] to-transparent z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Simple Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold text-white/70 mb-8">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </div>
            Now accepting Design Partners — 10 spots available
          </div>

          {/* HEADLINE */}
          <div className="min-h-[140px] sm:min-h-[180px] mb-6 relative flex items-center justify-center">
            {headlines.map((headline, i) => (
              <h1 
                key={i}
                className={`absolute w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] transition-all duration-1000 ${
                  headlineIndex === i 
                    ? 'opacity-100 translate-y-0 blur-none' 
                    : 'opacity-0 translate-y-4 blur-sm pointer-events-none'
                }`}
              >
                {headline}
              </h1>
            ))}
          </div>

          {/* SUBHEADLINE */}
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-4">
            Stop fighting brittle spreadsheets. FinaPilot helps finance teams rebuild their models with <span className="text-white font-semibold">SOC 2 architecture ready security</span>, run forecasts instantly, and generate board-ready reports — with full audit traceability.
          </p>
          <p className="text-sm sm:text-base text-accent font-semibold mb-10">
            We work with you to migrate your model in days, not months.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground px-10 h-14 text-sm font-bold rounded-xl shadow-[0_15px_40px_rgba(0,242,255,0.2)] hover:shadow-[0_20px_50px_rgba(0,242,255,0.3)] hover:scale-[1.02] transition-all group w-full sm:w-auto"
              onClick={openCalendly}
            >
              Apply to Become a Founding Design Partner
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex flex-col text-left">
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
