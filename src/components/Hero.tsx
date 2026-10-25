/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpLeft, ChevronDown } from 'lucide-react';
import { HeroBotanicalIllustration } from './BotanicalElements';

interface HeroProps {
  onBookClick: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onAboutClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle organic background wash */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#E5EEE8]/50 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#D8C8B7]/20 blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            {/* Clean unboxed eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-wide text-[#39766F]">
              <span className="w-6 h-[1.5px] bg-[#57968F]" aria-hidden="true" />
              <span>مساحة داعمة لك ولأسرتك</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1B2B4B] tracking-tight leading-[1.25] sm:leading-[1.2] mb-6"
            >
              دعمك خطوة
              <br />
              <span className="text-[#39766F] relative inline-block">
                نحو حياة أفضل
                <svg
                  className="absolute -bottom-2 right-0 w-full h-3 text-[#D8C8B7]"
                  viewBox="0 0 280 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C60 3 180 3 277 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#69756F] leading-relaxed max-w-2xl mb-8 font-normal">
              مساحة داعمة تساعدك على فهم التحديات، والتعامل معها بوعي، واتخاذ خطوات أكثر وضوحًا نحو توازن أفضل في حياتك وعلاقاتك.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 bg-[#57968F] hover:bg-[#39766F] text-white font-medium text-base sm:text-lg px-8 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>احجز جلستك</span>
                <ArrowUpLeft className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onAboutClick}
                className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-[#E5EEE8]/80 text-[#1B2B4B] border border-[#D8C8B7] font-medium text-base sm:text-lg px-6 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                <span>تعرّف عليها</span>
                <ChevronDown className="w-4 h-4 text-[#69756F]" aria-hidden="true" />
              </button>
            </div>

            {/* Supporting Note */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#69756F]">
              <span className="w-2 h-2 rounded-full bg-[#57968F]" aria-hidden="true" />
              <span>ابدأ بطلب بسيط للاستفسار عن الجلسات المتاحة.</span>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroBotanicalIllustration className="w-full max-w-[460px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
