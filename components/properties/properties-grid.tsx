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
import { MapPin, Bed, Bath, Square, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { properties } from "@/data/properties";

export function PropertiesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [favorites, setFavorites] = useState<number[]>([]);
  const [category, setCategory] = useState<"all" | "residential" | "commercial">("all");
  const [sortBy, setSortBy] = useState<string>("default");

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

  const residentialCount = properties.filter((p) => p.categoryKey === "residential").length;
  const commercialCount = properties.filter((p) => p.categoryKey === "commercial").length;

  // Filtering
  const filteredProperties = properties.filter((property) => {
    if (category === "all") return true;
    return property.categoryKey === category;
  });

  // Sorting
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "size-asc") return a.areaNum - b.areaNum;
    if (sortBy === "size-desc") return b.areaNum - a.areaNum;
    return 0;
  });

  return (
    <section className="py-16 bg-merit-green" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-merit-gold uppercase text-xs tracking-widest font-semibold font-secondary">
              Merit Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-primary text-white mt-1">
              Available Properties
            </h2>
            <p className="text-white/70 font-secondary mt-1 text-sm md:text-base">
              Explore our premier residential apartments in Piassa and commercial center in Teklehaymanot
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Category Toggle */}
            <div className="inline-flex bg-white/10 p-1 rounded-lg border border-white/15">
              <button
                onClick={() => setCategory("all")}
                className={`px-4 py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
                  category === "all"
                    ? "bg-merit-gold text-black shadow"
                    : "text-white/80 hover:text-white"
                }`}
              >
                All ({properties.length})
              </button>
              <button
                onClick={() => setCategory("residential")}
                className={`px-4 py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
                  category === "residential"
                    ? "bg-merit-gold text-black shadow"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Residential ({residentialCount})
              </button>
              <button
                onClick={() => setCategory("commercial")}
                className={`px-4 py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
                  category === "commercial"
                    ? "bg-merit-gold text-black shadow"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Commercial ({commercialCount})
              </button>
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-36 h-9 text-xs md:text-sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-merit-green border-white/20 text-white">
                <SelectItem value="default" className="text-white">
                  Default
                </SelectItem>
                <SelectItem value="size-asc" className="text-white">
                  Size: Low to High
                </SelectItem>
                <SelectItem value="size-desc" className="text-white">
                  Size: High to Low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Properties Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {sortedProperties.map((property) => (
            <motion.div key={property.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-merit-gold/40 group">
                <div className="relative overflow-hidden bg-black/20">
                  <div className="relative w-full h-72 md:h-80">
                    <Image
                      src={property.cardImage || property.image}
                      alt={property.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-merit-gold text-black font-semibold">
                      {property.type}
                    </Badge>
                    {property.featured && (
                      <Badge className="bg-white/90 text-merit-green font-medium">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <Badge className="absolute top-4 right-4 bg-merit-green/90 text-white border border-merit-gold/30">
                    {property.status}
                  </Badge>

                  <button
                    aria-label="Save to favorites"
                    className="absolute bottom-4 right-4 bg-black/40 hover:bg-black/60 p-2.5 rounded-full transition-colors backdrop-blur-sm"
                    onClick={() => toggleFavorite(property.id)}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(property.id)
                          ? "text-red-500 fill-red-500"
                          : "text-white"
                      }`}
                    />
                  </button>
                </div>

                <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-sm text-white/70 mb-2">
                      <MapPin className="h-4 w-4 text-merit-gold mr-1.5 flex-shrink-0" />
                      <span>{property.shortLocation || property.location}</span>
                    </div>

                    <h3 className="font-primary text-2xl font-bold text-white mb-1 group-hover:text-merit-gold transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-merit-gold text-sm font-medium mb-3">
                      {property.subtitle}
                    </p>

                    <p className="text-white/80 text-sm font-secondary line-clamp-2 mb-4 leading-relaxed">
                      {property.shortDescription || property.description}
                    </p>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {(property.cardFeatures || property.features).map((feat, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 border border-white/10 text-white/80 text-xs px-2.5 py-1 rounded-md"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Property metrics */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white/80">
                    <div className="flex items-center gap-4">
                      {property.bedrooms !== null && (
                        <div className="flex items-center text-sm">
                          <Bed className="h-4 w-4 text-merit-gold mr-1.5" />
                          <span>{property.bedrooms} Bed</span>
                        </div>
                      )}
                      {property.bathrooms !== null && (
                        <div className="flex items-center text-sm">
                          <Bath className="h-4 w-4 text-merit-gold mr-1.5" />
                          <span>{property.bathrooms} Bath</span>
                        </div>
                      )}
                      <div className="flex items-center text-sm">
                        <Square className="h-4 w-4 text-merit-gold mr-1.5" />
                        <span>{property.areaLabel || property.grossArea}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-6 px-6">
                  <Button
                    asChild
                    className="w-full bg-merit-gold hover:bg-merit-gold/90 text-merit-green font-bold h-11 transition-all shadow-md"
                  >
                    <Link href={`/properties/${property.slug}`} className="flex items-center justify-center">
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
