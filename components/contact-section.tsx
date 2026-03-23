"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/data/contact-details";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="merit-green-section py-12 md:py-20"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-7xl md:text-9xl font-serif font-bold text-white opacity-20 leading-tight mb-8">
            Looking for Your
            <br />
            Next Property?
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Let&apos;s Make It Easy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8"
          >
            <h3 className="font-serif text-2xl font-bold text-merit-gold mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-sm font-medium text-white/80 mb-1"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full placeholder:text-white/50 bg-white/10 border-merit-gold/30 text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm font-medium text-white/80 mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full placeholder:text-white/50 bg-white/10 border-merit-gold/30 text-white"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block font-sans text-sm font-medium text-white/80 mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="w-full placeholder:text-white/50 bg-white/10 border-merit-gold/30 text-white"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-white/80 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full placeholder:text-white/50 min-h-[150px] bg-white/10 border-merit-gold/30 text-white"
                />
              </div>
              <Button className="w-full bg-merit-gold hover:bg-merit-gold/90 text-merit-green">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold text-merit-gold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 bg-merit-gold/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-merit-gold" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-white/80 font-secondary">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
