import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function GafLogo() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
      <rect width="80" height="80" rx="4" fill="#003087" />
      <text x="40" y="52" fontFamily="Arial Black, Arial" fontSize="34" fontWeight="900" textAnchor="middle" fill="white">GAF</text>
    </svg>
  );
}

function GafMasterEliteLogo() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
      <rect width="80" height="80" rx="4" fill="#003087" />
      <text x="40" y="34" fontFamily="Arial Black, Arial" fontSize="20" fontWeight="900" textAnchor="middle" fill="white">GAF</text>
      <text x="40" y="52" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#C8A951">MASTER ELITE</text>
      <rect x="10" y="56" width="60" height="1.5" fill="#C8A951" />
      <text x="40" y="70" fontFamily="Arial, sans-serif" fontSize="7" textAnchor="middle" fill="#C8A951">CERTIFIED CONTRACTOR</text>
    </svg>
  );
}

function GafGoldenPledgeLogo() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
      <rect width="80" height="80" rx="4" fill="#003087" />
      <text x="40" y="34" fontFamily="Arial Black, Arial" fontSize="20" fontWeight="900" textAnchor="middle" fill="white">GAF</text>
      <text x="40" y="52" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#C8A951">GOLDEN PLEDGE</text>
      <rect x="10" y="56" width="60" height="1.5" fill="#C8A951" />
      <text x="40" y="70" fontFamily="Arial, sans-serif" fontSize="7" textAnchor="middle" fill="#C8A951">WARRANTY</text>
    </svg>
  );
}

function IkoLogo() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
      <rect width="80" height="80" rx="4" fill="#002D72" />
      <polygon points="40,8 52,28 28,28" fill="#E31837" />
      <text x="40" y="62" fontFamily="Arial Black, Arial" fontSize="30" fontWeight="900" textAnchor="middle" fill="white">IKO</text>
    </svg>
  );
}

function JamesHardieLogo() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
      <rect width="80" height="80" rx="4" fill="#CC0000" />
      <text x="40" y="38" fontFamily="Arial Black, Arial" fontSize="22" fontWeight="900" textAnchor="middle" fill="white">JAMES</text>
      <text x="40" y="62" fontFamily="Arial Black, Arial" fontSize="22" fontWeight="900" textAnchor="middle" fill="white">HARDIE</text>
    </svg>
  );
}

const PARTNERS = [
  {
    name: "GAF",
    category: "Roofing Systems",
    url: "https://www.gaf.com",
    Logo: GafLogo,
  },
  {
    name: "GAF Master Elite",
    category: "Certified Contractor Program",
    url: "https://www.gaf.com/en-us/roofing-contractors/find-a-contractor/master-elite",
    Logo: GafMasterEliteLogo,
  },
  {
    name: "GAF Golden Pledge",
    category: "System Plus Warranty",
    url: "https://www.gaf.com/en-us/roofing-systems/residential/warranties/golden-pledge-ltd-warranty",
    Logo: GafGoldenPledgeLogo,
  },
  {
    name: "IKO",
    category: "Roofing Products",
    url: "https://www.iko.com",
    Logo: IkoLogo,
  },
  {
    name: "James Hardie",
    category: "Siding & Cladding",
    url: "https://www.jameshardie.com",
    Logo: JamesHardieLogo,
  },
];

function PartnerCard({ p }: { p: typeof PARTNERS[0] }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-[60vw] sm:w-56 lg:w-64 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 flex flex-col items-center justify-center gap-4 hover:border-[#D71920]/50 transition-colors group"
    >
      <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
        <p.Logo />
      </div>
      <div className="text-center">
        <p className="text-white font-bold text-sm group-hover:text-[#D71920] transition-colors">{p.name}</p>
        <p className="text-white/40 text-xs mt-1">{p.category}</p>
      </div>
    </a>
  );
}

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
              <PartnerCard key={i} p={p} />
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
