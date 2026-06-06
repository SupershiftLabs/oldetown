import { motion } from "framer-motion";
import {
  Home, Wrench, CloudLightning, FileCheck, Layers, Building2, PanelTop, Droplets, CreditCard, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/site";
import { useLead } from "./LeadContext";

const ICONS: Record<string, any> = {
  Home, Wrench, CloudLightning, FileCheck, Layers, Building2, PanelTop, Droplets, CreditCard,
};

export default function Services() {
  const { openModal } = useLead();
  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Every exterior system. One premium crew.
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            From a single missing shingle to a full storm restoration and insurance claim — we handle it all.
          </p>
        </div>

        {/* Financing card — full-width featured row */}
        {(() => {
          const f = SERVICES[0];
          const Icon = ICONS[f.icon];
          return (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl border border-[#D71920]/40 bg-gradient-to-r from-[#D71920]/10 to-transparent p-6 sm:p-8 hover:border-[#D71920]/70 transition-colors mb-4 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="h-14 w-14 rounded-xl bg-[#D71920]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D71920] transition-colors">
                <Icon className="h-7 w-7 text-[#D71920] group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-3xl">{f.desc}</p>
              </div>
              <button
                onClick={() => openModal(f.title)}
                className="shrink-0 bg-[#D71920] hover:bg-[#b3141a] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                Learn More
              </button>
            </motion.div>
          );
        })()}

        {/* Remaining service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.slice(1).map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 hover:border-[#D71920]/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-[#D71920]/15 flex items-center justify-center mb-5 group-hover:bg-[#D71920] transition-colors">
                  <Icon className="h-6 w-6 text-[#D71920] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.desc}</p>
                {s.tagline && (
                  <p className="mt-3 inline-block text-xs font-semibold text-[#D71920] bg-[#D71920]/10 border border-[#D71920]/30 rounded-full px-3 py-1">
                    {s.tagline}
                  </p>
                )}
                <button
                  onClick={() => openModal(s.title)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D71920] hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
