"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square } from "lucide-react"
import Image from "next/image"

const properties = [
  {
    id: 1,
    title: "Harmony Heights",
    type: "Residential",
    location: "Bole, Addis Ababa",
    price: "$250,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "180 sqm",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Merit Business Center",
    type: "Commercial",
    location: "Kazanchis, Addis Ababa",
    price: "$450,000",
    bedrooms: null,
    bathrooms: null,
    area: "350 sqm",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Urban Village",
    type: "Mixed-Use",
    location: "CMC, Addis Ababa",
    price: "$320,000",
    bedrooms: 2,
    bathrooms: 2,
    area: "220 sqm",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function FeaturedProperties() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="properties" className="bg-gray-50 py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-merit-green/10 text-merit-green hover:bg-merit-green/20 mb-4">Our Properties</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our selection of premium properties designed with excellence and strategically located in the most
            sought-after areas of Ethiopia.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {properties.map((property) => (
            <motion.div key={property.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    height={500}
                    width={500}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-merit-green text-white">{property.type}</Badge>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-merit-green mr-1" />
                    <span className="text-sm text-gray-600">{property.location}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-merit-green font-bold text-lg mb-4">{property.price}</p>

                  <div className="flex items-center justify-between">
                    {property.bedrooms && (
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-600">{property.bedrooms} Beds</span>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-600">{property.bathrooms} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Square className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{property.area}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-merit-green text-merit-green hover:bg-merit-green hover:text-white"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-merit-green hover:bg-merit-green/90 text-white px-8 py-6">View All Properties</Button>
        </div>
      </div>
    </section>
  )
}

