"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { contactDetails, socialLinks } from "@/data/contact-details";

export function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="bg-merit-green/50 backdrop-blur-sm rounded-lg border border-white/10 p-8 md:p-10">
        <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
          Contact Information
        </Badge>
        <h2 className="text-3xl font-primary font-semibold tracking-wider text-white mb-8">
          Reach Out to Us
        </h2>

        <div className="space-y-8">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex">
              <div className="mr-4 bg-merit-gold/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-merit-gold" />
              </div>
              <div>
                <h3 className="font-sans text-white text-lg mb-2">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => {
                  const isLink = typeof detail !== "string" && detail.href;
                  const content = typeof detail === "string" ? detail : detail.text;
                  
                  return isLink ? (
                    <a
                      key={i}
                      href={(detail as any).href}
                      className="block text-white/80 font-secondary hover:text-merit-gold transition-colors"
                      target={(detail as any).href.startsWith('http') ? "_blank" : undefined}
                      rel={(detail as any).href.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <p key={i} className="text-white/80 font-secondary">
                      {content}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-merit-green/50 backdrop-blur-sm rounded-lg border border-white/10 p-8 md:p-10">
        <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
          Connect With Us
        </Badge>
        <h2 className="text-3xl font-semibold tracking-wider text-white mb-6">
          Follow Our Journey
        </h2>
        <p className="text-white/80 mb-6">
          Stay updated with our latest properties, projects, and news by
          following us on social media.
        </p>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10"
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5 mr-2" />
                {social.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
