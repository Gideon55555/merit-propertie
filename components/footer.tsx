import Link from "next/link";
// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="relative bg-gray-200 h-[90vh] sm:h-[450px] overflow-y-auto"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <footer className=" text-gray-950 fixed bottom-0 w-full">
        <div className="container mx-auto px-4 py-4 sm:pt-16 sm:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex justify-center items-center mb-2">
                <Image
                  src="/images/logo.svg"
                  width={130}
                  height={130}
                  alt="Merit Properties Logo"
                  className="object-contain"
                />
              </Link>
              <p className="text-gray-700 ">
                Merit Real Estate has been a trusted name in the real estate
                industry, offering exceptional services that exceed client
                expectations with a steadfast commitment to quality, innovation,
                and customer satisfaction.
              </p>
              {/* <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-text-gray-900 transition-colors"
                  aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-text-gray-900 transition-colors"
                  aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-text-gray-900 transition-colors"
                  aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-text-gray-900 transition-colors"
                  aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div> */}
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/properties"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/amenities"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/location"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden sm:block">
              <h3 className="font-serif text-lg font-bold mb-6">
                Our Residences
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#residences"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Urban Comfort Residences
                  </Link>
                </li>
                <li>
                  <Link
                    href="#residences"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Harmony Heaven Residences
                  </Link>
                </li>
                <li>
                  <Link
                    href="#residences"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Grand Via Residences
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Request Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-700 hover:text-text-gray-900 transition-colors">
                    Schedule a Viewing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-6 sm:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm mb-4 md:mb-0">
              © 2025 Merit Real Estate. All rights reserved.
            </p>
            <p className="text-gray-700 text-sm hidden sm:block">
              Duplication or reproduction of this website in any form is
              strictly prohibited without prior written consent.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
