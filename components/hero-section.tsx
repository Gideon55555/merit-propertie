"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(21, 72, 67, 0.8), rgba(21, 72, 67, 0.4)), url('/images/hero.png')",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-tight mb-4">
              <span className="block font-serif">Small Footprint,</span>
              <span className="block font-serif">Grand Living</span>
              <span className="block font-serif text-merit-gold">Modern Sophistication</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Welcome to Merit Real Estate. Redefining Excellence in the Real Estate Industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-white text-merit-green hover:bg-white/90 text-base px-6 py-6">
              Explore Properties
            </Button>
            <Button variant="outline" className="border-merit-gold bg-transparent text-merit-gold hover:bg-white/10 hover:text-merit-gold text-base px-6 py-6">
              Welcome Home <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-white/80 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}

