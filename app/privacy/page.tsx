import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | FinaPilot",
  description: "FinaPilot's Privacy Policy outlining our commitment to securing your data, our zero-retention AI processing for the Design Partner Program, and GDPR/CCPA compliance.",
}

export default function PrivacyPage() {
  const lastUpdated = "April 20, 2026"

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans selection:bg-accent/30">
      <Header />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-20 w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Privacy Policy</h1>
          <p className="text-white/60 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-accent hover:prose-a:text-accent/80">
          <p className="text-lg text-white/80 leading-relaxed">
            At FinaPilot Inc. (&ldquo;FinaPilot,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we recognize that trust is the foundation of agentic finance. This Privacy Policy governs the collection, use, and protection of information when you interact with our marketing website (finapilot.com) and apply for our Design Partner Program.
          </p>

          <h2 className="text-2xl mt-12 mb-6">1. Information We Collect</h2>
          <p className="text-white/80 leading-relaxed">
            When you interact with our landing page, we collect limited information necessary to evaluate your eligibility for our platform and communicate product updates:
          </p>
          <ul className="text-white/80 leading-relaxed">
            <li><strong>Directly Provided Information:</strong> Name, work email address, company name, and any information provided when requesting an architectural briefing or applying for the Design Partner Program.</li>
            <li><strong>Automated Analytics:</strong> We collect anonymized telemetry data (e.g., browser type, session duration) to understand web traffic and improve our site&apos;s technical performance and visibility.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-6">2. Design Partner Program Data</h2>
          <p className="text-white/80 leading-relaxed">
            If you are accepted into the Design Partner Program, the migration of your Excel models and financial workflows is conducted under a strict, mutually executed Non-Disclosure Agreement (NDA) and Data Processing Agreement (DPA). The initial application form data collected on this site is used exclusively for evaluating program fit.
          </p>

          <h2 className="text-2xl mt-12 mb-6">3. Our Absolute AI Data Promise</h2>
          <p className="text-white/80 leading-relaxed">
            Whether you are on our landing page or inside our core application: <strong>Your data is never used to train public or multi-tenant AI models.</strong> Any data shared during the introductory phases or within the Design Partner Program is processed in ephemeral, isolated environments.
          </p>

          <h2 className="text-2xl mt-12 mb-6">4. Data Sharing and Security</h2>
          <p className="text-white/80 leading-relaxed">
            We do not sell your personal data. We utilize enterprise-grade sub-processors (e.g., AWS, Vercel) bound by strict SOC-2 compliant DPAs to host our site and manage our waiting list. All data in transit is encrypted using TLS 1.3.
          </p>

          <h2 className="text-2xl mt-12 mb-6">5. Your Privacy Rights</h2>
          <p className="text-white/80 leading-relaxed">
            Depending on your jurisdiction (e.g., under GDPR or CCPA/CPRA), you have the right to access, correct, or delete your personal data. You may also opt-out of marketing communications at any time.
          </p>

          <h2 className="text-2xl mt-12 mb-6">6. Contact Us</h2>
          <p className="text-white/80 leading-relaxed">
            For data deletion requests, or questions about our strict privacy practices, please contact our Data Protection Officer at: <a href="mailto:privacy@finapilot.com">privacy@finapilot.com</a>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  )
}
