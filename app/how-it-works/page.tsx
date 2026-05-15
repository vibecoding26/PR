import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';

export default function HowItWorksPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A0A0A] pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            How <span className="text-gradient">authority is built</span>
          </h1>
          <p className="text-white/40 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            A proven framework from brand positioning through multi-outlet visibility, tracked and reported every step.
          </p>
        </div>
      </section>

      {/* 5-Step Process */}
      <HowItWorks />

      {/* Authority Journey - 7 Phases */}
      <section className="bg-[#0A0A0A] px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs text-[#C9A84C] tracking-[0.2em] uppercase font-semibold mb-6">
              <span className="w-6 h-px bg-[#C9A84C]" />7-Phase Authority Journey<span className="w-6 h-px bg-[#C9A84C]" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-[-0.03em]">
              Your path from <span className="text-gradient">visibility to authority</span>
            </h2>
            <p className="text-white/40 mt-4 text-lg max-w-2xl mx-auto">
              Media credibility isn't built overnight. Each phase reinforces the last—building a complete authority story.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                phase: 1,
                title: 'Company Introduction',
                desc: 'Establish your company exists, what it does, and why it matters.',
                article: 'Feature article introducing the company, mission, and founding story',
                timeline: 'Week 1–2',
              },
              {
                phase: 2,
                title: 'Product / Service Positioning',
                desc: 'Define the problem you solve and why it matters now.',
                article: 'Deep-dive into the market need, competitive landscape, and your unique angle',
                timeline: 'Week 3–4',
              },
              {
                phase: 3,
                title: 'Product Launch',
                desc: 'Announce something new with media coverage.',
                article: 'Launch announcement timed with your product availability',
                timeline: 'Week 5–6',
              },
              {
                phase: 4,
                title: 'Progress & Growth Story',
                desc: 'Show momentum, adoption, and market response.',
                article: 'Update on traction, customer adoption, or milestone achievements',
                timeline: 'Week 7–8',
              },
              {
                phase: 5,
                title: 'Customer / User Voice',
                desc: 'Social proof from real users validates your solution.',
                article: 'Case study or customer success story featuring real client results',
                timeline: 'Week 9–10',
              },
              {
                phase: 6,
                title: 'Founder Story',
                desc: 'Humanize your brand through the founder's journey.',
                article: 'Founder byline or profile exploring personal background and vision',
                timeline: 'Week 11–12',
              },
              {
                phase: 7,
                title: 'Thought Leadership',
                desc: 'Establish yourself as an industry expert.',
                article: 'Opinion or strategy piece on industry trends, future direction, or best practices',
                timeline: 'Week 13–16',
              },
            ].map((phase) => (
              <div key={phase.phase} className="relative flex gap-6 pb-12">
                {/* Timeline Marker */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9A84C] to-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 text-[#0A0A0A] font-bold text-lg shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                    {phase.phase}
                  </div>
                  {phase.phase < 7 && <div className="w-1 h-24 bg-gradient-to-b from-[#C9A84C]/30 to-[#C9A84C]/10 mt-2" />}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-colors">
                    <h3 className="text-white font-bold text-lg mb-1">{phase.title}</h3>
                    <p className="text-[#C9A84C] text-sm font-semibold mb-3">{phase.timeline}</p>
                    <p className="text-white/60 text-sm mb-4">{phase.desc}</p>
                    <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#C9A84C]/5">
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Article Type</p>
                      <p className="text-white/70 text-sm">{phase.article}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/20 rounded-2xl p-8 mt-12">
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              <span className="text-[#C9A84C] font-bold">Timeline note:</span> This is a suggested pace. You can move faster or slower depending on your industry, goals, and publishing success. Every company's journey is unique.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              <span className="text-[#C9A84C] font-bold">Flexibility:</span> Not every phase is right for every company. We customize the journey based on your business stage, market position, and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking & Reporting */}
      <section className="bg-[#0A0A0A] px-4 py-20 border-t border-[#C9A84C]/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Track Every Step</h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              See submission status, publication dates, traffic, and indexing in your dashboard. Detailed monthly reports included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Submission Status',
                items: ['Article received', 'Under editorial review', 'Accepted for publication', 'Live on outlet'],
              },
              {
                title: 'Performance Metrics',
                items: ['Publication date', 'Outlet and URL', 'Google indexing status', 'Traffic insights'],
              },
              {
                title: 'Authority Tracking',
                items: ['Phase completion', 'Total articles published', 'Outlets covered', 'Journey progress'],
              },
              {
                title: 'Reports',
                items: ['Monthly performance PDF', 'Traffic breakdowns', 'Sentiment analysis', 'Trend insights'],
              },
            ].map((category, i) => (
              <div key={i} className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                      <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A0A0A] px-4 py-20 border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Common Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long does the full 7-phase journey take?',
                a: 'Typically 4–6 months with consistent publication success. Some companies move faster; others take longer depending on industry cycles, publication timelines, and market opportunities. It\'s not a race—the goal is sustainable authority building.',
              },
              {
                q: 'Can I start with just one article?',
                a: 'Absolutely. You don\'t need to commit to the full 7-phase journey. Many clients start with a single article to test their message, then expand based on results.',
              },
              {
                q: 'What if an article doesn\'t get published?',
                a: 'We learn from it. Our team analyzes why an outlet passed and refines the pitch or angle for the next submission. Not every pitch succeeds, but we focus on maximizing editorial fit.',
              },
              {
                q: 'How many outlets will my articles be submitted to?',
                a: 'It depends on your service. Monthly subscribers typically get 1 submission per month. Premium packages include 2–4 outlet submissions per article, depending on the tier.',
              },
              {
                q: 'Do you optimize for Google and AI search engines?',
                a: 'Yes. Every article includes AEO (AI Engine Optimization) and SEO optimization. Direct-answer paragraphs for AI search, strategic keywords for Google, and proper formatting throughout.',
              },
            ].map((item, i) => (
              <details key={i} className="group bg-[#111111] border border-[#C9A84C]/10 rounded-xl p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-white select-none">
                  {item.q}
                  <svg className="w-5 h-5 text-[#C9A84C] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-white/50 text-sm mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Ready to start your authority journey?</h2>
          <button className="shine bg-[#C9A84C] hover:bg-[#E8C878] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_rgba(201,168,76,0.4)]">
            Start Building Authority
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
