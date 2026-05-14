const navItems = ['Dashboard', 'My Articles', 'Submit New', 'Media Links', 'Reports', 'Billing'];

const stats = [
  { label: 'Articles Published', value: '12', change: '+3 this month', up: true },
  { label: 'Live Media Links', value: '9', change: 'All indexed', up: true },
  { label: 'Pending Review', value: '2', change: 'Est. 2 days', up: false },
];

const articles = [
  { title: 'Founder Story — TechCo Launch', outlet: 'Google News', status: 'Published', date: 'May 12' },
  { title: 'Product Launch — SaaS Platform', outlet: 'AP News', status: 'Published', date: 'May 8' },
  { title: 'Thought Leadership Article', outlet: 'Business Insider', status: 'In Review', date: 'May 15' },
];

export default function PortalPreview() {
  return (
    <section className="bg-[#0C0C0C] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs text-[#E8231A] tracking-[0.2em] uppercase font-semibold mb-4">
            <span className="w-6 h-px bg-[#E8231A]" />
            Client Portal
            <span className="w-6 h-px bg-[#E8231A]" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 tracking-[-0.03em]">
            Your PR Hub in <span className="text-gradient">One Dashboard</span>
          </h2>
          <p className="text-white/35 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Submit articles, track publications, and view all your media links from one clean interface.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="relative">
          {/* Glow behind */}
          <div className="absolute inset-0 bg-[#E8231A]/5 blur-[80px] rounded-3xl scale-95" />

          <div className="relative bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
            {/* Browser chrome */}
            <div className="bg-[#161616] border-b border-white/[0.06] px-5 py-3.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/[0.05] border border-white/[0.06] rounded-md px-3 py-1.5 text-xs text-white/25 max-w-xs flex items-center gap-2">
                  <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  app.primepresspro.com/dashboard
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col bg-[#0D0D0D] border-r border-white/[0.05] p-5">
                <div className="text-[9px] text-white/20 uppercase tracking-[0.2em] mb-5 font-bold">Navigation</div>
                {navItems.map((item, i) => (
                  <div
                    key={i}
                    className={`px-3 py-2.5 rounded-xl text-xs mb-1 font-medium transition-colors flex items-center gap-2.5 ${
                      i === 0 ? 'bg-[#E8231A]/12 text-[#E8231A]' : 'text-white/20 hover:text-white/40'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#E8231A]' : 'bg-white/10'}`} />
                    {item}
                  </div>
                ))}
                <div className="mt-auto pt-8">
                  <div className="bg-[#E8231A]/8 border border-[#E8231A]/15 rounded-xl p-3">
                    <div className="text-[10px] text-[#E8231A]/80 font-semibold mb-1">Growth PR</div>
                    <div className="text-[10px] text-white/25">Active plan · Renews Jun 1</div>
                  </div>
                </div>
              </div>

              {/* Main */}
              <div className="md:col-span-3 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white text-sm font-semibold">Welcome back 👋</p>
                    <p className="text-white/30 text-xs mt-0.5">Here is your PR overview for May 2026</p>
                  </div>
                  <button className="bg-[#E8231A] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-[0_4px_14px_rgba(232,35,26,0.35)]">
                    + Submit Article
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-[#161616] border border-white/[0.05] rounded-xl p-4">
                      <div className="number-font text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] text-white/25 mt-0.5 leading-tight">{stat.label}</div>
                      <div className={`text-[10px] mt-2 font-medium ${stat.up ? 'text-emerald-400' : 'text-[#F5E500]'}`}>{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Articles */}
                <div className="text-[9px] text-white/20 uppercase tracking-[0.2em] mb-3 font-bold">Recent Articles</div>
                <div className="flex flex-col divide-y divide-white/[0.04]">
                  {articles.map((article, i) => (
                    <div key={i} className="flex items-center justify-between py-3 group">
                      <div>
                        <div className="text-white text-xs font-semibold group-hover:text-white/80 transition-colors">{article.title}</div>
                        <div className="text-white/25 text-[10px] mt-0.5 flex items-center gap-2">
                          {article.outlet}
                          <span className="text-white/10">·</span>
                          {article.date}
                        </div>
                      </div>
                      <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold flex-shrink-0 ${
                        article.status === 'Published'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-[#F5E500]/8 text-[#F5E500] border border-[#F5E500]/20'
                      }`}>
                        {article.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
