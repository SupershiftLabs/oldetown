import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <Link to="/"><Logo /></Link>
          <Link to="/" className="text-sm text-white/50 hover:text-white">← Back to Home</Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using the services of Olde Town Roofing ("Company," "we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services or website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>Olde Town Roofing provides roofing installation, repair, replacement, storm damage restoration, gutters, and related services in Springfield and Southwest Missouri. All services are subject to a written contract signed by both parties prior to commencement of work.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Estimates & Inspections</h2>
            <p>Free roof inspections and estimates are provided without obligation. Estimates are valid for 30 days from the date of issue. Final pricing may vary based on discovered conditions not visible during initial inspection. We will notify you of any changes before proceeding.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Insurance Claims</h2>
            <p>We assist homeowners with insurance claims as a courtesy. We do not guarantee insurance approval or specific claim outcomes. The homeowner is responsible for understanding their policy terms. We do not waive deductibles or engage in any practice prohibited by Missouri law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Payments</h2>
            <p>Payment terms are outlined in your individual service contract. Typically, a deposit is required before material ordering and the balance is due upon project completion. We accept cash, check, and major credit cards. Unpaid balances may be subject to a finance charge of 1.5% per month.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Warranty</h2>
            <p>Olde Town Roofing provides a workmanship warranty on all installations as specified in your contract. Manufacturer warranties apply to materials as provided by the respective manufacturer. Warranties are void if work is performed on the roof by unauthorized third parties after our installation.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>Our liability is limited to the cost of the services provided. We are not responsible for pre-existing structural issues, hidden damage discovered during work, or damages caused by acts of nature after project completion. We carry full general liability and workers' compensation insurance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Website Use</h2>
            <p>This website is provided for informational purposes only. We make no warranties regarding accuracy or completeness of content. You may not use this site for any unlawful purpose or in any way that could harm us or third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Missouri. Any disputes shall be resolved in the courts of Greene County, Missouri.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>Questions about these Terms? Contact us at:</p>
            <div className="mt-3 space-y-1">
              <p>Olde Town Roofing</p>
              <p>2023 E Kearney Street Suite 102, Springfield, MO</p>
              <p><a href="mailto:seanv@oldetownroofing.com" className="text-[#D71920] hover:underline">seanv@oldetownroofing.com</a></p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Olde Town Roofing. All rights reserved. &nbsp;·&nbsp;
        <Link to="/privacy" className="hover:text-white/60">Privacy Policy</Link>
      </footer>
    </div>
  );
}
