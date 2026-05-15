import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A0A0A] pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h1>
          <p className="text-white/40 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. Upgrade or pause anytime. No contracts, no hidden fees.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#0A0A0A] px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs text-[#C9A84C] tracking-[0.2em] uppercase font-semibold mb-6">
              <span className="w-6 h-px bg-[#C9A84C]" />Subscription Plans<span className="w-6 h-px bg-[#C9A84C]" />
            </span>
            <h2 className="text-4xl font-extrabold text-white mb-8">Monthly Subscriptions</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#C9A84C]/10">
                  <th className="text-left py-4 px-6 text-white font-bold">Feature</th>
                  <th className="text-center py-4 px-6 text-white font-bold">
                    <div className="text-sm text-white/50 mb-2">Free</div>
                    <div className="text-white">$0</div>
                  </th>
                  <th className="text-center py-4 px-6 text-white font-bold bg-[#111111] border border-[#C9A84C]/10">
                    <div className="text-sm text-white/50 mb-2">Starter</div>
                    <div className="text-white">$149<span className="text-sm text-white/50">/month</span></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Portal access', free: true, starter: true },
                  { feature: 'Brand profile', free: true, starter: true },
                  { feature: 'Browse packages', free: true, starter: true },
                  { feature: 'AI article drafts', free: false, starter: '15/month' },
                  { feature: 'Draft quality check', free: false, starter: 'Auto (AI self-review)' },
                  { feature: 'Submit for publication', free: false, starter: '1/month' },
                  { feature: 'Article status tracker', free: false, starter: true },
                  { feature: 'Published links + reports', free: false, starter: true },
                  { feature: 'Campaign journey', free: 'View only', starter: 'Full' },
                  { feature: 'Support', free: 'Email', starter: 'Priority' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-[#C9A84C]/5">
                    <td className="py-4 px-6 text-white/70 text-sm">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-white/50">
                      {row.free === true && <span className="text-[#C9A84C]">✓</span>}
                      {row.free === false && <span className="text-white/20">—</span>}
                      {typeof row.free === 'string' && <span className="text-white/60 text-xs">{row.free}</span>}
                    </td>
                    <td className="py-4 px-6 text-center text-white/50 bg-[#111111]/30">
                      {row.starter === true && <span className="text-[#C9A84C]">✓</span>}
                      {row.starter === false && <span className="text-white/20">—</span>}
                      {typeof row.starter === 'string' && <span className="text-white/60 text-xs">{row.starter}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Premium Packages */}
      <section className="bg-[#0A0A0A] px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs text-[#C9A84C] tracking-[0.2em] uppercase font-semibold mb-6">
              <span className="w-6 h-px bg-[#C9A84C]" />Premium Packages<span className="w-6 h-px bg-[#C9A84C]" />
            </span>
            <h2 className="text-4xl font-extrabold text-white mb-4">Accelerate Your Authority</h2>
            <p className="text-white/40 text-lg max-w-2xl">Done-for-you campaigns designed for startups and agencies ready to scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Essential',
                price: '$1,249',
                description: 'Perfect for startups launching their first major media push.',
                features: [
                  'Company introduction article',
                  'Product or service article',
                  '2 media outlet submissions',
                  'AEO + SEO optimization',
                  'Performance report',
                  'Admin oversight',
                ],
              },
              {
                name: 'Growth',
                price: '$1,549',
                description: 'For funded startups ready to build authority across multiple angles.',
                features: [
                  'Company introduction',
                  'Founder story article',
                  'Product launch or update',
                  '3–4 media outlet submissions',
                  'AEO + SEO optimized content',
                  'Quarterly performance report',
                  'Admin coordination',
                ],
                highlight: true,
              },
              {
                name: 'Authority',
                price: '$2,499',
                description: 'Full-service PR campaign for long-term credibility building.',
                features: [
                  '7-phase authority journey',
                  'Multi-article campaign strategy',
                  'Premium media distribution',
                  'AEO + SEO optimization',
                  'Monthly performance reports',
                  'Priority admin support',
                  'Campaign tracking dashboard',
                ],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#C9A84C] to-[#9A7B35] border-[#C9A84C] shadow-[0_0_0_1px_rgba(201,168,76,0.5),0_30px_80px_rgba(201,168,76,0.2)]'
                    : 'bg-[#111111] border-[#C9A84C]/10'
                }`}
              >
                <h3 className={`font-bold text-xl mb-2 ${pkg.highlight ? 'text-[#0A0A0A]' : 'text-white'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <div className={`text-3xl font-bold ${pkg.highlight ? 'text-[#0A0A0A]' : 'text-white'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm mt-2 leading-relaxed ${pkg.highlight ? 'text-[#0A0A0A]/75' : 'text-white/50'}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className={`h-px mb-6 ${pkg.highlight ? 'bg-white/15' : 'bg-white/10'}`} />

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.highlight ? 'bg-white/25' : 'bg-[#C9A84C]/15'}`}>
                        <svg className={`w-2.5 h-2.5 ${pkg.highlight ? 'text-white' : 'text-[#C9A84C]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm ${pkg.highlight ? 'text-[#0A0A0A]/90' : 'text-white/50'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`shine w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-white text-[#C9A84C] hover:bg-white/90'
                    : 'bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 border border-[#C9A84C]/20 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#0A0A0A] px-4 py-16 border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-4">Important Disclaimer</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Media placement is subject to editorial approval and availability. PrimePressPro provides content creation, editorial review, and media pitching services. We do not guarantee publication in any specific outlet, including but not limited to Forbes, Bloomberg, New York Times, or other media publications. Results depend on story quality, editorial fit, timing, and outlet availability.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              All premium packages include admin coordination and campaign oversight, but publication outcomes are determined by the editorial decisions of third-party media outlets.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A0A0A] px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is media placement guaranteed?',
                a: 'No. PrimePressPro creates media-ready content and pitches it to relevant outlets. Publication decisions are made by the editors of each outlet. We focus on maximizing editorial fit through strong story angles, proper formatting, and strategic targeting—but we do not control or guarantee editorial outcomes.',
              },
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes. Monthly subscriptions can be cancelled at any time with no penalty. You will retain access through the end of your current billing period.',
              },
              {
                q: 'Do I get a refund if an article isn\'t published?',
                a: 'Premium packages are paid for the service of content creation and pitching, not for guaranteed publication. If you have concerns about a campaign, our admin team can advise on next steps.',
              },
              {
                q: 'How long does it take to see results?',
                a: 'Publication timelines vary by outlet. Most pitches receive editorial decisions within 2–4 weeks. Some outlets publish within days of acceptance; others may wait weeks. We track all submissions and keep you informed of status updates.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes. For monthly subscriptions, you can upgrade to a higher tier or purchase premium packages anytime. Changes take effect on your next billing cycle.',
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
      <section className="bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Ready to build your authority?</h2>
          <p className="text-white/40 mb-8 text-lg">Start with a free account today. Upgrade anytime when you're ready.</p>
          <button className="shine bg-[#C9A84C] hover:bg-[#E8C878] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_rgba(201,168,76,0.4)]">
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
