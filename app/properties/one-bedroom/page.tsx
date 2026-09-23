import type { Metadata } from "next";
import ResidenceDetail, {
  ResidenceData,
} from "@/components/properties/residence-detail";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata: Metadata = {
  title: "Urban Comfort Residences | One Bedroom Apartment | Merit Real Estate",
  description:
    "Explore the Urban Comfort Residences 1-bedroom luxury apartment at Merit Piassa. 49 m² gross area with modern open-concept layout, dual balconies, and premium finishes in Addis Ababa.",
  openGraph: {
    title: "Urban Comfort Residences | 1-Bedroom Apartment | Merit Real Estate",
    description:
      "49 m² luxury 1-bedroom apartment in prime Piassa, Addis Ababa. View floor plan, specifications, and room dimensions.",
    images: [
      {
        url: "/images/one-bedroom.png",
        width: 1200,
        height: 1200,
        alt: "Urban Comfort 1-Bedroom Floor Plan",
      },
    ],
  },
};

const oneBedroomData: ResidenceData = {
  slug: "one-bedroom",
  title: "Urban Comfort Residences",
  subtitle: "One Bedroom Apartment",
  collection: "Urban Comfort Series",
  location: "Piassa, Addis Ababa, Ethiopia",
  grossArea: "49 m²",
  netArea: "44 m²",
  bedrooms: 1,
  bathrooms: 1,
  balconies: 2,
  image: "/images/one-bedroom.png",
  renderImage: "/images/design/image-00064.png",
  virtualTourUrl: "https://kuula.co/share/collection/7Hmj9?logo=1&info=1&fs=1&vr=0&thumbs=1",
  description:
    "The one-bedroom unit at Merit Piassa Apartments, part of our Urban Comfort Series, offers a compact yet highly functional living space with a gross area of 49 m². Designed with innovation and efficiency in mind, this unit maximizes every inch of space for modern urban living.",
  features: [
    "Comfortable bedroom with generous built-in storage wardrobes",
    "Cozy living & dining area tailored for relaxation and entertaining",
    "Modern open kitchen with sleek finishes and premium cabinetry",
    "Contemporary bathroom equipped with high-end designer fittings",
    "Dual private balconies providing superior natural airflow and city views",
  ],
  conclusion:
    "This unit is ideal for individuals or couples seeking an affordable yet sophisticated urban living experience, complete with modern technologies that enhance everyday comfort and convenience.",
  specs: [
    { name: "Gross Area", value: "49 sqm" },
    { name: "Net Living Area", value: "44 sqm" },
    { name: "Living & Dining", value: "14 sqm" },
    { name: "Open Kitchen", value: "6 sqm" },
    { name: "Master Bedroom", value: "12 sqm" },
    { name: "Bathroom", value: "7 sqm" },
    { name: "Balcony One", value: "2 sqm" },
    { name: "Balcony Two", value: "3 sqm" },
  ],
  otherUnits: [
    {
      name: "Two Bedroom Apartment",
      href: "/properties/two-bedroom",
      area: "95 m² Gross • 2 Beds",
    },
    {
      name: "Three Bedroom Apartment",
      href: "/properties/three-bedroom",
      area: "130 m² Gross • 3 Beds",
    },
    {
      name: "Merit Commercial Center",
      href: "/properties/commercial-center",
      area: "11 m² – 32 m² Shops",
    },
  ],
};

export default function OneBedroomPage() {
  return (
    <LenisWrapper>
      <ResidenceDetail data={oneBedroomData} />
    </LenisWrapper>
  );
}
