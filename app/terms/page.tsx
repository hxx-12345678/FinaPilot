import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | FinaPilot",
  description: "FinaPilot's Terms of Service for website use, Design Partner Program applications, and Acceptable Use Policy.",
}

export default function TermsPage() {
  const lastUpdated = "April 20, 2026"

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans selection:bg-accent/30">
      <Header />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-20 w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Terms of Service</h1>
          <p className="text-white/60 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-accent hover:prose-a:text-accent/80">
          <p className="text-lg text-white/80 leading-relaxed">
            Welcome to FinaPilot. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our landing page (finapilot.com) and any applications submitted to the FinaPilot Design Partner Program. By accessing this site, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl mt-12 mb-6">1. Permitted Use</h2>
          <p className="text-white/80 leading-relaxed">
            You may use our website solely for the purpose of learning about FinaPilot, reading our engineering hub content, and applying for our services. You agree not to:
          </p>
          <ul className="text-white/80 leading-relaxed">
            <li>Scrape, crawl, or use automated means to extract data or intellectual property from the site.</li>
            <li>Submit fraudulent, false, or misleading information when applying to the Design Partner Program.</li>
            <li>Attempt to probe, test, or breach the security algorithms of our request forms.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-6">2. Design Partner Program Application</h2>
          <p className="text-white/80 leading-relaxed">
            Submitting a request or application to join the Design Partner Program does not guarantee acceptance. Due to the high-touch foundational build required, spots are strictly limited. If selected, your participation in the program will be governed by a separate, formal Master Subscription Agreement and Data Processing Addendum.
          </p>

          <h2 className="text-2xl mt-12 mb-6">3. Intellectual Property</h2>
          <p className="text-white/80 leading-relaxed">
            All content on this website, including but not limited to the term &ldquo;Agentic FP&amp;A Operating System,&rdquo; our whitepapers, visual assets, diagrams, and branding are the exclusive property of FinaPilot Inc. You may not reproduce our intellectual property without prior written consent.
          </p>

          <h2 className="text-2xl mt-12 mb-6">4. AI Capabilities Disclaimer</h2>
          <p className="text-white/80 leading-relaxed">
            The technical capabilities described on this marketing site reflect the intended operational capacity of the FinaPilot platform. While we employ rigorous deterministic math engines, any references to AI outputs are subject to the inherent probabilistic nature of LLMs processing edge-case inputs.
          </p>

          <h2 className="text-2xl mt-12 mb-6">5. Limitation of Liability</h2>
          <p className="text-white/80 leading-relaxed">
            To the maximum extent permitted by law, FinaPilot Inc. shall not be liable for any indirect, incidental, or consequential damages resulting from your use of this public marketing website.
          </p>

          <h2 className="text-2xl mt-12 mb-6">6. Contact</h2>
          <p className="text-white/80 leading-relaxed">
            For legal inquiries or to request a full copy of our Master Subscription Agreement intended for Enterprise deployment, please contact: <a href="mailto:legal@finapilot.com">legal@finapilot.com</a>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  )
}
