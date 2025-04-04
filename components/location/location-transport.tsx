"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Plane, Bus, Car, Train } from "lucide-react";

export function LocationTransport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const transportOptions = [
    {
      icon: Plane,
      title: "Bole International Airport",
      description:
        "Direct access to international travel, just a short drive away.",
      distance: "15-20 minutes",
    },
    {
      icon: Train,
      title: "Light Rail Transit",
      description:
        "Convenient public transportation connecting major areas of the city.",
      distance: "5-10 minutes",
    },
    {
      icon: Bus,
      title: "Bus Stations",
      description:
        "Multiple bus routes providing affordable transportation options.",
      distance: "2-5 minutes",
    },
    {
      icon: Car,
      title: "Major Highways",
      description:
        "Easy access to main roads and highways for seamless travel across the city.",
      distance: "5-10 minutes",
    },
  ];

  return (
    <section className="merit-green-section py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transportOptions.map((option, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 h-full border border-white/10 hover:border-merit-gold/30 transition-all duration-300">
                    <div className="bg-merit-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <option.icon className="h-7 w-7 text-merit-gold" />
                    </div>
                    <h3 className="font-primary !text-5xl font-bold tracking-wider text-white mb-2">
                      {option.title}
                    </h3>
                    <p className="font-secondary text-white/70 text-md mb-3">
                      {option.description}
                    </p>
                    <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20">
                      {option.distance}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2">
            <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
              Transportation & Accessibility
            </Badge>
            <h2 className="text-3xl md:text-4xl font-primary tracking-wide text-white mb-6">
              Connected to Every Corner of the City
            </h2>

            <div className="space-y-6 font-secondary text-white/80">
              <p>
                One of the key advantages of Merit Real Estate properties is
                their exceptional connectivity. Our developments are
                strategically located near major transportation hubs, ensuring
                that you can navigate the city with ease.
              </p>

              <p>
                Whether you prefer public transportation or private vehicles,
                you&apos;ll appreciate the convenience of having multiple options at
                your disposal. From international airports to local bus
                stations, everything is within comfortable reach.
              </p>

              <p>
                This connectivity not only enhances your daily commute but also
                adds significant value to your investment, as properties with
                excellent transportation links tend to appreciate more over
                time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
