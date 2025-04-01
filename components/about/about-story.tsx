"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Badge } from "../ui/badge";

export function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="merit-green-section py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
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

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="text-center mb-12">
              <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
                Our Journey
              </Badge>
              <h2 className="text-7xl md:text-9xl font-serif font-bold text-white opacity-20 leading-tight mb-8">
                A Decade of
                <br />
                Excellence
              </h2>
            </div>

            <div className="space-y-6 font-secondary text-gray-700">
              <p>
                Founded in 2013, Merit Real Estate began with a simple yet
                powerful vision: to create exceptional living spaces that
                combine innovative design, quality construction, and strategic
                locations at competitive prices.
              </p>

              <p>
                What started as a small team with big dreams has grown into one
                of Ethiopia&apos;s most respected real estate developers, with a
                portfolio of successful residential, commercial, and mixed-use
                projects across Addis Ababa and beyond.
              </p>

              <p>
                Throughout our journey, we&apos;ve remained committed to our
                founding principles: unwavering quality, ethical business
                practices, and a customer-first approach. These values have
                guided every project we&apos;ve undertaken and every
                relationship we&apos;ve built.
              </p>

              <p>
                Today, Merit Real Estate stands as a testament to what can be
                achieved when vision meets execution. Our buildings dot the
                skyline of Addis Ababa, but our true legacy lies in the
                communities we&apos;ve helped create and the lives we&apos;ve
                enhanced through thoughtful, purposeful development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
