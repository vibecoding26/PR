'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="PrimePressPro"
              width={130}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Services', href: '#services' },
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Pricing', href: '#membership' },
              { label: 'FAQ', href: '#faq' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-white/60 hover:text-white transition-colors duration-200 px-4 py-2">
              Login
            </button>
            <button className="bg-[#E8231A] hover:bg-[#c91d15] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px shadow-[0_4px_14px_rgba(232,35,26,0.3)]">
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/5 px-4 py-5 flex flex-col gap-4">
          {[
            { label: 'Services', href: '#services' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Pricing', href: '#membership' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-2 bg-[#E8231A] hover:bg-[#c91d15] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors text-center">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
