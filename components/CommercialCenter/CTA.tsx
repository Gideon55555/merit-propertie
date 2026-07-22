"use client";

import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative w-full bg-[#FDFCF8] from-merit-green to-merit-green/80 border border-white/10 rounded-lg p-8 md:p-12 overflow-hidden text-center flex flex-col items-center justify-center space-y-6 group font-secondary">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-merit-gold/5 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />

      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-merit-gold/30 pointer-events-none" />
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-merit-gold/30 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-merit-gold/30 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-merit-gold/30 pointer-events-none" />

      <div className="max-w-2xl space-y-2 z-10">
        <span className="text-merit-gold text-xxs md:text-xs font-semibold tracking-widest uppercase font-secondary">
          Exclusive Investment Opportunity
        </span>
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-merit-green mb-8 leading-[1.1]">
          Establish Your Business in the <br className="hidden sm:inline" />
          <span className="text-merit-gold">Heart of Teklehaymanot</span>
        </h2>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed font-sans">
          Secure your premium retail or office space today. Schedule a private
          site layout walkthrough or download our comprehensive technical
          blueprint catalog.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10 pt-2">
        {/* Tour Booking Link */}
        <Link
          href="#contact"
          className="w-full sm:w-auto px-6 py-3 bg-merit-gold hover:bg-merit-gold/90 font-medium text-base rounded transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/btn cursor-pointer font-secondary no-underline"
        >
          <span>Schedule a Commercial Tour</span>
          <svg
            className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

        {/* Functional Download Brochure Link */}
        <a
          href="/documents/New Green Village Floor plan.pdf"
          download="Merit_Commercial_Center_Brochure.pdf"
          className="w-full sm:w-auto px-6 py-3 bg-transparent text-merit-gold border border-merit-gold text-base rounded transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer font-secondary decoration-none"
        >
          <span>Download Brochure</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
