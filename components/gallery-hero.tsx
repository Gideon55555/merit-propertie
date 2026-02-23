"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      <Image
        src="/images/design/image-00059.png"
        alt="Gallery Heritage"
        fill
        className="object-cover object-center"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(21, 72, 67, 0.9), rgba(21, 72, 67, 0.7))",
        }}
      />
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              Design <span className="text-merit-gold">Excellence</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl font-sans text-white/90 mb-8 leading-relaxed">
              A visual journey through our most prestigious architectural
              achievements and sophisticated interior spaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-merit-gold origin-left"
          />
        </div>
      </div>
    </section>
  );
}
