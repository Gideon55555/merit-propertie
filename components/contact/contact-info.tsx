"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Piassa Ethio Ceramics Bldg, 2nd floor",
        "Addis Ababa, Ethiopia",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+251 938 727 272 - Call Center",
        // "+251 911 249 183 - Sales Inquiries",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@meritproperties.et", "sales@meritproperties.et"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:30 AM - 5:00 PM",
        "Saturday: 8:30 AM - 12:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Twitter, label: "Tiktok", href: "https://twitter.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  ];

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
