"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function PropertiesCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="merit-green-section py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="bg-merit-green/50 backdrop-blur-sm rounded-lg border border-white/10 p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-primary text-white mb-6">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="font-secondary text-white/80 mb-8">
              Our portfolio is constantly growing with new and exciting
              properties. Contact our team to discuss your specific
              requirements, and we&apos;ll help you find the perfect property or
              notify you when something matching your criteria becomes
              available.
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
                className="border-white/20 text-white hover:bg-white/10">
                <Link href="/custom-search">
                  Custom Property Search <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
