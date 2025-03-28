"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building,
  Car,
  Cctv,
  ConciergeBell,
  CookingPot,
  Dog,
  Droplet,
  Dumbbell,
  Flower,
  House,
  Plug,
  PlugZap,
  Trash,
  Truck,
  Volleyball,
  WashingMachine,
  WavesLadder,
} from "lucide-react";
import { ViewMore } from "./view-more";
// import Image from "next/image";

export function AmenitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const amenities = [
    { name: "GYMNASIUM", icon: <Dumbbell /> },
    { name: "PARKING STATIONS", icon: <Car /> },
    { name: "STANDBY GENERATOR", icon: <Plug /> },
    { name: "COMMUNAL KITCHEN", icon: <CookingPot /> },
    { name: "CAR LIFT", icon: <Truck /> },
    { name: "SWIMMING POOL", icon: <WavesLadder /> },
    { name: "KIDS PLAYGROUND", icon: <Volleyball /> },
    { name: "GARBAGE CHUTES", icon: <Trash /> },
    { name: "24/7 SECURITY", icon: <Cctv /> },
    { name: "RECEPTION AREA", icon: <ConciergeBell /> },
    { name: "OUTDOOR GARDEN", icon: <Flower /> },
    { name: "PET-FRIENDLY AREA", icon: <Dog /> },
    { name: "LAUNDRY ROOM", icon: <WashingMachine /> },
    { name: "HIGH-END ELEVATORS", icon: <Building /> },
    { name: "EV CHARGING STATIONS", icon: <PlugZap /> },
    { name: "MULTIPURPOSE HALL", icon: <House /> },
    { name: "WATER FILTERATION SYSTEM", icon: <Droplet /> },
  ];

  return (
    <section id="amenities" className="merit-green-section py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* <div className="relative h-full">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl h-full">
              <Image
                alt="Merit Real Estate Amenities"
                src="/images/amenities-section.jpg"
                height={500}
                width={500}
                className="w-full h-auto"
              />
            </div>
          </div> */}

          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-10">
              <h2 className="text-7xl md:text-9xl font-serif font-bold text-center text-white opacity-20 leading-tight mb-8">
                Amenities and Facilities
                {/* <br /> */}
                {/* <br /> */}
              </h2>

              <div className="space-y-6 text-white/90">
                <p className="text-center">
                  Whether you are a young professional, a growing family, or
                  someone seeking a serene retreat in the middle of the city,
                  our apartments are designed to cater to your unique needs.
                </p>
                <p className="text-center">
                  Living at Merit Properties means embracing a lifestyle that is
                  as dynamic as the city itself.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 md:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}>
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center">
                  <div className="amenity-item">
                    <div className="amenity-icon flex items-center justify-center">
                      {amenity.icon}
                    </div>
                    <span className="amenity-text">{amenity.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <ViewMore href="/amenities">View More</ViewMore>
          </div>
        </div>
      </div>
    </section>
  );
}
