/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Copy, Check, Rocket, Globe, Terminal } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2B4B]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#D8C8B7] shadow-2xl max-h-[90vh] overflow-y-auto text-right">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D8C8B7]/40 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5EEE8] flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[#39766F]" />
            </div>
            <div>
              <h3 id="modal-title" className="font-heading font-bold text-lg sm:text-xl text-[#1B2B4B]">
                دليل النشر والاستضافة المجانية
              </h3>
              <p className="text-xs text-[#69756F]">
                طريقة رفع الموقع مجانًا على GitHub Pages أو Netlify / Vercel
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#69756F] hover:text-[#1B2B4B] hover:bg-[#F8F5EF] rounded-lg transition-colors cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-[#1B2B4B]">
          {/* Method 1: GitHub Pages */}
          <div className="p-5 rounded-2xl bg-[#F8F5EF] border border-[#D8C8B7]/60">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-bold text-base text-[#1B2B4B] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#57968F]" />
                الخيار 1: النشر المجاني عبر GitHub Pages
              </span>
              <span className="text-xs text-[#69756F] font-mono">مجاني 100%</span>
            </div>
            <p className="text-xs text-[#69756F] leading-relaxed mb-4">
              يمكنك رفع الكود المصدري في مستودع عام على GitHub واستخدام GitHub Actions للبناء والنشر التلقائي، أو رفع مجلد <code className="bg-white px-1.5 py-0.5 rounded border border-[#D8C8B7]/50">dist</code> مباشرة.
            </p>

            <div className="bg-[#1B2B4B] text-white p-3.5 rounded-xl font-mono text-xs flex items-center justify-between" dir="ltr">
              <span>npm run build</span>
              <button
                type="button"
                onClick={() => copyCode('npm run build', 1)}
                className="text-[#E5EEE8] hover:text-white p-1 rounded cursor-pointer"
                aria-label="نسخ الأمر"
              >
                {copiedIndex === 1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-[#69756F] mt-2">
              الأمر ينتج ملفات الموقع الثابتة بالكامل داخل مجلد <code className="bg-white px-1 rounded">dist</code> الجاهز للنشر الفوري.
            </p>
          </div>

          {/* Method 2: Vercel / Netlify */}
          <div className="p-5 rounded-2xl bg-[#F8F5EF] border border-[#D8C8B7]/60">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-bold text-base text-[#1B2B4B] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#57968F]" />
                الخيار 2: النشر بضغطة زر عبر Vercel أو Netlify
              </span>
              <span className="text-xs text-[#69756F]">الأسرع والأسهل</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-[#69756F] leading-relaxed pr-2">
              <li>اربط حساب GitHub الخاص بك مع موقع Vercel.com أو Netlify.com.</li>
              <li>اختر مستودع هذا المشروع.</li>
              <li>سيتم اكتشاف إعدادات Vite تلقائيًا والضغط على <strong className="text-[#1B2B4B]">Deploy</strong>.</li>
              <li>تحصل فورًا على رابط HTTPS مجاني سريع مع دعم كامل للنطاقات المخصصة (Custom Domain).</li>
            </ol>
          </div>

          {/* Verification reminder */}
          <div className="p-4 rounded-xl bg-[#E5EEE8]/70 border border-[#57968F]/30 text-xs text-[#1B2B4B] leading-relaxed">
            <strong className="text-[#39766F]">تنبيه هام قبل النشر:</strong> تأكد من مراجعة وتحديث رقم واتساب في ملف <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#D8C8B7]">src/constants/booking.ts</code> إذا تغير رقم التواصل في أي وقت.
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#D8C8B7]/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl bg-[#57968F] hover:bg-[#39766F] text-white font-medium text-sm transition-colors cursor-pointer"
          >
            فهمت ذلك
          </button>
        </div>
      </div>
    </div>
  );
};
