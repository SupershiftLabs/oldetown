import { TRUST } from "@/lib/site";

export default function TrustStrip() {
  const items = [...TRUST, ...TRUST];
  return (
    <div className="border-y border-white/10 bg-[#0d0d0d] overflow-hidden py-5">
      <div className="flex gap-12 animate-[marquee_28s_linear_infinite] whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-white/60 text-sm font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D71920]" />
            {t}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
