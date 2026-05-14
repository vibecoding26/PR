export default function CallToAction() {
  return (
    <section className="bg-[#030711] py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] via-[#4F46E5] to-[#7C3AED]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.3),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundSize: '128px 128px' }} />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-black/10 rounded-full pointer-events-none" />

          <div className="relative z-10 text-center px-8 py-20 md:py-24">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full" />
              <span className="text-xs text-white/80 tracking-[0.15em] uppercase font-medium">Start Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-[-0.03em] leading-tight">
              Ready to Build Your <br className="hidden sm:block" />Media Presence?
            </h2>
            <p className="text-white/65 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Join hundreds of founders and companies getting featured on top media platforms. Start your PR campaign today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="shine group bg-white text-[#6366F1] font-extrabold px-10 py-4 rounded-2xl text-base transition-all duration-200 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.35)] flex items-center gap-2 justify-center">
                Start Your PR Campaign
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-10 py-4 rounded-2xl text-base transition-all duration-200 hover:-translate-y-1">
                View Services
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/50 text-sm">
              {['No contracts', 'Cancel anytime', '3–7 day delivery'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
