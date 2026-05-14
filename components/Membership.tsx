const plans = [
  {
    name: 'Starter PR',
    price: '$199',
    period: '/month',
    description: 'Perfect for founders and small businesses starting their PR journey.',
    features: [
      '1 PR article per month',
      'Google News or Bing News placement',
      'SEO optimized content',
      'Client dashboard access',
      'Live publication link report',
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'Growth PR',
    price: 'Custom',
    period: '',
    description: 'For growing brands needing consistent media coverage and authority building.',
    features: [
      '3 PR articles per month',
      'Multi-platform distribution',
      'AP News or Business Insider feature',
      'Priority support',
      'Advanced analytics dashboard',
    ],
    highlight: true,
    cta: 'Contact Us',
  },
  {
    name: 'Authority PR',
    price: 'Custom',
    period: '',
    description: 'Full-service PR for established companies ready to dominate their space.',
    features: [
      'Unlimited articles per month',
      'Top-tier media placements',
      'Dedicated PR account manager',
      'Founder story + thought leadership',
      'Weekly performance reports',
    ],
    highlight: false,
    cta: 'Contact Us',
  },
];

export default function Membership() {
  return (
    <section id="membership" className="bg-[#080808] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs text-[#E8231A] tracking-[0.2em] uppercase font-semibold mb-4">
            <span className="w-6 h-px bg-[#E8231A]" />
            Pricing
            <span className="w-6 h-px bg-[#E8231A]" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 tracking-[-0.03em]">
            Simple, Clear <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-white/35 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Choose the plan that matches your growth stage. Upgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-[#E8231A] border-[#E8231A] shadow-[0_0_0_1px_rgba(232,35,26,0.5),0_30px_80px_rgba(232,35,26,0.3)]'
                  : 'bg-[#111111] border-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5E500] text-black text-[10px] font-extrabold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[0_4px_20px_rgba(245,229,0,0.4)]">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-base mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-3 mb-3">
                  <span className="number-font text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-white/30'}`}>{plan.period}</span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/75' : 'text-white/30'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="h-px bg-white/10 mb-6" />

              <ul className="flex flex-col gap-3.5 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-white/20' : 'bg-[#E8231A]/15'}`}>
                      <svg className={`w-2.5 h-2.5 ${plan.highlight ? 'text-white' : 'text-[#E8231A]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm leading-snug ${plan.highlight ? 'text-white/90' : 'text-white/45'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`shine w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-px ${
                  plan.highlight
                    ? 'bg-white text-[#E8231A] hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                    : 'bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
