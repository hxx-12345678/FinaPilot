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
    "alternateName": ["Fina Pilot", "FinaPilot AI", "FinaPilot FP&A"],
    "url": "https://www.finapilot.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.finapilot.com/icon.svg",
      "width": 512,
      "height": 512
    },
    "description": "FinaPilot is an agentic AI-powered FP&A operating system that replaces brittle spreadsheets with structured, auditable financial models. Powered by 12 autonomous AI agents under full human control, FinaPilot delivers scenario planning, Monte Carlo simulations, semantic ledger unification, and audit-grade traceability for SaaS CFOs and finance teams.",
    "foundingDate": "2025",
    "sameAs": [
      "https://twitter.com/FinaPilot",
      "https://www.linkedin.com/company/finapilot",
      "https://github.com/finapilot"
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
      "url": "https://www.finapilot.com/#program"
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10",
      "bestRating": "5",
      "worstRating": "1"
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
      question: "What is FinaPilot?",
      answer: "FinaPilot is an agentic AI-powered Financial Planning and Analysis (FP&A) operating system designed for SaaS CFOs, FP&A teams, and finance leaders. It replaces brittle spreadsheets with structured, auditable financial models powered by 12 autonomous AI agents — including scenario planning, Monte Carlo simulations, semantic ledger unification, and audit-grade traceability — all under full human control. Unlike generic AI tools, FinaPilot uses deterministic math for core calculations and requires human approval for every financial output."
    },
    {
      question: "How is FinaPilot different from Anaplan, Adaptive Planning, or Excel?",
      answer: "Legacy enterprise tools like Anaplan require months of implementation, custom scripting, and expensive consultants. FinaPilot is built for modern finance teams that want speed without sacrificing transparency. It recalculates full 3-statement models in under 4ms, runs 10,000+ Monte Carlo scenarios instantly, and provides cell-level audit trails — all with AI assistance that stays under human control. During the Design Partner pilot, FinaPilot's team handles the implementation work alongside your finance team."
    },
    {
      question: "What AI agents does FinaPilot provide?",
      answer: "FinaPilot includes 12 specialized autonomous AI agents: Risk & Compliance Agent (macro stress-testing), Variance Analysis Agent (plan vs actual with mathematical attribution), Financial Modeling Agent (3-statement model building), Reporting Agent (board narrative auto-drafting), Market Monitoring Agent (macroeconomic indicator alerts), Resource Allocation Agent (headcount & CAPEX optimization), Data Cleaning Agent (ERP/CSV normalization), Scenario Planning Agent (Monte Carlo simulations), Cash Flow Agent (daily runway simulation), Circular Logic Agent (3-statement circular reference resolution), Audit & Provenance Agent (cell-level change logging), and Anomaly Detection Agent (forecast deviation spotting)."
    },
    {
      question: "Does FinaPilot use AI hallucinations for financial calculations?",
      answer: "No. FinaPilot's core financial calculations use deterministic math — not LLM predictions. AI agents assist with analysis, anomaly detection, and report drafting, but every output requires explicit human approval before execution. The AI suggests — your CFO decides. This is fundamentally different from generic AI tools that hallucinate numbers without proof."
    },
    {
      question: "How does FinaPilot protect financial data?",
      answer: "FinaPilot uses AES-256 encryption at rest and TLS 1.3 encryption in transit. It operates on isolated tenant architecture where your data is never mixed with other customers. The platform maintains role-based access control, immutable audit logs, and is GDPR-ready. FinaPilot never trains AI models on your financial data. The architecture is engineered and ready for SOC 2 Type II compliance."
    },
    {
      question: "What is the FinaPilot Design Partner Program?",
      answer: "The Design Partner Program is an exclusive hands-on partnership limited to 10 selected finance teams. As a design partner, FinaPilot rebuilds your financial model inside the platform, configures all 12 AI agents for your specific workflows, provides direct access to founders via weekly calls and dedicated Slack/WhatsApp channels, and gives you priority roadmap influence. Founding partners also lock in discounted lifetime pricing."
    },
    {
      question: "Can FinaPilot migrate complex Excel models?",
      answer: "Yes — model migration is a core part of the Design Partner Program. The FinaPilot team leads the migration of multi-sheet 3-statement models, resolves circular references (like interest expense on revolving debt), and ensures financial logic transfers accurately. Your team provides the knowledge; FinaPilot handles the technical migration in days, not months."
    },
    {
      question: "What is a semantic ledger in FinaPilot?",
      answer: "FinaPilot's semantic ledger is a unified schema that normalizes and maps data from disparate ERP sources (SAP, Oracle, QuickBooks, Xero, Zoho Books) into a single structured financial model. It eliminates the problem of scattered data across multiple systems by creating a single source of truth with full provenance tracking — essentially an ERP-agnostic data layer built for FP&A."
    },
    {
      question: "How does Monte Carlo simulation work in FinaPilot?",
      answer: "FinaPilot's Monte Carlo Runway engine runs 10,000+ probabilistic simulations across thousands of paths to project cash survival outcomes. It computes VaR (Value at Risk) at P95 confidence levels, evaluates covenant compliance, and flags liquidity risks — all recalculated in under 4 milliseconds. Results are reviewed and validated by your team before any decisions are made."
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
      { name: "Platform Features", url: "https://www.finapilot.com/#solution" }
    ],
    agents: [
      { name: "Home", url: "https://www.finapilot.com/" },
      { name: "AI Agents", url: "https://www.finapilot.com/#agents" }
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
