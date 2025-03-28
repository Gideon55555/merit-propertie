import React from "react";
import { motion, Variants } from "framer-motion";

interface MapProps {
  itemVariants: Variants;
  isInView: boolean;
}
const Map = ({ itemVariants, isInView }: MapProps) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
      className="relative">
      <div className="relative h-[400px] md:h-[900px] w-full z-10 rounded-lg overflow-hidden shadow-xl">
        {/* <img
        src="/placeholder.svg?height=800&width=600"
        alt="Merit Real Estate Location ap"
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
          title="Merit Real Estate Location ap"
          className="absolute inset-0"></iframe>
      </div>
      <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-merit-gold/20 rounded-lg -z-10" />
    </motion.div>
  );
};

export default Map;
