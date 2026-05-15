const steps = [
  {
    num: '01',
    title: 'Submit Your Company Details',
    desc: 'Fill in your company info, goals, and what you want to achieve with your PR campaign.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7l5-5h11a2 2 0 012 2v14a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M14 2v5h5M9 13h6M9 17h4" /></svg>,
  },
  {
    num: '02',
    title: 'Choose Your PR Article Type',
    desc: 'Pick from 10 PR article types designed to match your growth stage and target platform.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  },
  {
    num: '03',
    title: 'Our Team Writes & Reviews',
    desc: 'Our PR writers craft a professional story and send it to you for review and approval.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  },
  {
    num: '04',
    title: 'Article Submitted for Publication',
    desc: 'Once approved, we submit your article to the target media platform for publication.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
  },
  {
    num: '05',
    title: 'Track Links & Reports',
    desc: 'Access your live publication links and performance reports directly from your dashboard.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#060B1A] py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs text-[#6366F1] tracking-[0.2em] uppercase font-semibold mb-4">
            <span className="w-6 h-px bg-[#6366F1]" />The Process<span className="w-6 h-px bg-[#6366F1]" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 tracking-[-0.03em]">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-white/35 mt-5 max-w-lg mx-auto text-base leading-relaxed">
            Simple, done-for-you PR. You focus on building. We handle the media.
          </p>
        </div>

        <div className="relative flex flex-col gap-4">
          <div className="absolute left-[22px] top-12 bottom-12 w-px bg-gradient-to-b from-[#6366F1]/40 via-[#8B5CF6]/20 to-transparent hidden sm:block" />
          {steps.map((step, i) => (
            <div key={i} className="group flex gap-5 items-start">
              <div className="relative flex-shrink-0 w-11 h-11 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/8 flex items-center justify-center z-10 group-hover:bg-[#6366F1]/20 group-hover:border-[#6366F1]/60 transition-all duration-300">
                <span className="text-[#6366F1]">{step.icon}</span>
              </div>
              <div className="shine flex-1 bg-[#0C1429] border border-[#6366F1]/10 rounded-2xl p-5 sm:p-6 group-hover:border-[#6366F1]/25 transition-all duration-300 group-hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-sm sm:text-base">{step.title}</h3>
                  <span className="number-font text-[10px] text-white/15 font-bold tracking-widest">{step.num}</span>
                </div>
                <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
