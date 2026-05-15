'use client';

import { useState } from 'react';

const faqs = [
  { q: 'What is PrimePressPro?', a: 'PrimePressPro is a PR and media placement service that helps founders, startups, and brands get published on major news platforms like Google News, AP News, and Business Insider.' },
  { q: 'How long does it take to get published?', a: 'Most articles are published within 3–7 business days after your approval. Turnaround depends on the media platform and article type selected.' },
  { q: 'Do I need to write the article myself?', a: 'No. Our team writes the article based on your submitted details. You review and approve before it goes to publication.' },
  { q: 'Will the article stay live permanently?', a: 'Yes. All published articles are permanent placements on the target media platform. You will receive the live link once published.' },
  { q: 'Can I cancel my membership anytime?', a: 'Yes. You can cancel your membership at any time. Any articles already in progress will be completed before cancellation takes effect.' },
  { q: 'What types of businesses do you serve?', a: 'We work with founders, SaaS companies, ecommerce brands, service businesses, agencies, and startups at any growth stage.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#030711] py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs text-[#6366F1] tracking-[0.2em] uppercase font-semibold mb-4">
            <span className="w-6 h-px bg-[#6366F1]" />FAQ<span className="w-6 h-px bg-[#6366F1]" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 tracking-[-0.03em]">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-[#0C1429] border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-[#6366F1]/30 shadow-[0_0_30px_rgba(99,102,241,0.08)]' : 'border-[#6366F1]/10 hover:border-[#6366F1]/20'}`}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm sm:text-base leading-snug">{faq.q}</span>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-[#6366F1] border-[#6366F1] rotate-45' : 'border-white/15 bg-white/[0.03]'}`}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-6 pb-5 text-white/40 text-sm leading-relaxed border-t border-[#6366F1]/8 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
