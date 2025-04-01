"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function ContactFaq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const faqs = [
    {
      question: "What types of properties does Merit Real Estate offer?",
      answer:
        "Merit Real Estate offers a diverse portfolio of properties including residential apartments, commercial spaces, and mixed-use developments. Our properties range from luxury apartments to office spaces, all strategically located in prime areas of Addis Ababa.",
    },
    {
      question: "How can I schedule a property viewing?",
      answer:
        "You can schedule a property viewing by filling out our contact form, calling our sales team at +251 911 249 183, or emailing us at sales@meritproperties.com. Our team will promptly arrange a convenient time for you to visit the property of your interest.",
    },
    {
      question: "What payment options are available for purchasing a property?",
      answer:
        "We offer flexible payment options including lump sum payments, installment plans, and bank financing. Our sales team can provide detailed information about payment terms and help you choose the option that best suits your financial situation.",
    },
    {
      question: "Does Merit Real Estate handle property management?",
      answer:
        "Yes, we provide comprehensive property management services for our developments. Our management team ensures the maintenance of common areas, security, and other essential services to provide a comfortable living or working environment for our clients.",
    },
    {
      question: "Are there any investment opportunities available?",
      answer:
        "Merit Real Estate offers various investment opportunities in our developments. These investments typically provide attractive returns due to our strategic locations and quality construction. Contact our investment team to discuss current opportunities.",
    },
  ];

  return (
    <section className="py-16 bg-merit-green" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-merit-gold/10 text-merit-gold hover:bg-merit-gold/20 mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wider   text-white mb-6">
            Common Questions
          </h2>
          <p className="font-secondary text-white/80 max-w-3xl mx-auto">
            Find answers to commonly asked questions about our properties,
            services, and processes. If you don&apos;t see your question here, feel
            free to contact us directly.
          </p>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-merit-green/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white font-primary text-lg hover:no-underline hover:text-merit-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/80 font-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-white/80 mb-6">
              Still have questions? Our team is here to help.
            </p>
            <Button
              asChild
              className="bg-merit-gold hover:bg-merit-gold/90 text-black">
              <Link href="#contact-form">
                Ask Your Question <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
