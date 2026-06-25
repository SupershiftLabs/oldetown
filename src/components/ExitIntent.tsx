import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLead } from "./LeadContext";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const { openModal } = useLead();

  useEffect(() => {
    if (sessionStorage.getItem("otr_exit")) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("otr_exit", "1");
      }
    };
    const t = setTimeout(() => document.addEventListener("mouseout", handler), 8000);
    return () => { clearTimeout(t); document.removeEventListener("mouseout", handler); };
  }, []);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShow(false)}>
      <div onClick={(e) => e.stopPropagation()} className="relative max-w-md w-full bg-[#101010] border border-white/10 rounded-3xl p-8 text-center">
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-white/50 hover:text-white"><X className="h-6 w-6" /></button>
        <p className="text-[#FF3B42] font-semibold text-sm uppercase tracking-widest mb-3">Before you go</p>
        <h3 className="text-2xl font-bold text-white">Don't leave before you know what's on your roof.</h3>
        <p className="mt-3 text-white/60 text-sm">Hail and wind damage hides from the ground. One free inspection from a local Quad Cities crew could catch thousands in damage you didn't know was there.</p>
        <button
          onClick={() => { setShow(false); openModal(); }}
          className="mt-6 w-full bg-[#D71920] hover:bg-[#b3141a] text-white font-semibold py-3.5 rounded-full"
        >
          Claim My Free Inspection
        </button>
      </div>
    </div>
  );
}
