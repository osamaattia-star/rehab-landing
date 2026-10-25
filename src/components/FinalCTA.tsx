/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpLeft } from 'lucide-react';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section
      className="py-20 md:py-28 bg-[#1B2B4B] text-white relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle organic botanical vector background overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-between">
        <svg
          className="w-96 h-96 -translate-x-12"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" stroke="#57968F" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M100 20 C140 60, 140 140, 100 180" stroke="#E5EEE8" strokeWidth="2" />
          <path d="M100 20 C60 60, 60 140, 100 180" stroke="#E5EEE8" strokeWidth="2" />
        </svg>

        <svg
          className="w-96 h-96 translate-x-12"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="70" stroke="#D8C8B7" strokeWidth="1.5" />
          <path d="M20 100 Q100 20, 180 100 Q100 180, 20 100" stroke="#57968F" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-[#57968F] uppercase">
          <span>خطوة البداية</span>
        </div>

        <h2
          id="final-cta-heading"
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight"
        >
          كل خطوة صغيرة قد تكون بداية مختلفة.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#E5EEE8]/85 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          ابدأ بطلب موعد للاستفسار عن الجلسة المناسبة لك.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#57968F] hover:bg-[#39766F] text-white font-medium text-base sm:text-lg px-9 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>احجز جلستك</span>
            <ArrowUpLeft className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <p className="text-xs text-[#E5EEE8]/60 mt-6">
          أنت تستحق أن تجد مساحة مناسبة للحديث.
        </p>
      </div>
    </section>
  );
};
