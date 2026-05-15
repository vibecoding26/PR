const services = [
  { num: '01', title: 'PR Service', desc: 'Full-spectrum public relations strategy — from media outreach to brand positioning and press release distribution.' },
  { num: '02', title: 'SaaS PR', desc: 'Specialized PR for SaaS companies — product launches, funding announcements, and thought leadership placements.' },
  { num: '03', title: 'Event PR', desc: 'Drive attendance and media coverage for conferences, product launches, webinars, and live events.' },
  { num: '04', title: 'Marketing PR', desc: 'Amplify your campaigns with strategic earned media that reinforces your marketing message across channels.' },
  { num: '05', title: 'Healthcare PR', desc: 'Build trust and authority in healthcare — from medical innovations to patient success stories and industry commentary.' },
  { num: '06', title: 'Technology PR', desc: 'Get your tech product in front of the right journalists, analysts, and publications that shape the industry narrative.' },
  { num: '07', title: 'E-Commerce PR', desc: 'Boost brand visibility and buyer trust with media placements that drive traffic and conversions for e-commerce brands.' },
  { num: '08', title: 'Corporate PR Services', desc: 'Comprehensive corporate communications — executive profiling, investor relations, and enterprise brand building.' },
  { num: '09', title: 'Reputation Management PR', desc: 'Protect and elevate your brand image with proactive media strategies and authoritative content that shapes perception.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0A] py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs text-[#C9A84C] tracking-[0.2em] uppercase font-semibold mb-4">
            <span className="w-6 h-px bg-[#C9A84C]" />What We Offer<span className="w-6 h-px bg-[#C9A84C]" />
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
            <div key={i} className="shine card-glow group bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-6 cursor-default">
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                  <div className="w-2.5 h-2.5 bg-[#C9A84C] rounded-full" />
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
