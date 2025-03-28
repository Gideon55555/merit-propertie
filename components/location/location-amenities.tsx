"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag,
  Utensils,
  GraduationCap,
  Stethoscope,
  Trees,
  Building2,
} from "lucide-react";
import { Badge } from "../ui/badge";

export function LocationAmenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const amenities = [
    {
      icon: ShoppingBag,
      title: "Shopping Centers",
      description:
        "From modern malls to traditional markets, enjoy diverse shopping experiences just minutes away from your doorstep.",
      distance: "5-10 minutes",
    },
    {
      icon: Utensils,
      title: "Restaurants & Cafés",
      description:
        "Indulge in a wide range of culinary delights, from local Ethiopian cuisine to international favorites.",
      distance: "2-5 minutes",
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description:
        "Access to top schools, colleges, and universities, ensuring quality education for all age groups.",
      distance: "10-15 minutes",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Facilities",
      description:
        "Proximity to leading hospitals and clinics, providing peace of mind for you and your family.",
      distance: "5-10 minutes",
    },
    {
      icon: Trees,
      title: "Parks & Recreation",
      description:
        "Green spaces and recreational facilities for relaxation, exercise, and community engagement.",
      distance: "5-15 minutes",
    },
    {
      icon: Building2,
      title: "Business Districts",
      description:
        "Close to major business hubs and office complexes, minimizing commute times and enhancing productivity.",
      distance: "10-20 minutes",
    },
  ];

  return (
    <section className="merit-green-section py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
            Amenities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wider text-white mb-6">
            Nearby Amenities
          </h2>
          <p className="font-secondary text-white/80 max-w-3xl mx-auto">
            Our properties are strategically located to provide convenient
            access to a wide range of amenities, ensuring that everything you
            need is within easy reach.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {amenities.map((amenity, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 h-full border border-white/10 hover:border-merit-gold/30 transition-all duration-300">
                <div className="bg-merit-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <amenity.icon className="h-8 w-8 text-merit-gold" />
                </div>
                <h3 className="font-primary text-xl text-white mb-4">
                  {amenity.title}
                </h3>
                <p className="font-secondary text-white/70 mb-4">
                  {amenity.description}
                </p>
                <div className="flex items-center mt-auto">
                  <span className="text-xs font-secondary uppercase tracking-wider text-merit-gold bg-merit-gold/10 px-3 py-1 rounded-full">
                    {amenity.distance}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
