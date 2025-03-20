"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function PrefaceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };

  return (
    <section id="preface" className="merit-green-section py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          {/* <Badge className="bg-merit-gold/20 text-merit-gold hover:bg-merit-gold/30 mb-4">
            The Preface
          </Badge> */}
          {/* <h2 className="section-title"></h2> */}
          {/* <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}>
          </motion.div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white/90">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}>
            <h2 className="text-7xl md:text-9xl font-serif font-bold text-white opacity-20 leading-tight mb-8">
              The Preface
            </h2>
            <p className="mb-6">
              For years, Merit Real Estate has been a trusted name in the real
              estate industry, offering exceptional services that exceed client
              expectations. With a steadfast commitment to quality, innovation,
              and customer satisfaction, we have established ourselves as a
              leader in delivering real estate solutions tailored to the diverse
              needs of our clients.
            </p>
            <p className="mb-6">
              At Merit Real Estate, we pride ourselves on presenting a wide
              range of properties that cater to every lifestyle and investment
              goal. Whether you&apos;re searching for a luxurious home, a modern
              apartment, or a high-potential commercial unit, we have
              meticulously curated options in prime locations to ensure the best
              comfortable life.
            </p>
            <p className="font-medium text-merit-gold text-lg">
              Choose Merit Real Estate, where your dreams of owning or investing
              in the perfect property become a reality.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/preface-section.jpg"
                height={500}
                width={500}
                alt="Merit Real Estate Building"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-merit-gold/20 rounded-lg" />
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-white/10 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
