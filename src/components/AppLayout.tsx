import { LeadProvider } from "./LeadContext";
import Header from "./Header";
import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import Services from "./Services";
import StormDamage from "./StormDamage";
import WhyUs from "./WhyUs";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import ServiceArea from "./ServiceArea";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";
import LeadModal from "./LeadModal";
import ExitIntent from "./ExitIntent";

export default function AppLayout() {
  return (
    <LeadProvider>
      <div className="min-h-screen bg-[#0A0A0A] text-white antialiased pb-16 lg:pb-0">
        <Header />
        <main>
          <Hero />
          <TrustStrip />
          <Services />
          <StormDamage />
          <WhyUs />
          <Gallery />
          <Reviews />
          <ServiceArea />
          <FinalCTA />
        </main>
        <Footer />
        <StickyMobileCTA />
        <LeadModal />
        <ExitIntent />
      </div>
    </LeadProvider>
  );
}
