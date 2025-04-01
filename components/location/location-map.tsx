"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Plus, Minus, Layers } from "lucide-react";
// import Map from "../map";

export function LocationMap() {
  const ref = useRef(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };

  // This is a simplified map implementation
  // In a real application, you would integrate with Google Maps, Mapbox, or another mapping service
  useEffect(() => {
    if (isInView && mapRef.current) {
      // Simulate map loading
      const timer = setTimeout(() => {
        setIsMapLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const zoomIn = () => {
    if (zoomLevel < 18) setZoomLevel(zoomLevel + 1);
  };

  const zoomOut = () => {
    if (zoomLevel > 10) setZoomLevel(zoomLevel - 1);
  };

  const locations = [
    {
      name: "Merit Headquarters",
      lat: "9.0222",
      lng: "38.7468",
      type: "office",
    },
    {
      name: "Harmony Heights",
      lat: "9.0300",
      lng: "38.7600",
      type: "residential",
    },
    {
      name: "Merit Business Center",
      lat: "9.0150",
      lng: "38.7350",
      type: "commercial",
    },
    { name: "Urban Village", lat: "9.0350", lng: "38.7250", type: "mixed-use" },
  ];

  return (
    <section className="merit-green-section py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
            Find Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-primary text-white mb-6">
            Explore Our Locations
          </h2>
          <p className="font-secondary text-white/80 max-w-3xl mx-auto">
            Discover the strategic locations of our properties across Addis
            Ababa. Use the interactive map to explore the surrounding areas and
            amenities.
          </p>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg overflow-hidden shadow-xl">
          <div
            ref={mapRef}
            className="w-full bg-no-repeat h-[500px] bg-merit-green/30 relative"
            style={{
              backgroundImage: isMapLoaded ? "url('/images/map.png')" : "none",
              backgroundSize: `${100 + (zoomLevel - 14) * 10}%`,
              backgroundPosition: "center",
              transition: "background-size 0.3s ease",
            }}>
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-merit-gold"></div>
              </div>
            )}

            {isMapLoaded && (
              <>
                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-merit-green/70 border-white/20 text-white"
                    onClick={zoomIn}>
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-merit-green/70 border-white/20 text-white"
                    onClick={zoomOut}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-merit-green/70 border-white/20 text-white">
                    <Layers className="h-4 w-4" />
                  </Button>
                </div>
                {/* <Map itemVariants={itemVariants} isInView={isInView} /> */}
                {/* Map Markers */}
                {/* {locations.map((location, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${
                        50 + (Number.parseFloat(location.lng) - 38.7468) * 100
                      }%`,
                      top: `${
                        50 - (Number.parseFloat(location.lat) - 9.0222) * 100
                      }%`,
                    }}>
                    <div className="relative group">
                      <div
                        className={`
                        p-2 rounded-full 
                        ${location.type === "office" ? "bg-merit-gold" : ""}
                        ${location.type === "residential" ? "bg-green-500" : ""}
                        ${location.type === "commercial" ? "bg-blue-500" : ""}
                        ${location.type === "mixed-use" ? "bg-purple-500" : ""}
                      `}>
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-merit-green/90 text-white text-sm py-1 px-3 rounded shadow-lg whitespace-nowrap">
                          {location.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-merit-green/70 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="font-primary text-white text-sm mb-2">
                    Legend
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="bg-merit-gold p-1 rounded-full mr-2">
                        <MapPin className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-xs">Office</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-500 p-1 rounded-full mr-2">
                        <MapPin className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-xs">Residential</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-500 p-1 rounded-full mr-2">
                        <MapPin className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-xs">Commercial</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-purple-500 p-1 rounded-full mr-2">
                        <MapPin className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-xs">Mixed-Use</span>
                    </div>
                  </div>
                </div>

                {/* Get Directions Button */}
                <Button
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=9.0222,38.7468",
                      "_blank"
                    )
                  }
                  className="absolute bottom-4 right-4 bg-merit-gold hover:bg-merit-gold/90 text-black">
                  <Navigation className="h-4 w-4 mr-2" /> Get Directions
                </Button>
              </>
            )}
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.1 * index }}>
              <div className="bg-merit-green/50 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h3 className="font-primary text-white !text-3xl mb-1">
                  {location.name}
                </h3>
                <div className="flex items-center text-white/70 text-sm">
                  <MapPin className="h-4 w-4 text-merit-gold mr-1" />
                  <span>
                    Lat: {location.lat}, Lng: {location.lng}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
