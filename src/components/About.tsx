import { CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    "Founded in 2004 by Sean Vogler",
    "Licensed and insured across 6 states",
    "20+ years of expert experience",
    "Emergency storm response available 24/7",
    "Premium materials and expert installation",
    "Treating customers like family",
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#FF3B42] font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Two decades of getting it right — and still family owned.
            </h2>
            <p className="text-white/60 text-lg mb-6">
              Olde Town Roofing was started in 2004 by Sean Vogler on one straightforward idea: do the job right, charge a fair price, and be there when something needs to get fixed.
            </p>
            <p className="text-white/60 text-lg mb-6">
              Two decades later, we're still family owned — not acquired, not flipped, not folded into a private equity portfolio. The people who give you your estimate are the same people accountable to you when the job is done.
            </p>
            <p className="text-white/60 text-lg mb-8">
              That's not a marketing line. It's how we've operated since day one, and we're not changing it.
            </p>
            <p className="text-white/60 text-lg mb-8 font-semibold">
              Every roof we put on carries our name. We intend to keep earning it.
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D71920] shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#FF3B42] font-semibold text-sm uppercase tracking-widest mt-8">
              Licensed • Insured • Trusted Since 2004
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#D71920]/20 to-[#D71920]/5 p-6 sm:p-12">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#D71920]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D71920]/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-extrabold text-[#D71920] mb-1">20+</div>
                  <p className="text-white/70 text-sm">Years of experience</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-1">6</div>
                  <p className="text-white/70 text-sm">States served</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-1">2004</div>
                  <p className="text-white/70 text-sm">Founded by Sean Vogler</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-1">5,000+</div>
                  <p className="text-white/70 text-sm">Roofs completed</p>
                </div>
                <div className="col-span-2 border-t border-white/10 pt-4">
                  <p className="text-white/60 text-sm italic">
                    "Every project is built to last, and every customer is treated like family."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
