"use client";

import React from "react";
import Image from "next/image";
import { constructionProgressData } from "@/data/commercialCenter";

export default function Construction() {
  const { lastUpdate, status, description, image, vectors } =
    constructionProgressData;

  const getVectorIcon = (index: number) => {
    const commonClass = "w-5 h-5 text-merit-gold";
    switch (index) {
      case 0:
        return (
          <svg
            className={commonClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        );
      case 1:
        return (
          <svg
            className={commonClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        );
      default:
        return (
          <svg
            className={commonClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        );
    }
  };

  return (
    <div className="w-full bg-merit-green/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-secondary">
      <div className="lg:col-span-5 space-y-4">
        <div className="relative w-full h-[200px] rounded-md overflow-hidden border border-white/10">
          <Image
            src={image}
            alt="Teklehaymanot Structural Framework Progress Update"
            fill
            className="object-cover object-center brightness-90 filter contrast-105"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-primary text-merit-gold font-bold">
            Construction Progress
          </h3>
          <p className="text-white/70 font-light text-xs leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="lg:col-span-3 flex flex-col justify-center border-y lg:border-y-0 lg:border-x border-white/10 py-6 lg:py-0 lg:px-6 space-y-3 h-full">
        <div>
          <span className="text-xxs tracking-wider uppercase text-white/50 block mb-0.5">
            Latest Update
          </span>
          <span className="text-lg md:text-xl font-primary font-bold text-white block">
            {lastUpdate}
          </span>
        </div>

        <div>
          <span className="text-xxs tracking-wider uppercase text-white/50 block mb-1.5">
            Status
          </span>
          <span className="inline-flex items-center px-3 py-1 text-xxs font-light text-merit-gold bg-merit-green border border-merit-gold/30 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-merit-gold mr-2 animate-pulse" />
            {status}
          </span>
        </div>
      </div>

      <div className="lg:col-span-4 space-y-4">
        <span className="text-xxs tracking-wider uppercase text-merit-gold/70 font-semibold block">
          Monitoring Vectors
        </span>

        <div className="space-y-4">
          {vectors.map((vector, index) => (
            <div key={index} className="flex items-start space-x-3 group">
              <div className="p-2 bg-merit-green border border-white/10 group-hover:border-merit-gold/40 rounded shrink-0 transition-colors duration-300">
                {getVectorIcon(index)}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-white text-xs font-medium tracking-wide">
                  {vector.label}
                </h4>
                <p className="text-white/60 font-light text-xxs leading-normal">
                  {vector.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
