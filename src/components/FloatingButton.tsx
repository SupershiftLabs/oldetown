import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/site";

export default function FloatingButton() {
  return (
    <a
      href={PHONE_TEL}
      className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center gap-2 bg-[#D71920] hover:bg-[#b3141a] text-white font-semibold px-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 group"
      aria-label="Call us"
    >
      <Phone className="h-5 w-5 group-hover:animate-pulse" />
      <span className="hidden sm:inline">{PHONE}</span>
    </a>
  );
}
