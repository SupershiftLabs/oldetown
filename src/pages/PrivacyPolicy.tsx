import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <Link to="/"><Logo /></Link>
          <Link to="/" className="text-sm text-white/50 hover:text-white">← Back to Home</Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>When you contact us or request a free inspection, we may collect:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Name, phone number, and email address</li>
              <li>Property address and details about your roofing needs</li>
              <li>Photos or documents you choose to share with us</li>
              <li>Basic usage data when you browse our website (IP address, browser type, pages visited)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Schedule and perform your free roof inspection</li>
              <li>Provide estimates, contracts, and project updates</li>
              <li>Assist with insurance claims on your behalf</li>
              <li>Respond to your inquiries and follow up on your project</li>
              <li>Improve our website and services</li>
              <li>Send occasional promotional offers (you may opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Information Sharing</h2>
            <p>We do not sell or rent your personal information. We may share it only with:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Subcontractors or suppliers necessary to complete your project</li>
              <li>Your insurance company, when you authorize us to assist with a claim</li>
              <li>Service providers who help us operate our business (e.g., scheduling software, email tools) under confidentiality agreements</li>
              <li>Law enforcement or legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies & Tracking</h2>
            <p>Our website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You can disable cookies in your browser settings, though some features of the site may not function properly as a result.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p>We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or disclosure. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>We retain your information for as long as necessary to fulfill the purposes described in this policy, meet legal obligations, or resolve disputes. Customer records are typically retained for seven years in accordance with Iowa business record requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:seanv@oldetownroofing.com" className="text-[#D71920] hover:underline">seanv@oldetownroofing.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised date. Continued use of our services after any changes constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>Questions about this Privacy Policy? Contact us at:</p>
            <div className="mt-3 space-y-1">
              <p>Olde Town Roofing</p>
              <p>Davenport, IA</p>
              <p><a href="mailto:seanv@oldetownroofing.com" className="text-[#D71920] hover:underline">seanv@oldetownroofing.com</a></p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Olde Town Roofing. All rights reserved. &nbsp;·&nbsp;
        <Link to="/terms" className="hover:text-white/60">Terms & Conditions</Link>
      </footer>
    </div>
  );
}
