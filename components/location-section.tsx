"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";
import Map from "./map";

export function LocationSection() {
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

  const locations = [
    {
      name: "Friendship Park",
      distance: "3 mins drive",
      description:
        "This urban green space is perfect for morning jogs, leisurely walks, or simply enjoying its serene environment amidst the bustling city.",
    },
    // {
    //   name: "Unity Park",
    //   distance: "6 mins drive",
    //   description:
    //     "Offers a rich blend of history, culture, and recreational activities, making it an ideal destination for weekend outings or showing visitors the beauty of Addis Ababa.",
    // },
    // {
    //   name: "Meskel Square",
    //   distance: "12 mins away",
    //   description:
    //     "The capital's central gathering hub for events, celebrations, and cultural festivities is within easy reach.",
    // },
    {
      name: "Bole International Airport",
      distance: "18 mins drive",
      description:
        "Merit Properties offers unparalleled convenience, ensuring you're always well-connected to global destinations.",
    },
    {
      name: "Shopping and Dining",
      distance: "5 km away",
      description:
        "From modern shopping malls to traditional markets, and international cuisines to local delicacies, major retail hubs and bustling Bole Road are just minutes away.",
    },
  ];

  return (
    <section id="location" className="merit-green-section py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-7xl md:text-9xl font-serif font-bold text-white opacity-20 leading-tight mb-8">
            Prime Central
            <br />
            Location
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Where Every Amenity Feels Like a Perk Just for You!
          </p>
          <p className="text-white/80 max-w-3xl mx-auto mt-4">
            Our residences place you at the epicenter of one of Africa&apos;s
            most dynamic capital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4">
            {locations.map((location, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow bg-merit-green/40 border-merit-gold/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-merit-gold/20 p-3 rounded-full shrink-0">
                        <MapPin className="h-6 w-6 text-merit-gold" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-serif font-bold text-white">
                            {location.name}
                          </h3>
                          <Badge
                            variant="outline"
                            className="text-merit-gold border-merit-gold">
                            <Clock className="h-3 w-3 mr-1" />{" "}
                            {location.distance}
                          </Badge>
                        </div>
                        <p className="text-white/80 text-sm">
                          {location.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <Map itemVariants={itemVariants} isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
