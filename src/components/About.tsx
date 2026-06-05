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
            <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Built on honesty, respect, and expert craftsmanship.
            </h2>
            <p className="text-white/60 text-lg mb-6">
              Founded in 2004 by Sean Vogler, Olde Town Roofing was built on a principle that's become rare in this industry: do the work right, price it honestly, and answer for it when it's done.
            </p>
            <p className="text-white/60 text-lg mb-6">
              22 years of being a family owned business — not a private equity firm. We price to live our lives, not to make yet another hedge fund manager a multimillionaire. Most companies in our position have already sold out to private equity. We haven't, and we don't plan to.
            </p>
            <p className="text-white/60 text-lg mb-8">
              That means the person who gives you your estimate is accountable to you — not to a board of investors in another state. It means we stand behind our work because our name is on it, not because a warranty department will handle the call.
            </p>
            <p className="text-white/60 text-lg mb-8 font-semibold">
              At Olde Town Roofing, every project is built to last, and every customer is treated like family.
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D71920] shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#D71920] font-semibold text-sm uppercase tracking-widest mt-8">
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
