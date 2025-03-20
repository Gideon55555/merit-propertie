"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

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
            Our residences place you at the epicenter of one of Africa&apos;s most
            dynamic capital.
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

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="relative">
            <div className="relative h-[400px] md:h-[500px] w-full z-10 rounded-lg overflow-hidden shadow-xl">
              {/* <img
                src="/placeholder.svg?height=800&width=600"
                alt="Merit Real Estate Location Map"
                className="w-full h-auto"
              /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.191406689608!2d38.754095768922696!3d9.028799574930023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f3a81ae079%3A0x456ba4e62474aa7f!2zRXRoaW8gQ2VyYW1pY3MgfCBQaWF6emEgQnJhbmNoIHwg4Yqi4Ymy4YuuIOGItOGIq-GImuGKreGItSB8IOGNkuGLq-GIsw!5e0!3m2!1sen!2set!4v1742476075233!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Merit Real Estate Location Map"
                className="absolute inset-0"></iframe>
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-merit-gold/20 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
