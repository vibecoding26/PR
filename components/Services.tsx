const services = [
  { num: '01', title: 'Google News Article', desc: 'Get published and indexed on Google News for instant visibility and search authority.' },
  { num: '02', title: 'Bing News Article', desc: 'Reach a wider audience through Bing News distribution and Microsoft news surfaces.' },
  { num: '03', title: 'Business Insider Feature', desc: 'Establish elite credibility with a Business Insider feature story.' },
  { num: '04', title: 'AP News Feature', desc: 'Gain unparalleled trust with an Associated Press News placement.' },
  { num: '05', title: 'SEO Article', desc: 'Rank higher with SEO-optimized content that drives consistent organic traffic.' },
  { num: '06', title: 'AEO Content', desc: 'Answer Engine Optimization for AI-first search visibility and LLM discovery.' },
  { num: '07', title: 'Founder Story', desc: 'Share your journey and build a compelling, memorable personal brand.' },
  { num: '08', title: 'Product Launch Article', desc: 'Announce your launch with a press-ready product feature article.' },
  { num: '09', title: 'Product Update Article', desc: 'Keep your audience informed about new features and major updates.' },
  { num: '10', title: 'Thought Leadership', desc: 'Position yourself as an industry expert with authoritative, cited content.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#080808] py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs text-[#E8231A] tracking-[0.2em] uppercase font-semibold mb-4">
            <span className="w-6 h-px bg-[#E8231A]" />
            What We Offer
            <span className="w-6 h-px bg-[#E8231A]" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 tracking-[-0.03em] leading-tight">
            PR Services Built <br className="hidden sm:block" />
            <span className="text-gradient">for Growth</span>
          </h2>
          <p className="text-white/35 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Everything you need to get published, build credibility, and grow your media presence — done for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="shine card-glow group bg-[#111111] border border-white/[0.06] rounded-2xl p-6 cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 bg-[#E8231A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#E8231A]/20 transition-colors duration-300">
                  <div className="w-2.5 h-2.5 bg-[#E8231A] rounded-full" />
                </div>
                <span className="number-font text-[10px] text-white/15 font-bold tracking-widest">{service.num}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-2 leading-snug">{service.title}</h3>
              <p className="text-white/30 text-xs leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
