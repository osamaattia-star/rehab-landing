/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  HeartPulse,
  Users,
  HeartHandshake,
  Sparkles,
  Compass,
  ArrowUpLeft,
} from 'lucide-react';
import { SUPPORT_AREAS, SupportArea } from '../constants/booking';

interface AreasOfSupportProps {
  onSelectArea: (areaTitle: string) => void;
}

export const AreasOfSupport: React.FC<AreasOfSupportProps> = ({ onSelectArea }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'mental-support':
        return <HeartPulse className="w-6 h-6 text-[#39766F]" aria-hidden="true" />;
      case 'family-guidance':
        return <Users className="w-6 h-6 text-[#39766F]" aria-hidden="true" />;
      case 'marital-counseling':
        return <HeartHandshake className="w-6 h-6 text-[#39766F]" aria-hidden="true" />;
      case 'adolescent-guidance':
        return <Compass className="w-6 h-6 text-[#39766F]" aria-hidden="true" />;
      case 'self-development':
        return <Sparkles className="w-6 h-6 text-[#39766F]" aria-hidden="true" />;
      default:
        return <HeartPulse className="w-6 h-6 text-[#39766F]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="flex items-center gap-2 mb-3 text-sm font-semibold tracking-wide text-[#39766F]">
            <span className="w-6 h-[1.5px] bg-[#57968F]" aria-hidden="true" />
            <span>مجالات الدعم</span>
          </div>

          <h2
            id="services-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#1B2B4B] mb-4"
          >
            مساحة تناسب احتياجك
          </h2>

          <p className="text-base sm:text-lg text-[#69756F] leading-relaxed">
            يمكنك الاستفسار عن مجال الدعم المناسب لك وطلب جلسة وفقًا للخدمات المتاحة.
          </p>
        </div>

        {/* 5 Distinctive Service Cards (Grid layout: 3 columns top row, 2 columns bottom row centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUPPORT_AREAS.map((area: SupportArea, index: number) => (
            <div
              key={area.id}
              className={`bg-white rounded-2xl p-8 border border-[#D8C8B7]/60 shadow-xs hover:shadow-md hover:border-[#57968F]/40 transition-all flex flex-col justify-between group ${
                index === 3 ? 'lg:col-span-1 lg:col-start-1' : ''
              } ${index === 4 ? 'lg:col-span-1' : ''}`}
            >
              <div>
                {/* Icon & Unboxed Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E5EEE8] flex items-center justify-center group-hover:bg-[#57968F]/15 transition-colors">
                    {getIcon(area.id)}
                  </div>
                  <span className="text-xs font-semibold text-[#69756F]">
                    {area.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#1B2B4B] mb-3 group-hover:text-[#39766F] transition-colors">
                  {area.title}
                </h3>

                <p className="text-sm sm:text-base text-[#69756F] leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Action link that scrolls to booking */}
              <div className="pt-4 border-t border-[#D8C8B7]/30 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectArea(area.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#57968F] hover:text-[#39766F] transition-colors focus-visible:ring-1 focus-visible:ring-[#57968F] rounded py-1 px-1.5 cursor-pointer"
                >
                  <span>استفسر عن الجلسات</span>
                  <ArrowUpLeft className="w-4 h-4 rtl:rotate-0 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform" />
                </button>
                <span className="text-xs text-[#D8C8B7]">0{index + 1}</span>
              </div>
            </div>
          ))}

          {/* Supportive note card in grid */}
          <div className="bg-[#E5EEE8]/60 rounded-2xl p-8 border border-[#D8C8B7]/40 flex flex-col justify-center text-right">
            <h4 className="font-heading font-bold text-lg text-[#1B2B4B] mb-2">
              غير متأكد من المجال المناسب؟
            </h4>
            <p className="text-sm text-[#69756F] leading-relaxed mb-4">
              يمكنك كتابة طلبك العام، وسيتم التنسيق معك لتحديد الجلسة والدعم الأنسب وفقًا لاحتياجاتك.
            </p>
            <button
              type="button"
              onClick={() => onSelectArea('استفسار عام')}
              className="text-xs font-semibold text-[#39766F] hover:underline self-start cursor-pointer"
            >
              ابدأ بطلب استفسار عام ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
