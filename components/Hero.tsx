export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E8231A]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#F5E500]/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-[#E8231A] rounded-full" />
          <span className="text-xs text-white/50 tracking-[0.15em] uppercase">
            PR &amp; Media Placement Platform
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
          Get Featured.{' '}
          <span className="text-[#E8231A]">Build Authority.</span>
          <br />
          Track Your PR Growth.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          PrimePressPro helps founders and companies publish powerful PR stories,
          build media credibility, and manage their article journey from one
          simple dashboard.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-[#E8231A] hover:bg-[#c91d15] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(232,35,26,0.3)] hover:shadow-[0_12px_40px_rgba(232,35,26,0.4)]">
            Start Your PR Campaign
          </button>
          <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5">
            View Services
          </button>
        </div>

        {/* Social proof */}
        <p className="mt-10 text-sm text-white/25">
          Trusted by 200+ founders, startups, and growing brands
        </p>
      </div>
    </section>
  );
}
