"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight,
  Database, ShieldCheck, Cpu, GitBranch, BarChart3,
  Users, Activity, Brain, FileSpreadsheet, TrendingUp, 
  Zap, LineChart, Calculator, Bot, CheckCircle2,
  Link2, Shield, Lock, Target, AlertTriangle, 
  Clock, HelpCircle, Eye, Layers, LayoutDashboard,
  PieChart, Network, Send, Fingerprint
} from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"

// ═══ HOVER DIALOG DATA ═══
const navDialogs: Record<string, { title: string, desc: string, items: { icon: any, label: string, desc: string }[] }> = {
  Problem: {
    title: "Problems Finance Teams Face",
    desc: "Research-backed pain points driving CFOs to modernize.",
    items: [
      { icon: AlertTriangle, label: "94% of Spreadsheets Contain Errors", desc: "Deloitte: material defects distort forecasts" },
      { icon: Clock, label: "80% of Time Lost to Data Wrangling", desc: "Finance teams format instead of analyzing" },
      { icon: HelpCircle, label: "70% of CFOs Still Rely on Excel", desc: "Despite known risks — no trusted alternative exists" },
      { icon: Database, label: "Data Scattered Across 5+ Tools", desc: "ERPs, CRMs, spreadsheets — no single source of truth" },
    ]
  },
  Platform: {
    title: "Platform Capabilities",
    desc: "Everything your finance team needs in one system.",
    items: [
      { icon: GitBranch, label: "Scenario Planning", desc: "Branch-based multi-track variant modeling" },
      { icon: Zap, label: "Real-time What-IF", desc: "Instant impact analysis on P&L variables" },
      { icon: TrendingUp, label: "Forecasting Engine", desc: "AI-driven predictive trajectory analysis" },
      { icon: Layers, label: "Semantic Ledger", desc: "Unified schema for disparate ERP sources" },
      { icon: ShieldCheck, label: "Audit-Grade Traceability", desc: "DAG-backed cell lineages (SOC 2 level)" },
      { icon: Cpu, label: "Model Architecture", desc: "Atomic structure for infinite scalability" },
      { icon: LayoutDashboard, label: "Investor Dashboards", desc: "Live, read-only board reporting portals" },
      { icon: Calculator, label: "Financial Modeling", desc: "Professional DCF, SaaS, and LBO modeling" },
      { icon: Activity, label: "Alerts Management", desc: "Autonomous variance & anomaly detection" },
      { icon: BarChart3, label: "Monte Carlo Runway", desc: "Probabilistic cash survival projections" },
      { icon: PieChart, label: "Budget vs Actual", desc: "Variance gap analysis with attribution" },
      { icon: Users, label: "Resource Allocations", desc: "Headcount & CAPEX optimization logic" },
    ]
  },
  Agents: {
    title: "12 Autonomous AI Agents",
    desc: "Specialized intelligence. Zero loss of control.",
    items: [
      { icon: Shield, label: "Risk & Compliance Agent", desc: "Stress-tests macro scenarios" },
      { icon: LineChart, label: "Variance Analysis Agent", desc: "Explains plan vs. actuals" },
      { icon: Calculator, label: "Financial Modeling Agent", desc: "Builds baseline models" },
      { icon: Bot, label: "Reporting Agent", desc: "Auto-drafts board narratives" },
      { icon: Activity, label: "Market Monitoring Agent", desc: "Watches macro indicators" },
      { icon: Send, label: "Resource Allocation Agent", desc: "Optimizes headcount planning" },
      { icon: Database, label: "Data Cleaning Agent", desc: "Normalizes messy ERP/CSV data" },
      { icon: GitBranch, label: "Scenario Planning Agent", desc: "Runs Monte Carlo simulations" },
      { icon: BarChart3, label: "Cash Flow Agent", desc: "Simulates daily runway dynamics" },
      { icon: Zap, label: "Circular Logic Agent", desc: "Resolves complex debt loops" },
      { icon: Fingerprint, label: "Audit & Provenance Agent", desc: "Logs every cell update" },
      { icon: Brain, label: "Anomaly Detection Agent", desc: "Spots forecast deviations" },
    ]
  },
  Integrations: {
    title: "Connect Your Stack",
    desc: "Works with your existing tools.",
    items: [
      { icon: FileSpreadsheet, label: "Excel & CSV", desc: "Upload any spreadsheet — Day 1 ready" },
      { icon: Database, label: "QuickBooks / Xero / Zoho", desc: "Direct accounting sync" },
      { icon: Link2, label: "Stripe / Razorpay", desc: "Revenue data pipeline" },
      { icon: Network, label: "SAP / Oracle / Salesforce", desc: "Enterprise connectors (Design Partners)" },
    ]
  },
  Trust: {
    title: "Built for Trust",
    desc: "Your data is encrypted, auditable, and under your control.",
    items: [
      { icon: ShieldCheck, label: "SOC 2 Architecture Ready", desc: "Enterprise-grade security controls (Audit in progress)" },
      { icon: Lock, label: "AES-256 Encryption", desc: "Data encrypted at rest and in transit" },
      { icon: Shield, label: "GDPR Ready", desc: "European compliance architecture" },
      { icon: CheckCircle2, label: "Human Approval Gates", desc: "No AI output without your sign-off" },
    ]
  },
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDialog, setActiveDialog] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { openCalendly } = useCalendly()
  
  // Mobile accordion state
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDialog(item)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDialog(null), 200)
  }

  const FaviconLogo = ({ className }: { className?: string }) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="fpLogoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#2563EB"}}/>
          <stop offset="100%" style={{stopColor: "#0EA5E9"}}/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#fpLogoGrad1)"/>
      <rect x="7" y="8" width="2.5" height="15" rx="1" fill="white" opacity="0.9"/>
      <rect x="7" y="8" width="6" height="2.5" rx="1" fill="white" opacity="0.9"/>
      <rect x="7" y="14.5" width="5" height="2.5" rx="1" fill="white" opacity="0.9"/>
      <rect x="16" y="8" width="2.5" height="15" rx="1" fill="white" opacity="0.9"/>
      <path d="M 16 8 L 21 8 Q 24 8 24 12 Q 24 16 21 16 L 16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )

  const navItems = ['Problem', 'Platform', 'Agents', 'Integrations', 'Trust']

  const getHref = (item: string) => {
    if (item === 'Trust') return '/trust'
    if (item === 'Platform') return '/ai-finance-tools'
    return `#${item.toLowerCase()}`
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = '/'} role="link" aria-label="FinaPilot Home">
             <FaviconLogo />
             <div className="flex flex-col">
                 <span className="text-xl font-bold text-white tracking-tight leading-none group-hover:text-accent transition-colors">FinaPilot</span>
                 <span className="text-[9px] font-semibold text-white/70 tracking-wider uppercase mt-0.5">Financial Intelligence</span>
             </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href={getHref(item)} 
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${activeDialog === item ? 'text-white bg-white/5' : 'text-white/80 hover:text-white'}`}
                >
                  {item}
                </a>

                {/* Hover Dialog */}
                {activeDialog === item && navDialogs[item] && (
                  <div 
                    className={`absolute top-full pt-3 z-50 ${['Platform', 'Agents'].includes(item) ? 'left-1/2 -translate-x-1/2 w-[720px]' : 'left-1/2 -translate-x-1/2 w-[360px]'}`}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-[#0d1220] border border-white/10 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] p-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
                      
                      <h4 className="text-sm font-bold text-white mb-1">{navDialogs[item].title}</h4>
                      <p className="text-[11px] text-white/70 mb-4 leading-relaxed">{navDialogs[item].desc}</p>
                      
                      <div className={`${['Platform'].includes(item) ? 'grid grid-cols-2 gap-x-6 gap-y-3' : item === 'Agents' ? 'grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3' : 'space-y-3'}`}>
                        {navDialogs[item].items.map((subItem, i) => (
                          <div key={i} className="flex items-start gap-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item p-1 -m-1">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-accent/30 transition-colors">
                              <subItem.icon className="w-4 h-4 text-white/50 group-hover/item:text-accent transition-colors" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-white leading-tight">{subItem.label}</p>
                              <p className="text-[10px] text-white/70 mt-0.5 leading-snug">{subItem.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <a 
              href="/blog"
              className="px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg text-white/50 hover:text-white transition-all ml-1"
            >
              Blog
            </a>

            <div className="w-px h-5 bg-white/10 mx-3" />

            <Button 
              onClick={openCalendly}
              className="bg-accent text-accent-foreground px-5 py-2 h-9 rounded-lg text-xs font-bold hover:bg-accent/90 transition-all shadow-[0_0_15px_rgba(0,242,255,0.15)] hover:shadow-[0_0_25px_rgba(0,242,255,0.25)]"
            >
              Apply to Become a Founding Partner
            </Button>
          </nav>

          <button 
            className="md:hidden p-2 text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Accordion */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/5 overflow-y-auto max-h-[85vh]">
          <div className="px-4 pt-4 pb-8 space-y-1">
            {navItems.map((item) => (
              <div key={item}>
                <div 
                  className="flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer hover:bg-white/5"
                  onClick={() => setMobileExpanded(mobileExpanded === item ? null : item)}
                >
                  <span className="text-sm font-semibold text-white/80">{item}</span>
                  <div className="text-white/40">
                    {mobileExpanded === item ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </div>
                </div>
                
                {/* Mobile Sub-menu */}
                {mobileExpanded === item && navDialogs[item] && (
                  <div className="pl-6 pr-4 py-3 mb-2 space-y-4 border-l border-white/10 ml-6">
                    {navDialogs[item].items.map((subItem, i) => (
                      <div key={i} className="flex items-start gap-3">
                         <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                            <subItem.icon className="w-3 h-3 text-accent" />
                         </div>
                          <div>
                            <p className="text-xs font-semibold text-white leading-tight mb-0.5">{subItem.label}</p>
                            <p className="text-[10px] text-white/70 leading-snug">{subItem.desc}</p>
                          </div>
                      </div>
                    ))}
                    <div className="pt-2">
                       <a href={getHref(item)} className="text-[10px] uppercase tracking-wider font-bold text-accent" onClick={() => setMobileMenuOpen(false)}>Go to {item} →</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 px-4 pb-4">
               <Button onClick={openCalendly} className="w-full bg-accent text-accent-foreground h-12 rounded-xl font-bold text-sm">
                 Apply for Design Partner Program
               </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
