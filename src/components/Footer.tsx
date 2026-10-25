/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, ArrowUpLeft, ShieldCheck, HelpCircle } from 'lucide-react';
import { BrandEmblem } from './BotanicalElements';
import { BRAND_INFO, WHATSAPP_NUMBER } from '../constants/booking';

interface FooterProps {
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployModal }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'نبذة عنها', href: '#about' },
    { label: 'مجالات الدعم', href: '#services' },
    { label: 'طريقة الحجز', href: '#how-it-works' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'طلب حجز جلسة', href: '#booking' },
  ];

  return (
    <footer className="bg-white border-t border-[#D8C8B7]/60 pt-16 pb-12 text-right text-[#1B2B4B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D8C8B7]/40">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandEmblem className="w-8 h-8" />
              <span className="font-heading font-bold text-2xl text-[#1B2B4B]">
                {BRAND_INFO.name}
              </span>
            </div>

            <p className="text-sm text-[#39766F] font-medium leading-relaxed">
              {BRAND_INFO.designation}
            </p>

            <p className="text-xs sm:text-sm text-[#69756F] leading-relaxed max-w-sm">
              {BRAND_INFO.secondaryMessage}
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#1B2B4B] mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm text-[#69756F]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#57968F] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct WhatsApp & Privacy Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm text-[#1B2B4B] mb-4">
              التواصل والاستفسار
            </h4>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#E5EEE8] hover:bg-[#57968F] hover:text-white text-[#1B2B4B] px-5 py-3 rounded-xl text-sm font-medium transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-[#39766F] group-hover:text-white" />
              <span>تواصل عبر واتساب</span>
              <ArrowUpLeft className="w-4 h-4 mr-auto" />
            </a>

            {/* Privacy notice box */}
            <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#D8C8B7]/40 text-xs text-[#69756F] space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1B2B4B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#39766F]" />
                <span>إشعار الخصوصية</span>
              </div>
              <p className="leading-relaxed">
                يرجى عدم إرسال تفاصيل طبية أو معلومات نفسية حساسة عبر الإنترنت. النموذج مخصص لتنسيق موعد التواصل فقط.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#69756F]">
          <div>
            جميع الحقوق محفوظة © {currentYear} {BRAND_INFO.name}.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenDeployModal}
              className="inline-flex items-center gap-1 text-[#57968F] hover:underline cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>دليل النشر والاستضافة المجانية</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
