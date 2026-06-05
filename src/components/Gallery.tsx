import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/site";

const SHOTS = [
  IMAGES.aerial2, IMAGES.metal1, IMAGES.work1, IMAGES.aerial3,
  IMAGES.metal2, IMAGES.work3, IMAGES.metal3, IMAGES.work4,
  IMAGES.aerial2, IMAGES.metal1, IMAGES.work1, IMAGES.aerial3,
  IMAGES.metal2, IMAGES.work3, IMAGES.metal3, IMAGES.work4,
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>(IMAGES.aerial1);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Project Gallery</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            See the difference for yourself.
          </h2>
          <p className="mt-4 text-white/60 text-lg">Swipe through our best work. Real roofs, real Missouri homes.</p>
        </div>

        <div className="mb-12">
          <div className="relative w-full h-[360px] sm:h-[460px] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#D71920]/50 transition-colors">
            <img 
              src={selectedImage} 
              alt="Featured project" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative group">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-20 bg-[#D71920] hover:bg-[#b3141a] text-white p-3 rounded-full transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-20 top-1/2 -translate-y-1/2 z-20 bg-[#D71920] hover:bg-[#b3141a] text-white p-3 rounded-full transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4"
          >
            {SHOTS.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                className="flex-shrink-0 w-96 rounded-lg overflow-hidden border border-white/10 hover:border-[#D71920]/50 transition-colors group/card cursor-pointer"
              >
                <div className="relative overflow-hidden bg-[#0d0d0d] aspect-video">
                  <img
                    src={src}
                    alt={`Roofing project ${i + 1}`}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">Project {i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
