"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

export function HeroSection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative flex items-center h-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Hero background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100vw"
            priority={false}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(21, 72, 67, 0.8), rgba(21, 72, 67, 0.4))",
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight mb-4">
                <span className="block font-serif">Small Footprint,</span>
                <span className="block font-serif">Grand Living</span>
                <span className="block font-serif text-merit-gold">
                  Modern Sophistication
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Welcome to Merit Real Estate. Redefining Excellence in the Real
                Estate Industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-merit-green hover:bg-white/90 text-base px-6 py-6">
                <Link href="/properties">Explore Properties</Link>
              </Button>
              {/* <Button
                variant="outline"
                className="border-merit-gold bg-transparent text-merit-gold hover:bg-merit-gold/10 hover:text-merit-gold text-base px-6 py-6">
                Welcome Home <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </motion.div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            // className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-white/80 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
