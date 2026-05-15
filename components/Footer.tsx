export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-0 mb-4">
              <span className="text-[#C9A84C] font-extrabold text-xl tracking-tight">Prime</span>
              <span className="text-[#E8C878] font-extrabold text-xl tracking-tight">Press</span>
              <span className="text-white font-extrabold text-xl tracking-tight">Pro</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs mb-6">
              Helping founders, startups, and agencies build authority through AI-powered PR content and strategic media placement.
            </p>
            <div className="flex gap-3">
              {[
                { name: 'Twitter', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Instagram', href: '#' }
              ].map((s) => (
                <a key={s.name} href={s.href} className="w-8 h-8 bg-[#C9A84C]/8 hover:bg-[#C9A84C]/15 border border-[#C9A84C]/15 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-px text-[10px] text-white/30 font-bold">
                  {s.name.substring(0, 1)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {['PR Strategy', 'Startup PR', 'Founder Branding', 'Product Launch', 'SEO Content', 'AEO Optimization'].map((s) => (
                <li key={s}><a href="/services" className="text-white/25 text-sm hover:text-white/55 transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About', 'How It Works', 'Pricing', 'Blog', 'Privacy Policy', 'Terms'].map((s) => (
                <li key={s}><a href={`/${s.toLowerCase().replace(' ', '-')}`} className="text-white/25 text-sm hover:text-white/55 transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold mb-5 tracking-[0.1em] uppercase">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-white/25 text-sm">hello@primepresspro.com</li>
              <li className="text-white/25 text-sm">Mon–Fri support</li>
              <li className="mt-4">
                <a href="/signup" className="inline-flex items-center gap-2 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 border border-[#C9A84C]/20 text-[#E8C878] text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200">
                  Get Started
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#C9A84C]/8 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/35 text-xs leading-relaxed mb-6 max-w-3xl">
            <strong>Disclaimer:</strong> Media placement is subject to editorial approval and availability. PrimePressPro provides content creation, editorial review, and media pitching services. We do not guarantee publication in any specific outlet, including but not limited to Forbes, Bloomberg, New York Times, or other media publications. Results depend on story quality, editorial fit, timing, and outlet availability.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/10">
            <p className="text-white/15 text-xs">&copy; {new Date().getFullYear()} PrimePressPro. All rights reserved.</p>
            <p className="text-white/10 text-xs tracking-wide">Build Authority. Earn Credibility. Track Your Growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
