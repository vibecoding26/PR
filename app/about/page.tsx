import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A0A0A] pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            About <span className="text-gradient">PrimePressPro</span>
          </h1>
          <p className="text-white/40 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building a new way for founders, startups, and agencies to get featured in trusted media—without the PR industry's traditional gatekeeping, complexity, or inflated costs.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#0A0A0A] px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Media visibility shouldn't be a luxury for companies with $500K PR budgets. Every founder deserves the chance to build credibility through featured content in publications their customers actually read.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                We're democratizing PR by combining AI-powered content creation with strategic media placement. The result: founders and startups can build authority in weeks, not months. Agencies can offer premium services to any client size. And everyone gets honesty—we don't oversell what's possible.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                PrimePressPro is that middle ground: professional, affordable, and actually works.
              </p>
            </div>

            <div className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-8">
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-widest text-xs mb-6">Core Values</h3>
              {[
                {
                  title: 'Honesty',
                  desc: 'No guarantees, no overpromising. We tell you what\'s possible and what\'s not.',
                },
                {
                  title: 'Accessibility',
                  desc: 'Professional PR should be affordable for solo founders and small teams.',
                },
                {
                  title: 'Craft',
                  desc: 'AI helps us scale, but humans ensure quality. Every article is reviewed by real people.',
                },
                {
                  title: 'Transparency',
                  desc: 'You see everything: draft feedback, submission status, publication dates, traffic.',
                },
              ].map((value, i) => (
                <div key={i} className="mb-6 pb-6 border-b border-[#C9A84C]/10 last:border-b-0 last:mb-0 last:pb-0">
                  <h4 className="text-white font-bold mb-2">{value.title}</h4>
                  <p className="text-white/50 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="bg-[#0A0A0A] px-4 py-20 border-t border-[#C9A84C]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why We Built PrimePressPro</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📰',
                title: 'We saw the problem',
                desc: 'Founders we knew wanted media visibility but couldn\'t afford traditional PR agencies ($10K–$50K per month). They were stuck between DIY and broke.',
              },
              {
                icon: '🤖',
                title: 'We recognized AI\'s potential',
                desc: 'Modern AI can write media-ready articles in minutes. But it still needs human direction, editorial judgment, and media connections to succeed.',
              },
              {
                icon: '⚡',
                title: 'We built the bridge',
                desc: 'PrimePressPro combines AI efficiency with human expertise. The result: professional media placements at a price founders can actually afford.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-[#0A0A0A] px-4 py-20 border-t border-[#C9A84C]/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Built by people who understand PR</h2>
            <p className="text-white/40 text-lg">
              Our team has worked in media, founded startups, and navigated the PR world firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Founder & CEO',
                role: 'Startup founder, media relations expert',
                bio: 'Spent 5+ years building relationships with journalists and editors. Frustrated by how opaque and expensive traditional PR agencies were. Decided to fix it.',
              },
              {
                name: 'Head of Content',
                role: 'Content strategist and writer',
                bio: 'Managed media strategies for 20+ SaaS companies. Knows what editors actually want to publish (and what they reject).',
              },
              {
                name: 'Head of Operations',
                role: 'Product builder and systems thinker',
                bio: 'Built internal tools for startups. Passionate about making complex processes simple and transparent.',
              },
            ].map((member, i) => (
              <div key={i} className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-[#C9A84C] text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="bg-[#0A0A0A] px-4 py-20 border-t border-[#C9A84C]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">PrimePressPro By The Numbers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                stat: '500+',
                label: 'Articles Created',
              },
              {
                stat: '12+',
                label: 'Industries Served',
              },
              {
                stat: '3-7',
                label: 'Days to Placement',
              },
              {
                stat: '100%',
                label: 'Human-Reviewed Content',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-gradient mb-2">{item.stat}</div>
                <p className="text-white/60 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Not */}
      <section className="bg-[#0A0A0A] px-4 py-20 border-t border-[#C9A84C]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">What We're Not</h2>

          <div className="space-y-4">
            {[
              'A guaranteed press release distribution service',
              'A journalism agency that writes puff pieces',
              'A media buying service that places display ads',
              'A traditional PR firm charging $50K per month',
              'A link-building or SEO spam tool',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 text-white/60">
                <svg className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm mt-8 pt-8 border-t border-[#C9A84C]/10">
            We're focused on what actually builds credibility: helping your real story reach the right journalists, editors, and publications. That's hard work, but it works.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#0A0A0A] px-4 py-20 border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              In 5 years, we want to be the standard way founders and startups build media credibility. Not through gatekeeping or expensive agencies, but through smart automation, human judgment, and transparent tracking.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              We want every founder to have access to professional PR strategy—and to know exactly what they're getting, how it's working, and what it costs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Join us in building a better way to get featured</h2>
          <button className="shine bg-[#C9A84C] hover:bg-[#E8C878] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_rgba(201,168,76,0.4)]">
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
