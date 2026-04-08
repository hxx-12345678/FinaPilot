import type { Metadata } from "next"
import TrustCenterClient from "./TrustClient"

// ═══ TRUST PAGE SEO METADATA ═══
export const metadata: Metadata = {
  title: "Trust & Security Center — SOC 2 Architecture, AES-256 Encryption, GDPR Compliance",
  description:
    "FinaPilot Trust Center: institutional-grade security for your financial data. AES-256 encryption at rest, TLS 1.3 in transit, isolated tenant architecture, immutable audit logs, zero trust access controls, and GDPR compliance. SOC 2 Type II certification in progress.",
  keywords: [
    "FinaPilot security",
    "FinaPilot trust center",
    "AI financial data security",
    "SOC 2 FP&A software",
    "AES-256 financial data encryption",
    "GDPR compliant FP&A",
    "secure financial modeling platform",
    "audit trail finance software",
    "isolated tenant architecture",
    "enterprise financial security",
  ],
  alternates: {
    canonical: "https://www.finapilot.com/trust",
  },
  openGraph: {
    title: "FinaPilot Trust & Security Center — Institutional-Grade Data Protection",
    description:
      "AES-256 encryption, SOC 2 architecture, isolated tenant instances, and GDPR compliance. Your financial data is protected by the most advanced security infrastructure.",
    url: "https://www.finapilot.com/trust",
    type: "website",
  },
  twitter: {
    title: "FinaPilot Trust & Security — SOC 2 Architecture Ready",
    description: "Institutional-grade security for AI-powered financial planning. AES-256 encryption, isolated tenants, immutable audit logs.",
  },
}

export default function TrustCenterPage() {
  return <TrustCenterClient />
}
