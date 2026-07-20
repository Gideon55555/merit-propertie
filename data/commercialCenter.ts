export interface InventoryItem {
  size: string;
  count: number;
}

export interface AccessType {
  roadAccess: InventoryItem[];
  corridorAccess: InventoryItem[];
}

export interface FloorData {
  id: string;
  shortName: string;
  fullName: string;
  description: string;
  features: string[];
  inventory: AccessType;
  image: string;
}

export const floorTabsData: FloorData[] = [
  {
    id: "sb",
    shortName: "SB",
    fullName: "Semi Basement (SB)",
    description: "Basic concepts to associate on the project.",
    features: ["End-to-End Marketplace Solutions",
"Dynamic Parking Solutions",
"Visible & Balcony-Oriented Shops",
"Variable Shop Sizes",
"Interconnected Corridors",
"Modular Shops"],
    image: "/commercial/2-1.webp", 
    inventory: {
      roadAccess: [{ size: "22 m²", count: 11 }],
      corridorAccess: [{ size: "32 m²", count: 16 }]
    }
  },
  {
    id: "lg",
    shortName: "LG",
    fullName: "Lower Ground (LG)",
    description: "Highly accessible split-level retail spaces offering extensive floor corridors.",
    features: ["Strategic Positioning", "Corridor Access", "Dual Zone Access", "High Visibility", "Premium Lighting", "Loading Zone Proximity"],
    image: "/commercial/3-1.webp",
    inventory: {
      roadAccess: [
        { size: "22 m²", count: 18 },
        { size: "16 m²", count: 2 },
        { size: "11 m²", count: 8 }
      ],
      corridorAccess: [
        { size: "32 m²", count: 15 },
        { size: "16 m²", count: 17 },
        { size: "11 m²", count: 14 }
      ]
    }
  },
  {
    id: "ug",
    shortName: "UG",
    fullName: "Upper Ground (UG)",
    description: "Prime street-facing and interior plaza retail hubs capturing maximum passing foot traffic.",
    features: ["Main Entrance Exposure", "High Volumetric Ceilings", "Pedestrian Flow Alignment", "Display Window Space", "Premium Anchors", "Multiple Access Gateways"],
    image: "/commercial/4-1.webp",
    inventory: {
      roadAccess: [
        { size: "22 m²", count: 17 },
        { size: "16 m²", count: 2 },
        { size: "11 m²", count: 8 },
      
      ],
      corridorAccess: [{ size: "32 m²", count: 22 },
          { size: "16 m²", count: 19 }, 
        { size: "11 m²", count: 14 }
      ]
    }
  },
  {
    id: "f1",
    shortName: "1",
    fullName: "Floor 1",
    description: "Elevated retail and corporate service layout optimized for standard business operations.",
    features: ["Escalator Connectivity", "Spacious Walkways", "Dedicated Business Signage", "Integrated Services", "Natural Ambient Lighting", "Flexible Unit Merging"],
    image: "/commercial/8-1.webp",
    inventory: {
      roadAccess: [
        { size: "22 m²", count: 20 },
        { size: "16 m²", count: 2 },
        { size: "11 m²", count: 8 }
      ],
      corridorAccess: [
        { size: "32 m²", count: 22 },
        { size: "16 m²", count: 18 },
        { size: "11 m²", count: 14 }
      ]
    }
  },
  {
    id: "f2",
    shortName: "2",
    fullName: "Floor 2",
    description: "Premium commercial units configured flawlessly for specialized retail and premium corporate offices.",
    features: ["Panoramas of Teklehaymanot", "Quiet Zone Separation", "High Speed Elevator Access", "Tailored Layout Structures", "Optimized IT Routing", "Executive Lounge Access"],
    image: "/commercial/11-1.webp",
    inventory: {
      roadAccess: [
        { size: "22 m²", count: 18 },
        { size: "11 m²", count: 8 },
        { size: "16 m²", count: 2 }
      ],
      corridorAccess: [
        { size: "32 m²", count: 22 },
        { size: "16 m²", count: 18 },
        { size: "11 m²", count: 14 }
      ]
    }
  },
  {
    id: "f3",
    shortName: "3",
    fullName: "Floor 3",
    description: "Top-tier administrative and customized lifestyle spaces giving your enterprise unmatched stature.",
    features: ["Panoramic Skyline Views", "Maximum Privacy Floorplan", "Exclusive Atrium Lighting", "Custom Fit-Out Support", "Acoustic Insulation", "Proximity to Rooftop Facilities"],
    image: "/commercial/12-1.webp",
    inventory: {
      roadAccess: [
        { size: "22 m²", count: 18 },
        { size: "16 m²", count: 2 },
        { size: "11 m²", count: 8 }
      ],
      corridorAccess: [
        { size: "32 m²", count: 16 },
        { size: "16 m²", count: 18 },
        { size: "11 m²", count: 14 }
      ]
    }
  }
];

export const constructionProgressData = {
  lastUpdate: "March 11, 2026",
  status: "Structural Progress",
  description: "Our Teklehaymanot Commercial Center continues to advance with carefully managed structural development. The latest progress update highlights significant milestones in the main structural framework, site accessibility, and overall neighborhood integration.",
  image: "/commercial/14-1.webp",
  vectors: [
    { label: "Main Structural Progress", desc: "Footage tracking framework advancement on the core blocks." },
    { label: "Site Movement", desc: "Metrics capturing structural development and street-level access from surrounding blocks." },
    { label: "Wide Aerial Overview", desc: "Detailing site mapping and neighborhood integration." }
  ]
};