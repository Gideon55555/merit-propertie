"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Users, Home, Award } from "lucide-react";

export function AboutStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    {
      icon: Building,
      value: "15+",
      label: "Projects Completed",
      description: "Across residential, commercial, and mixed-use developments",
    },
    {
      icon: Users,
      value: "1,200+",
      label: "Happy Clients",
      description: "Who trust us with their real estate needs",
    },
    {
      icon: Home,
      value: "500,000+",
      label: "Square Meters Built",
      description: "Of premium living and working spaces",
    },
    {
      icon: Award,
      value: "12+",
      label: "Industry Awards",
      description: "Recognizing our commitment to excellence",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="merit-green-section py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-merit-green font-secondary uppercase tracking-wider text-sm font-medium">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-primary text-gray-900 mt-2 mb-6">
            Merit By The Numbers
          </h2>
          <p className="font-secondary text-gray-700 max-w-3xl mx-auto">
            Over the years, we've achieved significant milestones that reflect
            our commitment to excellence and customer satisfaction.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white/5 rounded-lg p-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-merit-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-merit-gold" />
                </div>
                <h3 className="font-primary text-4xl text-merit-green mb-2">
                  {stat.value}
                </h3>
                <h4 className="font-sans font-bold mb-3">
                  {stat.label}
                </h4>
                <p className="font-secondary text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
