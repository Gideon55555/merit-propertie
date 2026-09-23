"use client";

import React from "react";

interface View360BadgeProps {
  className?: string;
}

export function View360Badge({ className = "" }: View360BadgeProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Ambient Pulsing Radar Rings */}
      <div className="absolute inset-0 rounded-full bg-merit-gold/15 animate-ping duration-1000 pointer-events-none scale-90" />
      <div className="absolute -inset-3 rounded-full bg-merit-gold/10 blur-md pointer-events-none" />

      <svg
        viewBox="0 0 200 200"
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 drop-shadow-[0_0_30px_rgba(192,178,131,0.6)] select-none transition-transform duration-500 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular path for curved text (radius: 73, center: 100, 100) */}
          <path
            id="orbitTextPath"
            d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
          <linearGradient id="badgeGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E4BE" />
            <stop offset="45%" stopColor="#C0B283" />
            <stop offset="100%" stopColor="#9C8758" />
          </linearGradient>
          <radialGradient id="glassCoreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1C5E57" />
            <stop offset="80%" stopColor="#154843" />
            <stop offset="100%" stopColor="#0B2724" />
          </radialGradient>
        </defs>

        {/* Outer Orbit Track (dashed ring) */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="url(#badgeGoldGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          className="animate-[spin_24s_linear_infinite] opacity-60 origin-center"
        />

        {/* Rotating Circular Text "360° VIEW • IMMERSIVE VIRTUAL TOUR •" */}
        <g className="animate-[spin_14s_linear_infinite] origin-center">
          <text
            fill="#F5E4BE"
            fontSize="10.5"
            fontWeight="800"
            letterSpacing="2.8px"
            className="uppercase font-mono tracking-widest drop-shadow"
          >
            <textPath href="#orbitTextPath" startOffset="0%">
              • 360° VIEW • VIRTUAL TOUR • 360° VIEW •
            </textPath>
          </text>
        </g>

        {/* Inner Solid Glass Sphere */}
        <circle
          cx="100"
          cy="100"
          r="54"
          fill="url(#glassCoreGrad)"
          stroke="url(#badgeGoldGrad)"
          strokeWidth="2.5"
          className="shadow-inner"
        />

        {/* Orbit Curved Arrows (Top and Bottom) */}
        <g className="transition-transform duration-700 group-hover:rotate-180 origin-center">
          {/* Top Arrow Arc */}
          <path
            d="M 66 84 A 42 42 0 0 1 134 84"
            stroke="url(#badgeGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Top Arrowhead pointing right */}
          <polygon points="133,78 142,85 132,91" fill="#F5E4BE" />

          {/* Bottom Arrow Arc */}
          <path
            d="M 134 116 A 42 42 0 0 1 66 116"
            stroke="url(#badgeGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Bottom Arrowhead pointing left */}
          <polygon points="67,122 58,115 68,109" fill="#F5E4BE" />
        </g>

        {/* Center Typography: "360°" */}
        <text
          x="100"
          y="100"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#FFFFFF"
          fontSize="22"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.5px"
          className="drop-shadow-md select-none"
        >
          360°
        </text>

        {/* Center Subtext: "VIEW" */}
        <text
          x="100"
          y="120"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#DFC38E"
          fontSize="8.5"
          fontWeight="800"
          letterSpacing="2px"
          className="uppercase select-none"
        >
          VIEW
        </text>
      </svg>
    </div>
  );
}
