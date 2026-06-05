import { motion } from "framer-motion";
import {
  Home, Wrench, CloudLightning, FileCheck, Layers, Building2, PanelTop, Droplets, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/site";
import { useLead } from "./LeadContext";

const ICONS: Record<string, any> = {
  Home, Wrench, CloudLightning, FileCheck, Layers, Building2, PanelTop, Droplets,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
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
