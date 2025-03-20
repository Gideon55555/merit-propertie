"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Building2, Award, MapPin, Landmark } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-merit-green/10 text-merit-green hover:bg-merit-green/20 mb-4">
              About Merit Properties
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              A Decade of Excellence in Real Estate Development
            </h2>
            <p className="text-gray-700 mb-6">
              Merit Properties is a premier real estate developer in Ethiopia, specializing in high-quality mixed-use,
              commercial, and residential properties. With a decade of experience, a commitment to architectural
              excellence, and a strong ethical foundation, we create spaces that redefine urban living.
            </p>
            <p className="text-gray-700 mb-8">
              By integrating modern design with strategic locations, we deliver exceptional value for investors,
              homeowners, and businesses.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 bg-merit-green/10 p-3 rounded-full">
                  <Building2 className="h-6 w-6 text-merit-green" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">Quality-driven</h3>
                  <p className="text-sm text-gray-600">Superior craftsmanship and smart design</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-merit-green/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-merit-green" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">Investment-worthy</h3>
                  <p className="text-sm text-gray-600">High-value properties with strong ROI</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-merit-green/10 p-3 rounded-full">
                  <Landmark className="h-6 w-6 text-merit-green" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">Ethically rooted</h3>
                  <p className="text-sm text-gray-600">Supporting community development</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-merit-green/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-merit-green" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">Strategic locations</h3>
                  <p className="text-sm text-gray-600">Most sought-after areas of Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                height={500}
                width={500}
                src="/placeholder.svg?height=600&width=800"
                alt="Merit Properties Building"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-merit-gold/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-merit-green/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

