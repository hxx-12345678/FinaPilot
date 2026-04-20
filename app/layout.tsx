import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CalendlyProvider } from "@/components/calendly-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// ═══════════════════════════════════════════
// COMPREHENSIVE SEO METADATA — ALL 5 SEO TYPES
// ═══════════════════════════════════════════
// 
// 1. TECHNICAL SEO: canonical, alternates, verification, viewport
// 2. ON-PAGE SEO: title, description, keywords, Open Graph, Twitter
// 3. AEO / ANSWER ENGINE: structured data via components (JSON-LD)
// 4. SOCIAL SEO: Open Graph + Twitter Cards for link previews
// 5. INTERNATIONAL SEO: hreflang, locale, language alternates
// ═══════════════════════════════════════════

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B0F19' },
    { media: '(prefers-color-scheme: dark)', color: '#050810' },
  ],
}

export const metadata: Metadata = {
  // ─── Core Meta ───
  title: {
    default: "FinaPilot | Agentic AI FP&A OS — AI-Powered Financial Planning for SaaS CFOs",
    template: "%s | FinaPilot — Agentic AI FP&A Platform",
  },
  description:
    "FinaPilot is the agentic AI-powered FP&A operating system for SaaS CFOs. Replace brittle spreadsheets with structured, auditable financial models. 12 autonomous AI agents for scenario planning, Monte Carlo simulations, semantic ledger, investor dashboards, and audit-grade traceability — all under full human control. Join the Design Partner Program.",
  keywords: [
    // Brand keywords (own 100%)
    "FinaPilot",
    "FinaPilot FP&A",
    "FinaPilot AI CFO",
    "FinaPilot demo",
    "FinaPilot pricing",
    "FinaPilot AI",
    "FinaPilot financial planning",
    // Agentic AI (emerging, low competition)
    "agentic FP&A",
    "AI CFO agent",
    "multi-agent FP&A",
    "autonomous FP&A",
    "AI FP&A orchestration",
    "agentic AI financial modeling",
    // Technical edge (very low competition)
    "semantic ledger FP&A",
    "DAG financial modeling",
    "Monte Carlo FP&A tool",
    "provenance audit finance",
    "audit-grade traceability",
    // Pain point keywords (high volume)
    "AI FP&A",
    "AI financial modeling",
    "Excel FP&A replacement",
    "SaaS runway forecasting",
    "real-time what-if analysis",
    "investor deck automation",
    "budget vs actual AI",
    // Category keywords
    "AI financial planning software",
    "FP&A automation tool",
    "AI-powered financial planning",
    "financial scenario planning software",
    "Monte Carlo simulation finance",
    "AI finance platform",
    "CFO AI tools",
    "financial modeling AI",
    "SaaS financial modeling",
    // Comparison keywords
    "AI FP&A vs Excel",
    "FP&A variance analysis tool",
    "headcount optimization AI",
    "cash flow forecasting AI",
  ],

  // ─── Authorship & Generator ───
  authors: [{ name: "FinaPilot", url: "https://www.finapilot.com" }],
  creator: "FinaPilot",
  publisher: "FinaPilot",

  // ─── Canonical & Alternates (Technical SEO) ───
  metadataBase: new URL("https://www.finapilot.com"),
  alternates: {
    canonical: "https://www.finapilot.com",
    languages: {
      "en-US": "https://www.finapilot.com",
      "en-GB": "https://www.finapilot.com",
      "x-default": "https://www.finapilot.com",
    },
  },

  // ─── Open Graph (Social SEO) ───
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.finapilot.com",
    siteName: "FinaPilot",
    title: "FinaPilot | Agentic AI FP&A OS — Replace Spreadsheets with Auditable AI Finance",
    description:
      "12 autonomous AI agents for scenario planning, Monte Carlo simulations, semantic ledger, and audit-grade traceability. Built for SaaS CFOs who can't afford guesswork. Design Partner Program — limited to 10 teams.",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "FinaPilot — Agentic AI FP&A Operating System dashboard showing Monte Carlo simulation, scenario planning, and investor reporting",
        type: "image/svg+xml",
      },
    ],
  },

  // ─── Twitter Card (Social SEO) ───
  twitter: {
    card: "summary_large_image",
    site: "@FinaPilot",
    creator: "@FinaPilot",
    title: "FinaPilot | Agentic AI FP&A OS for SaaS CFOs",
    description:
      "Replace brittle spreadsheets with 12 autonomous AI agents. Scenario planning, Monte Carlo, semantic ledger, audit-grade traceability. Design Partner Program — 10 spots.",
    images: ["/icon.svg"],
  },

  // ─── Robots & Indexing (Technical SEO) ───
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Verification (for Google Search Console + Bing) ───
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
    other: { 
      "msvalidate.01": "msvalidate-placeholder",
      "brave-verification": "brave-verification-placeholder",
      "msapplication-TileColor": "#0B0F19",
      "msapplication-TileImage": "/icon.svg",
      "msapplication-config": "/browserconfig.xml"
    },
  },

  // ─── App-Level Meta ───
  applicationName: "FinaPilot",
  category: "Finance Software",
  classification: "Business / Financial Planning & Analysis",

  // ─── Icons ───
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon-light.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/icon-dark.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },

  // ─── Other ───
  other: {
    "apple-mobile-web-app-title": "FinaPilot",
    "msapplication-TileColor": "#0B0F19",
    "format-detection": "telephone=no",
    "slurp": "index, follow",
    "duckduckbot": "index, follow",
    "bingbot": "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* ═══ Preconnect for Performance (Technical SEO — Core Web Vitals) ═══ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />

        {/* ═══ Canonical fallback ═══ */}
        <link rel="canonical" href="https://www.finapilot.com" />

        <link rel="alternate" hrefLang="en-US" href="https://www.finapilot.com" />
        <link rel="alternate" hrefLang="en-GB" href="https://www.finapilot.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.finapilot.com" />
        
        {/* ═══ Browser Branding (Public Manifest) ═══ */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="mask-icon" href="/icon.svg" color="#0B0F19" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`font-sans antialiased`}>
        <CalendlyProvider>
          {children}
        </CalendlyProvider>
        <Analytics />
      </body>
    </html>
  )
}
