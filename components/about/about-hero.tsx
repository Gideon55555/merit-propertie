"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <Image
        src="/images/about.png"
        alt="About Merit"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
        priority={false}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(21, 72, 67, 0.9), rgba(21, 72, 67, 0.7))",
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-primary text-white leading-tight mb-6">
              Our <span className="text-merit-gold">Story</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-xl md:text-2xl font-secondary text-white/90 mb-8 leading-relaxed">
              For over a decade, Merit Real Estate has been redefining
              excellence in the Ethiopian real estate landscape, creating spaces
              that inspire and communities that thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-20 h-1 bg-merit-gold"
          />
        </div>
      </div>
    </section>
  );
}
