import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ & Technical Documentation | FinaPilot',
  description: 'Everything you need to know about AI-powered FP&A — from deterministic financial modeling and audit trails to ERP integrations and SOC 2 security.',
  openGraph: {
    title: 'FinaPilot FAQ - Trust, Security & AI Mechanics',
    description: 'Deep-dive answers into how FinaPilot replaces spreadsheets with structured, zero-hallucination AI intelligence.',
    url: 'https://www.finapilot.com/faq',
  }
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
