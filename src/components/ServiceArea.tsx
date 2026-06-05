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
          <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Service Area</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proudly serving Southwest Missouri.
          </h2>
          <p className="text-white/60 text-lg mb-8">
            From Springfield to Branson, if a storm rolled through your town, we're already on the way.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CITIES.map((c) => (
              <button
                key={c}
                onClick={() => openModal()}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 hover:border-[#D71920]/50 hover:text-white transition-colors text-left"
              >
                <MapPin className="h-4 w-4 text-[#D71920] shrink-0" /> {c}, MO
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.5635819547326!2d-93.28289!3d37.20897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf62d38b6d8ec3%3A0x8e8e8e8e8e8e8e8e!2s2023%20E%20Kearney%20St%20Suite%20102%2C%20Springfield%2C%20MO!5e0!3m2!1sen!2sus!4v1234567890"
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
