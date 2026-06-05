import { useState, useEffect } from "react";
import { X, CheckCircle2, Phone, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLead } from "./LeadContext";
import { SERVICES, PHONE, PHONE_TEL } from "@/lib/site";
import PhotoUpload from "./PhotoUpload";

export default function LeadModal() {
  const { open, prefillService, closeModal, submitLead } = useLead();
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", service: "", message: "" });
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [sentPhotos, setSentPhotos] = useState(0);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (open) {
      setForm((f) => ({ ...f, service: prefillService || "" }));
      setPhotoUrls([]);
      setDone(false);
      setErr("");
    }
  }, [open, prefillService]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) { setErr("Name and phone are required."); return; }
    setSending(true);
    const ok = await submitLead({ ...form, photoUrls, source: "lead-modal" });
    setSending(false);
    if (ok) { setSentPhotos(photoUrls.length); setDone(true); }
    else setErr("Something went wrong. Please call us directly.");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-lg bg-[#101010] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
          >
            <button onClick={closeModal} className="absolute top-5 right-5 text-white/50 hover:text-white">
              <X className="h-6 w-6" />
            </button>

            {done ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-16 w-16 text-[#D71920] mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-white">You're on the schedule.</h3>
                {sentPhotos > 0 ? (
                  <p className="mt-3 text-white/60">
                    We received your {sentPhotos} roof photo{sentPhotos > 1 ? "s" : ""}. Our team will review them for a
                    preliminary assessment and reach out shortly to confirm your free inspection.
                  </p>
                ) : (
                  <p className="mt-3 text-white/60">We'll reach out shortly to confirm your free inspection. Need us now?</p>
                )}
                <a href={PHONE_TEL} className="mt-6 inline-flex items-center gap-2 bg-[#D71920] text-white font-semibold px-6 py-3 rounded-full">
                  <Phone className="h-4 w-4" /> Call {PHONE}
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white">Get Your Free Inspection</h3>
                <p className="mt-2 text-sm text-white/55">Fast estimates. No pressure. No nonsense.</p>
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <input
                    placeholder="Full name *" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D71920] outline-none"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      placeholder="Phone *" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D71920] outline-none"
                    />
                    <input
                      placeholder="Email" type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D71920] outline-none"
                    />
                  </div>
                  <input
                    placeholder="Property address" value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D71920] outline-none"
                  />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#D71920] outline-none"
                  >
                    <option value="" className="bg-[#101010]">What do you need?</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.title} className="bg-[#101010]">{s.title}</option>)}
                  </select>
                  <textarea
                    placeholder="Tell us about the damage (optional)" rows={3} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D71920] outline-none resize-none"
                  />

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                      <Camera className="h-4 w-4 text-[#D71920]" /> Upload roof photos for a preliminary assessment
                    </label>
                    <PhotoUpload onChange={setPhotoUrls} />
                  </div>

                  {err && <p className="text-[#ff6b6e] text-sm">{err}</p>}
                  <button
                    type="submit" disabled={sending}
                    className="w-full bg-[#D71920] hover:bg-[#b3141a] disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-colors"
                  >
                    {sending ? "Sending..." : "Request My Free Inspection"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
