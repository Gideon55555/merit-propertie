import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutValues } from "@/components/about/about-values";
// import { AboutTeam } from "@/components/about/about-team";
import { AboutStats } from "@/components/about/about-stats";
import { AboutTestimonials } from "@/components/about/about-testimonials";
import { AboutCta } from "@/components/about/about-cta";
import LenisWrapper from "@/components/LenisWrapper";
import { AboutTeam } from "@/components/about/about-team";

export const metadata: Metadata = {
  title: "About Merit Real Estate | Our Story, Values & Team",
  description:
    "Learn about Merit Real Estate's journey, our core values, and the dedicated team behind our exceptional properties and developments.",
  openGraph: {
    title: "About Merit Real Estate | Our Story, Values & Team",
    description:
      "Learn about Merit Real Estate's journey, our core values, and the dedicated team behind our exceptional properties and developments.",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Merit Real Estate",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LenisWrapper>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutStats />
        {/* <AboutTeam /> */}
        <AboutTestimonials />
        <AboutCta />
      </LenisWrapper>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Merit Real Estate",
            url: "https://meritrealestate.com/about",
            logo: "https://meritrealestate.com/logo.png",
            description:
              "Merit Real Estate offers exceptional properties that redefine urban living with a focus on quality, innovation, and customer satisfaction.",
            foundingDate: "2013",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Piassa Ethio Ceramics Bldg, 2nd floor",
              addressLocality: "Addis Ababa",
              addressCountry: "Ethiopia",
            },
            telephone: "+251 911 249 183",
            email: "info@meritproperties.com",
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
