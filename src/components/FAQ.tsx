/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../constants/booking';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#E5EEE8]/30 border-y border-[#D8C8B7]/40 relative"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-right mb-14">
          <div className="flex items-center gap-2 mb-3 text-sm font-semibold tracking-wide text-[#39766F]">
            <span className="w-6 h-[1.5px] bg-[#57968F]" aria-hidden="true" />
            <span>الأسئلة الشائعة</span>
          </div>

          <h2
            id="faq-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#1B2B4B] mb-4"
          >
            إجابات عن استفساراتك
          </h2>

          <p className="text-base sm:text-lg text-[#69756F]">
            كل ما تحتاج لمعرفته حول طريقة طلب الجلسة وخطوات التواصل.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#D8C8B7]/60 overflow-hidden transition-shadow hover:shadow-xs"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-5 px-6 sm:px-8 text-right flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#1B2B4B] hover:text-[#57968F] transition-colors focus-visible:ring-2 focus-visible:ring-[#57968F] cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-[#E5EEE8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#57968F] text-white' : 'text-[#1B2B4B]'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`px-6 sm:px-8 transition-all duration-200 ease-in-out text-right ${
                    isOpen ? 'pb-6 pt-1 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden py-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-[#69756F] leading-relaxed border-t border-[#D8C8B7]/30 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
