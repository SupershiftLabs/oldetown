import { Phone } from "lucide-react";
import { IMAGES, PHONE, PHONE_TEL } from "@/lib/site";
import { useLead } from "./LeadContext";

export default function FinalCTA() {
  const { openModal } = useLead();
  return (
    <section className="relative py-16 sm:py-28 overflow-hidden">
      <img src={IMAGES.work4} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/85 to-[#0A0A0A]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight">
          Get a Free Roof Inspection — No Strings Attached
        </h2>
        <p className="mt-5 text-lg sm:text-xl text-white/60">
          A five-minute call could save you thousands. Local professionals, honest answers, zero pressure.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => openModal()}
            className="bg-[#D71920] hover:bg-[#b3141a] text-white font-semibold text-base px-8 py-4 rounded-full transition-transform hover:scale-[1.03] shadow-lg shadow-[#D71920]/30"
          >
            Get Free Inspection
          </button>
          <a
            href={PHONE_TEL}
            className="flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-full"
          >
            <Phone className="h-5 w-5" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
