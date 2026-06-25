import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wallet, Search } from "lucide-react";
import { IMAGES, PHONE, PHONE_TEL } from "@/lib/site";
import { useLead } from "./LeadContext";

const BADGES = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
{ icon: Wallet, label: "Financing Available" },
  { icon: Search, label: "Free Inspections" },
];

export default function Hero() {
  const { openModal } = useLead();
  return (
    <section id="top" className="relative min-h-svh flex flex-col sm:flex-row sm:items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.hero} alt="New premium roof in Davenport Iowa" className="w-full h-full object-cover object-[center_40%]" fetchPriority="high" decoding="sync" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-12 sm:pb-16 w-full flex flex-col flex-1 sm:block">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl flex flex-col flex-1 sm:block"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D71920]/40 bg-[#D71920]/10 px-4 py-1.5 text-xs font-medium text-[#ff6b6e] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#D71920] animate-pulse" />
              Davenport & the Quad Cities
            </div>

            <h1 className="text-[2rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              YOUR HOME DESERVES A ROOF THAT <span className="text-[#D71920]">LASTS</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl">
              Roofing, siding, gutters, and storm restoration done right — serving Davenport and the Quad Cities.
              Straight answers. Honest prices. No runaround.
            </p>
          </div>

          <div className="mt-auto pt-10 sm:mt-8 sm:pt-0 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => openModal()}
              className="bg-[#D71920] hover:bg-[#b3141a] text-white font-semibold text-base px-8 py-4 rounded-full transition-transform hover:scale-[1.03] shadow-lg shadow-[#D71920]/30"
            >
              Get Free Roof Inspection
            </button>
            <a
              href={PHONE_TEL}
              className="flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-full transition-colors"
            >
              <Phone className="h-5 w-5" /> Call {PHONE}
            </a>
          </div>

          <div className="mt-6 sm:mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-white/70">
                <b.icon className="h-5 w-5 text-[#D71920] shrink-0" />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
