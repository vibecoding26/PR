const steps = [
  {
    num: '01',
    title: 'Submit Your Company Details',
    desc: 'Fill in your company info, goals, and what you want to achieve with your PR campaign.',
  },
  {
    num: '02',
    title: 'Choose Your PR Article Type',
    desc: 'Pick from 10 PR article types designed to match your growth stage and target platform.',
  },
  {
    num: '03',
    title: 'Our Team Writes & Reviews',
    desc: 'Our PR writers craft a professional story and send it to you for review and approval.',
  },
  {
    num: '04',
    title: 'Article Submitted for Publication',
    desc: 'Once approved, we submit your article to the target media platform for publication.',
  },
  {
    num: '05',
    title: 'Track Links & Reports',
    desc: 'Access your live publication links and performance reports directly from your dashboard.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0F0F0F] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs text-[#E8231A] tracking-[0.18em] uppercase font-semibold">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
            How It Works
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-base leading-relaxed">
            Simple, done-for-you PR. You focus on your business. We handle the
            media.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col gap-6">
          {/* Vertical connector */}
          <div className="absolute left-5 top-12 bottom-12 w-px bg-white/5 hidden sm:block" />

          {steps.map((step, i) => (
            <div key={i} className="flex gap-5 items-start">
              {/* Step number badge */}
              <div className="relative flex-shrink-0 w-11 h-11 bg-[#141414] border border-[#E8231A]/25 rounded-full flex items-center justify-center z-10">
                <span className="text-[#E8231A] text-xs font-bold tracking-wider">
                  {step.num}
                </span>
              </div>

              {/* Step content */}
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 sm:p-6 flex-1 hover:border-white/10 transition-colors duration-200">
                <h3 className="text-white font-semibold text-base mb-1.5">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
