const plans = [
  {
    name: 'Starter',
    price: '$149',
    period: '/month',
    description: 'Perfect for solo founders and early-stage startups building their first media presence.',
    features: ['15 AI article drafts/month', '1 publication submission/month', 'Full client dashboard', 'Article status tracking', 'Authority journey progress', 'Community support'],
    highlight: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    price: '$1,549',
    period: 'one-time',
    description: 'For funded startups ready to scale their authority with strategic media placements.',
    features: ['Company intro article', 'Founder story article', 'Product launch article', '3–4 media outlet submissions', 'AEO + SEO optimized', 'Quarterly report'],
    highlight: true,
    cta: 'Purchase Package',
  },
  {
    name: 'Authority',
    price: '$2,499',
    period: 'one-time',
    description: 'Full-service PR campaign building long-term authority and multi-outlet visibility.',
    features: ['7-phase authority journey', 'Multi-article campaign', 'Premium media distribution', 'AEO + SEO optimization', 'Monthly reports', 'Priority support'],
    highlight: false,
    cta: 'Purchase Package',
  },
];

export default function Membership() {
  return (
    <section id="membership" className="bg-[#0A0A0A] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs text-[#C9A84C] tracking-[0.2em] uppercase font-semibold mb-4">
            <span className="w-6 h-px bg-[#C9A84C]" />Pricing<span className="w-6 h-px bg-[#C9A84C]" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 tracking-[-0.03em]">
            Simple, Clear <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-white/35 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Choose the plan that fits your needs. Upgrade or pause anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#C9A84C] to-[#9A7B35] border-[#C9A84C] shadow-[0_0_0_1px_rgba(201,168,76,0.5),0_30px_80px_rgba(201,168,76,0.2)]'
                  : 'bg-[#111111] border-[#C9A84C]/10 hover:border-[#C9A84C]/25 hover:shadow-[0_20px_60px_rgba(201,168,76,0.08)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8C878] text-[#0A0A0A] text-[10px] font-extrabold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[0_4px_20px_rgba(232,200,120,0.4)]">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-bold text-base mb-1 ${plan.highlight ? 'text-[#0A0A0A]' : 'text-white'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-3 mb-3">
                  <span className={`number-font text-4xl font-bold ${plan.highlight ? 'text-[#0A0A0A]' : 'text-white'}`}>{plan.price}</span>
                  {plan.period && <span className={`text-sm ${plan.highlight ? 'text-[#0A0A0A]/70' : 'text-white/30'}`}>{plan.period}</span>}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-[#0A0A0A]/75' : 'text-white/30'}`}>{plan.description}</p>
              </div>

              <div className={`h-px mb-6 ${plan.highlight ? 'bg-white/15' : 'bg-white/10'}`} />

              <ul className="flex flex-col gap-3.5 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-white/25' : 'bg-[#C9A84C]/15'}`}>
                      <svg className={`w-2.5 h-2.5 ${plan.highlight ? 'text-white' : 'text-[#C9A84C]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm leading-snug ${plan.highlight ? 'text-[#0A0A0A]/90' : 'text-white/45'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`shine w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-px ${
                plan.highlight
                  ? 'bg-white text-[#C9A84C] hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                  : 'bg-[#C9A84C]/8 hover:bg-[#C9A84C]/15 border border-[#C9A84C]/20 text-white'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
