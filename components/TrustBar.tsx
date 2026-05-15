const outlets = [
  { name: 'AP News', logo: '/media/Associated_Press_logo_2012.svg.png', isImage: true },
  { name: 'Google News', logo: null, isImage: false },
  { name: 'Business Insider', logo: null, isImage: false },
  { name: 'Benzinga', logo: '/media/Benzinga-Favicon.jpg', isImage: true },
  { name: 'MarketWatch', logo: null, isImage: false },
  { name: 'Yahoo Finance', logo: null, isImage: false },
  { name: 'MSN News', logo: '/media/MSN-Logo-1.png', isImage: true },
  { name: 'NBC News', logo: '/media/nbc.webp', isImage: true },
  { name: 'Bloomberg', logo: null, isImage: false },
  { name: 'Reuters', logo: null, isImage: false },
  { name: 'TechCrunch', logo: null, isImage: false },
  { name: 'Forbes', logo: null, isImage: false },
];

export default function TrustBar() {
  const doubled = [...outlets, ...outlets];
  return (
    <section className="relative bg-[#0A0A0A] border-y border-[#C9A84C]/10 py-12 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <p className="text-center text-[10px] text-white/20 tracking-[0.25em] uppercase mb-8 font-medium">
        Trusted by founders publishing in
      </p>

      <div className="flex overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((outlet, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 select-none flex-shrink-0"
            >
              {outlet.isImage && outlet.logo ? (
                <img
                  src={outlet.logo}
                  alt={outlet.name}
                  className="h-6 max-w-[120px] object-contain opacity-60 hover:opacity-80 transition-opacity"
                />
              ) : (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C]/60 flex-shrink-0" />
                  <span className="text-white/25 font-semibold text-sm tracking-wide">
                    {outlet.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
