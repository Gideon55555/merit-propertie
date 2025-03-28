"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export function LocationOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="merit-green-section py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}>
            <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
              Strategic Locations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wider text-white mb-6">
              Where Every Amenity Feels Like a Perk Just for You
            </h2>

            <div className="space-y-6 font-secondary text-white/80">
              <p>
                At Merit Real Estate, we understand that location is everything.
                That's why we meticulously select the most strategic areas in
                Addis Ababa for our developments, ensuring that our residents
                enjoy the perfect balance of convenience, accessibility, and
                tranquility.
              </p>

              <p>
                Our properties are situated in prime neighborhoods that offer
                easy access to essential amenities, business districts,
                educational institutions, healthcare facilities, and
                recreational spaces. Whether you're looking for a vibrant urban
                setting or a more serene environment, we have locations that
                cater to diverse preferences and lifestyles.
              </p>

              <p>
                By choosing a Merit property, you're not just investing in a
                home or business space; you're investing in a location that
                enhances your quality of life and offers excellent potential for
                appreciation over time.
              </p>
            </div>

            <div className="mt-8 flex items-center">
              <MapPin className="h-6 w-6 text-merit-gold mr-2" />
              <span className="text-white font-primary text-lg">
                Headquarters: Piassa Ethio Ceramics Bldg, 2nd floor, Addis Ababa
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Merit Real Estate Location"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-merit-gold/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-white/5 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
