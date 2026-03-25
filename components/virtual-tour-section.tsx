"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const tours = [
  {
    id: "1-bedroom",
    title: "1 Bedroom Studio",
    subtitle: "Urban Comfort Series",
    link: "https://kuula.co/share/collection/7Hmj9?logo=1&info=1&fs=1&vr=0&thumbs=1",
    label: "49 sqm",
    image: "/images/one-bedroom.png",
  },
  {
    id: "2-bedroom",
    title: "2 Bedroom Heritage",
    subtitle: "Harmony Haven Collection",
    link: "https://kuula.co/share/collection/7HmjP?logo=1&info=1&fs=1&vr=0&thumbs=1",
    label: "75 sqm",
    image: "/images/two-bedroom.png",
  },
  {
    id: "3-bedroom",
    title: "3 Bedroom Vista",
    subtitle: "Grand Vista Collection",
    link: "https://kuula.co/share/collection/7Hmj0?logo=1&info=1&fs=1&vr=0&thumbs=1",
    label: "109 sqm",
    image: "/images/three-bedroom.png",
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
                        ? "border-merit-gold bg-merit-gold text-white shadow-xl translate-x-2"
                        : "border-merit-gold/30 bg-transparent text-merit-green hover:border-merit-gold hover:bg-merit-gold/5"
                    }`}
                  >
                    <div>
                      <h4
                        className={`text-xl font-serif font-bold transition-colors ${
                          activeTour.id === tour.id
                            ? "text-white"
                            : "group-hover:text-merit-gold"
                        }`}
                      >
                        {tour.title}
                      </h4>
                      <p
                        className={`text-sm font-medium opacity-80 ${
                          activeTour.id === tour.id
                            ? "text-white"
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
                            ? "text-white/80"
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
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-cover bg-center"
                      style={{ backgroundImage: `url(${activeTour.image})` }}
                    >
                      <div className="absolute inset-0 bg-merit-green/60 backdrop-blur-sm" />
                      <div className="relative z-20 text-center p-6">
                        <div className="mb-6 inline-flex p-4 bg-white/10 rounded-full border border-white/20">
                          <svg
                            className="w-12 h-12 text-merit-gold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">
                          Ready to Explore?
                        </h3>
                        <p className="text-white/70 mb-8 max-w-xs mx-auto">
                          Click below to launch the interactive 360° tour of our{" "}
                          {activeTour.title}.
                        </p>
                        <button
                          onClick={() => setIsTourStarted(true)}
                          className="bg-merit-gold hover:bg-merit-gold/90 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg group"
                        >
                          Start Virtual Tour
                          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </button>
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
