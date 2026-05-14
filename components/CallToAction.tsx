export default function CallToAction() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#E8231A] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/6 rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/12 rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to Build Your Media Presence?
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join hundreds of founders and companies getting featured on top
              media platforms. Start your PR campaign today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#E8231A] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:bg-white/95">
                Start Your PR Campaign
              </button>
              <button className="bg-white/10 hover:bg-white/18 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 border border-white/20">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
