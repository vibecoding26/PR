import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A0A0A] pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            Get in <span className="text-gradient">touch</span>
          </h1>
          <p className="text-white/40 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Have questions about PrimePressPro? Want to discuss your specific needs? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-[#0A0A0A] px-4 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '📧',
              label: 'Email',
              value: 'hello@primepresspro.com',
              desc: 'For general inquiries and sales',
            },
            {
              icon: '⏰',
              label: 'Support Hours',
              value: 'Mon–Fri, 9am–5pm EST',
              desc: 'Typically respond within 24 hours',
            },
            {
              icon: '💬',
              label: 'Live Chat',
              value: 'Available in dashboard',
              desc: 'For existing clients and trial users',
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold mb-2">{item.label}</h3>
              <p className="text-[#C9A84C] font-semibold mb-2">{item.value}</p>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="John Founder"
                className="w-full bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">Company</label>
              <input
                type="text"
                placeholder="Your Company Inc"
                className="w-full bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">What's this about?</label>
              <select className="w-full bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white/50 focus:outline-none focus:border-[#C9A84C]/50 transition-colors">
                <option>Choose a topic</option>
                <option>Sales inquiry</option>
                <option>Technical support</option>
                <option>Partnership</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Tell us how we can help..."
                rows={6}
                className="w-full bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="shine w-full bg-[#C9A84C] hover:bg-[#E8C878] text-[#0A0A0A] font-bold py-3 rounded-lg transition-all duration-200 hover:-translate-y-px"
            >
              Send Message
            </button>

            <p className="text-white/40 text-xs text-center">
              We'll respond to your message within 24 business hours. For urgent issues, email us directly at hello@primepresspro.com
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A0A0A] px-4 py-20 border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quick Answers</h2>

          <div className="space-y-4">
            {[
              {
                q: 'What if I have a question before signing up?',
                a: 'Email us or use the form above. We\'re happy to answer questions about pricing, features, or how PrimePressPro works for your specific situation.',
              },
              {
                q: 'Do you offer a demo or trial?',
                a: 'Yes! Sign up for a free account and explore the dashboard. You\'ll see the portal and feature set before committing to any plan.',
              },
              {
                q: 'Can I schedule a call?',
                a: 'Absolutely. Email hello@primepresspro.com with "Schedule a call" in the subject line and we\'ll get you on the calendar.',
              },
              {
                q: 'What\'s your refund policy?',
                a: 'For monthly subscriptions: 30-day money-back guarantee if you\'re not satisfied. For premium packages: refunds available within 7 days of purchase if no work has begun.',
              },
              {
                q: 'How do I cancel my subscription?',
                a: 'You can cancel anytime from your dashboard under Billing. No phone calls, no questions asked. You\'ll retain access through the end of your billing period.',
              },
              {
                q: 'Who should I contact for partnership opportunities?',
                a: 'Email hello@primepresspro.com with "Partnership inquiry" in the subject. We\'re always interested in talking with agencies, platforms, and complementary services.',
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

      <Footer />
    </main>
  );
}
