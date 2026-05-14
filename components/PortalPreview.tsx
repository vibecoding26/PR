const navItems = ['Dashboard', 'My Articles', 'Submit New', 'Media Links', 'Reports', 'Billing'];

const stats = [
  { label: 'Articles Published', value: '12' },
  { label: 'Live Media Links', value: '9' },
  { label: 'Pending Review', value: '2' },
];

const articles = [
  { title: 'Founder Story — TechCo Launch', outlet: 'Google News', status: 'Published' },
  { title: 'Product Launch — SaaS Platform', outlet: 'AP News', status: 'Published' },
  { title: 'Thought Leadership Article', outlet: 'Business Insider', status: 'In Review' },
];

export default function PortalPreview() {
  return (
    <section className="bg-[#0F0F0F] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs text-[#E8231A] tracking-[0.18em] uppercase font-semibold">
            Client Portal
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
            Your PR Hub in One Dashboard
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Submit articles, track publications, and view all your media links
            from one clean interface.
          </p>
        </div>

        {/* Mock dashboard */}
        <div className="bg-[#141414] border border-white/8 rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
          {/* Browser chrome bar */}
          <div className="bg-[#1A1A1A] border-b border-white/5 px-5 py-3.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white/5 rounded-md px-3 py-1.5 text-xs text-white/25 max-w-xs">
                app.primepresspro.com/dashboard
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Sidebar */}
            <div className="hidden md:block bg-[#111111] border-r border-white/5 p-5">
              <div className="text-[10px] text-white/20 uppercase tracking-widest mb-5 font-semibold">
                Menu
              </div>
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className={`px-3 py-2.5 rounded-lg text-xs mb-1 font-medium transition-colors ${
                    i === 0
                      ? 'bg-[#E8231A]/12 text-[#E8231A]'
                      : 'text-white/25'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="md:col-span-3 p-6">
              <p className="text-xs text-white/25 mb-6">
                Welcome back — here is your PR overview
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#1A1A1A] rounded-xl p-4 border border-white/5"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/25 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent articles */}
              <div className="text-[10px] text-white/20 uppercase tracking-widest mb-3 font-semibold">
                Recent Articles
              </div>
              <div className="flex flex-col divide-y divide-white/5">
                {articles.map((article, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                  >
                    <div>
                      <div className="text-white text-sm font-medium">
                        {article.title}
                      </div>
                      <div className="text-white/30 text-xs mt-0.5">
                        {article.outlet}
                      </div>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        article.status === 'Published'
                          ? 'bg-emerald-500/12 text-emerald-400'
                          : 'bg-[#F5E500]/10 text-[#F5E500]'
                      }`}
                    >
                      {article.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
