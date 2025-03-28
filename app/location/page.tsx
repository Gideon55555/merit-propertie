import type { Metadata } from "next";
import { LocationHero } from "@/components/location/location-hero";
import { LocationOverview } from "@/components/location/location-overview";
import { LocationAmenities } from "@/components/location/location-amenities";
import { LocationTransport } from "@/components/location/location-transport";
import { LocationMap } from "@/components/location/location-map";
import { LocationCta } from "@/components/location/location-cta";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata: Metadata = {
  title: "Location | Merit Real Estate",
  description:
    "Discover the prime locations of Merit Real Estate properties in Addis Ababa, Ethiopia. Strategically positioned for convenience, accessibility, and quality living.",
  openGraph: {
    title: "Location | Merit Real Estate",
    description:
      "Discover the prime locations of Merit Real Estate properties in Addis Ababa, Ethiopia. Strategically positioned for convenience, accessibility, and quality living.",
    images: [
      {
        url: "/og-location.jpg",
        width: 1200,
        height: 630,
        alt: "Merit Real Estate Locations",
      },
    ],
  },
};

export default function LocationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-merit-green">
      <LenisWrapper>
        <LocationHero />
        <LocationOverview />
        <LocationAmenities />
        <LocationTransport />
        <LocationMap />
        <LocationCta />
      </LenisWrapper>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Merit Real Estate",
            url: "https://meritrealestate.com/location",
            description:
              "Discover the prime locations of Merit Real Estate properties in Addis Ababa, Ethiopia. Strategically positioned for convenience, accessibility, and quality living.",
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
          }),
        }}
      />
    </div>
  );
}
