/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, MessageSquare, CheckCircle } from 'lucide-react';
import { TRUST_PILLARS } from '../constants/booking';

export const TrustAndPrivacy: React.FC = () => {
  const icons: Record<string, React.ReactNode> = {
    'clear-steps': <CheckCircle className="w-6 h-6 text-[#39766F]" aria-hidden="true" />,
    'privacy-focus': <ShieldCheck className="w-6 h-6 text-[#39766F]" aria-hidden="true" />,
    'direct-contact': <MessageSquare className="w-6 h-6 text-[#39766F]" aria-hidden="true" />,
  };

  return (
    <section className="py-20 md:py-24 relative bg-[#F8F5EF]" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-right">
          <div className="flex items-center gap-2 mb-3 text-sm font-semibold tracking-wide text-[#39766F]">
            <span className="w-6 h-[1.5px] bg-[#57968F]" aria-hidden="true" />
            <span>الوضوح والاحترام</span>
          </div>

          <h2
            id="trust-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#1B2B4B] mb-4"
          >
            تجربة تبدأ بالوضوح والاهتمام
          </h2>

          <p className="text-base sm:text-lg text-[#69756F]">
            مبادئ تحكم التواصل وتقديم الدعم الإرشادي بمهنية واهتمام بالخصوصية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-7 border border-[#D8C8B7]/60 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E5EEE8] flex items-center justify-center mb-6">
                  {icons[pillar.id]}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1B2B4B] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[#69756F] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8C8B7]/30 text-xs text-[#69756F]">
                مساحة آمنة ومريحة للحديث
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
