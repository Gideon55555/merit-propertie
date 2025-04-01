"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

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
      transition={{ duration: 0.6 }}
      className="bg-merit-green/50 backdrop-blur-sm rounded-lg border border-white/10 p-8 md:p-10">
      <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
        Contact Us
      </Badge>
      <h2 className="text-3xl font-semibold tracking-wider text-white mb-6">
        Send Us a Message
      </h2>

      {formState === "success" ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-merit-gold/10 mb-6">
            <CheckCircle2 className="h-8 w-8 text-merit-gold" />
          </div>
          <h3 className="text-2xl font-sans text-white mb-4">Thank You!</h3>
          <p className="text-white/80 mb-6">
            Your message has been sent successfully. Our team will get back to
            you shortly.
          </p>
          <Button
            onClick={() => setFormState("idle")}
            className="bg-merit-gold hover:bg-merit-gold/90 text-black">
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-sans">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-sans">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white font-sans">
                Phone Number
              </Label>
              <Input
                id="phone"
                placeholder="Your phone number"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest" className="text-white font-sans">
                I&apos;m Interested In
              </Label>
              <Select>
                <SelectTrigger
                  id="interest"
                  className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-merit-green border-white/20">
                  <SelectItem value="residential" className="text-white">
                    Residential Properties
                  </SelectItem>
                  <SelectItem value="commercial" className="text-white">
                    Commercial Properties
                  </SelectItem>
                  <SelectItem value="investment" className="text-white">
                    Investment Opportunities
                  </SelectItem>
                  <SelectItem value="viewing" className="text-white">
                    Schedule a Viewing
                  </SelectItem>
                  <SelectItem value="other" className="text-white">
                    Other Inquiry
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white font-sans">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="consent"
              className="rounded border-white/20 bg-white/10 text-merit-gold focus:ring-merit-gold"
              required
            />
            <Label htmlFor="consent" className="text-white/80 font-sans text-sm">
              I consent to having Merit Real Estate collect my data through this
              form.
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-merit-gold hover:bg-merit-gold/90 text-black"
            disabled={formState === "submitting"}>
            {formState === "submitting" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
