import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering & Strategy Hub | FinaPilot FP&A Insights',
  description: 'Deep architectural breakdowns and strategic guidance on autonomous finance, deterministic auditing, and Monte Carlo forecasting for SaaS CFOs.',
  openGraph: {
    title: 'FinaPilot Engineering & Strategy Hub',
    description: 'The building blocks of autonomous finance. Insights from the FinaPilot development labs.',
    url: 'https://www.finapilot.com/blog',
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
