const services = [
  {
    title: 'Google News Article',
    desc: 'Get published and indexed on Google News for instant visibility.',
  },
  {
    title: 'Bing News Article',
    desc: 'Reach a wider audience through Bing News distribution.',
  },
  {
    title: 'Business Insider Feature',
    desc: 'Establish credibility with a Business Insider feature story.',
  },
  {
    title: 'AP News Feature',
    desc: 'Gain trust with an Associated Press News placement.',
  },
  {
    title: 'SEO Article',
    desc: 'Rank higher with SEO-optimized content that drives organic traffic.',
  },
  {
    title: 'AEO Content',
    desc: 'Answer Engine Optimization for AI-first search visibility.',
  },
  {
    title: 'Founder Story',
    desc: 'Share your journey and build a compelling personal brand.',
  },
  {
    title: 'Product Launch Article',
    desc: 'Announce your launch with a press-ready product article.',
  },
  {
    title: 'Product Update Article',
    desc: 'Keep your audience informed about new features and updates.',
  },
  {
    title: 'Thought Leadership',
    desc: 'Position yourself as an industry expert with authoritative content.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0A] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs text-[#E8231A] tracking-[0.18em] uppercase font-semibold">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
            PR Services Built for Growth
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Everything you need to get published, build credibility, and grow
            your media presence.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#141414] border border-white/5 hover:border-[#E8231A]/25 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-9 h-9 bg-[#E8231A]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E8231A]/20 transition-colors duration-300">
                <div className="w-2 h-2 bg-[#E8231A] rounded-full" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-white/35 text-xs leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
