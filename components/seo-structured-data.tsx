/**
 * SEO Structured Data (JSON-LD) for FinaPilot
 * 
 * Implements 6 schema types for maximum search engine visibility:
 * 1. Organization — Brand entity graph
 * 2. SoftwareApplication — Product rich result
 * 3. WebSite — Sitelinks search box eligibility
 * 4. FAQPage — FAQ rich snippets in SERP
 * 5. BreadcrumbList — Breadcrumb trail in SERP
 * 6. Product — Software product with offers
 * 
 * AEO (Answer Engine Optimization): FAQ schema feeds directly
 * into Google SGE, Bing Copilot, and AI Overviews.
 */

// ═══ ORGANIZATION SCHEMA ═══
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.finapilot.com/#organization",
    "name": "FinaPilot",
    "legalName": "FinaPilot Inc.",
    "alternateName": ["Fina Pilot", "FinaPilot AI", "FinaPilot FP&A"],
    "url": "https://www.finapilot.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.finapilot.com/icon.svg",
      "width": 512,
      "height": 512
    },
    "description": "FinaPilot is an agentic AI-powered FP&A operating system that replaces brittle spreadsheets with structured, auditable financial models. Powered by 12 autonomous AI agents under full human control, FinaPilot delivers scenario planning, Monte Carlo simulations, semantic ledger unification, and audit-grade traceability for SaaS CFOs and finance teams.",
    "foundingDate": "2026",
    "founder": [
      {
        "@type": "Hem Patel",
        "name": "FinaPilot Founding Team",
        "jobTitle": "Founding Engineers & Financial Experts"
      }
    ],
    "sameAs": [
      "https://twitter.com/FinaPilot",
      "https://www.linkedin.com/company/finapilot",
      "https://github.com/finapilot",
      "https://app.finapilot.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "hello@finapilot.com",
      "availableLanguage": ["English"]
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 37.7749,
        "longitude": -122.4194
      },
      "geoRadius": "global"
    },
    "knowsAbout": [
      "Financial Planning and Analysis",
      "FP&A Automation",
      "AI Financial Modeling",
      "Monte Carlo Simulation",
      "Scenario Planning",
      "Agentic AI",
      "SaaS Metrics",
      "CFO Tools",
      "Audit Trail Software",
      "Semantic Ledger",
      "DAG Financial Modeling",
      "Budget vs Actual Analysis",
      "Investor Dashboard",
      "Deterministic Multi-Agent Orchestration",
      "Zero-hallucination finance tools",
      "Agentic Finance Operating System",
      "DCF Modeling",
      "LBO Modeling"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ═══ SOFTWARE APPLICATION SCHEMA ═══
export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://www.finapilot.com/#software",
    "name": "FinaPilot",
    "alternateName": "FinaPilot AI FP&A OS",
    "description": "Agentic AI-powered Financial Planning & Analysis operating system. Replace brittle spreadsheets with structured, auditable financial models powered by 12 autonomous AI agents — scenario planning, Monte Carlo simulations, semantic ledger, and audit-grade traceability under full human control.",
    "url": "https://www.finapilot.com",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Financial Planning & Analysis Software",
    "operatingSystem": "Web-based (Cloud SaaS)",
    "offers": {
      "@type": "Offer",
      "name": "Design Partner Program",
      "description": "Exclusive founding partner engagement — full financial model rebuild, 12 AI agents configured for your workflows, weekly founder access, and priority roadmap influence.",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/LimitedAvailability",
      "url": "https://www.finapilot.com/"
    },
    "featureList": [
      "Branch-based multi-track scenario planning",
      "Real-time what-if analysis on P&L variables",
      "AI-driven predictive forecasting engine",
      "Semantic ledger for disparate ERP unification",
      "DAG-backed audit-grade cell lineage traceability (SOC 2 level)",
      "Atomic model architecture for infinite scalability",
      "Live read-only investor dashboards and board reporting",
      "Professional DCF, SaaS, and LBO financial modeling",
      "Autonomous variance and anomaly detection alerts",
      "Monte Carlo probabilistic cash runway projections",
      "Budget vs actual variance gap analysis with attribution",
      "Headcount and CAPEX resource allocation optimization",
      "12 autonomous AI agents under human-in-the-loop governance",
      "AES-256 encryption at rest, TLS 1.3 in transit",
      "Isolated tenant architecture with zero data cross-contamination",
      "Excel and CSV upload with mapped data import",
      "QuickBooks, Xero, Stripe, SAP, Oracle integrations"
    ],
    "screenshot": "https://www.finapilot.com/icon.svg",
    "softwareVersion": "2026.1",
    "datePublished": "2025-01-01",
    "creator": {
      "@type": "Organization",
      "@id": "https://www.finapilot.com/#organization"
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": "https://app.finapilot.com/login"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ═══ WEBSITE SCHEMA (Sitelinks Search Box) ═══
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.finapilot.com/#website",
    "name": "FinaPilot — Agentic AI FP&A OS",
    "alternateName": "FinaPilot AI CFO Platform",
    "url": "https://www.finapilot.com",
    "description": "Agentic AI-powered Financial Planning & Analysis platform for SaaS CFOs. Scenario planning, Monte Carlo simulations, semantic ledger, and 12 autonomous AI agents under full human control.",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.finapilot.com/#organization"
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.finapilot.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ═══ FAQ PAGE SCHEMA (AEO — feeds into Google SGE / AI Overviews) ═══
export function FAQPageSchema() {
  const faqData = [
    {
      question: "Does FinaPilot use AI hallucinations for financial calculations?",
      answer: "No. FinaPilot's core financial engine uses deterministic math — not probabilistic LLM predictions. AI agents are used for orchestration and analysis, but every calculation is executed on a rigid, code-based ledger. Every number is traceable back to its origin through our Provenance Drawer."
    },
    {
      question: "How does FinaPilot protect sensitive financial data?",
      answer: "FinaPilot implements AES-256 encryption at rest and TLS 1.3 in transit. We use isolated tenant architecture and explicitly do not train global AI models on your private financial data. Our infrastructure is architected for SOC 2 Type II compliance."
    },
    {
      question: "Which ERPs and data sources does FinaPilot support?",
      answer: "We provide native API connectors for major ERPs including NetSuite, Sage Intacct, QuickBooks Online, Xero, and SAP. We also offer an intelligent CSV/Excel Import Wizard that normalizes trial labels into unified objects automatically."
    },
    {
      question: "How is FinaPilot different from Anaplan or Adaptive Planning?",
      answer: "Legacy tools require months of custom scripting and expensive consultants. FinaPilot is an active orchestration engine that deploys in days, using 12 autonomous AI agents to rebuild your logic into a structured, real-time environment that recalculates in under 4ms."
    },
    {
      question: "What is the ROI of implementing AI in our FP&A workflow?",
      answer: "By automating Trial Balance normalization, multi-entity consolidations, and variance attribution, our partners report reclaiming 50+ analyst hours per month, allowing teams to focus on strategic capital allocation instead of manual data entry."
    },
    {
      question: "How does the system handle reconciliation between accrual and cash sources?",
      answer: "FinaPilot normalizes ingestion cycles from disparate sources. It reconciles accrual-based accounting from your ERP against usage-based billing logs (e.g., AWS/Stripe) at the GL level to identify variances before month-end close."
    },
    {
      question: "Can we automate the separation of 'Volume' vs 'Price' variances in BvA?",
      answer: "Absolutely. FinaPilot’s Budget vs Actual module ingests production volume metrics alongside financial data, automatically isolating price, mix, and volume variances for precise attribution."
    },
    {
      question: "How do we handle re-forecasting when business pivot speed is high?",
      answer: "We use a rolling forecast architecture that decouples the 'baseline' from formal budget snapshots. This allows for continuous model updates without triggering full-scale re-consolidation."
    },
    {
      question: "How is FinaPilot different from other financial AI tools like Finpilot?",
      answer: "FinaPilot is a specialized Agentic FP&A Operating System focused on deterministic corporate finance modeling (CFO workflows). While other tools like Finpilot focus on investment research and allocator workflows, FinaPilot rebuilds your internal financial models—from GL integration to board reporting—ensuring 100% mathematical accuracy without LLM hallucinations. FinaPilot is for the finance team inside the company, not for outside investors."
    },
    {
      question: "How can we trust AI-drafted board narratives?",
      answer: "We use RAG (Retrieval-Augmented Generation) frameworks that constrain the AI to query only validated, reconciled datasets. The AI drafts the narrative, but highlights every metric with a click-through link to the underlying math. This is a core part of the FinaPilot trust architecture."
    },
    {
      "question": "Is FinaPilot an investment tool or an FP&A platform?",
      "answer": "FinaPilot is a specialized FP&A Operating System designed for corporate SaaS finance teams. Unlike generic AI research tools or previous namesake projects from 2018, the current FinaPilot (launched in 2025) focuses internally on your GL, ERP, and budget data to run deterministic scenario modeling under human-in-the-loop governance."
    },
    {
      "question": "Why does FinaPilot appear on Product Hunt from years ago?",
      "answer": "The domain finapilot.com was previously associated with a different, now-defunct project launched in 2018. The current FinaPilot platform, established in 2025, is an entirely new Agentic AI FP&A Operating System. We are in the process of reclaiming our brand identity across high-authority platforms to ensure our partners and users have the most accurate information about our 12-agent AI architecture."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.finapilot.com/#faqpage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ═══ BREADCRUMB SCHEMA ═══
export function BreadcrumbSchema({ page }: { page: 'home' | 'trust' | 'features' | 'agents' }) {
  const breadcrumbs: Record<string, { name: string; url: string }[]> = {
    home: [
      { name: "Home", url: "https://www.finapilot.com/" }
    ],
    trust: [
      { name: "Home", url: "https://www.finapilot.com/" },
      { name: "Trust & Security Center", url: "https://www.finapilot.com/trust" }
    ],
    features: [
      { name: "Home", url: "https://www.finapilot.com/" },
      { name: "Platform Features", url: "https://www.finapilot.com/features" }
    ],
    agents: [
      { name: "Home", url: "https://www.finapilot.com/" },
      { name: "AI Agents", url: "https://www.finapilot.com/features" }
    ]
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs[page].map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ═══ COMBINED: All schemas for homepage ═══
export function HomePageStructuredData() {
  return (
    <>
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <WebSiteSchema />
      <FAQPageSchema />
      <BreadcrumbSchema page="home" />
    </>
  );
}

// ═══ COMBINED: Trust page schemas ═══
export function TrustPageStructuredData() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema page="trust" />
    </>
  );
}
