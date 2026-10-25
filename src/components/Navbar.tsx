/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpLeft } from 'lucide-react';
import { BrandEmblem } from './BotanicalElements';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'نبذة عنها', href: '#about' },
    { label: 'مجالات الدعم', href: '#services' },
    { label: 'طريقة الحجز', href: '#how-it-works' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-xs border-b border-[#D8C8B7]/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Emblem */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#57968F] rounded-lg p-1 transition-opacity"
            aria-label="رحاب أبو الفتوح - الانتقال إلى بداية الصفحة"
          >
            <BrandEmblem className="w-9 h-9 transition-transform group-hover:rotate-12 duration-500" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl sm:text-2xl text-[#1B2B4B] tracking-tight leading-none">
                رحاب أبو الفتوح
              </span>
              <span className="text-[11px] sm:text-xs text-[#69756F] font-medium tracking-normal mt-1 hidden sm:inline-block">
                أخصائية الصحة النفسية والإرشاد الأسري
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="التنقل الرئيسي">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#1B2B4B]/80 hover:text-[#57968F] transition-colors py-1 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#57968F] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center gap-2 bg-[#57968F] hover:bg-[#39766F] text-white font-medium text-sm sm:text-base px-4 sm:px-6 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>احجز جلستك</span>
              <ArrowUpLeft className="w-4 h-4 rtl:rotate-0" aria-hidden="true" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1B2B4B] hover:text-[#57968F] hover:bg-[#E5EEE8]/60 rounded-lg transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[65px] bg-[#F8F5EF]/98 backdrop-blur-lg z-50 flex flex-col px-6 py-8 border-t border-[#D8C8B7]/30 animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto"
        >
          <div className="flex flex-col gap-5 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2.5 border-b border-[#D8C8B7]/30 text-[#1B2B4B] font-medium hover:text-[#57968F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#57968F] hover:bg-[#39766F] text-white font-medium text-base py-3.5 px-6 rounded-xl shadow-sm transition-all"
            >
              <span>احجز جلستك</span>
              <ArrowUpLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <p className="text-center text-xs text-[#69756F] mt-3">
              تواصل مباشر واستفسار سريع عبر واتساب
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
