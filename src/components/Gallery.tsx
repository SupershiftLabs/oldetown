import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SHOTS = [
  "/IMG_7060.jpg", "/IMG_7061.jpg", "/IMG_7062.jpg", "/IMG_7063.jpg",
  "/IMG_7064.jpg", "/IMG_7065.jpg", "/IMG_7066.jpg", "/IMG_7067.jpg",
  "/IMG_7068.jpg", "/IMG_7069.jpg", "/IMG_7070.jpg", "/IMG_7071.jpg",
  "/IMG_7072.jpg", "/IMG_7073.jpg", "/IMG_7074.jpg", "/IMG_7075.jpg",
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>(SHOTS[0]);
  const [paused, setPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    if (direction === "right") {
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        containerRef.current.scrollLeft = 0;
      } else {
        containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    } else {
      if (scrollLeft <= 10) {
        containerRef.current.scrollLeft = scrollWidth;
      } else {
        containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scroll("right"), 3000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Project Gallery</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            See the difference for yourself.
          </h2>
          <p className="mt-4 text-white/60 text-lg">View some of our projects</p>
        </div>

        <div className="mb-12">
          <div className="relative w-full h-[360px] sm:h-[460px] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#D71920]/50 transition-colors">
            <img
              src={selectedImage}
              alt="Olde Town Roofing completed project — Davenport, IA"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={containerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex gap-3 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {SHOTS.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                className="flex-shrink-0 w-[72vw] sm:w-72 lg:w-96 rounded-lg overflow-hidden border border-white/10 hover:border-[#D71920]/50 transition-colors group/card cursor-pointer"
              >
                <div className="relative overflow-hidden bg-[#0d0d0d] aspect-video">
                  <img
                    src={src}
                    alt={`Olde Town Roofing project ${i + 1} — Quad Cities Iowa`}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Nav Buttons — visible on all screen sizes */}
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
