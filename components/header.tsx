"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Lock, Terminal, Database, Hammer, Cpu, Layout, Info, ArrowRight,
  RefreshCw, CheckCircle2, AlertCircle, Sparkles, Trash2, ShieldCheck,
  ChevronRight, BarChart3, Fingerprint, GitBranch, Terminal as Term,
  Users
} from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openCalendly } = useCalendly()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const FaviconLogo = ({ className }: { className?: string }) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="fpLogoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#2563EB"}}/>
          <stop offset="100%" style={{stopColor: "#0EA5E9"}}/>
        </linearGradient>
        <linearGradient id="fpLogoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#3B82F6"}}/>
          <stop offset="100%" style={{stopColor: "#06B6D4"}}/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#fpLogoGrad1)"/>
      <rect x="7" y="8" width="2.5" height="15" rx="1" fill="white" opacity="0.9"/>
      <rect x="7" y="8" width="6" height="2.5" rx="1" fill="white" opacity="0.9"/>
      <rect x="7" y="14.5" width="5" height="2.5" rx="1" fill="white" opacity="0.9"/>
      <rect x="16" y="8" width="2.5" height="15" rx="1" fill="white" opacity="0.9"/>
      <path d="M 16 8 L 21 8 Q 24 8 24 12 Q 24 16 21 16 L 16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="10" cy="5" r="1.5" fill="url(#fpLogoGrad2)" opacity="0.8"/>
      <circle cx="24" cy="5" r="1.5" fill="url(#fpLogoGrad2)" opacity="0.8"/>
      <circle cx="28" cy="12" r="1.5" fill="url(#fpLogoGrad2)" opacity="0.8"/>
      <circle cx="28" cy="22" r="1.5" fill="url(#fpLogoGrad2)" opacity="0.8"/>
      <path d="M 10 5 Q 16 3 24 5" stroke="url(#fpLogoGrad2)" strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M 24 5 L 28 12" stroke="url(#fpLogoGrad2)" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M 12 23 Q 18 24 28 22" stroke="url(#fpLogoGrad2)" strokeWidth="1" fill="none" opacity="0.5"/>
      <rect x="4" y="26" width="1.5" height="4" rx="0.75" fill="url(#fpLogoGrad2)" opacity="0.7"/>
      <rect x="6.5" y="24" width="1.5" height="6" rx="0.75" fill="url(#fpLogoGrad2)" opacity="0.7"/>
      <rect x="9" y="22" width="1.5" height="8" rx="0.75" fill="url(#fpLogoGrad2)" opacity="0.7"/>
    </svg>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <div className="relative pointer-events-none scale-75 sm:scale-100 origin-left">
                <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <FaviconLogo />
             </div>
            <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter leading-none group-hover:text-accent transition-colors">FINAPILOT</span>
                <span className="text-[10px] font-bold text-accent tracking-[0.25em] opacity-90 uppercase mt-0.5">The Finance OS</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {['Problem', 'Solution', 'Agents', 'Roles', 'Trust'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-black uppercase tracking-widest text-white/50 hover:text-white transition-all transform hover:translate-y-[-1px] active:translate-y-0"
              >
                {item}
              </a>
            ))}
            
            <div className="w-px h-6 bg-white/10 mx-2" />

            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/3 border border-white/10 group hover:border-accent/40 transition-all shadow-inner">
               <Lock className="w-3.5 h-3.5 text-accent" />
               <span className="text-[10px] font-black text-white uppercase tracking-tighter">Architecture Verified</span>
            </div>

            <Button 
              onClick={openCalendly}
              className="bg-accent text-accent-foreground px-6 py-2 h-11 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:scale-[1.02]"
            >
              Book Institutional Demo
            </Button>
          </nav>

          <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/5 animate-fade-in">
          <div className="px-4 pt-4 pb-8 space-y-3">
            {['Problem', 'Solution', 'Agents', 'Roles', 'Trust'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-sm font-black uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 px-4">
               <Button onClick={openCalendly} className="w-full bg-accent text-accent-foreground h-14 rounded-xl font-bold uppercase tracking-widest text-xs">
                 Book Institutional Demo
               </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
