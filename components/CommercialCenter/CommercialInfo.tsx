"use client";

import React from "react";
import { FloorData } from "@/data/commercialCenter";

interface CommercialInfoProps {
  floor: FloorData;
}

export default function CommercialInfo({ floor }: CommercialInfoProps) {
  const renderIcon = (index: number) => {
    const commonClass = "w-5 h-5 text-merit-gold";
    switch (index) {
      case 0:
        return (
          <svg className={commonClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 4L9 7" />
          </svg>
        );
      case 1:
        return (
          <svg className={commonClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        );
      case 2:
        return (
          <svg className={commonClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 3:
        return (
          <svg className={commonClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 4:
        return (
          <svg className={commonClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-5V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        );
      default:
        return (
          <svg className={commonClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-6 font-secondary">
      <div>
        <h2 className="text-2xl md:text-3xl font-primary text-merit-gold mb-3 font-bold">
          {floor.fullName}
        </h2>
        <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed mb-6">
          {floor.description}
        </p>

        <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-6">
          {floor.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-2.5">
              <div className="p-1.5 bg-merit-green rounded border border-white/10 mt-0.5">
                {renderIcon(idx)}
              </div>
              <span className="text-white/90 font-light text-xxs md:text-xs leading-tight">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-merit-gold/70 font-semibold tracking-wider uppercase text-xxs mb-4">
          Shop Inventory
        </h3>

        <div className="space-y-4">
          {floor.inventory.roadAccess.length > 0 && (
            <div>
              <h4 className="text-merit-gold font-medium text-xs mb-2">Road Access</h4>
              <div className="space-y-1.5 pl-3 border-l border-merit-gold/30">
                {floor.inventory.roadAccess.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-xs text-white/90">
                    <span className="font-mono">{item.size}</span>
                    <span className="font-light text-white/60">{item.count} Shops</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {floor.inventory.corridorAccess.length > 0 && (
            <div className="pt-2">
              <h4 className="text-merit-gold font-medium text-xs mb-2">Corridor Access</h4>
              <div className="space-y-1.5 pl-3 border-l border-merit-gold/30">
                {floor.inventory.corridorAccess.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-xs text-white/90">
                    <span className="font-mono">{item.size}</span>
                    <span className="font-light text-white/60">{item.count} Shops</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}