"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Zap, TrendingUp, Brain, Lock, RefreshCw, BarChart3, Target, Activity, CheckCircle2, ArrowRight } from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const metrics = [
  { value: "<4ms", label: "Global Recalc", icon: Zap },
  { value: "12", label: "AI Agents", icon: Brain },
  { value: "10K+", label: "Scenario Paths", icon: TrendingUp },
  { value: "Audit", label: "GDPR Ready", icon: Shield },
]

export function HeroSection() {
  const { openCalendly } = useCalendly()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#050810] flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] opacity-40 animate-slow-fade" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] opacity-40 animate-slow-fade" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Institutional Confidence Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-premium border border-white/10 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-accent mb-8 shadow-2xl animate-pulse-glow bg-black/40">
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Institutional Standard Security —</span> Audit-Ready & GDPR Architecture
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 tracking-tighter leading-tight uppercase font-heading select-none">
            The Agentic <span className="text-gradient-accent">Finance OS</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
             Autonomous intelligence for human-direct oversight. FinaPilot orchestrates <span className="text-white">12 specialized AI agents</span> to forecast, audit, and protect your capital—combining <span className="text-accent underline underline-offset-8 decoration-accent/30 decoration-2">&lt;4ms</span> recalculation speed with absolute provenance and human control.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20 px-6">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground px-10 h-16 text-sm font-black rounded-2xl shadow-[0_20px_40px_rgba(0,242,255,0.2)] hover:shadow-[0_25px_50px_rgba(0,242,255,0.3)] hover:scale-[1.02] transition-all group w-full sm:w-auto uppercase tracking-widest"
              onClick={openCalendly}
            >
              Apply for Pilot Forge
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <div className="flex flex-col items-start gap-1 p-4 rounded-xl glass-premium border border-white/5 bg-white/3 min-w-[240px] w-full sm:w-auto group">
               <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">Co-Design Synergy</span>
               </div>
               <span className="text-xs text-white/50 font-medium group-hover:text-white/80 transition-colors">Join as a Founding Pilot Partner</span>
            </div>
          </div>
        </div>

        {/* ═══ MOCK DASHBOARD (CSS/SVG based to avoid 404s) ═══ */}
        <div className={`mt-4 relative max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}>
          <div className="glass-premium p-1.5 sm:p-2.5 rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden aspect-video bg-[#0B0F19] group">
            {/* Minimalist Dashboard Mockup */}
            <div className="absolute inset-0 p-4 sm:p-8 flex gap-4 opacity-40 group-hover:opacity-60 transition-opacity">
               {/* Sidebar mock */}
               <div className="w-16 sm:w-20 lg:w-48 h-full bg-white/5 rounded-2xl border border-white/5 hidden sm:flex flex-col p-4 gap-4">
                  <div className="w-full h-8 bg-white/10 rounded-lg animate-pulse" />
                  <div className="space-y-3 mt-8">
                     {[1,2,3,4,5].map(i => <div key={i} className="w-full h-3 bg-white/5 rounded-full" />)}
                  </div>
               </div>
               {/* Main content mock */}
               <div className="flex-1 h-full flex flex-col gap-4">
                  <div className="w-full h-1/3 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl border border-accent/20 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 animate-pulse opacity-10 bg-[linear-gradient(90deg,transparent_0%,rgba(0,242,255,0.2)_50%,transparent_100%)] bg-[length:200%_100%]" />
                     <RefreshCw className="w-10 h-10 text-accent/30 animate-spin-slow" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 flex-1">
                     <div className="col-span-2 bg-white/5 rounded-3xl border border-white/5 p-6 relative overflow-hidden">
                        <div className="absolute top-4 left-6 text-[10px] text-white/20 font-black uppercase">Monte Carlo Topology</div>
                        <div className="w-full h-full flex items-end gap-1">
                           {[1,2,3,4,5,6,7,8,9,10].map(i => (
                             <div key={i} className="flex-1 bg-accent/20 rounded-t-lg transition-all" style={{ height: `${Math.sin(i)*30 + 50}%` }} />
                           ))}
                        </div>
                     </div>
                     <div className="bg-white/5 rounded-3xl border border-white/5 p-6 flex flex-col justify-center gap-4">
                        <div className="w-full h-2 bg-accent/40 rounded-full animate-pulse" />
                        <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                        <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Absolute Focus Icons Wrapper */}
            <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/20 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700">
               <div className="flex flex-col items-center animate-fade-in-scale">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 glass-premium rounded-[2rem] border border-accent/30 shadow-[0_0_50px_rgba(0,242,255,0.2)] flex items-center justify-center bg-black/40 mb-8 relative">
                     <div className="absolute inset-[-4px] border border-accent/10 rounded-[2.2rem] animate-ping opacity-20" />
                     <CpuIcon className="w-10 h-10 sm:w-14 sm:h-14 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white italic tracking-tighter uppercase font-heading group-hover:scale-110 transition-transform">Agentic Dashboard Operational</h3>
                  <p className="text-[10px] sm:text-[11px] text-accent font-black uppercase tracking-[0.4em] mt-3">Verified Institutional Access Only</p>
               </div>
            </div>

            {/* In-Mock Status Pins */}
            <div className="absolute top-8 right-8 flex flex-col gap-3">
               <div className="px-3 py-1.5 glass-premium rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-wider">Sync Active</span>
               </div>
               <div className="px-3 py-1.5 glass-premium rounded-lg border border-accent/30 bg-accent/5 flex items-center gap-2">
                  <Lock className="w-3 h-3 text-accent" />
                  <span className="text-[9px] font-black text-white uppercase tracking-wider">Encrypted</span>
               </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Grid - Fully Responsive */}
        <div className="mt-20 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto w-full">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`glass-premium p-6 sm:p-8 rounded-[2rem] border border-white/5 transition-all duration-700 hover:border-accent/30 hover:shadow-[0_0_40px_-5px_rgba(0,242,255,0.1)] group flex flex-col items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${0.6 + i * 0.15}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                 <metric.icon className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">{metric.value}</p>
              <p className="text-[9px] sm:text-[10px] uppercase font-black tracking-[0.2em] text-white/50 mt-2 text-center group-hover:text-white/80 transition-colors">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CpuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}
