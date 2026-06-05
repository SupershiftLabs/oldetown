import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PARTNERS = [
  { name: "GAF", category: "Roofing Systems" },
  { name: "Owens Corning", category: "Roofing & Insulation" },
  { name: "CertainTeed", category: "Roofing & Siding" },
  { name: "Atlas Roofing", category: "Roofing Systems" },
  { name: "IKO", category: "Roofing Products" },
  { name: "TAMKO", category: "Building Products" },
  { name: "James Hardie", category: "Siding & Cladding" },
  { name: "Velux", category: "Skylights & Roof Windows" },
  { name: "Leaf Guard", category: "Gutter Protection" },
  { name: "Ply Gem", category: "Windows & Siding" },
];

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    if (direction === "right") {
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        containerRef.current.scrollLeft = 0;
      } else {
        containerRef.current.scrollBy({ left: 280, behavior: "smooth" });
      }
    } else {
      if (scrollLeft <= 10) {
        containerRef.current.scrollLeft = scrollWidth;
      } else {
        containerRef.current.scrollBy({ left: -280, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scroll("right"), 2500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="py-20 bg-[#0d0d0d] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Trusted Brands</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our product partners.
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            We only install products we'd put on our own homes — backed by the industry's best manufacturers.
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[60vw] sm:w-56 lg:w-64 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 flex flex-col items-center justify-center gap-3 hover:border-[#D71920]/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-[#D71920]/15 flex items-center justify-center">
                  <span className="text-[#D71920] font-extrabold text-lg">
                    {p.name.charAt(0)}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-sm">{p.name}</p>
                  <p className="text-white/40 text-xs mt-1">{p.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={() => scroll("left")}
              className="bg-white/10 hover:bg-[#D71920] text-white p-3 rounded-full transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white/10 hover:bg-[#D71920] text-white p-3 rounded-full transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
