"use client"

import { Shield, Lock, Eye, CheckCircle, Database, FileText, Globe, Server, Info } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustPageStructuredData } from "@/components/seo-structured-data"

export default function TrustCenterClient() {
  return (
    <div className="bg-[#fafbfc] text-slate-800 min-h-screen font-sans">
      {/* ═══ JSON-LD Structured Data ═══ */}
      <TrustPageStructuredData />

      {/* Navbar hidden on Trust page due to color contradiction */}
      
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8" role="main">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb Navigation (On-Page SEO) */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item" className="hover:text-blue-600 transition-colors">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-slate-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-slate-800 font-medium">Trust & Security Center</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="text-center mb-20 animate-slow-fade">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Institutional-Grade Security Standards
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              FinaPilot Trust & Security Center
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              At FinaPilot, your financial data is protected by the most advanced security infrastructure. We maintain 100% transparency about our data practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* Encryption Section */}
            <article className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group" aria-label="Encryption and data protection details">
              <Lock className="w-10 h-10 text-blue-600 mb-6" aria-hidden="true" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Encryption & Protection</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" aria-hidden="true" />
                  <span><strong>Data at Rest:</strong> All data is encrypted using industry-standard AES-256 with key rotation.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" aria-hidden="true" />
                  <span><strong>Data in Transit:</strong> 256-bit TLS 1.3 encryption for all communications between the client and our engine.</span>
                </li>
              </ul>
            </article>

            {/* Compliance Section */}
            <article className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group relative" aria-label="Compliance standards and certifications">
              <div className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-800 rounded-md">Certification in Progress</div>
              <Eye className="w-10 h-10 text-blue-600 mb-6" aria-hidden="true" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Compliance Standards</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" aria-hidden="true" />
                  <span><strong>SOC 2 Type II:</strong> Our platform architecture is fully engineered and ready for SOC 2 Type II compliance (formal audit in progress).</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" aria-hidden="true" />
                  <span><strong>GDPR Compliant:</strong> Full control over your data residency and right to be forgotten ready out-of-the-box.</span>
                </li>
              </ul>
            </article>
          </div>

          {/* Deep Security Architecture */}
          <section className="mb-24" aria-label="Security architecture details">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Institutional Architecture</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <article className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Database className="w-6 h-6 text-blue-600 mb-4" aria-hidden="true" />
                <h3 className="font-bold mb-2 text-slate-900">Isolated Instances</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Every organization operates within its own logically isolated data environment. No data cross-contamination.</p>
              </article>
              <article className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Server className="w-6 h-6 text-blue-600 mb-4" aria-hidden="true" />
                <h3 className="font-bold mb-2 text-slate-900">Immutable Audit Logs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Every record change, model adjustment, and report generation is logged with a tamper-proof audit trail.</p>
              </article>
              <article className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Globe className="w-6 h-6 text-blue-600 mb-4" aria-hidden="true" />
                <h3 className="font-bold mb-2 text-slate-900">Zero Trust Access</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Identity-first access controls ensure that only authenticated personnel can touch sensitive financial models.</p>
              </article>
            </div>
          </section>

          {/* Security Document Call-to-Action */}
          <section className="bg-white p-12 rounded-3xl border border-blue-200 text-center shadow-lg relative overflow-hidden" aria-label="Request security briefing">
            <div className="absolute top-0 right-0 p-8 text-blue-100 opacity-20 pointer-events-none">
                <Shield className="w-64 h-64" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900 relative z-10">Need the full Security Architecture Briefing?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto relative z-10">
              While our official formalized whitepaper is being generated alongside our certifications, we offer direct architectural briefings for institutional due diligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
               <button 
                onClick={() => alert("While our formal whitepaper is being finalized alongside our certification, please email support@finapilot.com for a direct architectural briefing and PEN test summary.")}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 hover:shadow-md hover:scale-[1.02] transition-all"
                aria-label="Request a security architecture briefing from FinaPilot"
               >
                  <FileText className="w-5 h-5" aria-hidden="true" />
                  Request Architectural Briefing
               </button>
            </div>
          </section>
        </div>
      </main>

      <div className="bg-[#080B14]">
         {/* Using the default footer, but we wrap it in a dark background so it blends correctly */}
         <Footer />
      </div>
    </div>
  )
}
