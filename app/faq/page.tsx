"use client"

import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Zap, 
  Lock, 
  MessageCircleQuestion, 
  CheckCircle2,
  ArrowRight,
  Database,
  LineChart,
  Brain,
  History,
  FileText
} from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"
import { useEffect, useState } from 'react'

const faqCategories = [
  { id: 'trust', name: 'Trust & Security', icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 'architecture', name: 'Architecture & Logic', icon: <Cpu className="w-5 h-5" /> },
  { id: 'fpa', name: 'Strategic FP&A', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'reporting', name: 'Board Reporting', icon: <FileText className="w-5 h-5" /> },
  { id: 'partnership', name: 'Partnership & ROI', icon: <Zap className="w-5 h-5" /> }
]

const faqs = [
  // --- TRUST & SECURITY ---
  {
    cat: 'trust',
    q: "Does FinaPilot use AI hallucinations for financial calculations?",
    a: "No. FinaPilot’s core financial engine uses deterministic math — not probabilistic LLM predictions. AI agents orchestrate data and analyze trends, but every calculation is executed on a rigid, code-based ledger. Every number is traceable via our Provenance Drawer. [Learn why deterministic math is the baseline for AI finance tools](/ai-finance-tools)."
  },
  {
    cat: 'trust',
    q: "How does FinaPilot protect sensitive financial data?",
    a: "We implement AES-256 encryption at rest and TLS 1.3 in transit. We use isolated tenant architecture and explicitly do not train global AI models on your private financial data. Our infrastructure is architected for SOC 2 Type II compliance."
  },
  {
    cat: 'trust',
    q: "Can we audit or explain how the AI arrived at a specific conclusion?",
    a: "Yes. Using the Provenance Drawer, you can view the exact cell-lineage (DAG) and source audit log for any output. The AI doesn't just give you a number; it provides the mathematical proof and source document link."
  },
  {
    cat: 'trust',
    q: "Is FinaPilot GDPR and SOC 2 compliant?",
    a: "The architecture is SOC 2 Type II ready and built to GDPR standards. We maintain immutable audit logs for every user action, mutation, and AI suggestion, satisfying institutional compliance requirements."
  },

  // --- ARCHITECTURE & LOGIC ---
  {
    cat: 'architecture',
    q: "Which ERPs and data sources does FinaPilot support?",
    a: "We provide native API connectors for NetSuite, Sage Intacct, QuickBooks Online, Xero, SAP, and Salesforce. We also offer an intelligent CSV/Excel Import Wizard that normalizes trial balances using ML mapping."
  },
  {
    cat: 'architecture',
    q: "How does the 'Semantic Ledger' work?",
    a: "Unlike Excel, which sees numbers as flat cells, our Semantic Ledger understands financial objects. It knows that a 'Salary' row is linked to headcount, benefits, and tax logic, allowing for fluid re-modeling without breaking formulas."
  },
  {
    cat: 'architecture',
    q: "Can FinaPilot migrate complex Excel models with circular references?",
    a: "Yes. Our engineering team assists with the migration part of our Design Partner program. We resolve complex circular logic (like interest expense on revolving debt) and rebuild them into our robust, multi-agent architecture."
  },
  {
    cat: 'architecture',
    q: "How does the system handle reconciliation between accrual and cash sources?",
    a: "FinaPilot normalizes ingestion cycles from disparate sources. It reconciles accrual-based accounting from your ERP against usage-based billing logs (e.g., AWS/Stripe) at the GL level to identify variances before month-end close."
  },

  // --- STRATEGIC FP&A ---
  {
    cat: 'fpa',
    q: "How does your Monte Carlo engine improve on standard forecasting?",
    a: "Static 'Base/Worst' cases often miss tail-end risks. Our native Monte Carlo engine runs 10,000+ probabilistic simulations across your entire model — factoring in churn cycles and market volatility — to give you an accurate P95 confidence interval."
  },
  {
    cat: 'fpa',
    q: "Can we automate the separation of 'Volume' vs 'Price' variances in BvA?",
    a: "Absolutely. FinaPilot’s Budget vs Actual module ingests production volume metrics alongside financial data, automatically isolating price, mix, and volume variances for precise attribution."
  },
  {
    cat: 'fpa',
    q: "How do we handle re-forecasting when business pivot speed is high?",
    a: "We use a rolling forecast architecture that decouples the 'baseline' from formal budget snapshots. This allows for continuous model updates without triggering full-scale re-consolidation, ensuring you are always looking at the latest truth."
  },
  {
    cat: 'fpa',
    q: "Does the system support complex multi-entity consolidations and intercompany eliminations?",
    a: "Yes. FinaPilot features a robust Multi-Entity Consolidation engine that maps disparate charts of accounts and automates intercompany eliminations in real-time."
  },

  // --- BOARD REPORTING ---
  {
    cat: 'reporting',
    q: "How can we trust AI-drafted board narratives?",
    a: "We use RAG (Retrieval-Augmented Generation) frameworks that constrain the AI to query only validated, reconciled datasets. The AI drafts the narrative, but highlights every metric with a click-through link to the underlying math."
  },
  {
    cat: 'reporting',
    q: "Can we automate sensitivity analysis for 'Rule of 40' or 'Net Retention'?",
    a: "FinaPilot builds automated dashboards that integrate CRM data with finance data to perform on-the-fly 'What-If' scenarios, allowing you to demonstrate the impact of retention shifts on your path to profitability instantly."
  },
  {
    cat: 'reporting',
    q: "Does FinaPilot provide live investor dashboards?",
    a: "Yes. You can surface sanitized, read-only metric subsets to your board via secure web portals that are linked live to your models, eliminating static PDF exports."
  },

  // --- PARTNERSHIP & ROI ---
  {
    cat: 'partnership',
    q: "What is the ROI of implementing FinaPilot?",
    a: "Our partners report reclaiming 50+ analyst hours per month by automating Trial Balance mapping and variance attribution. This allows the team to shift from 'data collectors' to 'strategic capital allocators'."
  },
  {
    cat: 'partnership',
    q: "What is included in the Design Partner Program?",
    a: "You receive white-glove migration of your current financial model, direct Slack/WhatsApp access to the founders, priority roadmap influence, and lock in discounted lifetime pricing. This is limited to 10 teams."
  },
  {
    cat: 'partnership',
    q: "How long does a typical implementation take?",
    a: "Typical implementation is days, not months. We focus on getting your historical ledger synced and your primary 3-statement model live within the first week."
  }
]

export default function FAQPage() {
  const { openCalendly } = useCalendly()
  const [activeCategory, setActiveCategory] = useState('trust')

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      })
      setActiveCategory(id)
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans selection:bg-[#F26E24]/30">
      <Header />
      
      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://www.finapilot.com/faq/#faqpage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <main className="flex-grow max-w-[1400px] mx-auto px-6 py-20 w-full overflow-hidden">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-widest text-xs mb-8">
            <MessageCircleQuestion className="w-4 h-4" />
            Strategic Knowledge Base
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent italic leading-[1.1]">
            Institutional <br /><span className="not-italic">Forensics & Logic.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Highly technical answers for CFOs and Finance teams evaluating the architecture of autonomous financial planning.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* SIDEBAR: Topic Overview (Fixed Links) */}
          <div className="lg:col-span-4 translate-y-0">
            <div className="sticky top-32 p-8 bg-[#121826] border border-white/5 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />
              
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Database className="w-5 h-5 text-gray-500" />
                Topic Overview
              </h2>
              <ul className="space-y-2">
                {faqCategories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => scrollToCategory(cat.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${activeCategory === cat.id ? 'bg-[#F26E24]/10 text-[#F26E24] border border-[#F26E24]/20' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                    >
                      <div className="flex items-center gap-3">
                        {cat.icon}
                        <span className="text-sm font-bold tracking-tight">{cat.name}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${activeCategory === cat.id ? 'translate-x-1' : 'opacity-0'}`} />
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-8 bg-gradient-to-br from-blue-600/20 to-blue-400/5 border border-blue-500/20 rounded-2xl relative group">
                <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-3">Architect Review</p>
                <p className="text-sm text-white/70 mb-8 leading-relaxed font-bold">Need a custom implementation or compliance breakdown?</p>
                <button 
                  onClick={openCalendly}
                  className="w-full py-4 bg-blue-500 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                >
                  Book Technical Call
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ CONTENT: Categorized & Expanded */}
          <div className="lg:col-span-8 space-y-20">
            {faqCategories.map(category => (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10 pb-4 border-b border-white/5">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-[0.1em] text-white">
                    {category.name}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {faqs.filter(f => f.cat === category.id).map((faq, i) => (
                    <div key={i} className="group bg-[#121826]/40 border border-white/5 rounded-3xl p-8 hover:border-[#F26E24]/30 hover:bg-[#121826] transition-all relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-2 h-full bg-[#F26E24]/0 group-hover:bg-[#F26E24]/20 transition-all" />
                      <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#F26E24] transition-colors leading-tight">
                        {faq.q}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg font-medium">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* FINAL CALL: Visual Overhaul */}
        <div className="mt-40 p-16 lg:p-24 bg-[#0F172A] rounded-[4rem] text-center shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,110,36,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 relative z-10 tracking-tight leading-none group">
            Ready for <span className="text-[#F26E24]">Deterministic</span> FP&A?
          </h2>
          <p className="text-white/60 text-xl md:text-3xl mb-16 max-w-4xl mx-auto relative z-10 leading-relaxed font-medium">
            Join the 10 exclusive Design Partners rebuilding their finance engines with 12 autonomous AI agents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
            <a href="https://app.finapilot.com" className="w-full sm:w-auto px-16 py-6 bg-[#F26E24] text-white rounded-full font-black text-2xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(242,110,36,0.3)] flex items-center justify-center gap-3">
              Launch App
              <ArrowRight className="w-6 h-6" />
            </a>
            <button 
              onClick={openCalendly}
              className="w-full sm:w-auto px-16 py-6 bg-white/5 text-white border border-white/10 rounded-full font-black text-2xl hover:bg-white/10 transition-all backdrop-blur-xl"
            >
              Book Architect Demo
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
