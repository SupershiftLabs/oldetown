import { LeadProvider } from "./LeadContext";
import Header from "./Header";
import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import Services from "./Services";
import StormDamage from "./StormDamage";
import About from "./About";
import WhyUs from "./WhyUs";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import ServiceArea from "./ServiceArea";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";
import LeadModal from "./LeadModal";
import FloatingButton from "./FloatingButton";
import CookieBanner from "./CookieBanner";

export default function AppLayout() {
  return (
    <LeadProvider>
      <div 
        className="min-h-screen bg-[#0A0A0A] text-white antialiased pb-16 lg:pb-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,.04) 60px, rgba(255,255,255,.04) 120px),
            repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,.03) 40px, rgba(255,255,255,.03) 80px),
            repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,.02) 40px, rgba(255,255,255,.02) 80px)
          `,
          backgroundAttachment: 'fixed',
        }}
      >
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
          <About />
          <FinalCTA />
        </main>
        <Footer />
        <StickyMobileCTA />
        <LeadModal />
        <FloatingButton />
        <CookieBanner />
      </div>
    </LeadProvider>
  );
}
