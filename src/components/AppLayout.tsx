import { useEffect } from "react";
import { LeadProvider } from "./LeadContext";
import { useLead } from "./LeadContext";
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
import Partners from "./Partners";

function ContactAutoOpen() {
  const { openModal } = useLead();
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("contact")) {
      openModal();
    }
  }, []);
  return null;
}

export default function AppLayout() {
  return (
    <LeadProvider>
      <div 
        className="min-h-screen bg-[#0A0A0A] text-white antialiased pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,.04) 60px, rgba(255,255,255,.04) 120px),
            repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,.03) 40px, rgba(255,255,255,.03) 80px),
            repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,.02) 40px, rgba(255,255,255,.02) 80px)
          `,
        }}
      >
        <ContactAutoOpen />
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
          <Partners />
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
