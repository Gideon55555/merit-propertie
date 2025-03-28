"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";

export function AboutTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const teamMembers = [
    {
      name: "Samuel Tesfaye",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in real estate development, Samuel leads Merit with vision and integrity.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Meron Haile",
      role: "Chief Operations Officer",
      bio: "Meron ensures operational excellence across all Merit projects, bringing efficiency and innovation to every development.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Dawit Bekele",
      role: "Chief Architect",
      bio: "Award-winning architect Dawit brings creative vision and technical expertise to Merit's distinctive designs.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Tigist Mengistu",
      role: "Director of Marketing",
      bio: "Tigist crafts Merit's brand story and ensures our properties connect with the right audiences.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-merit-green font-secondary uppercase tracking-wider text-sm font-medium">
            The People Behind Merit
          </span>
          <h2 className="text-4xl md:text-5xl font-primary text-gray-900 mt-2 mb-6">
            Our Leadership Team
          </h2>
          <p className="font-secondary text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated professionals whose expertise, passion, and
            vision drive Merit Real Estate forward.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-merit-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300">
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href="#"
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300">
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="font-primary text-xl text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="font-secondary text-merit-green font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="font-secondary text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
