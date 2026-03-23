"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function DroneFootageSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Only trigger "load" once the section is near view
  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasBeenInView) return;

    if (isInView) {
      // Small delay to ensure smooth scrolling before video starts
      const playTimer = setTimeout(() => {
        video.play().catch((e) => {
          console.warn("Video play failed or was blocked:", e);
        });
      }, 500);
      return () => clearTimeout(playTimer);
    } else {
      video.pause();
    }
  }, [isInView, hasBeenInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black"
    >
      {/* Cinematic Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 bg-black/30 backdrop-blur-[1px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-merit-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block"
          >
            A New Perspective
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            The Merit <span className="text-merit-gold">Standard</span> From
            Above
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-merit-gold mx-auto mb-8"
          />
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Witness the architectural mastery and prime locations that define
            our legacy.
          </p>
        </motion.div>
      </div>

      {/* Optimized Video Background - Only rendered when section ever entered view */}
      {hasBeenInView ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/location.jpg"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/videos/drone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        /* Static Placeholder before video is initialized */
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/location.jpg')" }}
        />
      )}

      {/* Decorative Overlays for seamless transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-merit-green to-transparent z-10" />

      {/* Side Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-[5]" />
    </section>
  );
}
