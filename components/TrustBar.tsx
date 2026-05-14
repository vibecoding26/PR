const outlets = [
  'Google News', 'AP News', 'Business Insider', 'Bing News',
  'MarketWatch', 'Yahoo Finance', 'Bloomberg', 'Reuters',
];

export default function TrustBar() {
  const doubled = [...outlets, ...outlets];
  return (
    <section className="relative bg-[#050A18] border-y border-[#6366F1]/10 py-12 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050A18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050A18] to-transparent z-10 pointer-events-none" />

      <p className="text-center text-[10px] text-white/20 tracking-[0.25em] uppercase mb-8 font-medium">
        Your story featured on
      </p>

      <div className="flex overflow-hidden">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {doubled.map((outlet, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-white/20 font-bold text-sm tracking-widest uppercase select-none"
            >
              <span className="w-1 h-1 rounded-full bg-[#6366F1]/60 flex-shrink-0" />
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
