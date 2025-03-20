"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Abebe Kebede",
    role: "Homeowner",
    quote:
      "Merit Properties exceeded our expectations. The quality of construction and attention to detail is outstanding. We couldn't be happier with our new home.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sara Haile",
    role: "Business Owner",
    quote:
      "As a business owner, location and quality were my top priorities. Merit Properties delivered on both fronts. My commercial space has significantly improved my business visibility.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Daniel Mekonnen",
    role: "Investor",
    quote:
      "I've invested in multiple Merit properties over the years. Their commitment to excellence and strategic locations has consistently provided strong returns on my investments.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export function TestimonialsSection() {
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

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-merit-green/10 text-merit-green hover:bg-merit-green/20 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with Merit
            Properties and how our developments have positively impacted their
            lives.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-10 w-10 text-merit-gold/30 mb-4" />
                  <p className="text-gray-700 mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <Image
                      height={96}
                      width={96}
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
