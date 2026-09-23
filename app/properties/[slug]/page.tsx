import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getPropertyBySlug,
  getPropertySlugs,
  getOtherProperties,
} from "@/data/properties";
import ResidenceDetail from "@/components/properties/residence-detail";
import CommercialCenter from "@/components/CommercialCenter/CommercialCenter";
import LenisWrapper from "@/components/LenisWrapper";
import { Button } from "@/components/ui/button";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getPropertySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property Not Found | Merit Real Estate",
      description: "The requested property could not be found.",
    };
  }

  return {
    title: property.meta.title,
    description: property.meta.description,
    openGraph: {
      title: property.meta.title,
      description: property.meta.ogDescription,
      images: [
        {
          url: property.meta.image || property.image,
          width: 1200,
          height: 800,
          alt: property.title,
        },
      ],
    },
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const otherUnits = await getOtherProperties(slug);

  // If Commercial property, render interactive Commercial Center showcase
  if (property.categoryKey === "commercial") {
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
                    {property.location}
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
                {otherUnits.map((unit, idx) => (
                  <Link
                    key={idx}
                    href={unit.href}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-merit-gold/50 hover:bg-white/10 transition-all block group"
                  >
                    <div className="text-sm font-primary font-bold text-white group-hover:text-merit-gold transition-colors">
                      {unit.name}
                    </div>
                    <div className="text-xs text-white/60 mt-2 font-mono">
                      {unit.area}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LenisWrapper>
    );
  }

  // Residential units
  return (
    <LenisWrapper>
      <ResidenceDetail data={property} otherUnits={otherUnits} />
    </LenisWrapper>
  );
}
