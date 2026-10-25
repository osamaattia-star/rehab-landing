/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HOW_BOOKING_WORKS_STEPS } from '../constants/booking';

export const HowBookingWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-white border-y border-[#D8C8B7]/40 relative"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="flex items-center gap-2 mb-3 text-sm font-semibold tracking-wide text-[#39766F]">
            <span className="w-6 h-[1.5px] bg-[#57968F]" aria-hidden="true" />
            <span>طريقة الحجز</span>
          </div>

          <h2
            id="how-it-works-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#1B2B4B] mb-4"
          >
            كيف تبدأ؟
          </h2>

          <p className="text-base sm:text-lg text-[#69756F]">
            ثلاث خطوات سهلة لتقديم طلبك والتنسيق للجلسة المناسبة.
          </p>
        </div>

        {/* Steps Grid: horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_BOOKING_WORKS_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="relative bg-[#F8F5EF] rounded-2xl p-8 border border-[#D8C8B7]/50 flex flex-col justify-between"
            >
              <div>
                {/* Step indicator number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-extrabold text-3xl text-[#57968F]">
                    {stepItem.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#E5EEE8] flex items-center justify-center text-xs font-semibold text-[#1B2B4B]">
                    خطوة {index + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#1B2B4B] mb-3">
                  {stepItem.title}
                </h3>

                <p className="text-sm sm:text-base text-[#69756F] leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8C8B7]/30 text-xs text-[#39766F] font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#57968F]" />
                <span>إجراء بسيط ومباشر</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
