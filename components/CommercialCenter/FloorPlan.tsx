"use client";

import React from "react";
import Image from "next/image";

interface FloorPlanProps {
  imageSrc: string;
  altText: string;
}

export default function FloorPlan({ imageSrc, altText }: FloorPlanProps) {
  return (
    <div className="relative w-full h-full min-h-[420px] rounded-md overflow-hidden group font-secondary">
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-merit-gold/40 z-10 pointer-events-none transition-all duration-300 group-hover:top-3 group-hover:left-3" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-merit-gold/40 z-10 pointer-events-none transition-all duration-300 group-hover:bottom-3 group-hover:right-3" />

      <Image
        src={imageSrc}
        alt={`${altText} Interactive Visual Layout`}
        fill
        sizes="(max-w: 1024px) 100vw, 60vw"
        className="object-cover object-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-merit-green/50 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="absolute bottom-4 left-4 bg-merit-green/90 backdrop-blur-md border border-merit-gold/30 px-3 py-1.5 rounded text-xxs font-light tracking-widest text-merit-gold uppercase transition-all duration-300 group-hover:border-merit-gold">
        Architectural Render View
      </div>
    </div>
  );
}