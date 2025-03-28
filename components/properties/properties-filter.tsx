"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";

export function PropertiesFilter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [priceRange, setPriceRange] = useState([0]);
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 bg-merit-green/90" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="bg-merit-green/50 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Input
                placeholder="Search by location, property name..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 pl-10"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-white/50" />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 w-40">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent className="bg-merit-green border-white/20">
                  <SelectItem value="all" className="text-white">
                    All Types
                  </SelectItem>
                  <SelectItem value="residential" className="text-white">
                    Residential
                  </SelectItem>
                  <SelectItem value="commercial" className="text-white">
                    Commercial
                  </SelectItem>
                  <SelectItem value="mixed-use" className="text-white">
                    Mixed-Use
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-12"
                onClick={() => setIsAdvancedFilterOpen(!isAdvancedFilterOpen)}>
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </Button>
              <Button className="bg-merit-gold hover:bg-merit-gold/90 text-black h-12">
                Search
              </Button>
            </div>
          </div>

          {isAdvancedFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <Label htmlFor="bedrooms" className="text-white mb-2 block">
                  Bedrooms
                </Label>
                <Select defaultValue="any">
                  <SelectTrigger
                    id="bedrooms"
                    className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-merit-green border-white/20">
                    <SelectItem value="any" className="text-white">
                      Any
                    </SelectItem>
                    <SelectItem value="1" className="text-white">
                      1
                    </SelectItem>
                    <SelectItem value="2" className="text-white">
                      2
                    </SelectItem>
                    <SelectItem value="3" className="text-white">
                      3
                    </SelectItem>
                    <SelectItem value="4+" className="text-white">
                      4+
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="bathrooms" className="text-white mb-2 block">
                  Bathrooms
                </Label>
                <Select defaultValue="any">
                  <SelectTrigger
                    id="bathrooms"
                    className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-merit-green border-white/20">
                    <SelectItem value="any" className="text-white">
                      Any
                    </SelectItem>
                    <SelectItem value="1" className="text-white">
                      1
                    </SelectItem>
                    <SelectItem value="2" className="text-white">
                      2
                    </SelectItem>
                    <SelectItem value="3" className="text-white">
                      3
                    </SelectItem>
                    <SelectItem value="4+" className="text-white">
                      4+
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="status" className="text-white mb-2 block">
                  Status
                </Label>
                <Select defaultValue="any">
                  <SelectTrigger
                    id="status"
                    className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-merit-green border-white/20">
                    <SelectItem value="any" className="text-white">
                      Any
                    </SelectItem>
                    <SelectItem value="for-sale" className="text-white">
                      For Sale
                    </SelectItem>
                    <SelectItem value="for-rent" className="text-white">
                      For Rent
                    </SelectItem>
                    <SelectItem
                      value="under-construction"
                      className="text-white">
                      Under Construction
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-3">
                <Label className="text-white mb-4 block">
                  Price Range (ETB)
                </Label>
                <div className="px-2">
                  <Slider
                    defaultValue={[5000000]}
                    max={20000000}
                    step={500000}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex justify-between text-white/70 text-sm font-secondary">
                    <span>0 ETB</span>
                    <span>Selected: {priceRange[0].toLocaleString()} ETB</span>
                    <span>20,000,000 ETB</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
