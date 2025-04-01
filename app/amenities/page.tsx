import type { Metadata } from "next";
import { AmenitiesPage } from "@/components/amenities/amenities-page";
// import LenisWrapper from "@/components/LenisWrapper";

export const metadata: Metadata = {
  title: "Amenities | Merit Real Estate",
  description:
    "Explore the premium amenities offered at Merit Real Estate properties, designed to enhance your living experience and provide ultimate comfort and convenience.",
  openGraph: {
    title: "Amenities | Merit Real Estate",
    description:
      "Explore the premium amenities offered at Merit Real Estate properties, designed to enhance your living experience and provide ultimate comfort and convenience.",
    images: [
      {
        url: "/og-amenities.jpg",
        width: 1200,
        height: 630,
        alt: "Merit Real Estate Amenities",
      },
    ],
  },
};

export default function Amenities() {
  return (
    <div className="flex flex-col min-h-screen bg-merit-green">
      {/* <LenisWrapper> */}
        <AmenitiesPage />
      {/* </LenisWrapper> */}

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Merit Real Estate",
            url: "https://meritrealestate.com/amenities",
            description:
              "Explore the premium amenities offered at Merit Real Estate properties, designed to enhance your living experience and provide ultimate comfort and convenience.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Piassa Ethio Ceramics Bldg, 2nd floor",
              addressLocality: "Addis Ababa",
              addressCountry: "Ethiopia",
            },
            telephone: "+251 911 249 183",
            email: "info@meritproperties.com",
          }),
        }}
      />
    </div>
  );
}
