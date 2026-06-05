import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("otr_cookies")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("otr_cookies", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("otr_cookies", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-2xl bg-[#111] border border-white/15 rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-white/70 leading-relaxed">
          We use cookies to improve your experience on our site. By continuing, you agree to our{" "}
          <Link to="/privacy" className="text-[#D71920] hover:underline">Privacy Policy</Link>.
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/40 hover:text-white/70 transition-colors px-3 py-1.5"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-[#D71920] hover:bg-[#b3141a] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Accept
          </button>
          <button onClick={decline} aria-label="Close" className="text-white/30 hover:text-white/60 ml-1">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
