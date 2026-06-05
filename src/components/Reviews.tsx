import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { REVIEWS } from "@/lib/site";

export default function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % REVIEWS.length);
  const prev = () => setI((i - 1 + REVIEWS.length) % REVIEWS.length);
  const r = REVIEWS[i];

  return (
    <section id="reviews" className="py-24 bg-[#0d0d0d]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Customer Reviews</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
          What our customers say.
        </h2>
        <
          href="https://share.google/WPIYznW05E8LxvMXP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-12 text-sm font-semibold text-[#D71920] hover:text-white border border-[#D71920]/40 hover:border-white/30 px-5 py-2 rounded-full transition-colors"
        >
          Read Our Google Reviews
        </a>

        {REVIEWS.length > 0 ? (
          <>
            <div className="relative min-h-[230px]">
              <Quote className="h-12 w-12 text-[#D71920]/30 mx-auto mb-6" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">"{r.text}"</p>
                  <div className="mt-6 text-white/70 font-semibold">{r.name}</div>
                  <div className="text-white/40 text-sm">{r.city}</div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-4 mt-10">
              <button onClick={prev} className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {REVIEWS.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-[#D71920]" : "w-2 bg-white/30"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
