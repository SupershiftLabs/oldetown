import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/site";
import BeforeAfter from "./BeforeAfter";

const SHOTS = [
  IMAGES.aerial2, IMAGES.metal1, IMAGES.work1, IMAGES.aerial3,
  IMAGES.metal2, IMAGES.work3, IMAGES.metal3, IMAGES.work4,
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Project Gallery</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            See the difference for yourself.
          </h2>
          <p className="mt-4 text-white/60 text-lg">Drag the slider. Real roofs, real Missouri homes.</p>
        </div>

        <div className="mb-12">
          <BeforeAfter before={IMAGES.work2} after={IMAGES.aerial1} />
        </div>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {SHOTS.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox(src)}
              className="block w-full rounded-xl overflow-hidden border border-white/10 hover:border-[#D71920]/50 transition-colors break-inside-avoid"
            >
              <img src={src} alt={`Roofing project ${i + 1}`} className="w-full hover:scale-105 transition-transform duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox} alt="Project" className="max-h-[90vh] max-w-full rounded-xl" />
        </div>
      )}
    </section>
  );
}
