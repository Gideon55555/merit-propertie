import fs from "fs";
import path from "path";
import GalleryView from "@/components/gallery-view";
// import { motion } from "framer-motion";
import Image from "next/image";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata = {
  title: "Gallery | Merit Real Estate",
  description:
    "Explore the modern sophistication and grand living of Merit Real Estate properties through our design gallery.",
};

export default function GalleryPage() {
  const directoryPath = path.join(process.cwd(), "public", "images", "design");

  let images: string[] = [];
  try {
    const files = fs.readdirSync(directoryPath);
    images = files
      .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
      .map((file) => `/images/design/${file}`);

    // Shuffle images for variety if needed, or keep order
    // images.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error reading gallery images:", error);
  }

  return (
    <LenisWrapper>
      <div className="flex flex-col min-h-screen bg-merit-beige">
        {/* Gallery Hero Section */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <Image
            src="/images/design/image-00059.png" // Using one of the high quality images
            alt="Gallery Heritage"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(21, 72, 67, 0.9), rgba(21, 72, 67, 0.7))",
            }}
          />
          <div className="container mx-auto px-4 z-10 pt-16">
            <div className="max-w-3xl">
              <header>
                <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
                  Design <span className="text-merit-gold">Excellence</span>
                </h1>
                <p className="text-xl md:text-2xl font-sans text-white/90 mb-8 leading-relaxed">
                  A visual journey through our most prestigious architectural
                  achievements and sophisticated interior spaces.
                </p>
                <div className="w-20 h-1 bg-merit-gold" />
              </header>
            </div>
          </div>
        </section>

        {/* Gallery Content Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-merit-gold/20 pb-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-merit-green mb-4">
                Curated <span className="text-merit-gold">Portfolio</span>
              </h2>
              <p className="text-merit-gray text-lg">
                Discover the attention to detail and commitment to quality that
                defines every Merit property.
              </p>
            </div>
            <div className="text-merit-gold font-serif text-lg italic tracking-wider">
              {images.length} Captured Moments
            </div>
          </div>

          <GalleryView images={images} />
        </section>

        {/* CTA Section at bottom */}
        <section className="bg-merit-green py-20 mt-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 gap-2 rotate-12 scale-150">
              {images.slice(0, 12).map((img, i) => (
                <div key={i} className="aspect-square relative opacity-20">
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
              Inspired by Our <span className="text-merit-gold">Vision?</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
              Let&apos;s discuss how we can bring this level of sophistication
              to your next home.
            </p>
            <a
              href="/contact"
              className="inline-block bg-merit-gold text-merit-green px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-xl"
            >
              Contact Our Sales Team
            </a>
          </div>
        </section>
      </div>
    </LenisWrapper>
  );
}
