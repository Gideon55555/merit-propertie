import type { Metadata } from "next";
import ResidenceDetail, {
  ResidenceData,
} from "@/components/properties/residence-detail";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata: Metadata = {
  title: "Harmony Haven Residences | Two Bedroom Apartment | Merit Real Estate",
  description:
    "Explore the Harmony Haven Residences 2-bedroom luxury apartment at Merit Piassa. Spanning 95 m² gross area with master suite, spacious living room, and private balcony in Addis Ababa.",
  openGraph: {
    title: "Harmony Haven Residences | 2-Bedroom Apartment | Merit Real Estate",
    description:
      "95 m² luxury 2-bedroom apartment in prime Piassa, Addis Ababa. View floor plan, specifications, and room dimensions.",
    images: [
      {
        url: "/images/two-bedroom.png",
        width: 1200,
        height: 1200,
        alt: "Harmony Haven 2-Bedroom Floor Plan",
      },
    ],
  },
};

const twoBedroomData: ResidenceData = {
  slug: "two-bedroom",
  title: "Harmony Haven Residences",
  subtitle: "Two Bedroom Apartment",
  collection: "Harmony Haven Collection",
  location: "Piassa, Addis Ababa, Ethiopia",
  grossArea: "95 m²",
  netArea: "75 m²",
  bedrooms: 2,
  bathrooms: 2,
  balconies: 1,
  image: "/images/two-bedroom.png",
  renderImage: "/images/design/image-00067.png",
  virtualTourUrl: "https://kuula.co/share/collection/7HmjP?logo=1&info=1&fs=1&vr=0&thumbs=1",
  description:
    "The two-bedroom unit at Merit Piassa Apartments, part of the Harmony Haven Collection, spans a generous 95 m², making it perfect for small families, professionals, or roommates. Designed for practicality and contemporary living, it provides an exquisite blend of comfort and style.",
  features: [
    "Two well-proportioned bedrooms with ample natural light and built-in wardrobes",
    "Master bedroom suite with private en-suite bathroom",
    "Expansive living and dining space ideal for family gatherings and hosting guests",
    "Modern culinary kitchen crafted with durable, elegant surface finishes",
    "Dedicated common bathroom with premium designer fixtures",
    "Generous private balcony offering refreshing views of the Addis Ababa skyline",
  ],
  conclusion:
    "These units combine affordability with modern amenities, providing a balance of space, comfort, and cutting-edge technology for a seamless living experience in a prime location.",
  specs: [
    { name: "Gross Area", value: "95 sqm" },
    { name: "Net Living Area", value: "75 sqm" },
    { name: "Living & Dining", value: "24 sqm" },
    { name: "Kitchen", value: "9 sqm" },
    { name: "Master Bedroom", value: "15 sqm" },
    { name: "Master Bathroom", value: "6 sqm" },
    { name: "Bedroom One", value: "9 sqm" },
    { name: "Common Bathroom", value: "6 sqm" },
    { name: "Corridor", value: "3 sqm" },
    { name: "Balcony", value: "3 sqm" },
  ],
  otherUnits: [
    {
      name: "One Bedroom Apartment",
      href: "/properties/one-bedroom",
      area: "49 m² Gross • 1 Bed",
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

export default function TwoBedroomPage() {
  return (
    <LenisWrapper>
      <ResidenceDetail data={twoBedroomData} />
    </LenisWrapper>
  );
}
