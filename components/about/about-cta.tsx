"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCta() {
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
          className="rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-primary text-gray-900 mb-6">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="font-secondary text-white/80 mb-8 max-w-lg">
                Whether you&apos;re looking for a new home, a commercial space, or an
                investment opportunity, Merit Real Estate has the perfect
                property for you. Browse our current listings or contact our
                team to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                className="bg-merit-gold hover:bg-merit-gold/90 text-black">
                  <Link href="/properties">View Properties</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                className="border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/hero.png')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-merit-green/30 to-merit-green/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
