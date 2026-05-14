export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-0 mb-4">
              <span className="text-[#E8231A] font-bold text-xl">Prime</span>
              <span className="text-[#F5E500] font-bold text-xl">Press</span>
              <span className="text-white font-bold text-xl">Pro</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs">
              Helping founders and companies get featured on top media
              platforms. Build authority. Build trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Google News Article',
                'AP News Feature',
                'Business Insider',
                'Founder Story',
                'SEO Article',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/25 text-sm hover:text-white/55 transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'About',
                'How It Works',
                'Pricing',
                'Contact',
                'Privacy Policy',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-white/25 text-sm hover:text-white/55 transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} PrimePressPro. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Get Featured. Build Authority. Track Your PR Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
