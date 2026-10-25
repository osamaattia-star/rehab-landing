/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Send,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants/booking';

// Verify this number before publishing the website.
const ACTIVE_WHATSAPP_NUMBER = WHATSAPP_NUMBER;

interface BookingFormProps {
  preselectedArea?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ preselectedArea = '' }) => {
  const [sessionType, setSessionType] = useState<'أونلاين' | 'حضوري'>('أونلاين');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState<string>('مرن حسب المتاح');
  const [contactMethod, setContactMethod] = useState<'واتساب' | 'مكالمة هاتفية'>('واتساب');
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [consentGiven, setConsentGiven] = useState(false);

  // Validation & status
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'blocked' | null;
    generatedUrl: string;
    messageText: string;
  }>({
    type: null,
    generatedUrl: '',
    messageText: '',
  });
  const [copied, setCopied] = useState(false);

  // Min date today
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (preselectedArea) {
      setSelectedArea(preselectedArea);
    }
  }, [preselectedArea]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = 'يرجى إدخال الاسم الكريم.';
    } else if (fullName.trim().length < 3) {
      errs.fullName = 'يرجى إدخال الاسم كاملاً (3 أحرف على الأقل).';
    }

    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'يرجى إدخال رقم الهاتف للتواصل.';
    } else {
      // Basic international or local phone check (at least 8 digits)
      const cleaned = phoneNumber.replace(/[\s\-\+]/g, '');
      if (cleaned.length < 8 || !/^\d+$/.test(cleaned)) {
        errs.phoneNumber = 'يرجى إدخال رقم هاتف صحيح.';
      }
    }

    if (!preferredDate) {
      errs.preferredDate = 'يرجى اختيار اليوم المفضل.';
    } else if (preferredDate < todayStr) {
      errs.preferredDate = 'لا يمكن اختيار تاريخ سابق.';
    }

    if (!consentGiven) {
      errs.consent = 'يجب الموافقة على استخدام بيانات التواصل لمعالجة طلبك.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build the formatted Arabic WhatsApp message
    const messageLines = [
      'مرحبًا، أرغب في إرسال طلب حجز جلسة مع رحاب أبو الفتوح.',
      '',
      `الاسم: ${fullName.trim()}`,
      `رقم التواصل: ${phoneNumber.trim()}`,
      `نوع الجلسة: ${sessionType}`,
      selectedArea ? `مجال الدعم: ${selectedArea}` : null,
      `اليوم المفضل: ${preferredDate}`,
      `الفترة المفضلة: ${preferredPeriod}`,
      `طريقة التواصل: ${contactMethod}`,
      '',
      'أعلم أن هذا طلب مبدئي وأن الموعد يحتاج إلى تأكيد.',
    ].filter(Boolean) as string[];

    const finalMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(finalMessage);
    const waUrl = `https://wa.me/${ACTIVE_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Attempt to open WhatsApp directly
    const openedWindow = window.open(waUrl, '_blank', 'noopener,noreferrer');

    // If popup was blocked or mobile behavior requires explicit tap, show direct action card
    if (!openedWindow || openedWindow.closed || typeof openedWindow.closed === 'undefined') {
      setStatusMessage({
        type: 'blocked',
        generatedUrl: waUrl,
        messageText: finalMessage,
      });
    } else {
      setStatusMessage({
        type: 'success',
        generatedUrl: waUrl,
        messageText: finalMessage,
      });
    }
  };

  const handleCopyMessage = () => {
    if (statusMessage.messageText) {
      navigator.clipboard.writeText(statusMessage.messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="booking"
      className="py-20 md:py-28 bg-[#F8F5EF] relative"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-right mb-12">
          <div className="flex items-center gap-2 mb-3 text-sm font-semibold tracking-wide text-[#39766F]">
            <span className="w-6 h-[1.5px] bg-[#57968F]" aria-hidden="true" />
            <span>طلب حجز جلسة</span>
          </div>

          <h2
            id="booking-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#1B2B4B] mb-4"
          >
            ابدأ بخطوة بسيطة
          </h2>

          <p className="text-base sm:text-lg text-[#69756F] leading-relaxed">
            أرسل طلبك بالتفاصيل الأساسية، وسيتم التواصل معك لتأكيد إمكانية تحديد الموعد المناسب.
          </p>
        </div>

        {/* The Card Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8C8B7]/70 shadow-sm relative overflow-hidden">
          {/* Privacy Reminder Banner */}
          <div className="mb-8 p-4 rounded-xl bg-[#E5EEE8]/50 border border-[#D8C8B7]/40 flex items-start gap-3 text-right">
            <ShieldAlert className="w-5 h-5 text-[#39766F] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-[#1B2B4B] leading-relaxed">
              <strong>تنبيه الخصوصية:</strong> يرجى عدم إرسال تفاصيل طبية أو معلومات نفسية حساسة عبر نموذج طلب الحجز.
            </p>
          </div>

          <form onSubmit={handleBookingSubmit} noValidate className="space-y-7 text-right">
            {/* 1. نوع الجلسة (أونلاين / حضوري) */}
            <div>
              <label className="block text-sm font-semibold text-[#1B2B4B] mb-2.5">
                نوع الجلسة
              </label>
              <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#F8F5EF] rounded-xl border border-[#D8C8B7]/40">
                <button
                  type="button"
                  onClick={() => setSessionType('أونلاين')}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    sessionType === 'أونلاين'
                      ? 'bg-white text-[#1B2B4B] shadow-xs border border-[#57968F]/30 font-semibold'
                      : 'text-[#69756F] hover:text-[#1B2B4B]'
                  }`}
                  aria-pressed={sessionType === 'أونلاين'}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${sessionType === 'أونلاين' ? 'bg-[#57968F]' : 'bg-transparent border border-[#69756F]'}`} />
                  <span>جلسة أونلاين</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSessionType('حضوري')}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    sessionType === 'حضوري'
                      ? 'bg-white text-[#1B2B4B] shadow-xs border border-[#57968F]/30 font-semibold'
                      : 'text-[#69756F] hover:text-[#1B2B4B]'
                  }`}
                  aria-pressed={sessionType === 'حضوري'}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${sessionType === 'حضوري' ? 'bg-[#57968F]' : 'bg-transparent border border-[#69756F]'}`} />
                  <span>جلسة حضورية</span>
                </button>
              </div>
              <p className="text-xs text-[#69756F] mt-1.5">
                يمكنك اختيار جلسة أونلاين أو حضورية وفقًا للخدمات المتاحة.
              </p>
            </div>

            {/* Optional Pre-selected Area of Support */}
            {selectedArea && (
              <div className="p-3 bg-[#F8F5EF] rounded-xl border border-[#D8C8B7]/40 flex items-center justify-between text-xs text-[#1B2B4B]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#39766F]">المجال المختار:</span>
                  <span>{selectedArea}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArea('')}
                  className="text-[#69756F] hover:text-[#1B2B4B] underline cursor-pointer"
                >
                  تغيير
                </button>
              </div>
            )}

            {/* 2 & 3. الاسم ورقم الهاتف */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                  الاسم الكريم <span className="text-rose-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="أدخل اسمك الكريم"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#F8F5EF]/40 text-[#1B2B4B] placeholder:text-[#69756F]/60 text-sm focus:bg-white transition-colors ${
                    errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#D8C8B7] focus:border-[#57968F]'
                  }`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                  رقم الهاتف للتواصل <span className="text-rose-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  dir="ltr"
                  required
                  placeholder="+20 100 000 0000"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#F8F5EF]/40 text-[#1B2B4B] placeholder:text-[#69756F]/60 text-sm text-right focus:bg-white transition-colors ${
                    errors.phoneNumber ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#D8C8B7] focus:border-[#57968F]'
                  }`}
                  aria-invalid={!!errors.phoneNumber}
                  aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                />
                {errors.phoneNumber && (
                  <p id="phoneNumber-error" className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>
            </div>

            {/* 4 & 5. اليوم المفضل والفترة المفضلة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                  اليوم المفضل <span className="text-rose-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  min={todayStr}
                  required
                  value={preferredDate}
                  onChange={(e) => {
                    setPreferredDate(e.target.value);
                    if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#F8F5EF]/40 text-[#1B2B4B] text-sm focus:bg-white transition-colors ${
                    errors.preferredDate ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#D8C8B7] focus:border-[#57968F]'
                  }`}
                  aria-invalid={!!errors.preferredDate}
                  aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
                />
                {errors.preferredDate && (
                  <p id="preferredDate-error" className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="preferredPeriod" className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                  الفترة المفضلة
                </label>
                <select
                  id="preferredPeriod"
                  value={preferredPeriod}
                  onChange={(e) => setPreferredPeriod(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#D8C8B7] bg-[#F8F5EF]/40 text-[#1B2B4B] text-sm focus:bg-white focus:border-[#57968F] transition-colors"
                >
                  <option value="مرن حسب المتاح">مرن حسب المتاح</option>
                  <option value="صباحًا">صباحًا</option>
                  <option value="ظهرًا">ظهرًا</option>
                  <option value="مساءً">مساءً</option>
                </select>
              </div>
            </div>

            {/* 6. طريقة التواصل المفضلة */}
            <div>
              <label className="block text-sm font-semibold text-[#1B2B4B] mb-2.5">
                طريقة التواصل المفضلة
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setContactMethod('واتساب')}
                  className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    contactMethod === 'واتساب'
                      ? 'bg-[#E5EEE8] border-[#57968F] text-[#1B2B4B] font-semibold'
                      : 'bg-[#F8F5EF]/40 border-[#D8C8B7] text-[#69756F] hover:text-[#1B2B4B]'
                  }`}
                  aria-pressed={contactMethod === 'واتساب'}
                >
                  <span>واتساب</span>
                </button>

                <button
                  type="button"
                  onClick={() => setContactMethod('مكالمة هاتفية')}
                  className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    contactMethod === 'مكالمة هاتفية'
                      ? 'bg-[#E5EEE8] border-[#57968F] text-[#1B2B4B] font-semibold'
                      : 'bg-[#F8F5EF]/40 border-[#D8C8B7] text-[#69756F] hover:text-[#1B2B4B]'
                  }`}
                  aria-pressed={contactMethod === 'مكالمة هاتفية'}
                >
                  <span>مكالمة هاتفية</span>
                </button>
              </div>
            </div>

            {/* 7. Consent checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(e) => {
                    setConsentGiven(e.target.checked);
                    if (errors.consent) setErrors({ ...errors, consent: '' });
                  }}
                  className="mt-1 w-5 h-5 rounded border-[#D8C8B7] text-[#57968F] focus:ring-[#57968F] cursor-pointer"
                />
                <span className="text-xs sm:text-sm text-[#1B2B4B] leading-relaxed">
                  أوافق على استخدام بيانات التواصل التي أدخلتها للرد على طلب الحجز.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.consent}</span>
                </p>
              )}
            </div>

            {/* Required Notice */}
            <div className="p-3.5 rounded-xl bg-[#F8F5EF] border border-[#D8C8B7]/50 text-xs text-[#69756F] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#39766F] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                إرسال الطلب لا يعني تأكيد الموعد. سيتم التواصل معك لتأكيد التوفر والتفاصيل.
              </span>
            </div>

            {/* Submit CTA */}
            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#57968F] hover:bg-[#39766F] text-white font-medium text-base sm:text-lg flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>احجز جلستك</span>
                <Send className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
              </button>
            </div>
          </form>

          {/* Fallback / Status Feedback Box (Never claims confirmed, truthfully guides WhatsApp flow) */}
          {statusMessage.type && (
            <div className="mt-8 p-6 rounded-2xl bg-[#E5EEE8] border border-[#57968F]/30 animate-in fade-in duration-300">
              <div className="flex items-start gap-3 text-right">
                <Check className="w-5 h-5 text-[#39766F] shrink-0 mt-1" />
                <div className="space-y-3 w-full">
                  <h4 className="font-heading font-bold text-base text-[#1B2B4B]">
                    تم تجهيز رسالة طلب الحجز بنجاح
                  </h4>
                  <p className="text-xs sm:text-sm text-[#69756F] leading-relaxed">
                    تم إنشاء نص الرسالة المنسق. يمكنك الانتقال إلى محادثة واتساب لإرسالها مباشرة، وسيتم التواصل معك لمراجعة التوفر وتأكيد التفاصيل.
                  </p>

                  {/* Actions: Direct WhatsApp Link and Copy Message */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={statusMessage.generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#57968F] hover:bg-[#39766F] text-white font-medium text-sm py-2.5 px-5 rounded-xl transition-colors cursor-pointer"
                    >
                      <span>الانتقال إلى واتساب</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F8F5EF] text-[#1B2B4B] border border-[#D8C8B7] font-medium text-sm py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>تم نسخ النص</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#69756F]" />
                          <span>نسخ نص الرسالة</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Message preview snippet */}
                  <div className="mt-3 p-3 bg-white/70 rounded-lg border border-[#D8C8B7]/40 text-xs font-mono text-[#1B2B4B] whitespace-pre-wrap">
                    {statusMessage.messageText}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
