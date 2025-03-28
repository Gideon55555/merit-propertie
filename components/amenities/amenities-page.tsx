"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AmenitiesNav } from "@/components/amenities/amenities-nav";
import { AmenitiesContent } from "@/components/amenities/amenities-content";
import { amenitiesData } from "@/components/amenities/amenities-data";

export function AmenitiesPage() {
  const [activeAmenity, setActiveAmenity] = useState(amenitiesData[0].id);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle wheel events for scroll-snap behavior
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 10) return; // Ignore small scrolls

      const direction = e.deltaY > 0 ? "down" : "up";
      setScrollDirection(direction);

      const currentIndex = amenitiesData.findIndex(
        (item) => item.id === activeAmenity
      );
      let nextIndex = currentIndex;

      if (direction === "down" && currentIndex < amenitiesData.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (direction === "up" && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        setActiveAmenity(amenitiesData[nextIndex].id);
        e.preventDefault();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeAmenity]);

  // Handle touch events for mobile
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;

      if (Math.abs(diff) < 20) return; // Ignore small movements

      const direction = diff > 0 ? "down" : "up";
      setScrollDirection(direction);

      const currentIndex = amenitiesData.findIndex(
        (item) => item.id === activeAmenity
      );
      let nextIndex = currentIndex;

      if (direction === "down" && currentIndex < amenitiesData.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (direction === "up" && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        setActiveAmenity(amenitiesData[nextIndex].id);
        e.preventDefault();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [activeAmenity]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col md:flex-row bg-merit-green overflow-hidden">
      <AmenitiesNav
        activeAmenity={activeAmenity}
        setActiveAmenity={setActiveAmenity}
        scrollDirection={scrollDirection}
      />

      <div ref={contentRef} className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAmenity}
            initial={{ opacity: 0, x: scrollDirection === "up" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: scrollDirection === "up" ? 50 : -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full">
            <AmenitiesContent amenityId={activeAmenity} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
