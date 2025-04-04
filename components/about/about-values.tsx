"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Lightbulb, Users, Shield, Leaf } from "lucide-react";
import { Badge } from "../ui/badge";

export function AboutValues() {
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

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We pursue excellence in every aspect of our work, from design and construction to customer service and community engagement.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our passion for creating exceptional spaces drives us to go above and beyond, constantly pushing the boundaries of what's possible.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace innovation in design, technology, and sustainability to create forward-thinking properties that stand the test of time.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in building more than just structures; we create communities where people can connect, thrive, and belong.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct our business with unwavering integrity, maintaining transparency and honesty in all our dealings.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to sustainable development practices that minimize environmental impact and create healthier living spaces.",
    },
  ];

  return (
    <section className="merit-green-section py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
            What Drives Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-primary text-white mt-2 mb-6">
            Our Core Values
          </h2>
          <p className="font-secondary text-white/80 max-w-3xl mx-auto">
            These principles guide every decision we make and every project we
            undertake, ensuring that we consistently deliver on our promise of
            excellence.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 h-full border border-white/10 hover:border-merit-gold/30 transition-all duration-300">
                <div className="bg-merit-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-merit-gold" />
                </div>
                <h3 className="font-primary text-xl text-white mb-4">
                  {value.title}
                </h3>
                <p className="font-secondary text-white/70">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
