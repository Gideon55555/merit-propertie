import { AnniversaryHome } from "@/components/home/anniversary-home";
import { PrefaceSection } from "@/components/preface-section";
import { RevolutionizingSection } from "@/components/revolutionizing-section";
import { ChampioningSection } from "@/components/championing-section";
import { LocationSection } from "@/components/location-section";
import { AmenitiesSection } from "@/components/amenities-section";
import { ResidencesSection } from "@/components/residences-section";
import { ContactSection } from "@/components/contact-section";
import CommercialCenter from "@/components/CommercialCenter/CommercialCenter";
import type { Metadata } from "next";
import LenisWrapper from "@/components/LenisWrapper";
import { ScrollToTop } from "@/components/scroll-to-top";
import { DroneFootageSection } from "@/components/drone-footage-section";
import { VirtualTourSection } from "@/components/virtual-tour-section";
import ChatWidget from "@/components/chat/ChatWidget";
import GiveawayPopupLoader from "@/components/GiveawayPopupLoader";

export const metadata: Metadata = {
  title:
    "Merit Real Estate | Small Footprint, Grand Living Modern Sophistication",
  description:
    "Merit Real Estate offers exceptional properties that redefine urban living with a focus on quality, innovation, and customer satisfaction.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LenisWrapper>
        <AnniversaryHome />
        <PrefaceSection />
        <RevolutionizingSection />
        <DroneFootageSection />
        <ChampioningSection />
        <LocationSection />
        <AmenitiesSection />
        <ResidencesSection />
        <VirtualTourSection />
        <CommercialCenter/>
        <ContactSection />
        <ScrollToTop />
        <ChatWidget />
        <GiveawayPopupLoader />
      </LenisWrapper>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Merit Real Estate",
            url: "https://meritrealestate.com",
            logo: "https://meritrealestate.com/logo.png",
            description:
              "Merit Real Estate offers exceptional properties that redefine urban living with a focus on quality, innovation, and customer satisfaction.",
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
