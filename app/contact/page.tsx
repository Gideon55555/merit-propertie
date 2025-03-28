import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/contact-map";
import { ContactFaq } from "@/components/contact/contact-faq";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata: Metadata = {
  title: "Contact Us | Merit Real Estate",
  description:
    "Get in touch with Merit Real Estate. Our team is ready to assist you with any inquiries about our properties, services, or investment opportunities.",
  openGraph: {
    title: "Contact Us | Merit Real Estate",
    description:
      "Get in touch with Merit Real Estate. Our team is ready to assist you with any inquiries about our properties, services, or investment opportunities.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Merit Real Estate",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-merit-green">
      <LenisWrapper>
        <ContactHero />
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <ContactMap />
        <ContactFaq />
      </LenisWrapper>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Merit Real Estate",
            url: "https://meritrealestate.com/contact",
            logo: "https://meritrealestate.com/logo.png",
            description:
              "Merit Real Estate offers exceptional properties that redefine urban living with a focus on quality, innovation, and customer satisfaction.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Piassa Ethio Ceramics Bldg, 2nd floor",
              addressLocality: "Addis Ababa",
              addressCountry: "Ethiopia",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "9.0222",
              longitude: "38.7468",
            },
            telephone: "+251 911 249 183",
            email: "info@meritproperties.com",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "10:00",
                closes: "15:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/meritrealestate",
              "https://www.instagram.com/meritrealestate",
              "https://www.linkedin.com/company/meritrealestate",
            ],
          }),
        }}
      />
    </div>
  );
}
