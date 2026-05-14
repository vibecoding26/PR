'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#membership' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030711]/85 backdrop-blur-2xl border-b border-[#6366F1]/10 shadow-[0_1px_40px_rgba(99,102,241,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="PrimePressPro"
              width={140}
              height={44}
              className="object-contain transition-opacity duration-200 group-hover:opacity-80"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-white/50 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-[#6366F1]/8 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-[#6366F1]/60 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-white/50 hover:text-white transition-all duration-200 px-4 py-2 rounded-lg hover:bg-[#6366F1]/8">
              Login
            </button>
            <button className="shine relative bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-px shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.55)]">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white/70 hover:text-white p-2 -mr-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-[#030711]/95 backdrop-blur-2xl border-t border-[#6366F1]/10 px-4 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 hover:text-white hover:bg-[#6366F1]/8 transition-colors px-4 py-3 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-3 bg-[#6366F1] text-white text-sm font-bold px-5 py-3 rounded-xl transition-colors text-center shadow-[0_4px_20px_rgba(99,102,241,0.35)]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
