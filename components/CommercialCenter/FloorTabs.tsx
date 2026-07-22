"use client";

import React from "react";
import { FloorData } from "@/data/commercialCenter";

interface FloorTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  tabs: FloorData[];
}

export default function FloorTabs({
  activeTab,
  setActiveTab,
  tabs,
}: FloorTabsProps) {
  return (
    <div className="w-full bg-merit-green/50 backdrop-blur-sm border border-white/10 rounded-lg p-2 md:p-3 overflow-x-auto scrollbar-none">
      <div className="flex items-center min-w-[600px] md:min-w-full justify-between gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-4 rounded-md transition-all duration-300 relative group cursor-pointer ${
                isActive
                  ? "bg-merit-green/50 backdrop-blur-sm border border-merit-gold shadow-lg shadow-black/20"
                  : "border border-transparent hover:bg-merit-green/30 hover:border-white/20"
              }`}
            >
              {isActive && (
                <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-merit-gold to-transparent" />
              )}

              <span
                className={`text-lg md:text-xl font-primary font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-merit-gold"
                    : "text-white/60 group-hover:text-white"
                }`}
              >
                {tab.shortName}
              </span>

              <span
                className={`text-xxs md:text-xs tracking-wider uppercase font-secondary font-light transition-colors duration-300 mt-0.5 ${
                  isActive
                    ? "text-merit-gold/80"
                    : "text-white/40 group-hover:text-white/70"
                }`}
              >
                {tab.shortName === "SB" ||
                tab.shortName === "LG" ||
                tab.shortName === "UG"
                  ? `${tab.shortName === "SB" ? "Semi" : tab.shortName === "LG" ? "Lower" : "Upper"} Ground`
                  : `Floor ${tab.shortName}`}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
