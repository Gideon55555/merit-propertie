"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { ViewMore } from "./view-more";

export function ChampioningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="merit-light-section py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}>
            <h2 className="text-7xl md:text-9xl font-serif font-bold leading-tight mb-8">
              Championing
              <br />
              Excellence
            </h2>

            <p className="mb-8">
              At Merit Real Estate, we believe that exceptional living spaces
              should be accessible to all. Our commitment to excellence drives
              us to create properties that combine innovative design, quality
              construction, and strategic locations at competitive prices.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Quality Construction",
                "Strategic Locations",
                "Innovative Design",
                "Competitive Pricing",
                "Sustainable Features",
                "Customer-Centric Approach",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2">
                  <div className="bg-merit-gold/30 p-1 rounded-full">
                    <Check className="h-4 w-4 text-merit-gold" />
                  </div>
                  <span className="">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/championing-section.jpg"
                height={500}
                width={500}
                alt="Merit Real Estate Excellence"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-merit-gold/20 rounded-lg" />
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-merit-green/10 rounded-lg" />
          </motion.div>
        </div>
        <div className="w-full mt-10 flex justify-end">
          <ViewMore href="/properties">View More</ViewMore>
        </div>
      </div>
    </section>
  );
}
