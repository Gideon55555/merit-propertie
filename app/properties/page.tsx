import type { Metadata } from "next";
import { PropertiesHero } from "@/components/properties/properties-hero";
import { PropertiesFilter } from "@/components/properties/properties-filter";
import { PropertiesGrid } from "@/components/properties/properties-grid";
import { PropertiesCta } from "@/components/properties/properties-cta";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata: Metadata = {
  title: "Properties | Merit Real Estate",
  description:
    "Explore Merit Real Estate's portfolio of exceptional properties in prime locations. Find your perfect home, commercial space, or investment opportunity.",
  openGraph: {
    title: "Properties | Merit Real Estate",
    description:
      "Explore Merit Real Estate's portfolio of exceptional properties in prime locations. Find your perfect home, commercial space, or investment opportunity.",
    images: [
      {
        url: "/og-properties.jpg",
        width: 1200,
        height: 630,
        alt: "Merit Real Estate Properties",
      },
    ],
  },
};

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-merit-green">
      <LenisWrapper>
        <PropertiesHero />
        <PropertiesFilter />
        <PropertiesGrid />
        <PropertiesCta />
      </LenisWrapper>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Merit Real Estate Properties",
            url: "https://meritrealestate.com/properties",
            description:
              "Explore Merit Real Estate's portfolio of exceptional properties in prime locations. Find your perfect home, commercial space, or investment opportunity.",
            provider: {
              "@type": "RealEstateAgent",
              name: "Merit Real Estate",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Piassa Ethio Ceramics Bldg, 2nd floor",
                addressLocality: "Addis Ababa",
                addressCountry: "Ethiopia",
              },
              telephone: "+251 911 249 183",
              email: "info@meritproperties.com",
            },
          }),
        }}
      />
    </div>
  );
}
