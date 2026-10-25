/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AreasOfSupport } from './components/AreasOfSupport';
import { HowBookingWorks } from './components/HowBookingWorks';
import { TrustAndPrivacy } from './components/TrustAndPrivacy';
import { BookingForm } from './components/BookingForm';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from './constants/booking';

export default function App() {
  const [selectedArea, setSelectedArea] = useState<string>('');

  const scrollToBooking = (areaTitle?: string) => {
    if (areaTitle) {
      setSelectedArea(areaTitle);
    }
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#1B2B4B] flex flex-col font-sans selection:bg-[#57968F]/20 selection:text-[#1B2B4B]">
      {/* Skip to Content for screen reader accessibility */}
      <a
        href="#booking"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#57968F] focus:text-white focus:rounded-md"
      >
        الانتقال المباشر إلى نموذج حجز الجلسة
      </a>

      {/* Sticky Navigation */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {/* Section B: Hero */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onAboutClick={scrollToAbout}
        />

        {/* Section C: About */}
        <About />

        {/* Section D: Areas of Support */}
        <AreasOfSupport
          onSelectArea={(area) => scrollToBooking(area)}
        />

        {/* Section H: How Booking Works */}
        <HowBookingWorks />

        {/* Section G: Trust & Privacy */}
        <TrustAndPrivacy />

        {/* Section E & F: Booking Experience & WhatsApp Flow */}
        <BookingForm preselectedArea={selectedArea} />

        {/* Section I: FAQ */}
        <FAQ />

        {/* Section J: Final CTA */}
        <FinalCTA onBookClick={() => scrollToBooking()} />
      </main>

      {/* Section K: Footer */}
      <Footer />

      {/* Floating Discreet WhatsApp Contact Shortcut */}
      <aside aria-label="زر تواصل سريع عبر واتساب">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-30 flex items-center gap-2 bg-[#57968F] hover:bg-[#39766F] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#57968F]"
          title="تواصل مباشر عبر واتساب"
          aria-label="تواصل مباشر عبر واتساب"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span className="hidden sm:inline-block text-xs font-semibold">
            تواصل عبر واتساب
          </span>
        </a>
      </aside>
    </div>
  );
}
