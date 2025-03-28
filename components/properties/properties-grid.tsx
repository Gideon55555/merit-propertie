"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import Link from "next/link";

export function PropertiesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

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

  const properties = [
    {
      id: 1,
      title: "Harmony Heights",
      type: "Residential",
      status: "For Sale",
      location: "Bole, Addis Ababa",
      price: "$250,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "180 sqm",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "Merit Business Center",
      type: "Commercial",
      status: "For Rent",
      location: "Kazanchis, Addis Ababa",
      price: "$450,000",
      bedrooms: null,
      bathrooms: null,
      area: "350 sqm",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 3,
      title: "Urban Village",
      type: "Mixed-Use",
      status: "Under Construction",
      location: "CMC, Addis Ababa",
      price: "$320,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "220 sqm",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 4,
      title: "Serenity Gardens",
      type: "Residential",
      status: "For Sale",
      location: "Bole Bulbula, Addis Ababa",
      price: "$180,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "120 sqm",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 5,
      title: "Merit Plaza",
      type: "Commercial",
      status: "For Rent",
      location: "Mexico, Addis Ababa",
      price: "$550,000",
      bedrooms: null,
      bathrooms: null,
      area: "400 sqm",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 6,
      title: "Skyline Residences",
      type: "Residential",
      status: "For Sale",
      location: "Sarbet, Addis Ababa",
      price: "$290,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "200 sqm",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
  ];

  return (
    <section className="py-16 bg-merit-green" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-primary text-white">
              Available Properties
            </h2>
            <p className="text-white/70 font-secondary mt-2">
              Showing {properties.length} properties
            </p>
          </div>
          <div className="flex gap-4">
            <Select defaultValue="newest">
              <SelectTrigger className="bg-merit-green/50 border-white/20 text-white w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-merit-green border-white/20">
                <SelectItem value="newest" className="text-white">
                  Newest
                </SelectItem>
                <SelectItem value="price-asc" className="text-white">
                  Price: Low to High
                </SelectItem>
                <SelectItem value="price-desc" className="text-white">
                  Price: High to Low
                </SelectItem>
                <SelectItem value="size-asc" className="text-white">
                  Size: Small to Large
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {properties.map((property) => (
            <motion.div key={property.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-merit-green/50 backdrop-blur-sm border border-white/10">
                <div className="relative overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-merit-gold text-black">
                      {property.type}
                    </Badge>
                    {property.featured && (
                      <Badge className="bg-white/90 text-merit-green">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/90 text-merit-green">
                    {property.status}
                  </Badge>
                  <button
                    className="absolute bottom-4 right-4 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
                    onClick={() => toggleFavorite(property.id)}>
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(property.id)
                          ? "text-red-500 fill-red-500"
                          : "text-white"
                      }`}
                    />
                  </button>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-merit-gold mr-1" />
                    <span className="text-sm text-white/70">
                      {property.location}
                    </span>
                  </div>
                  <h3 className="font-primary text-xl font-bold text-white mb-2">
                    {property.title}
                  </h3>
                  <p className="text-merit-gold font-bold text-lg mb-4">
                    {property.price}
                  </p>

                  <div className="flex items-center justify-between">
                    {property.bedrooms && (
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 text-white/50 mr-1" />
                        <span className="text-sm text-white/70">
                          {property.bedrooms} Beds
                        </span>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 text-white/50 mr-1" />
                        <span className="text-sm text-white/70">
                          {property.bathrooms} Baths
                        </span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Square className="h-4 w-4 text-white/50 mr-1" />
                      <span className="text-sm text-white/70">
                        {property.area}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-merit-gold text-merit-gold hover:bg-merit-gold hover:text-black">
                    <Link href={`/properties/${property.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button className="bg-merit-gold hover:bg-merit-gold/90 text-black px-8">
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
