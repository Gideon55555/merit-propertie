"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { View360Badge } from "@/components/properties/view-360-badge";
import { Play, Eye, Move } from "lucide-react";

const tours = [
  {
    id: "1-bedroom",
    title: "1 Bedroom Studio",
    subtitle: "Urban Comfort Series",
    link: "https://kuula.co/share/collection/7Hmj9?logo=1&info=1&fs=1&vr=0&thumbs=1",
    label: "49 sqm",
    image: "/images/design/image-00064.png",
  },
  {
    id: "2-bedroom",
    title: "2 Bedroom Heritage",
    subtitle: "Harmony Haven Collection",
    link: "https://kuula.co/share/collection/7HmjP?logo=1&info=1&fs=1&vr=0&thumbs=1",
    label: "75 sqm",
    image: "/images/design/image-00067.png",
  },
  {
    id: "3-bedroom",
    title: "3 Bedroom Vista",
    subtitle: "Grand Vista Collection",
    link: "https://kuula.co/share/collection/7Hmj0?logo=1&info=1&fs=1&vr=0&thumbs=1",
    label: "109 sqm",
    image: "/images/design/image-00069.png",
  },
];

export function VirtualTourSection() {
  const [activeTour, setActiveTour] = useState(tours[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTourStarted, setIsTourStarted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const handleTourChange = (tour: (typeof tours)[0]) => {
    if (activeTour.id !== tour.id) {
      setActiveTour(tour);
      setIsLoading(true);
      setIsTourStarted(false);
    }
  };

  return (
    <section
      id="virtual-tour"
      ref={sectionRef}
      className="py-20 bg-[#FDFCF8] overflow-hidden border-y border-merit-gold/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-merit-gold font-bold tracking-[0.2em] text-sm mb-4 block uppercase font-sans">
                Innovation in Living
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-merit-green mb-8 leading-[1.1]">
                Your Home, <br />
                <span className="text-merit-gold">Virtually</span> Realized
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-sans">
                Experience the spatial flow and premium finishes of our
                residences through an immersive 360° virtual tour. Every corner
                is designed for excellence.
              </p>

              <div className="space-y-4">
                {tours.map((tour) => (
                  <button
                    key={tour.id}
                    onClick={() => handleTourChange(tour)}
                    className={`w-full group relative overflow-hidden p-5 rounded-xl border transition-all duration-500 text-left flex items-center justify-between ${
                      activeTour.id === tour.id
                        ? "border-merit-gold bg-merit-gold text-merit-green shadow-xl translate-x-2"
                        : "border-merit-gold/30 bg-transparent text-merit-green hover:border-merit-gold hover:bg-merit-gold/5"
                    }`}
                  >
                    <div>
                      <h4
                        className={`text-xl font-serif font-bold transition-colors ${
                          activeTour.id === tour.id
                            ? "text-merit-green"
                            : "group-hover:text-merit-gold"
                        }`}
                      >
                        {tour.title}
                      </h4>
                      <p
                        className={`text-sm font-medium ${
                          activeTour.id === tour.id
                            ? "text-merit-green/85"
                            : "text-gray-500"
                        }`}
                      >
                        {tour.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`text-xs font-bold font-sans ${
                          activeTour.id === tour.id
                            ? "text-merit-green"
                            : "text-merit-gold"
                        }`}
                      >
                        {tour.label}
                      </span>
                      <div
                        className={`mt-1 h-0.5 bg-current transition-all duration-500 overflow-hidden ${
                          activeTour.id === tour.id
                            ? "w-12"
                            : "w-0 group-hover:w-8"
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right VR Content */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group"
            >
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-4 border border-merit-gold/20 rounded-[2rem] -z-10 group-hover:scale-[1.02] transition-transform duration-700" />
              <div className="absolute -inset-2 border-2 border-merit-gold/40 rounded-[1.8rem] -z-10 group-hover:scale-[1.01] transition-transform duration-500" />

              <div className="relative aspect-square lg:aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-2xl bg-black border-4 border-white flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!isTourStarted ? (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsTourStarted(true)}
                      className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-6 cursor-pointer select-none bg-cover bg-center group/card overflow-hidden"
                      style={{ backgroundImage: `url(${activeTour.image})` }}
                    >
                      {/* Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/75 group-hover/card:via-black/35 transition-colors duration-500" />

                      {/* Top HUD Bar */}
                      <div className="relative z-20 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white tracking-wide shadow-md">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span>LIVE 3D TOUR</span>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-merit-gold/20 backdrop-blur-md border border-merit-gold/40 text-[11px] font-bold text-merit-gold tracking-widest uppercase shadow-md">
                          <span>360° PANORAMA</span>
                        </div>
                      </div>

                      {/* Center Content: View360Badge + Play CTA */}
                      <div className="relative z-20 flex flex-col items-center justify-center my-auto py-2 text-center">
                        <View360Badge className="mb-3 scale-90 sm:scale-100" />

                        <div className="inline-flex items-center gap-2 bg-merit-gold hover:bg-merit-gold/90 text-merit-green px-6 py-3 rounded-full font-bold text-sm shadow-[0_10px_30px_rgba(192,178,131,0.5)] transform group-hover/card:scale-105 transition-all">
                          <Play className="w-4 h-4 fill-current" />
                          <span>Start 360° Virtual Tour</span>
                        </div>

                        <p className="text-white/80 text-xs mt-2 font-medium tracking-wide drop-shadow">
                          {activeTour.title} • {activeTour.label}
                        </p>
                      </div>

                      {/* Bottom HUD Bar */}
                      <div className="relative z-20 flex items-center justify-between gap-2 text-[11px] text-white/90">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
                          <Eye className="w-3 h-3 text-merit-gold" />
                          <span>Interactive 360°</span>
                        </div>

                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
                          <Move className="w-3 h-3 text-merit-gold" />
                          <span>Drag to look around</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={activeTour.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full"
                    >
                      {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-merit-green/95">
                          <div className="w-16 h-16 border-4 border-merit-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p className="text-white font-serif italic tracking-widest animate-pulse">
                            Initializing 360° Space...
                          </p>
                        </div>
                      )}
                      <iframe
                        src={activeTour.link}
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="w-full h-full"
                        onLoad={() => setIsLoading(false)}
                        title={`${activeTour.title} VR Tour`}
                      ></iframe>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute -bottom-6 right-8 bg-merit-green text-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 z-20 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="p-3 bg-merit-gold/20 rounded-full">
                  <svg
                    className="w-8 h-8 text-merit-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-merit-gold">
                    Interactive
                  </p>
                  <p className="text-xl font-serif font-bold leading-none mt-1">
                    Virtual Tour
                  </p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
