import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog & Technical Updates | FinaPilot FP&A',
  description: 'Deep dives on Monte Carlo modeling, semantic ledgers, and building zero-hallucination multi-agent systems for finance.',
  openGraph: {
    title: 'FinaPilot Technical Blog',
    description: 'Updates from the FinaPilot engineering and finance teams.',
    url: 'https://www.finapilot.com/blog',
  }
}

export default function BlogPage() {
  const posts = [
    {
      title: "Eliminating Hallucinations: How We Built Provenance Search",
      date: "Oct 24, 2026",
      summary: "LLM hallucinations in finance are a fatal flaw. Read our engineering deep-dive into how the 'Provenance Drawer' enforces strict mathematical traceability across our semantic ledger.",
      slug: "#",
      tag: "Engineering"
    },
    {
      title: "Why Monte Carlo Outperforms 'Best Case / Worst Case' Modeling",
      date: "Oct 18, 2026",
      summary: "Static forecasting provides a false sense of security. Learn how our native Monte Carlo engine calculates probabilistic runway distributions to protect SaaS businesses.",
      slug: "#",
      tag: "Finance Strategy"
    },
    {
      title: "Scaling Across Borders: Multi-Entity Consolidations",
      date: "Oct 12, 2026",
      summary: "A teardown of how manual entity consolidations create compliance risks, and how our automated engine instantly processes intercompany eliminations.",
      slug: "#",
      tag: "Product Update"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-6 py-20 w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">The Technical Blog</h1>
        <p className="text-2xl text-gray-400 mb-16 max-w-3xl">Architectural tear-downs, release notes, and strategic FP&A insights from the core engineering team.</p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <Link key={i} href={post.slug} className="block group">
              <div className="bg-[#121826] border border-white/5 p-10 rounded-3xl h-full flex flex-col justify-between group-hover:border-[#F26E24]/50 group-hover:bg-[#161d2d] transition-all transform group-hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#F26E24] text-sm font-bold tracking-widest uppercase bg-[#F26E24]/10 px-3 py-1 rounded-md">{post.tag}</span>
                    <span className="text-gray-500 text-sm font-medium">{post.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-5 group-hover:text-white text-gray-100 leading-tight">{post.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{post.summary}</p>
                </div>
                <div className="mt-10 text-lg font-bold text-gray-500 group-hover:text-[#F26E24] transition-colors flex items-center">
                  Read Full Article <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-24 p-12 rounded-3xl border border-[#F26E24]/30 bg-gradient-to-br from-[#121826] via-[#161d2d] to-[#1a110c] flex flex-col sm:flex-row items-center justify-between shadow-2xl">
          <div className="sm:pr-8 text-center sm:text-left">
            <h4 className="text-3xl font-bold mb-4">Start Modeling in FinaPilot</h4>
            <p className="text-gray-400 text-xl">Deploy our advanced architecture against your historical general ledger data.</p>
          </div>
          <a href="https://app.finapilot.com" className="mt-8 sm:mt-0 px-10 py-5 bg-[#F26E24] text-white rounded-full font-bold text-xl hover:bg-[#ff8a47] transition-all whitespace-nowrap shadow-lg">
            Deploy Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
