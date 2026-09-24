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
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "residential",
    message: "",
    consent: false,
    _gotcha: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, name, value, type } = e.target;
    const field = name || id;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [field]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleInterestChange = (val: string) => {
    setFormData((prev) => ({ ...prev, interest: val }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "residential",
      message: "",
      consent: false,
      _gotcha: "",
    });
    setErrorMessage(null);
    setFormState("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(
          data.error || "Unable to send your message. Please try again later."
        );
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch (err) {
      console.error("Submission failed:", err);
      setErrorMessage(
        "A network error occurred. Please check your connection and try again."
      );
      setFormState("error");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="contact-form"
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
      className="bg-merit-green/50 backdrop-blur-sm rounded-lg border border-white/10 p-8 md:p-10 scroll-mt-24"
    >
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
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Your message has been sent successfully. Our sales advisory team will
            get back to you shortly.
          </p>
          <Button
            onClick={handleReset}
            className="bg-merit-gold hover:bg-merit-gold/90 text-black font-semibold"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-sm">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <input
            type="text"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-sans">
                Full Name <span className="text-merit-gold">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={formState === "submitting"}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-sans">
                Email Address <span className="text-merit-gold">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                disabled={formState === "submitting"}
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
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +251 911 000 000"
                disabled={formState === "submitting"}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest" className="text-white font-sans">
                I&apos;m Interested In <span className="text-merit-gold">*</span>
              </Label>
              <Select
                value={formData.interest}
                onValueChange={handleInterestChange}
                disabled={formState === "submitting"}
              >
                <SelectTrigger
                  id="interest"
                  className="bg-white/10 border-white/20 text-white"
                >
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
              Message <span className="text-merit-gold">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
              disabled={formState === "submitting"}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              disabled={formState === "submitting"}
              className="rounded border-white/20 bg-white/10 text-merit-gold focus:ring-merit-gold cursor-pointer"
              required
            />
            <Label
              htmlFor="consent"
              className="text-white/80 font-sans text-sm cursor-pointer"
            >
              I consent to having Merit Real Estate collect my data through this
              form.
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-merit-gold hover:bg-merit-gold/90 text-black font-semibold h-11 transition-all"
            disabled={formState === "submitting"}
          >
            {formState === "submitting" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
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
