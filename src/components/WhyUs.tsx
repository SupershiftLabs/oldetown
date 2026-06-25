import { motion } from "framer-motion";
import { Receipt, MessageSquare, Gem, Sparkles, Award } from "lucide-react";

const POINTS = [
  { icon: Receipt, title: "Transparent Estimates", text: "No line items buried in the fine print. Every cost explained before you sign." },
  { icon: MessageSquare, title: "Exceptional Communication", text: "You'll hear from us at every stage — not just when there's a problem." },
  { icon: Gem, title: "GAF Master Elite", text: "22 years of hands-on training and research so you don't have to wonder if your contractor knows what they're doing." },
  { icon: Sparkles, title: "Clean Job Sites", text: "Magnetic sweeps, daily cleanup — we leave your yard cleaner than we found it." },
  { icon: Award, title: "Strong Warranties", text: "Workmanship and material warranties that mean something, backed by a company that still answers the phone." },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img src="/IMG_7074.jpg" alt="Completed Iowa roof" className="w-full h-[260px] sm:h-[380px] lg:h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex gap-6">
            <div>
              <div className="text-4xl font-extrabold text-white">22</div>
              <div className="text-sm text-white/60">Years as a Family Owned Business</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white">5,000+</div>
              <div className="text-sm text-white/60">Roofs Produced</div>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="text-[#FF3B42] font-semibold text-sm uppercase tracking-widest mb-3">Why Olde Town</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Family owned. Quad Cities trusted. Built to outlast.
          </h2>
          <p className="text-white/60 text-lg mb-8">
            22 years as a family owned business — not acquired, not flipped, not folded into a private equity portfolio. We price work to be fair, not to hit a quarterly number.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {POINTS.map((p) => (
              <div key={p.title} className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#D71920]/15 flex items-center justify-center shrink-0">
                  <p.icon className="h-5 w-5 text-[#D71920]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{p.title}</h3>
                  <p className="text-sm text-white/50 mt-1">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
