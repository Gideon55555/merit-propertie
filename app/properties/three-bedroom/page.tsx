import type { Metadata } from "next";
import ResidenceDetail, {
  ResidenceData,
} from "@/components/properties/residence-detail";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata: Metadata = {
  title: "Grand Vista Residences | Three Bedroom Apartment | Merit Real Estate",
  description:
    "Explore the Grand Vista Residences 3-bedroom luxury apartment at Merit Piassa. 130 m² gross area with master en-suite, dedicated maid's room, balcony, and private parking in Addis Ababa.",
  openGraph: {
    title: "Grand Vista Residences | 3-Bedroom Apartment | Merit Real Estate",
    description:
      "130 m² luxury 3-bedroom apartment with maid's room & parking in prime Piassa, Addis Ababa. View floor plan, specifications, and room dimensions.",
    images: [
      {
        url: "/images/three-bedroom.png",
        width: 1200,
        height: 1200,
        alt: "Grand Vista 3-Bedroom Floor Plan",
      },
    ],
  },
};

const threeBedroomData: ResidenceData = {
  slug: "three-bedroom",
  title: "Grand Vista Residences",
  subtitle: "Three Bedroom Apartment",
  collection: "Grand Vista Collection",
  location: "Piassa, Addis Ababa, Ethiopia",
  grossArea: "130 m²",
  netArea: "105 m²",
  bedrooms: 3,
  bathrooms: 2,
  balconies: 1,
  hasMaidRoom: true,
  hasParking: true,
  image: "/images/three-bedroom.png",
  renderImage: "/images/design/image-00069.png",
  virtualTourUrl: "https://kuula.co/share/collection/7Hmj0?logo=1&info=1&fs=1&vr=0&thumbs=1",
  description:
    "The three-bedroom unit at Merit Piassa Apartments, part of the Grand Vista Collection, offers a spacious 130 m² of luxury living. Perfect for growing families or those who desire ample space and elite urban refinement in Addis Ababa.",
  features: [
    "Master bedroom with private en-suite bathroom and extensive storage",
    "Two additional well-proportioned bedrooms with expansive windows",
    "Generous open-concept living and dining area ideal for memorable entertaining",
    "Fully-equipped culinary kitchen with premium stone countertops and cabinetry",
    "Dedicated maid's room with separate access for enhanced privacy",
    "Dedicated private secure parking space included with unit ownership",
  ],
  conclusion:
    "The Grand Vista Residences represent the pinnacle of urban living, offering spacious interiors, premium finishes, and thoughtful layouts that cater to the needs of modern families seeking comfort and luxury in a prime location.",
  specs: [
    { name: "Gross Area (incl. Parking)", value: "130 sqm" },
    { name: "Net Living Area", value: "105 sqm" },
    { name: "Living & Dining", value: "29 sqm" },
    { name: "Kitchen", value: "10 sqm" },
    { name: "Master Bedroom", value: "17 sqm" },
    { name: "Master Bathroom", value: "9 sqm" },
    { name: "Bedroom One", value: "12 sqm" },
    { name: "Bedroom Two", value: "11 sqm" },
    { name: "Common Bathroom", value: "7 sqm" },
    { name: "Maid's Room", value: "6 sqm" },
    { name: "Balcony", value: "4 sqm" },
  ],
  otherUnits: [
    {
      name: "One Bedroom Apartment",
      href: "/properties/one-bedroom",
      area: "49 m² Gross • 1 Bed",
    },
    {
      name: "Two Bedroom Apartment",
      href: "/properties/two-bedroom",
      area: "95 m² Gross • 2 Beds",
    },
    {
      name: "Merit Commercial Center",
      href: "/properties/commercial-center",
      area: "11 m² – 32 m² Shops",
    },
  ],
};

export default function ThreeBedroomPage() {
  return (
    <LenisWrapper>
      <ResidenceDetail data={threeBedroomData} />
    </LenisWrapper>
  );
}
