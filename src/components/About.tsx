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
              Founded in 2004 by Sean Vogler, Olde Town Roofing was built on a simple principle: deliver exceptional workmanship and treat every customer with honesty and respect.
            </p>
            <p className="text-white/60 text-lg mb-6">
              What started as a local roofing company in Moline, Illinois, has grown into a trusted regional contractor serving homeowners and businesses across Illinois, Iowa, Wisconsin, Missouri, Minnesota, and Nebraska.
            </p>
            <p className="text-white/60 text-lg mb-8">
              With more than two decades of experience, our team specializes in high-quality roofing solutions backed by expert installation, premium materials, and outstanding customer service. Whether it's storm damage restoration, roof replacement, repairs, or new construction, we are committed to protecting what matters most—your home, your business, and your peace of mind.
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
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#D71920]/20 to-[#D71920]/5 p-8 sm:p-12">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#D71920]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D71920]/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-8">
                <div>
                  <div className="text-5xl font-extrabold text-[#D71920] mb-2">20+</div>
                  <p className="text-white/80 text-lg">Years of experience</p>
                </div>
                
                <div className="border-t border-white/10 pt-8">
                  <div className="text-4xl font-extrabold text-white mb-2">6</div>
                  <p className="text-white/80 text-lg">States served</p>
                </div>
                
                <div className="border-t border-white/10 pt-8">
                  <div className="text-4xl font-extrabold text-white mb-2">2004</div>
                  <p className="text-white/80 text-lg">Founded by Sean Vogler</p>
                </div>

                <div className="border-t border-white/10 pt-8">
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
