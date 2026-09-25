import type React from "react";
import type { Metadata } from "next";
import { Noto_Sans_Ethiopic } from "next/font/google";
import { Avenir, GlensCity } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import Footer from "@/components/footer";

const ethiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500"],
  variable: "--font-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Merit Real Estate | Small Footprint, Grand Living Modern Sophistication",
  description:
    "Merit Real Estate offers exceptional properties that redefine urban living with a focus on quality, innovation, and customer satisfaction.",
  keywords: [
    "real estate",
    "property development",
    "Ethiopia",
    "luxury properties",
    "apartments",
    "Addis Ababa",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meritrealestate.com",
    title:
      "Merit Real Estate | Small Footprint, Grand Living Modern Sophistication",
    description:
      "Merit Real Estate offers exceptional properties that redefine urban living with a focus on quality, innovation, and customer satisfaction.",
    siteName: "Merit Real Estate",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Merit Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Merit Real Estate | Small Footprint, Grand Living Modern Sophistication",
    description:
      "Merit Real Estate offers exceptional properties that redefine urban living with a focus on quality, innovation, and customer satisfaction.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GlensCity.variable} ${Avenir.variable} ${ethiopic.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <main className="overflow-x-clip">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
