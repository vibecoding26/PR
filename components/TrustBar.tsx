const outlets = [
  'Google News',
  'AP News',
  'Business Insider',
  'Bing News',
  'MarketWatch',
  'Yahoo Finance',
];

export default function TrustBar() {
  return (
    <section className="bg-[#0D0D0D] border-y border-white/5 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs text-white/25 tracking-[0.2em] uppercase mb-10">
          Get your story featured on
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {outlets.map((outlet) => (
            <span
              key={outlet}
              className="text-white/25 font-bold text-sm sm:text-base tracking-wide hover:text-white/55 transition-colors duration-300 cursor-default select-none uppercase"
            >
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
