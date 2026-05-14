export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.05]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-0 mb-4">
              <span className="text-[#E8231A] font-extrabold text-xl tracking-tight">Prime</span>
              <span className="text-[#F5E500] font-extrabold text-xl tracking-tight">Press</span>
              <span className="text-white font-extrabold text-xl tracking-tight">Pro</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs mb-6">
              Helping founders and companies get featured on top media platforms. Build authority. Build trust.
            </p>
            <div className="flex gap-3">
              {['twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-px"
                  aria-label={social}
                >
                  <div className="w-3 h-3 bg-white/25 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {['Google News Article', 'AP News Feature', 'Business Insider', 'Founder Story', 'SEO Article', 'AEO Content'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/25 text-sm hover:text-white/55 transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About', 'How It Works', 'Pricing', 'Contact', 'Privacy Policy', 'Terms'].map((s) => (
                <li key={s}>
                  <a href="#" className="text-white/25 text-sm hover:text-white/55 transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-white/25 text-sm">hello@primepresspro.com</li>
              <li className="text-white/25 text-sm">Available Mon–Fri</li>
              <li className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#E8231A]/10 hover:bg-[#E8231A]/20 border border-[#E8231A]/20 text-[#E8231A] text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Get Started
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/15 text-xs">
            &copy; {new Date().getFullYear()} PrimePressPro. All rights reserved.
          </p>
          <p className="text-white/10 text-xs tracking-wide">
            Get Featured. Build Authority. Track Your PR Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
