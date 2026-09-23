export interface ResidenceSpec {
  name: string;
  value: string;
}

export interface OtherUnitLink {
  name: string;
  href: string;
  area: string;
}

export interface PropertyMeta {
  title: string;
  description: string;
  ogDescription: string;
  image?: string;
}

export interface Property {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  collection: string;
  type: "Residential" | "Commercial";
  categoryKey: "residential" | "commercial";
  status: "Available" | "Under Construction" | "Sold Out" | "Reserved";
  location: string;
  shortLocation: string;
  price: string;
  grossArea: string;
  netArea: string;
  areaNum: number;
  areaLabel: string;
  bedrooms: number | null;
  bathrooms: number | null;
  balconies: number;
  hasMaidRoom?: boolean;
  hasParking?: boolean;
  image: string;
  cardImage?: string;
  renderImage?: string;
  virtualTourUrl?: string;
  featured: boolean;
  description: string;
  shortDescription: string;
  features: string[];
  cardFeatures: string[];
  conclusion?: string;
  specs?: ResidenceSpec[];
  meta: PropertyMeta;
}

export const properties: Property[] = [
  {
    id: 1,
    slug: "one-bedroom",
    title: "Urban Comfort Residences",
    subtitle: "One Bedroom Apartment",
    collection: "Urban Comfort Series",
    type: "Residential",
    categoryKey: "residential",
    status: "Available",
    location: "Piassa, Addis Ababa, Ethiopia",
    shortLocation: "Piassa, Addis Ababa",
    price: "Contact for Pricing",
    grossArea: "49 m²",
    netArea: "44 m²",
    areaNum: 49,
    areaLabel: "49 m² Gross (44 m² Net)",
    bedrooms: 1,
    bathrooms: 1,
    balconies: 2,
    hasMaidRoom: false,
    hasParking: false,
    image: "/images/one-bedroom.png",
    renderImage: "/images/design/image-00064.png",
    virtualTourUrl: "https://kuula.co/share/collection/7Hmj9?logo=1&info=1&fs=1&vr=0&thumbs=1",
    featured: true,
    description:
      "The one-bedroom unit at Merit Piassa Apartments, part of our Urban Comfort Series, offers a compact yet highly functional living space with a gross area of 49 m². Designed with innovation and efficiency in mind, this unit maximizes every inch of space for modern urban living.",
    shortDescription:
      "Designed with innovation and efficiency in mind, maximizing every inch of space with an open kitchen, comfortable bedroom, and dual balconies.",
    features: [
      "Comfortable bedroom with generous built-in storage wardrobes",
      "Cozy living & dining area tailored for relaxation and entertaining",
      "Modern open kitchen with sleek finishes and premium cabinetry",
      "Contemporary bathroom equipped with high-end designer fittings",
      "Dual private balconies providing superior natural airflow and city views",
    ],
    cardFeatures: ["Open kitchen", "Living & dining", "Built-in storage", "2 Balconies"],
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
    meta: {
      title: "Urban Comfort Residences | One Bedroom Apartment | Merit Real Estate",
      description:
        "Explore the Urban Comfort Residences 1-bedroom luxury apartment at Merit Piassa. 49 m² gross area with modern open-concept layout, dual balconies, and premium finishes in Addis Ababa.",
      ogDescription:
        "49 m² luxury 1-bedroom apartment in prime Piassa, Addis Ababa. View floor plan, specifications, and room dimensions.",
      image: "/images/one-bedroom.png",
    },
  },
  {
    id: 2,
    slug: "two-bedroom",
    title: "Harmony Haven Residences",
    subtitle: "Two Bedroom Apartment",
    collection: "Harmony Haven Collection",
    type: "Residential",
    categoryKey: "residential",
    status: "Available",
    location: "Piassa, Addis Ababa, Ethiopia",
    shortLocation: "Piassa, Addis Ababa",
    price: "Contact for Pricing",
    grossArea: "95 m²",
    netArea: "75 m²",
    areaNum: 95,
    areaLabel: "95 m² Gross (75 m² Net)",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    hasMaidRoom: false,
    hasParking: false,
    image: "/images/two-bedroom.png",
    renderImage: "/images/design/image-00067.png",
    virtualTourUrl: "https://kuula.co/share/collection/7HmjP?logo=1&info=1&fs=1&vr=0&thumbs=1",
    featured: true,
    description:
      "The two-bedroom unit at Merit Piassa Apartments, part of the Harmony Haven Collection, spans a generous 95 m², making it perfect for small families, professionals, or roommates. Designed for practicality and contemporary living, it provides an exquisite blend of comfort and style.",
    shortDescription:
      "Practical and contemporary layout spanning 95 m², ideal for small families or professionals with master bedroom suite, built-in wardrobes, and balcony.",
    features: [
      "Two well-proportioned bedrooms with ample natural light and built-in wardrobes",
      "Master bedroom suite with private en-suite bathroom",
      "Expansive living and dining space ideal for family gatherings and hosting guests",
      "Modern culinary kitchen crafted with durable, elegant surface finishes",
      "Dedicated common bathroom with premium designer fixtures",
      "Generous private balcony offering refreshing views of the Addis Ababa skyline",
    ],
    cardFeatures: ["Master suite", "Spacious living area", "Modern kitchen", "Private balcony"],
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
    meta: {
      title: "Harmony Haven Residences | Two Bedroom Apartment | Merit Real Estate",
      description:
        "Explore the Harmony Haven Residences 2-bedroom luxury apartment at Merit Piassa. Spanning 95 m² gross area with master suite, spacious living room, and private balcony in Addis Ababa.",
      ogDescription:
        "95 m² luxury 2-bedroom apartment in prime Piassa, Addis Ababa. View floor plan, specifications, and room dimensions.",
      image: "/images/two-bedroom.png",
    },
  },
  {
    id: 3,
    slug: "three-bedroom",
    title: "Grand Vista Residences",
    subtitle: "Three Bedroom Apartment",
    collection: "Grand Vista Collection",
    type: "Residential",
    categoryKey: "residential",
    status: "Available",
    location: "Piassa, Addis Ababa, Ethiopia",
    shortLocation: "Piassa, Addis Ababa",
    price: "Contact for Pricing",
    grossArea: "130 m²",
    netArea: "105 m²",
    areaNum: 130,
    areaLabel: "130 m² Gross (105 m² Net)",
    bedrooms: 3,
    bathrooms: 2,
    balconies: 1,
    hasMaidRoom: true,
    hasParking: true,
    image: "/images/three-bedroom.png",
    renderImage: "/images/design/image-00069.png",
    virtualTourUrl: "https://kuula.co/share/collection/7Hmj0?logo=1&info=1&fs=1&vr=0&thumbs=1",
    featured: true,
    description:
      "The three-bedroom unit at Merit Piassa Apartments, part of the Grand Vista Collection, offers a spacious 130 m² of luxury living. Perfect for growing families or those who desire ample space and elite urban refinement in Addis Ababa.",
    shortDescription:
      "The pinnacle of urban luxury living with a master en-suite, two additional bedrooms, dedicated maid's room, generous living area, and parking.",
    features: [
      "Master bedroom with private en-suite bathroom and extensive storage",
      "Two additional well-proportioned bedrooms with expansive windows",
      "Generous open-concept living and dining area ideal for memorable entertaining",
      "Fully-equipped culinary kitchen with premium stone countertops and cabinetry",
      "Dedicated maid's room with separate access for enhanced privacy",
      "Dedicated private secure parking space included with unit ownership",
    ],
    cardFeatures: ["Master en-suite", "Maid's room", "Dedicated parking", "Generous balcony"],
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
    meta: {
      title: "Grand Vista Residences | Three Bedroom Apartment | Merit Real Estate",
      description:
        "Explore the Grand Vista Residences 3-bedroom luxury apartment at Merit Piassa. 130 m² gross area with master en-suite, dedicated maid's room, balcony, and private parking in Addis Ababa.",
      ogDescription:
        "130 m² luxury 3-bedroom apartment with maid's room & parking in prime Piassa, Addis Ababa. View floor plan, specifications, and room dimensions.",
      image: "/images/three-bedroom.png",
    },
  },
  {
    id: 4,
    slug: "commercial-center",
    title: "Merit Commercial Center",
    subtitle: "Retail & Modular Shops",
    collection: "Commercial Plaza",
    type: "Commercial",
    categoryKey: "commercial",
    status: "Under Construction",
    location: "Teklehaymanot, Addis Ababa, Ethiopia",
    shortLocation: "Teklehaymanot, Addis Ababa",
    price: "Contact for Pricing",
    grossArea: "11 m² – 32 m²",
    netArea: "11 m² – 32 m²",
    areaNum: 11,
    areaLabel: "11 m² – 32 m² units (8,000 m² site)",
    bedrooms: null,
    bathrooms: null,
    balconies: 0,
    image: "/images/commercial/15-1.webp",
    cardImage: "/images/commercial/2-1.webp",
    featured: true,
    description:
      "Explore the Merit Commercial Center in Teklehaymanot, Addis Ababa. 335 modular road-access and corridor-access shops starting from 11 m² to 32 m² across 7 floors.",
    shortDescription:
      "Vibrant commercial development offering 335 road-access and corridor-access shops across multiple floors (SB, LG, UG, Floors 1–4) with dynamic parking.",
    features: [
      "335 modular commercial and retail shops across 7 distinct floors",
      "Dual access concept: Road-Facing shops and Internal Corridor shops",
      "Units starting from 11 m² up to 32 m² customizable for retail and offices",
      "Modern escalators, passenger elevators, and cargo handling infrastructure",
      "Multi-level structured parking with 24/7 round-the-clock security",
    ],
    cardFeatures: ["335 shops total", "7 active levels", "Road & corridor access", "Basement parking"],
    conclusion:
      "A premier commercial destination in central Teklehaymanot designed for high foot-traffic retail, wholesale, and service businesses.",
    meta: {
      title: "Merit Commercial Center | Retail & Modular Shops | Merit Real Estate",
      description:
        "Explore the Merit Commercial Center in Teklehaymanot, Addis Ababa. 335 modular road-access and corridor-access shops starting from 11 m² to 32 m² across 7 floors.",
      ogDescription:
        "Premier commercial development in Teklehaymanot with 335 shops starting from 11 m² to 32 m² across multiple floors. Explore interactive floor plans and inventory.",
      image: "/images/commercial/15-1.webp",
    },
  },
];

/**
 * Data Access Functions
 * 
 * These helper functions simulate database queries and ensure clean separation of concerns.
 * If you connect a real database (PostgreSQL, Supabase, Prisma, Sanity, etc.) in the future,
 * you only need to swap the implementation inside these functions!
 */

export async function getProperties(): Promise<Property[]> {
  return properties;
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  const match = properties.find((p) => p.slug === slug);
  return match ?? null;
}

export async function getPropertySlugs(): Promise<string[]> {
  return properties.map((p) => p.slug);
}

export async function getOtherProperties(currentSlug: string): Promise<OtherUnitLink[]> {
  return properties
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      name: p.title === "Merit Commercial Center" ? p.title : p.subtitle,
      href: `/properties/${p.slug}`,
      area:
        p.categoryKey === "commercial"
          ? "11 m² – 32 m² Shops"
          : `${p.grossArea} Gross • ${p.bedrooms} ${p.bedrooms === 1 ? "Bed" : "Beds"}`,
    }));
}
