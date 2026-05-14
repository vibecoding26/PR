export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030711] pt-20">

      {/* Mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[#6366F1]/[0.08] rounded-full blur-[180px]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/[0.06] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#06B6D4]/[0.05] rounded-full blur-[140px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#030711_80%)]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-24 right-16 w-3 h-3 bg-[#6366F1] rounded-full opacity-60 animate-float blur-[1px]" />
      <div className="absolute top-40 left-20 w-2 h-2 bg-[#06B6D4] rounded-full opacity-50 animate-float delay-300" />
      <div className="absolute bottom-32 right-32 w-2 h-2 bg-[#8B5CF6] rounded-full opacity-40 animate-float delay-500" />
      <div className="absolute bottom-48 left-48 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-float delay-200" />

      {/* Rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-[0.04]">
        <div className="w-full h-full rounded-full border border-[#6366F1] animate-spin-slow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] pointer-events-none opacity-[0.02]">
        <div className="w-full h-full rounded-full border border-[#8B5CF6]" style={{ animation: 'rotate-slow 40s linear infinite reverse' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="animate-fadeIn inline-flex items-center gap-2.5 glass rounded-full px-5 py-2 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]" />
          </span>
          <span className="text-xs text-white/50 tracking-[0.18em] uppercase font-medium">
            PR &amp; Media Placement Platform
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fadeUp delay-100 text-5xl sm:text-6xl lg:text-[80px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-6">
          Get Featured.{' '}
          <span className="text-gradient">Build Authority.</span>
          <br />
          <span className="text-white/90">Track Your PR Growth.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fadeUp delay-200 text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-[1.75] font-normal">
          PrimePressPro helps founders and companies publish powerful PR stories,
          build media credibility, and manage their article journey — all from{' '}
          <span className="text-white/65">one simple dashboard.</span>
        </p>

        {/* CTAs */}
        <div className="animate-fadeUp delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="shine group relative w-full sm:w-auto bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold px-9 py-4 rounded-2xl text-base transition-all duration-300 hover:-translate-y-1 animate-pulse-glow">
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Start Your PR Campaign
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="w-full sm:w-auto glass text-white font-semibold px-9 py-4 rounded-2xl text-base transition-all duration-300 hover:-translate-y-1 hover:bg-[#6366F1]/10">
            View Services
          </button>
        </div>

        {/* Stats row */}
        <div className="animate-fadeUp delay-400 flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { value: '200+', label: 'Founders Served' },
            { value: '98%', label: 'Publish Rate' },
            { value: '3–7', label: 'Days to Live' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="number-font text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/30 mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030711] to-transparent pointer-events-none" />
    </section>
  );
}
