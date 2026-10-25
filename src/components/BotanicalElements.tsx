/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * Refined botanical circular emblem for the brand wordmark
 */
export const BrandEmblem: React.FC<{ className?: string; size?: number }> = ({
  className = "w-8 h-8",
  size = 32,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" stroke="#57968F" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="24" cy="24" r="17" fill="#E5EEE8" fillOpacity="0.6" />
      {/* Central botanical shoot */}
      <path
        d="M24 33C24 23 24 16 24 13"
        stroke="#1B2B4B"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M24 23C27 21 30 22 30 24C30 26 27 27 24 26"
        stroke="#57968F"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="#57968F"
        fillOpacity="0.2"
      />
      <path
        d="M24 19C20.5 17 18 18 18 20C18 22 21 23 24 22"
        stroke="#39766F"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="#39766F"
        fillOpacity="0.15"
      />
      <circle cx="24" cy="13" r="2.5" fill="#1B2B4B" />
    </svg>
  );
};

/**
 * Editorial Hero Composition: Layered organic geometry, delicate botanical line art,
 * warm ivory, pale sage, deep navy, and teal accents.
 */
export const HeroBotanicalIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Decorative background ambient circles */}
      <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#E5EEE8]/80 blur-2xl -z-10 animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute w-[240px] h-[240px] rounded-full bg-[#D8C8B7]/30 blur-xl top-4 right-6 -z-10 pointer-events-none" />

      {/* Main Vector Art container */}
      <svg
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[460px] md:max-w-[500px] h-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient id="sageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5EEE8" />
            <stop offset="100%" stopColor="#d2e3d8" />
          </linearGradient>
          <linearGradient id="ivoryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8F5EF" />
          </linearGradient>
          <linearGradient id="tealGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#39766F" />
            <stop offset="100%" stopColor="#57968F" />
          </linearGradient>
        </defs>

        {/* Large harmonious organic backdrop */}
        <path
          d="M 270 50 C 410 50, 480 140, 470 280 C 460 410, 390 490, 270 480 C 140 470, 70 400, 80 260 C 90 130, 160 50, 270 50 Z"
          fill="url(#sageGrad)"
          stroke="#D8C8B7"
          strokeWidth="1.2"
        />

        {/* Secondary asymmetrical warm ivory disc */}
        <ellipse
          cx="290"
          cy="260"
          rx="170"
          ry="180"
          fill="url(#ivoryGrad)"
          stroke="#57968F"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Fine concentric balance rings */}
        <circle cx="250" cy="240" r="130" stroke="#1B2B4B" strokeWidth="0.8" strokeOpacity="0.25" />
        <circle cx="250" cy="240" r="85" stroke="#D8C8B7" strokeWidth="1.2" />

        {/* Delicate botanical branches & leaves */}
        <g stroke="#1B2B4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Main stem curving upward with grace */}
          <path d="M 230 420 C 235 340, 260 250, 285 140" />

          {/* Leaf 1 (Left low) */}
          <path
            d="M 240 370 C 190 355, 175 320, 195 310 C 220 300, 245 330, 245 345"
            fill="#57968F"
            fillOpacity="0.18"
          />

          {/* Leaf 2 (Right mid) */}
          <path
            d="M 256 315 C 310 305, 335 270, 315 255 C 290 240, 265 275, 262 290"
            fill="#39766F"
            fillOpacity="0.2"
          />

          {/* Leaf 3 (Left high) */}
          <path
            d="M 270 240 C 220 220, 210 185, 230 175 C 255 165, 275 195, 275 215"
            fill="#E5EEE8"
            stroke="#39766F"
          />

          {/* Leaf 4 (Right upper) */}
          <path
            d="M 280 180 C 330 160, 345 130, 325 120 C 300 110, 285 140, 283 160"
            fill="#57968F"
            fillOpacity="0.25"
          />

          {/* Crown budding leaf */}
          <path
            d="M 285 140 C 275 105, 290 85, 295 80 C 305 90, 310 115, 285 140"
            fill="url(#tealGrad)"
          />
        </g>

        {/* Delicate golden/beige sun-like sphere */}
        <circle cx="340" cy="180" r="16" fill="#D8C8B7" fillOpacity="0.65" stroke="#1B2B4B" strokeWidth="1" />
        <circle cx="180" cy="310" r="8" fill="#57968F" fillOpacity="0.4" />
        <circle cx="370" cy="330" r="12" fill="#E5EEE8" stroke="#57968F" strokeWidth="1.2" />

        {/* Minimal geometric balance line */}
        <line x1="160" y1="420" x2="380" y2="420" stroke="#1B2B4B" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="6 4" />
        <circle cx="230" cy="420" r="4" fill="#1B2B4B" />
        <circle cx="310" cy="420" r="3" fill="#57968F" />

        {/* Poetic minimal inscription tag */}
        <g transform="translate(140, 440)">
          <rect x="0" y="0" width="260" height="38" rx="8" fill="#FFFFFF" stroke="#D8C8B7" strokeWidth="1" />
          <text
            x="130"
            y="23"
            textAnchor="middle"
            fill="#1B2B4B"
            fontSize="12.5"
            fontFamily="Alexandria, Tajawal, sans-serif"
            fontWeight="500"
          >
            مساحة هادئة للوعي والتوازن
          </text>
        </g>
      </svg>
    </div>
  );
};
