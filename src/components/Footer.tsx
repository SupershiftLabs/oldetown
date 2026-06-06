import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { PHONE, PHONE_TEL, SERVICES, CITIES } from "@/lib/site";
import { useLead } from "./LeadContext";

export default function Footer() {
  const { openModal } = useLead();
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-white/50 max-w-xs">
            The premium roofing and storm restoration company serving Springfield and Southwest Missouri.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/60">
            <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-[#D71920]" /> {PHONE}</a>
            <a href="mailto:seanv@oldetownroofing.com" className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4 text-[#D71920]" /> seanv@oldetownroofing.com</a>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#D71920]" /> 2023 E Kearney Street Suite 102</div>
          </div>
          <div className="mt-6 flex gap-4">
            <a href="https://www.facebook.com/oldetownroofing" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#D71920] transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/oldetownroofing" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#D71920] transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.twitter.com/oldetownroofing" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#D71920] transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/oldetownroofing" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#D71920] transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <button onClick={() => openModal(s.title)} className="text-sm text-white/50 hover:text-white">{s.title}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Service Areas</h4>
          <ul className="space-y-2.5">
            {CITIES.map((c) => (
              <li key={c}><span className="text-sm text-white/50">{c}, MO</span></li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="text-white font-semibold mb-4 text-sm">Get Started</h4>
          <p className="text-sm text-white/50 mb-4">Free inspection. No pressure. No nonsense.</p>
          <button onClick={() => openModal()} className="w-full bg-[#D71920] hover:bg-[#b3141a] text-white font-semibold py-3 rounded-full text-sm">
            Get Free Inspection
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Olde Town Roofing. Licensed & Insured. All rights reserved.</span>
        <span className="flex gap-4">
          <Link to="/terms" className="hover:text-white/70">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-white/70">Privacy Policy</Link>
        </span>
      </div>
    </footer>
  );
}
