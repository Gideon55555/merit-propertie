"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, Calendar } from "lucide-react";

export function LocationCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 merit-green-section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="bg-merit-green/50 backdrop-blur-sm rounded-lg border border-white/10 p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-primary text-white mb-6">
              Ready to Experience Our Locations?
            </h2>
            <p className="font-secondary text-white/80 mb-8">
              Visit our properties in person to truly appreciate their strategic
              locations and surrounding amenities. Schedule a viewing or contact
              our team for more information about our properties and their
              locations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-merit-gold hover:bg-merit-gold/90 text-black">
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" /> Contact Our Team
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10">
                <Link href="/schedule-viewing">
                  <Calendar className="mr-2 h-4 w-4" /> Schedule a Viewing{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
