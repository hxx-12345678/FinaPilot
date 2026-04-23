"use client"

import { ShieldCheck, ArrowUpRight, Lock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const FaviconLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
      <defs>
        <linearGradient id="fpLogoGrad1_footer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#2563EB"}}/>
          <stop offset="100%" style={{stopColor: "#0EA5E9"}}/>
        </linearGradient>
        <linearGradient id="fpLogoGrad2_footer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#3B82F6"}}/>
          <stop offset="100%" style={{stopColor: "#06B6D4"}}/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#fpLogoGrad1_footer)"/>
      <rect x="7" y="8" width="2.5" height="15" rx="1" fill="white" opacity="0.9"/>
      <rect x="7" y="8" width="6" height="2.5" rx="1" fill="white" opacity="0.9"/>
      <rect x="7" y="14.5" width="5" height="2.5" rx="1" fill="white" opacity="0.9"/>
      <rect x="16" y="8" width="2.5" height="15" rx="1" fill="white" opacity="0.9"/>
      <path d="M 16 8 L 21 8 Q 24 8 24 12 Q 24 16 21 16 L 16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="10" cy="5" r="1.5" fill="url(#fpLogoGrad2_footer)" opacity="0.8"/>
      <circle cx="24" cy="5" r="1.5" fill="url(#fpLogoGrad2_footer)" opacity="0.8"/>
      <circle cx="28" cy="12" r="1.5" fill="url(#fpLogoGrad2_footer)" opacity="0.8"/>
      <circle cx="28" cy="22" r="1.5" fill="url(#fpLogoGrad2_footer)" opacity="0.8"/>
      <path d="M 10 5 Q 16 3 24 5" stroke="url(#fpLogoGrad2_footer)" strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M 24 5 L 28 12" stroke="url(#fpLogoGrad2_footer)" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M 12 23 Q 18 24 28 22" stroke="url(#fpLogoGrad2_footer)" strokeWidth="1" fill="none" opacity="0.5"/>
      <rect x="4" y="26" width="1.5" height="4" rx="0.75" fill="url(#fpLogoGrad2_footer)" opacity="0.7"/>
      <rect x="6.5" y="24" width="1.5" height="6" rx="0.75" fill="url(#fpLogoGrad2_footer)" opacity="0.7"/>
      <rect x="9" y="22" width="1.5" height="8" rx="0.75" fill="url(#fpLogoGrad2_footer)" opacity="0.7"/>
    </svg>
  )

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#080B14] relative overflow-hidden" role="contentinfo" aria-label="FinaPilot footer — navigation, contact, and legal links">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-12">
          {/* Left: Brand */}
          <div className="flex flex-col gap-6 max-w-sm">
            <div 
              className="flex items-center gap-4 group cursor-pointer" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.scrollTo({top: 0, behavior: 'smooth'});
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Scroll to top"
            >
               <FaviconLogo />
               <div className="flex flex-col">
                  <span className="text-2xl font-black text-white tracking-tighter leading-none group-hover:text-accent transition-colors">FINAPILOT</span>
                  <span className="text-[10px] font-bold text-accent tracking-[0.25em] opacity-90 uppercase mt-0.5">Financial Intelligence</span>
               </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              Structured financial models powered by 12 AI agents under full human control.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">SOC 2 Encrypted Pipeline</span>
            </div>
          </div>

          {/* Center: Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
            <div>
              <p className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-6">Product</p>
              <ul className="space-y-4">
                <li><a href="/faq" className="text-xs text-white/70 hover:text-accent transition-colors font-bold uppercase tracking-widest">FAQ</a></li>
                <li><a href="/ai-finance-tools" className="text-xs text-white/70 hover:text-accent transition-colors font-bold uppercase tracking-widest">AI Comparison</a></li>
                <li><a href="/#integrations" className="text-xs text-white/70 hover:text-accent transition-colors font-bold uppercase tracking-widest">Integrations</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-6">Engagement</p>
              <ul className="space-y-4">
                <li><a href="/blog" className="text-xs text-white/40 hover:text-accent transition-colors font-black uppercase tracking-widest">Engineering Hub</a></li>
                <li><a href="/trust" className="text-xs text-white/40 hover:text-accent transition-colors font-black uppercase tracking-widest flex items-center gap-2">Trust Center <ArrowUpRight className="w-3 h-3" /></a></li>
                <li><a href="/#program" className="text-xs text-white/40 hover:text-accent transition-colors font-black uppercase tracking-widest">Partner Program</a></li>
              </ul>
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-6">Platform</p>
              <ul className="space-y-4">
                <li><a href="/#roles" className="text-xs text-white/40 hover:text-accent transition-colors font-black uppercase tracking-widest">For CFOs</a></li>
                <li><a href="/#solution" className="text-xs text-white/40 hover:text-accent transition-colors font-black tracking-widest text-accent flex items-center gap-2">Platform Features</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="/" className="text-[11px] text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest cursor-pointer">© {currentYear} FinaPilot</a>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-[11px] text-white/80 hover:text-white transition-colors font-black tracking-tighter">PRIVACY</a>
              <a href="/terms" className="text-[11px] text-white/80 hover:text-white transition-colors font-black tracking-tighter">TERMS</a>
              <a href="mailto:founder@finapilot.com" className="text-[11px] text-white/80 hover:text-accent transition-colors font-black tracking-tighter">FOUNDER</a>
              <a href="mailto:support@finapilot.com" className="text-[11px] text-white/80 hover:text-accent transition-colors font-black tracking-tighter">SUPPORT</a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/3 px-4 py-2 rounded-xl border border-white/5 opacity-80 hover:opacity-100 transition-all duration-700">
            <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">Built for Finance Teams</span>
            <Lock className="w-3.5 h-3.5 text-white/60" />
          </div>
        </div>
      </div>
    </footer>
  )
}
