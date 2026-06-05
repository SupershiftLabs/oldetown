import { motion } from "framer-motion";
import { MapPin, Receipt, MessageSquare, Gem, Sparkles, Award } from "lucide-react";
import { IMAGES } from "@/lib/site";

const POINTS = [
  { icon: MapPin, title: "Local Missouri Team", text: "Born and based in the Ozarks. We're your neighbors, not a storm-chasing out-of-state crew." },
  { icon: Receipt, title: "Transparent Estimates", text: "Itemized, honest pricing. You'll know exactly what you're paying for and why." },
  { icon: MessageSquare, title: "Exceptional Communication", text: "Real updates from real people. You're never left wondering what's next." },
  { icon: Gem, title: "Premium Materials", text: "We install the best — backed by manufacturer-certified workmanship." },
  { icon: Sparkles, title: "Clean Job Sites", text: "Magnetic nail sweeps, daily cleanup, and a yard left better than we found it." },
  { icon: Award, title: "Strong Warranties", text: "Labor and material warranties that actually mean something for decades." },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img src={IMAGES.aerial1} alt="Completed Missouri roof" className="w-full h-[260px] sm:h-[380px] lg:h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex gap-6">
            <div>
              <div className="text-4xl font-extrabold text-white">10+</div>
              <div className="text-sm text-white/60">Years in the Ozarks</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white">1,500+</div>
              <div className="text-sm text-white/60">Roofs Delivered</div>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Why Olde Town</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Ozark weather. Built for homeowners.
          </h2>
          <p className="text-white/60 text-lg mb-8">
            More professional than every other roofing company you've talked to — and we'll prove it on the first call.
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
