"use client";

import { motion } from "framer-motion";
import { amenitiesData } from "@/components/amenities/amenities-data";

interface AmenitiesNavProps {
  activeAmenity: string;
  setActiveAmenity: (id: string) => void;
  scrollDirection: "up" | "down" | null;
}

export function AmenitiesNav({
  activeAmenity,
  setActiveAmenity,
  scrollDirection,
}: AmenitiesNavProps) {
  return (
    <nav className="w-full md:w-64 lg:w-80 bg-merit-green/80 backdrop-blur-sm border-r border-white/10 flex-shrink-0">
      <div className="sticky top-0 pt-24 pb-8 px-4 h-screen flex flex-col">
        <h2 className="font-primary text-2xl text-white mb-8 px-4">
          Amenities
        </h2>

        <div className="flex md:block overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x md:snap-none">
          {amenitiesData.map((amenity, index) => {
            const isActive = activeAmenity === amenity.id;

            return (
              <div
                key={amenity.id}
                className="snap-start flex-shrink-0 md:flex-shrink md:w-full">
                <button
                  onClick={() => setActiveAmenity(amenity.id)}
                  className={`
                    relative flex items-center w-auto md:w-full px-6 py-4 rounded-lg
                    transition-all duration-300 text-left
                    ${
                      isActive
                        ? "text-merit-gold font-medium"
                        : "text-white/70 hover:text-white/90"
                    }
                  `}>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-merit-gold rounded-r-full"
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <span className="relative z-10">{amenity.title}</span>

                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-merit-gold/10 rounded-lg"
                      layoutId="activeBg"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-auto pt-8 px-4 hidden md:block">
          <div className="text-white/50 text-sm">
            <p>Scroll or click to navigate through our premium amenities.</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
