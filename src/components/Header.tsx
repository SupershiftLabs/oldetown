import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { PHONE, PHONE_TEL } from "@/lib/site";
import { useLead } from "./LeadContext";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Storm Damage", href: "#storm" },
  { label: "Why Us", href: "#why" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#areas" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { openModal } = useLead();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenu(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 h-16 flex items-center justify-between">
        <button onClick={() => go("#top")} aria-label="Home">
          <Logo />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => go(n.href)}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={PHONE_TEL} className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <button
            onClick={() => openModal()}
            className="bg-[#D71920] hover:bg-[#b3141a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Free Inspection
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
      </div>

      {menu && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-white/10 px-6 py-6 space-y-4">
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => go(n.href)}
              className="block w-full text-left text-lg text-white/80"
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => { setMenu(false); openModal(); }}
            className="w-full bg-[#D71920] text-white font-semibold py-3 rounded-full"
          >
            Get Free Inspection
          </button>
        </div>
      )}
    </header>
  );
}
