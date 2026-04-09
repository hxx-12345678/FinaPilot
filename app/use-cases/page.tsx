import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI FP&A Use Cases | FinaPilot',
  description: 'Discover how SaaS CFOs use FinaPilot for Multi-Entity Consolidations, Headcount Planning, and real-time Budget vs Actual variance analysis.',
  openGraph: {
    title: 'FinaPilot Real-World Use Cases',
    description: 'Transform board reporting, budget planning, and scenario comparisons with AI.',
    url: 'https://www.finapilot.com/use-cases',
  }
}

export default function UseCasesPage() {
  const cases = [
    {
      title: "Real-Time Budget vs. Actual Analysis",
      desc: "Don't wait for month-end close. Connect FinaPilot to your ERP and experience live budget vs. actual monitoring. Our AI assistant instantly identifies variance drivers and drafts executive summaries for instant dissemination.",
      link: "https://app.finapilot.com",
      tag: "Variance Reporting"
    },
    {
      title: "Advanced Headcount Planning & Approvals",
      desc: "Manage massive, decentralized hiring plans without breaking spreadsheets. FinaPilot’s Headcount module dynamically applies localized tax rules, equity compensation, and routes all new requests through a unified Approval Management matrix.",
      link: "https://app.finapilot.com",
      tag: "Workforce Planning"
    },
    {
      title: "Seamless Multi-Entity Consolidations",
      desc: "For growth-stage SaaS acquiring new business units, FinaPilot replaces chaotic VLOOKUP consolidations. Map disparate charts of accounts via our AI Import Wizard, and output a single, friction-less consolidated statement that satisfies compliance.",
      link: "https://app.finapilot.com",
      tag: "Corporate Finance"
    },
    {
      title: "Automated Investor Dashboards",
      desc: "Export board-ready visual deliverables instantly. As you mutate scenarios using our Semantic Ledger and Real-Time Simulations, your linked board reports automatically consume the new truth, saving days of prep.",
      link: "https://app.finapilot.com",
      tag: "Board Communications"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-[#F26E24] bg-clip-text text-transparent">
            AI Finance Use Cases
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how strategic finance teams deploy our agentic modules—from Monte Carlo forensics to automated Board Reporting.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((c, i) => (
            <div key={i} className="flex flex-col bg-[#121826] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all group">
              <div className="p-10 flex-1 flex flex-col justify-center">
                <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#F26E24]/10 text-[#F26E24] text-sm font-bold tracking-wide uppercase">
                  {c.tag}
                </div>
                <h3 className="text-3xl font-bold mb-5">{c.title}</h3>
                <p className="text-gray-400 text-xl mb-8 leading-relaxed max-w-4xl">
                  {c.desc}
                </p>
                <div>
                  <a href={c.link} className="text-[#F26E24] hover:text-[#ff8a47] font-bold text-lg flex items-center transition-colors">
                    Build this workflow <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <Link href="/features" className="text-gray-500 hover:text-white transition-colors text-lg font-medium flex items-center">
            ← Explore the technical features powering these use cases
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
