"use client"

import { Shield, Lock, Eye, CheckCircle, Database, FileText, Globe, Server } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TrustCenterPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-foreground">
      <Header />
      
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20 animate-slow-fade">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/20 text-accent text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Institutional-Grade Security Standards
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">Trust & Security Center</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At FinaPilot, your financial data is protected by the most advanced security infrastructure. We maintain 100% transparency about our data practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* Encryption Section */}
            <div className="glass p-8 rounded-3xl border border-white/5 group hover:border-accent/40 transition-all">
              <Lock className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Encryption & Protection</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Data at Rest:</strong> All data is encrypted using industry-standard AES-256 with key rotation.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Data in Transit:</strong> 256-bit TLS 1.3 encryption for all communications between the client and our engine.</span>
                </li>
              </ul>
            </div>

            {/* Compliance Section */}
            <div className="glass p-8 rounded-3xl border border-white/5 group hover:border-accent/40 transition-all">
              <Eye className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Compliance Standards</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>SOC 2 Type II:</strong> Our platform is engineered for SOC 2 compliance from day one (Audit readiness FY26).</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>GDPR Compliant:</strong> Full control over your data residency and right to be forgotten.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Deep Security Architecture */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Institutional Architecture</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl glass border border-white/5">
                <Database className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-bold mb-2">Isolated Instances</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Every organization operates within its own logically isolated data environment. No data cross-contamination.</p>
              </div>
              <div className="p-6 rounded-2xl glass border border-white/5">
                <Server className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-bold mb-2">Immutable Audit Logs</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Every record change, model adjustment, and report generation is logged with a tamper-proof audit trail.</p>
              </div>
              <div className="p-6 rounded-2xl glass border border-white/5">
                <Globe className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-bold mb-2">Zero Trust Access</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Identity-first access controls ensure that only authenticated personnel can touch sensitive financial models.</p>
              </div>
            </div>
          </div>

          {/* Security Document Call-to-Action */}
          <div className="glass p-12 rounded-3xl border border-accent/20 text-center">
            <h2 className="text-3xl font-bold mb-6">Need the full Security Whitepaper?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our comprehensive 40-page technical security doc covers our threat modeling, PEN test results, and infrastructure details for institutional due diligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all">
                  <FileText className="w-5 h-5" />
                  Request Full Whitepaper
               </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
