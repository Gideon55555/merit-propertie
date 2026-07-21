"use client";

import React, { useState } from "react";
import Image from "next/image";
import { floorTabsData } from "@/data/commercialCenter";
import FloorTabs from "./FloorTabs";
import CommercialInfo from "./CommercialInfo";
import FloorPlan from "./FloorPlan";
import ShopStats from "./ShopStats";
// import Construction from "./Construction";
import CTA from "./CTA";

export default function CommercialCenter() {
  const [activeTab, setActiveTab] = useState(floorTabsData[0].id);
  const currentFloorData =
    floorTabsData.find((tab) => tab.id === activeTab) || floorTabsData[0];

  return (
    <section className="w-full bg-merit-green text-white overflow-hidden font-secondary">
      {/* Hero Section Wrapper */}
      <div className="relative w-full min-h-[50vh] lg:min-h-[65vh] flex flex-col justify-between px-6 py-12 md:px-12 lg:px-20 z-10">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/amenities/hero.jpg"
            alt="Merit Commercial Center Exterior"
            fill
            priority
            className="object-cover object-center opacity-40 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-merit-green/60 via-merit-green/40 to-merit-green" />
        </div>

        {/* Hero Copywriting */}
        <div className="max-w-4xl mt-12 space-y-4">
          <span className="text-merit-gold tracking-widest text-xs uppercase font-semibold font-secondary">
            Premium Business Location
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-primary text-merit-gold leading-tight font-normal">
            Commercial Spaces <br />
            <span className="text-white">Designed for Business Success</span>
          </h1>
          <p className="text-white/80 font-secondary font-light max-w-2xl leading-relaxed">
            Located in the heart of Teklehaymanot, this dynamic district stands
            as one of the city's most vibrant commercial hubs. Known for its
            constant flow of people, diverse businesses, and strong economic
            activity, Teklehaymanot offers unmatched visibility and
            accessibility for any commercial investment.
          </p>
        </div>
      </div>

      {/* Interactive Hub Layer */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto space-y-6 pb-20">
        <FloorTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={floorTabsData}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Block: Core Specs and Inventory Counts */}
          <div className="lg:col-span-5 bg-merit-green/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between space-y-8">
            <CommercialInfo floor={currentFloorData} />
          </div>

          {/* Right Block: Dynamic Floor Render Showcase */}
          <div className="lg:col-span-7 bg-merit-green/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden p-2 flex items-center justify-center min-h-[400px]">
            <FloorPlan
              imageSrc={currentFloorData.image}
              altText={currentFloorData.fullName}
            />
          </div>
        </div>

        <ShopStats floor={currentFloorData} />
        {/* <Construction /> */}
        <CTA />
      </div>
    </section>
  );
}
