"use client";

import React from "react";
import { FloorData } from "@/data/commercialCenter";

interface ShopStatsProps {
  floor: FloorData;
}

export default function ShopStats({ floor }: ShopStatsProps) {
  const roadCount = floor.inventory.roadAccess.reduce((acc, item) => acc + item.count, 0);
  const corridorCount = floor.inventory.corridorAccess.reduce((acc, item) => acc + item.count, 0);
  const totalShopsOnFloor = roadCount + corridorCount;

  const allSizes = [
    ...floor.inventory.roadAccess.map(i => parseInt(i.size)),
    ...floor.inventory.corridorAccess.map(i => parseInt(i.size))
  ];
  const minSize = allSizes.length ? Math.min(...allSizes) : 11;
  const maxSize = allSizes.length ? Math.max(...allSizes) : 32;

  const stats = [
    {
      value: `${totalShopsOnFloor}`,
      label: "Shops Available",
      sub: `On ${floor.shortName === "SB" || floor.shortName === "LG" || floor.shortName === "UG" ? floor.fullName : `Floor ${floor.shortName}`}`,
      icon: (
        <svg className="w-6 h-6 text-merit-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      value: minSize === maxSize ? `${minSize} m²` : `${minSize} - ${maxSize} m²`,
      label: "Available Sizes",
      sub: "Flexible configurations",
      icon: (
        <svg className="w-6 h-6 text-merit-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8V4m0 0h4M4 4l5 5m11-5V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      ),
    },
    {
      value: "Prime Location",
      label: "Teklehaymanot, Addis Ababa",
      sub: "High visibility & accessibility",
      icon: (
        <svg className="w-6 h-6 text-merit-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      value: roadCount > 0 && corridorCount > 0 ? "Road & Corridor Access" : roadCount > 0 ? "Road Access" : "Corridor Access",
      label: "Floor Connectivity",
      sub: "Optimized retail exposure",
      icon: (
        <svg className="w-6 h-6 text-merit-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 4L9 7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-merit-green/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-white/10 font-secondary">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="flex items-center space-x-4 px-2 py-4 sm:p-4 lg:p-6 first:pt-0 sm:first:pt-4 lg:first:pl-2 transition-all duration-300 hover:bg-merit-green/40"
        >
          <div className="p-3 bg-merit-green rounded-full border border-white/10 shadow-inner shrink-0">
            {stat.icon}
          </div>

          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-primary font-bold text-merit-gold tracking-tight leading-tight">
              {stat.value}
            </span>
            <span className="text-white text-xs font-medium tracking-wide mt-0.5">
              {stat.label}
            </span>
            <span className="text-white/60 text-xxs font-light mt-0.5">
              {stat.sub}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}