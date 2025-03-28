"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import Map from "../map";

export function ContactMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 merit-green-section" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
            Our Location
          </Badge>
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-white mb-6">
            Visit Our Office
          </h2>
          <p className="font-secondary text-white/80 max-w-3xl mx-auto">
            Our headquarters is conveniently located in the heart of Addis
            Ababa, making it easy for you to visit us and discuss your real
            estate needs in person.
          </p>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg overflow-hidden shadow-xl h-[400px] md:h-[500px]">
          {/* Map Placeholder - In a real implementation, you would integrate with Google Maps or another mapping service */}
          <div className="w-full h-full bg-merit-green/30 relative">
            <Map itemVariants={itemVariants} isInView={isInView} />

            {/* Get Directions Button */}
            <Button
              className="absolute bottom-4 right-4 bg-merit-gold hover:bg-merit-gold/90 text-black"
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=9.0222,38.7468",
                  "_blank"
                )
              }>
              <Navigation className="h-4 w-4 mr-2" /> Get Directions
            </Button>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-white/80 font-secondary">
            <MapPin className="h-4 w-4 inline-block mr-1" /> Piassa Ethio
            Ceramics Bldg, 2nd floor, Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </section>
  );
}
