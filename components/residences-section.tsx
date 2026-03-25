"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ViewMore } from "./view-more";

export function ResidencesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState("one-bedroom");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const residences = {
    "one-bedroom": {
      title: "Urban Comfort Residences",
      subtitle: "One Bedroom",
      image: "/images/one-bedroom.png",
      description:
        "The one-bedroom unit at Merit Piassa Apartments, part of our Urban Comfort Series, offers a compact yet highly functional living space with a gross area of 49 m². Designed with innovation and efficiency in mind, this unit maximizes every inch of space, featuring:",
      features: [
        "Comfortable bedroom with built-in storage.",
        "Cozy living area perfect for relaxation or entertaining guests.",
        "Modern kitchen with energy-efficient appliances and sleek finishes.",
        "Stylish bathroom with premium fittings.",
      ],
      conclusion:
        "This unit is ideal for individuals or couples seeking an affordable yet sophisticated urban living experience, complete with modern technologies that enhance comfort and convenience.",
      specs: [
        { name: "Net Area", value: "44 sqm" },
        { name: "Gross Area", value: "49 sqm" },
        { name: "Living & Dining", value: "14 sqm" },
        { name: "Kitchen", value: "6 sqm" },
        { name: "Bedroom", value: "12 sqm" },
        { name: "Bathroom", value: "7 sqm" },
        { name: "Balcony One", value: "2 sqm" },
        { name: "Balcony Two", value: "3 sqm" },
      ],
      rooms: [
        { name: "BEDROOM", x: 60, y: 30 },
        { name: "LIVING + DINNING", x: 30, y: 30 },
        { name: "BATHROOM", x: 60, y: 60 },
        { name: "OPEN KITCHEN", x: 30, y: 60 },
        { name: "BALCONY 1", x: 80, y: 30 },
        { name: "BALCONY 2", x: 10, y: 60 },
      ],
    },
    "two-bedroom": {
      title: "Harmony Heaven Residences",
      subtitle: "Two Bedroom",
      image: "/images/two-bedroom.png",
      description:
        "The two-bedroom unit at Merit Piassa Apartments, part of the Harmony Haven Collection, spans a generous 95 m², making it perfect for small families or roommates. Designed for practicality and contemporary living, it offers:",
      features: [
        "Two well-sized bedrooms with ample natural light and built-in wardrobes.",
        "Spacious living area for family time or entertaining.",
        "Modern kitchen with durable and stylish finishes.",
        "Sleek and functional bathroom.",
      ],
      conclusion:
        "These units combine affordability with modern amenities, providing a balance of space, comfort, and cutting-edge technology for a seamless living experience in a prime location.",
      specs: [
        { name: "Net Area", value: "75 sqm" },
        { name: "Gross Area", value: "95 sqm" },
        { name: "Living & Dining", value: "24 sqm" },
        { name: "Kitchen", value: "9 sqm" },
        { name: "Master Bedroom One", value: "15 sqm" },
        { name: "Master Bathroom", value: "6 sqm" },
        { name: "Bedroom 1", value: "9 sqm" },
        { name: "Common Bath", value: "6 sqm" },
        { name: "Corridor", value: "3 sqm" },
        { name: "Balcony", value: "3 sqm" },
      ],
      rooms: [
        { name: "BATHROOM", x: 60, y: 30 },
        { name: "LIVING + DINNING", x: 30, y: 30 },
        { name: "BEDROOM 1", x: 30, y: 60 },
        { name: "BALCONY", x: 60, y: 60 },
        { name: "BEDROOM 2", x: 80, y: 30 },
      ],
    },
    "three-bedroom": {
      title: "Grand Vista Residences",
      subtitle: "Three Bedroom",
      image: "/images/three-bedroom.png",
      description:
        "The three-bedroom unit at Merit Piassa Apartments, part of the Grand Vista Collection, offers a spacious 130 m² of luxury living. Perfect for families or those who desire extra space, this premium unit features:",
      features: [
        "Master bedroom with en-suite bathroom and ample storage.",
        "Two additional well-proportioned bedrooms.",
        "Generous living and dining area ideal for entertaining.",
        "Fully-equipped kitchen with high-end finishes.",
        "Dedicated maid's room for added convenience.",
      ],
      conclusion:
        "The Grand Vista Residences represent the pinnacle of urban living, offering spacious interiors, premium finishes, and thoughtful layouts that cater to the needs of modern families seeking comfort and luxury in a prime location.",
      specs: [
        { name: "Net Area", value: "105 sqm" },
        { name: "Gross Area", value: "130 sqm" },
        { name: "Living & Dining", value: "29 sqm" },
        { name: "Kitchen", value: "10 sqm" },
        { name: "Balcony", value: "4 sqm" },
        { name: "Master Bedroom", value: "17 sqm" },
        { name: "Master Bathroom", value: "9 sqm" },
        { name: "Bedroom One", value: "12 sqm" },
        { name: "Bedroom Two", value: "11 sqm" },
        { name: "Common Bathroom", value: "7 sqm" },
        { name: "Maid's Room", value: "6 sqm" },
      ],
      rooms: [
        { name: "BEDROOM 1", x: 20, y: 30 },
        { name: "BEDROOM 2", x: 40, y: 30 },
        { name: "M. BEDROOM", x: 60, y: 30 },
        { name: "LIVING + DINNING", x: 30, y: 60 },
        { name: "BATHROOM", x: 50, y: 60 },
        { name: "M. BATHROOM", x: 70, y: 60 },
        { name: "KITCHEN", x: 80, y: 30 },
        { name: "MAID'S ROOM", x: 90, y: 60 },
        { name: "BALCONY", x: 10, y: 60 },
      ],
    },
  };

  // const currentResidence = residences[activeTab as keyof typeof residences];

  return (
    <section id="residences" className="merit-green-section py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-7xl md:text-9xl font-serif font-bold text-white opacity-20 leading-tight mb-8">
            Find Your
            <br />
            Perfect Home
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Discover our thoughtfully designed residences that combine
            functionality, style, and comfort to create the perfect living space
            for you and your family.
          </p>
        </div>

        <Tabs
          defaultValue="one-bedroom"
          className="w-full"
          onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8 p-2 h-auto bg-white/10 border-merit-gold/30">
            <TabsTrigger
              value="one-bedroom"
              className="data-[state=active]:bg-merit-gold/10 data-[state=active]:text-merit-gold py-2 text-white/70">
              One Bedroom
            </TabsTrigger>
            <TabsTrigger
              value="two-bedroom"
              className="data-[state=active]:bg-merit-gold/10 data-[state=active]:text-merit-gold py-2 text-white/70">
              Two Bedroom
            </TabsTrigger>
            <TabsTrigger
              value="three-bedroom"
              className="data-[state=active]:bg-merit-gold/10 data-[state=active]:text-merit-gold py-2 text-white/70">
              Three Bedroom
            </TabsTrigger>
          </TabsList>

          {Object.entries(residences).map(([key, residence]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <motion.div
                initial="hidden"
                animate={isInView && activeTab === key ? "visible" : "hidden"}
                variants={fadeIn}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="order-2 lg:order-1">
                    <div className="mb-6">
                      <h3 className="!text-3xl font-serif font-bold text-merit-gold mb-2">
                        {residence.title}
                      </h3>
                      <p className="!text-merit-gold font-medium">
                        {residence.subtitle}
                      </p>
                    </div>

                    <p className="text-white/90 mb-6">
                      {residence.description}
                    </p>

                    <ul className="list-disc font-sans pl-5 mb-6 space-y-2">
                      {residence.features.map((feature, index) => (
                        <li key={index} className="text-white/90">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <p className="text-white/90 mb-8">{residence.conclusion}</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {residence.specs
                        .filter((spec) => spec.value)
                        .map((spec, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-white/70">{spec.name}</span>
                            <span className="font-medium text-merit-gold">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="relative order-1 lg:order-2">
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 aspect-square">
                      <Image
                        src={residence.image}
                        alt={residence.title}
                        height={500}
                        width={500}
                        className="w-full object-contain transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-4 text-xs text-merit-gold">
                        {residence.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="flex justify-end mt-6 w-full">
          <ViewMore href="/properties">View More</ViewMore>
        </div>
      </div>
    </section>
  );
}
