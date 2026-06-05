import { motion } from "framer-motion";
import { Search, FileText, ShieldCheck, Hammer, ClipboardCheck } from "lucide-react";
import { IMAGES } from "@/lib/site";
import { useLead } from "./LeadContext";

const STEPS = [
  { icon: Search, title: "Free Inspection", text: "We climb the roof and document every hit, lift, and bruise — no guessing." },
  { icon: FileText, title: "Documentation", text: "Photos, measurements, and a damage report built for your insurance carrier." },
  { icon: ShieldCheck, title: "Insurance Support", text: "We meet your adjuster on-site and fight for the full scope you're owed." },
  { icon: Hammer, title: "Repair or Replace", text: "Premium materials installed by a clean, professional, local crew." },
  { icon: ClipboardCheck, title: "Final Walkthrough", text: "We don't leave until you've signed off and the site is spotless." },
];

export default function StormDamage() {
  const { openModal } = useLead();
  return (
    <section id="storm" className="relative py-24 overflow-hidden">
      <img src={IMAGES.work2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-[#0A0A0A]/90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Storm Restoration</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Storm damage? We'll handle the roof <span className="text-[#D71920]">and</span> the insurance process.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Missouri storms don't care how old your roof is. When the hail hits, we're ready — start to finish.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-white/10" />
          <div className="grid lg:grid-cols-5 gap-8">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative h-14 w-14 rounded-full bg-[#D71920] flex items-center justify-center mb-5 z-10">
                  <s.icon className="h-6 w-6 text-white" />
                  <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-white text-[#0A0A0A] text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/55">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={() => openModal("Storm Damage Restoration")}
          className="mt-14 bg-[#D71920] hover:bg-[#b3141a] text-white font-semibold px-8 py-4 rounded-full transition-transform hover:scale-[1.03]"
        >
          Start My Storm Claim
        </button>
      </div>
    </section>
  );
}
