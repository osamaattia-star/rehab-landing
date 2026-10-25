/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Award, Building2 } from 'lucide-react';
import { BRAND_INFO } from '../constants/booking';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'clinical-diploma': <GraduationCap className="w-6 h-6 text-[#39766F]" aria-hidden="true" />,
    'certified-coaching': <Award className="w-6 h-6 text-[#39766F]" aria-hidden="true" />,
    'community-leadership': <Building2 className="w-6 h-6 text-[#39766F]" aria-hidden="true" />,
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#E5EEE8]/40 border-y border-[#D8C8B7]/40 relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-right">
          <div className="flex items-center gap-2 mb-3 text-sm font-semibold tracking-wide text-[#39766F]">
            <span className="w-6 h-[1.5px] bg-[#57968F]" aria-hidden="true" />
            <span>نبذة عنها</span>
          </div>

          <h2
            id="about-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#1B2B4B] mb-4"
          >
            {BRAND_INFO.name}
          </h2>

          <p className="text-lg sm:text-xl text-[#39766F] font-medium mb-6">
            {BRAND_INFO.designation}
          </p>

          <p className="text-base sm:text-lg text-[#69756F] leading-relaxed">
            {BRAND_INFO.biography}
          </p>
        </div>

        {/* 3 Information Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRAND_INFO.backgroundBlocks.map((block, index) => (
            <article
              key={block.id}
              className="bg-white rounded-2xl p-7 border border-[#D8C8B7]/60 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Header with icon and unboxed editorial category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E5EEE8] flex items-center justify-center">
                    {iconMap[block.id]}
                  </div>
                  <span className="text-xs font-semibold text-[#69756F]">
                    {`0${index + 1}`} · {block.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#1B2B4B] mb-3">
                  {block.title}
                </h3>

                <p className="text-sm sm:text-base text-[#69756F] leading-relaxed">
                  {block.description}
                </p>
              </div>

              {/* Subtle bottom accent line */}
              <div className="mt-6 pt-4 border-t border-[#D8C8B7]/30 flex items-center justify-between text-xs text-[#39766F] font-medium">
                <span>تأهيل مهني معتمد</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#57968F]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
