import { Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/site";
import { useLead } from "./LeadContext";

export default function StickyMobileCTA() {
  const { openModal } = useLead();
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex gap-3">
      <a
        href={PHONE_TEL}
        className="flex-1 flex items-center justify-center gap-2 border border-white/20 text-white font-semibold py-3 rounded-full text-sm"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <button
        onClick={() => openModal()}
        className="flex-1 bg-[#D71920] text-white font-semibold py-3 rounded-full text-sm"
      >
        Free Quote
      </button>
    </div>
  );
}
