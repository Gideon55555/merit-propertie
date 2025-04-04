"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { amenitiesData } from "@/components/amenities/amenities-data";
import { useEffect, useRef } from "react";

interface AmenitiesContentProps {
  amenityId: string;
}

export function AmenitiesContent({ amenityId }: AmenitiesContentProps) {
  const amenity = amenitiesData.find((item) => item.id === amenityId);

  const ref = useRef(null);
  const inView = useInView(ref); // Fully visible
  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (inView) {
      textControls.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        },
      });
      imageControls.start({
        width: "100%",
        zIndex: 1,
        transition: {
          delay: 1,
          duration: 0.5, // Duration for the scale animation
          ease: "easeInOut",
        },
      });
    } else {
      textControls.start({
        opacity: 0,
        y: 200,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
      imageControls.start({ width: 0 });
    }
  }, [inView, textControls, imageControls]);
  if (!amenity) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  return (
    <section
      ref={ref}
      key={amenityId}
      id={amenityId}
      className="min-h-screen border-b border-merit-gold/20 flex justify-center items-center snap-always snap-start">
      <div className="flex-1 flex flex-col md:flex-row pt-24 pb-8 px-4 md:px-8 lg:px-12 overflow-y-auto">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h1 className="font-primary text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              {amenity.heading}
            </h1>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 font-secondary mb-6">
                {amenity.description}
              </p>

              {amenity.features && (
                <div className="mt-8">
                  <h3 className="font-sans text-xl text-merit-gold mb-4">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {amenity.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-merit-gold mr-2">•</span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* {amenity.ctaText && (
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-merit-gold hover:bg-merit-gold/90 text-black">
                    <Link href={amenity.ctaLink || "/contact"}>
                      {amenity.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )} */}
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-[200px] md:h-[500px] w-full overflow-hidden rounded-xl relative">
            {/* <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-xl"> */}
              <motion.img
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                initial={{ scale: 1 }}
                src={amenity.image || "/placeholder.svg"}
                alt={amenity.title}
                className="object-cover rounded-xl h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-merit-green/40 to-transparent"></div>
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
