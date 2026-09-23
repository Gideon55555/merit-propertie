import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CommercialCenter from "@/components/CommercialCenter/CommercialCenter";
import LenisWrapper from "@/components/LenisWrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Merit Commercial Center | Retail & Modular Shops | Merit Real Estate",
  description:
    "Explore the Merit Commercial Center in Teklehaymanot, Addis Ababa. 335 modular road-access and corridor-access shops starting from 11 m² to 32 m² across 7 floors.",
  openGraph: {
    title: "Merit Commercial Center | Retail & Modular Shops | Merit Real Estate",
    description:
      "Premier commercial development in Teklehaymanot with 335 shops starting from 11 m² to 32 m² across multiple floors. Explore interactive floor plans and inventory.",
    images: [
      {
        url: "/images/commercial/15-1.webp",
        width: 1200,
        height: 630,
        alt: "Merit Commercial Center Teklehaymanot",
      },
    ],
  },
};

export default function CommercialCenterPage() {
  return (
    <LenisWrapper>
      <div className="min-h-screen bg-merit-green text-white font-secondary">
        {/* Top Breadcrumbs Bar */}
        <div className="pt-28 pb-6 border-b border-white/10 bg-black/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link
                href="/properties"
                className="inline-flex items-center text-sm text-merit-gold hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Properties Catalog
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-white/60">
                  Location:
                </span>
                <span className="text-xs text-merit-gold font-medium bg-white/10 px-2.5 py-1 rounded border border-merit-gold/30">
                  Teklehaymanot, Addis Ababa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Interactive Commercial Center Showcase */}
        <CommercialCenter />

        {/* Residential Properties Exploration Banner */}
        <div className="border-t border-white/10 py-16 bg-black/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-merit-gold font-semibold">
                  Residential Living
                </span>
                <h3 className="text-2xl md:text-3xl font-primary text-white font-bold mt-1">
                  Discover Our Piassa Luxury Apartments
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  Explore our modern 1, 2, and 3-bedroom residential residences
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-merit-gold text-merit-gold hover:bg-merit-gold hover:text-black font-medium"
              >
                <Link href="/properties">View All Properties</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Link
                href="/properties/one-bedroom"
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-merit-gold/50 hover:bg-white/10 transition-all block group"
              >
                <div className="text-xs uppercase tracking-wider text-merit-gold font-semibold mb-1">
                  Urban Comfort Series
                </div>
                <div className="text-lg font-primary font-bold text-white group-hover:text-merit-gold transition-colors">
                  One Bedroom Apartment
                </div>
                <div className="text-xs text-white/60 mt-2 font-mono">
                  49 m² Gross • 44 m² Net • 1 Bed • 1 Bath
                </div>
              </Link>

              <Link
                href="/properties/two-bedroom"
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-merit-gold/50 hover:bg-white/10 transition-all block group"
              >
                <div className="text-xs uppercase tracking-wider text-merit-gold font-semibold mb-1">
                  Harmony Haven Collection
                </div>
                <div className="text-lg font-primary font-bold text-white group-hover:text-merit-gold transition-colors">
                  Two Bedroom Apartment
                </div>
                <div className="text-xs text-white/60 mt-2 font-mono">
                  95 m² Gross • 75 m² Net • 2 Beds • 2 Baths
                </div>
              </Link>

              <Link
                href="/properties/three-bedroom"
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-merit-gold/50 hover:bg-white/10 transition-all block group"
              >
                <div className="text-xs uppercase tracking-wider text-merit-gold font-semibold mb-1">
                  Grand Vista Collection
                </div>
                <div className="text-lg font-primary font-bold text-white group-hover:text-merit-gold transition-colors">
                  Three Bedroom Apartment
                </div>
                <div className="text-xs text-white/60 mt-2 font-mono">
                  130 m² Gross • 105 m² Net • Maid&apos;s Room • Parking
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LenisWrapper>
  );
}
