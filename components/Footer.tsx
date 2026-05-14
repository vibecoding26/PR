export default function Footer() {
  return (
    <footer className="bg-[#030711] border-t border-[#6366F1]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-0 mb-4">
              <span className="text-[#818CF8] font-extrabold text-xl tracking-tight">Prime</span>
              <span className="text-[#06B6D4] font-extrabold text-xl tracking-tight">Press</span>
              <span className="text-white font-extrabold text-xl tracking-tight">Pro</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs mb-6">
              Helping founders and companies get featured on top media platforms. Build authority. Build trust.
            </p>
            <div className="flex gap-3">
              {['T', 'in', 'ig'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 bg-[#6366F1]/8 hover:bg-[#6366F1]/15 border border-[#6366F1]/15 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-px text-[10px] text-white/30 font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {['Google News Article', 'AP News Feature', 'Business Insider', 'Founder Story', 'SEO Article', 'AEO Content'].map((s) => (
                <li key={s}><a href="#services" className="text-white/25 text-sm hover:text-white/55 transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About', 'How It Works', 'Pricing', 'Contact', 'Privacy Policy', 'Terms'].map((s) => (
                <li key={s}><a href="#" className="text-white/25 text-sm hover:text-white/55 transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-white/25 text-sm">hello@primepresspro.com</li>
              <li className="text-white/25 text-sm">Available Mon–Fri</li>
              <li className="mt-4">
                <a href="#" className="inline-flex items-center gap-2 bg-[#6366F1]/10 hover:bg-[#6366F1]/20 border border-[#6366F1]/20 text-[#818CF8] text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200">
                  Get Started
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#6366F1]/8 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/15 text-xs">&copy; {new Date().getFullYear()} PrimePressPro. All rights reserved.</p>
          <p className="text-white/10 text-xs tracking-wide">Get Featured. Build Authority. Track Your PR Growth.</p>
        </div>
      </div>
    </footer>
  );
}
