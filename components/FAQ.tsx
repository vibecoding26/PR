'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is PrimePressPro?',
    a: 'PrimePressPro is a PR and media placement service that helps founders, startups, and brands get published on major news platforms like Google News, AP News, and Business Insider.',
  },
  {
    q: 'How long does it take to get published?',
    a: 'Most articles are published within 3–7 business days after your approval. Turnaround depends on the media platform and article type selected.',
  },
  {
    q: 'Do I need to write the article myself?',
    a: 'No. Our team writes the article based on your submitted details. You review and approve before it goes to publication.',
  },
  {
    q: 'Will the article stay live permanently?',
    a: 'Yes. All published articles are permanent placements on the target media platform. You will receive the live link once published.',
  },
  {
    q: 'Can I cancel my membership anytime?',
    a: 'Yes. You can cancel your membership at any time. Any articles already in progress will be completed before cancellation takes effect.',
  },
  {
    q: 'What types of businesses do you serve?',
    a: 'We work with founders, SaaS companies, ecommerce brands, service businesses, agencies, and startups at any growth stage.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0F0F0F] py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs text-[#E8231A] tracking-[0.18em] uppercase font-semibold">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#141414] border border-white/5 rounded-xl overflow-hidden hover:border-white/8 transition-colors duration-200"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8231A]/50"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
