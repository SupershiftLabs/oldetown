import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CITIES } from "@/lib/site";
import { useLead } from "./LeadContext";

export default function ServiceArea() {
  const { openModal } = useLead();
  return (
    <section id="areas" className="py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[#FF3B42] font-semibold text-sm uppercase tracking-widest mb-3">Service Area</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            We cover the whole Quad Cities region.
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Iowa side, Illinois side — if a storm rolled through your neighborhood, we're ready to come out.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CITIES.map((c) => (
              <button
                key={c}
                onClick={() => openModal()}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 hover:border-[#D71920]/50 hover:text-white transition-colors text-left"
              >
                <MapPin className="h-4 w-4 text-[#D71920] shrink-0" /> {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video sm:aspect-square rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden"
        >
          <iframe
            src="https://maps.google.com/maps?q=926+W+3rd+Street+Davenport+IA+52802&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
