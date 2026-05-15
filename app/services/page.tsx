import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A0A0A] pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            PR services built <span className="text-gradient">for your business</span>
          </h1>
          <p className="text-white/40 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Every service combines AI-powered content creation with strategic media placement. Customize your approach.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Detailed Service Sections */}
      <section className="bg-[#0A0A0A] px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          {[
            {
              title: 'PR Strategy',
              desc: 'Foundation-level positioning that shapes everything else.',
              details: 'We research your company, competition, and target media outlets to build a playbook. This service defines your unique angle, target keywords, and which outlets are the best fit. Think of it as your north star—one PR strategy can guide 3–6 months of content and placements.',
              ideal: 'Solo founders and early-stage startups building their first media plan',
            },
            {
              title: 'Startup PR',
              desc: 'Everything a growing startup needs to build credibility fast.',
              details: 'Startup PR combines company positioning, founder story, and product launch articles—all optimized for the outlets your target customers read. Includes tracking of all submissions and performance reporting.',
              ideal: 'Seed and Series A startups launching within 3–6 months',
            },
            {
              title: 'Founder Branding',
              desc: 'Position the founder as the expert, not just the company.',
              details: 'Investors, partners, and customers make decisions based on founder credibility. We create founder bylines, thought leadership content, and media placements that build personal authority. This compounds: a founder with media presence attracts talent, partners, and press.',
              ideal: 'Founders who want to become recognized experts in their space',
            },
            {
              title: 'Product Launch PR',
              desc: 'Announce a new product, feature, or update to the right people.',
              details: 'Product launches demand timing and precision. We create launch announcements, embed them in relevant trade publications, and coordinate around your go-live date. Coordinated multi-outlet launches create a perception of momentum.',
              ideal: 'SaaS companies, e-commerce brands, and product-driven startups launching updates',
            },
            {
              title: 'Thought Leadership',
              desc: 'Own a specific topic—before your competitors do.',
              details: 'Thought leadership articles position you as the expert on a specific problem or trend. We research high-potential topics, write definitive pieces, and pitch them to the outlets where your audience learns industry trends.',
              ideal: 'Consultants, agencies, and C-suite leaders building personal brand',
            },
            {
              title: 'AEO Content',
              desc: 'Content optimized for AI search results—the new frontier.',
              details: 'AI search engines (ChatGPT, Perplexity, Claude) are becoming primary discovery channels. AEO content uses direct-answer paragraphs, clear structure, and conversational language that AI systems extract and cite. We embed AEO best practices in every article.',
              ideal: 'Any business wanting to appear in AI search engine results',
            },
            {
              title: 'SEO PR Content',
              desc: 'Build organic search traffic through strategic media placement.',
              details: 'SEO PR combines high-volume keywords with compelling narratives. We create articles around search terms your audience actually uses, pitch them to publications that rank in Google, and build backlinks that improve your domain authority.',
              ideal: 'E-commerce brands, local services, and product-focused businesses',
            },
            {
              title: 'Reputation Management',
              desc: 'Shape perception by controlling the narrative.',
              details: 'Reputation management uses proactive media content to dominate search results and public conversations. We create and place authoritative content that appears alongside any negative coverage, positioning your company as credible and responsive.',
              ideal: 'Established companies managing perception or recovering from incidents',
            },
            {
              title: 'Agency PR Services',
              desc: 'White-label or co-branded PR for your client roster.',
              details: 'Agencies can offer PrimePressPro capabilities to clients under their brand or ours. Unlimited article generation, client management dashboard, and admin tools included. Pricing scales with client volume.',
              ideal: 'Marketing agencies and consultancies expanding service offerings',
            },
          ].map((service, i) => (
            <div key={i} className="border-b border-[#C9A84C]/10 pb-12">
              <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
              <p className="text-[#C9A84C] text-lg mb-4">{service.desc}</p>
              <p className="text-white/60 leading-relaxed mb-6">{service.details}</p>
              <div className="bg-[#111111] border border-[#C9A84C]/10 rounded-lg p-6">
                <p className="text-white/50 text-sm">
                  <span className="text-[#C9A84C] font-bold">Best for: </span>
                  {service.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works - Services Edition */}
      <section className="bg-[#0A0A0A] px-4 py-16 border-t border-[#C9A84C]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">How Each Service Works</h2>
          <p className="text-white/40 text-center mb-12 max-w-2xl mx-auto">Every service follows our proven framework: research, write, pitch, track, report.</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Research', 'Write', 'Refine', 'Pitch', 'Track'].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#111111] border border-[#C9A84C]/10 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#C9A84C]/15 rounded-full mb-4">
                    <span className="text-[#C9A84C] font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm">{step}</h3>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-[#C9A84C]/30" style={{ transform: 'translateY(-50%)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Ready to pick a service?</h2>
          <p className="text-white/40 mb-8 text-lg">Start with a free brand profile. Choose your first service when ready.</p>
          <button className="shine bg-[#C9A84C] hover:bg-[#E8C878] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_rgba(201,168,76,0.4)]">
            Create Your Profile
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
