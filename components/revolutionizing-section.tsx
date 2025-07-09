"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ViewMore } from "./view-more";

export function RevolutionizingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="merit-green-section py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/revolutionalizing-section.jpg"
                  height={500}
                  width={500}
                  alt="Modern Living Space"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-white/10 rounded-lg" />
              <div className="absolute -top-6 -right-6 w-1/2 h-1/2 bg-merit-gold/20 rounded-lg" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2">
            {/* <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-green/20 mb-4">
              merit realestate
            </Badge> */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Revolutionizing Modern Living in Real Estate
            </h2>

            <p className="mb-6">
              Whether you&apos;re searching for a luxurious home, a modern
              apartment, or a high-potential commercial unit, we have
              meticulously curated options in prime locations to ensure the
              perfect blend of comfort, convenience, and accessibility.
            </p>

            <p className="mb-6">
              Our portfolio is as diverse as our clientele, encompassing
              residential properties that redefine opulence and functionality,
              as well as commercial spaces that promise high returns and
              strategic advantages.
            </p>

            <p className="mb-6">
              What sets us apart is our relentless focus on improving quality
              and embracing innovation. From leveraging advanced technology to
              ensuring personalized services, we are committed to staying ahead
              in an ever-evolving industry.
            </p>

            <p className="mb-6">
              Our deep market knowledge and dedicated team of professionals
              enable us to guide our clients through every step of their real
              estate journey with transparency, expertise, and care.
            </p>
            <div className="w-full mt-4 flex justify-end">
              <ViewMore href="/about">
                Learn More
              </ViewMore>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
