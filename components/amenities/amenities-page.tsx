"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AmenitiesContent } from "@/components/amenities/amenities-content";
import { amenitiesData } from "@/components/amenities/amenities-data";
import "./styles.css";
import { cn } from "@/lib/utils";

export function AmenitiesPage() {
  const [activeAmenity, setActiveAmenity] = useState(amenitiesData[0].id);
  const sidebarRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            console.log(sectionId);

            window.history.replaceState(null, "", `#${sectionId}`);

            setActiveAmenity(sectionId);

            const index = amenitiesData.findIndex(
              (amenity) => amenity.id === sectionId
            );
            if (sidebarRefs.current[index]) {
              sidebarRefs.current[index].scrollIntoView({
                behavior: "smooth",
                inline: "center", // Center horizontally in the sidebar
                block: "nearest", // Prevent vertical scrolling of the whole page
              });
            }
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    // Observe all sections
    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => observer.observe(section));

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    // Cleanup: Disconnect the observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [sidebarRefs]); // Dependency array
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the bottom of the container is below the bottom half of the screen
        const isBelowHalfScreen = rect.bottom > windowHeight / 2;

        if (isBelowHalfScreen) {
          // Scroll the container to stick to the bottom of the screen
          container.scrollIntoView({
            behavior: "smooth",
            block: "end", // Stick to the bottom
          });
        } else {
          // Scroll the container all the way to the top
          container.scrollIntoView({
            behavior: "smooth",
            block: "start", // Scroll to the top
          });
        }
      }

      // if(activeAmenity === amenitiesData[amenitiesData.length - 1].id) {
      //   document.body.style.overflowY = "auto";
      // } else {
      //   document.body.style.overflowY = "hidden";
      // }
    };

    // Set up scroll and resize event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Clean up the event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  // // Handle wheel events for scroll-snap behavior
  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     if (Math.abs(e.deltaY) < 10) return; // Ignore small scrolls

  //     const direction = e.deltaY > 0 ? "down" : "up";
  //     setScrollDirection(direction);

  //     const currentIndex = amenitiesData.findIndex(
  //       (item) => item.id === activeAmenity
  //     );
  //     let nextIndex = currentIndex;

  //     if (direction === "down" && currentIndex < amenitiesData.length - 1) {
  //       nextIndex = currentIndex + 1;
  //     } else if (direction === "up" && currentIndex > 0) {
  //       nextIndex = currentIndex - 1;
  //     }

  //     if (nextIndex !== currentIndex) {
  //       setActiveAmenity(amenitiesData[nextIndex].id);
  //       e.preventDefault();
  //     }
  //   };

  //   const container = containerRef.current;
  //   if (container) {
  //     container.addEventListener("wheel", handleWheel, { passive: false });
  //   }

  //   return () => {
  //     if (container) {
  //       container.removeEventListener("wheel", handleWheel);
  //     }
  //   };
  // }, [activeAmenity]);

  // Handle touch events for mobile
  // useEffect(() => {
  //   let touchStartY = 0;

  //   const handleTouchStart = (e: TouchEvent) => {
  //     touchStartY = e.touches[0].clientY;
  //   };

  //   const handleTouchMove = (e: TouchEvent) => {
  //     const touchY = e.touches[0].clientY;
  //     const diff = touchStartY - touchY;

  //     if (Math.abs(diff) < 20) return; // Ignore small movements

  //     const direction = diff > 0 ? "down" : "up";
  //     setScrollDirection(direction);

  //     const currentIndex = amenitiesData.findIndex(
  //       (item) => item.id === activeAmenity
  //     );
  //     let nextIndex = currentIndex;

  //     if (direction === "down" && currentIndex < amenitiesData.length - 1) {
  //       nextIndex = currentIndex + 1;
  //     } else if (direction === "up" && currentIndex > 0) {
  //       nextIndex = currentIndex - 1;
  //     }

  //     if (nextIndex !== currentIndex) {
  //       setActiveAmenity(amenitiesData[nextIndex].id);
  //       e.preventDefault();
  //     }
  //   };

  //   const container = containerRef.current;
  //   if (container) {
  //     container.addEventListener("touchstart", handleTouchStart, {
  //       passive: false,
  //     });
  //     container.addEventListener("touchmove", handleTouchMove, {
  //       passive: false,
  //     });
  //   }

  //   return () => {
  //     if (container) {
  //       container.removeEventListener("touchstart", handleTouchStart);
  //       container.removeEventListener("touchmove", handleTouchMove);
  //     }
  //   };
  // }, [activeAmenity]);

  return (
    <div className="md:min-h-screen flex flex-col md:flex-row bg-merit-green overflow-hidden">
      {/* Sidebar */}
      <div className="sticky-container md:border-r md:border-merit-gold/10 flex flex-col z-10 md:flex-row md:min-h-screen relative">
        {/* <nav className="w-full md:w-64 lg:w-80 bg-merit-green/80 backdrop-blur-sm border-r border-white/10 flex-shrink-0"> */}
        <div className="w-full flex flex-col md:pt-28 md:pb-8 py-3 md:py-4 px-4 md:h-screen items-center fixed z-50 md:sticky left-0 bottom-0 md:w-[20rem] backdrop-blur">
          {/* sticky top-0 flex flex-col */}
          <h2 className="font-primary hidden md:block font-b text-2xl text-white px-4">Amenities</h2>
          {/* <div className="w-full flex items-center absolute md:sticky left-0 z-10 bottom-0 md:w-[30rem] backdrop-blur"> */}
          <div
            className="flex items-center overflow-x-auto w-full md:h-screen px-3 md:pb-2 shadow-sm md:p-6"
            style={{ scrollbarWidth: "none" }}>
            <div className="relative h-fit">
              <div className="absolute left-0 -top-2 md:top-0 bottom-0 w-full h-[1px] md:w-0.5 md:h-auto bg-merit-gold/10"></div>
              <nav className="z-10 space-x-2 md:space-x-0 md:space-y-4 flex md:flex-col">
                {amenitiesData.map((amenity, index) => (
                  <a
                    key={amenity.id}
                    ref={(el) => {
                      sidebarRefs.current[index] = el || null;
                    }}
                    href={`#${amenity.id}`}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-md text-md font-medium transition-colors relative",
                      activeAmenity === amenity.id
                        ? "text-merit-gold font-bold"
                        : "text-white hover:text-white/70"
                    )}>
                    {amenity.id.charAt(0).toUpperCase() +
                      amenity.id.slice(1).replace("-", " ")}
                    {activeAmenity === amenity.id && (
                      <>
                        {/* Desktop */}
                        <motion.div
                          layoutId="desktopActiveIndicator"
                          className="hidden md:block absolute md:left-0 right-0 md:top-0 bottom-0 w-full h-1 md:w-1 bg-merit-gold rounded-full"
                          initial={{ height: 0 }}
                          animate={{ height: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Mobile */}
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="md:hidden block absolute md:left-0 right-0 md:top-0 bottom-0 w-full h-1 md:w-1 bg-merit-gold rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </>
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          {/* </div> */}
          <div className="mt-auto pt-8 px-4 hidden md:block">
            <div className="text-white/70 text-sm">
              <p>Scroll or click to navigate through our premium amenities.</p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="scroll-snap-container snap-y snap-mandatory overflow-y-scroll h-screen">
        <AnimatePresence mode="wait">
          {amenitiesData.map((amenity) => (
            // <motion.div
            //   key={`section-${amenity.id}`}
            //   initial={{ opacity: 0 }}
            //   animate={{ opacity: 1, x: 0 }}
            //   exit={{ opacity: 0 }}
            //   transition={{ duration: 0.5, ease: "easeInOut" }}
            //   className="h-full">
            <AmenitiesContent
              key={`section-${amenity.id}`}
              amenityId={amenity.id}
            />
            // </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
