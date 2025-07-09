"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

export function AboutTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const testimonials = [
    {
      quote:
        "Merit Real Estate exceeded our expectations in every way. From the initial consultation to the final handover, their attention to detail and commitment to quality was evident at every step.",
      name: "Abebe Kebede",
      role: "Homeowner, Harmony Heights",
      image: "/images/user.png",
    },
    {
      quote:
        "As a business owner, finding the right commercial space was crucial. Merit not only understood our needs but delivered a space that has significantly enhanced our brand image and customer experience.",
      name: "Sara Haile",
      role: "Business Owner, Merit Business Center",
      image: "/images/user.png",
    },
    {
      quote:
        "I've invested in multiple Merit properties over the years, and each one has provided exceptional returns. Their strategic locations and quality construction make them standout investments in Addis Ababa.",
      name: "Daniel Mekonnen",
      role: "Real Estate Investor",
      image: "/images/user.png",
    },
  ];

  return (
    <section className="merit-light-section py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-primary mt-2 mb-6">
            What Our Clients Say
          </h2>
          <p className="font-secondary max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from those who have
            experienced the Merit difference firsthand.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm shadow-sm rounded-lg p-8 h-full border border-merit-gold/20 hover:border-merit-gold/40">
                <Quote className="h-10 w-10 mb-6" />
                <p className="font-secondary mb-8 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-sans">{testimonial.name}</h4>
                    <p className="font-secondary text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
