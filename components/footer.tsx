import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-serif font-bold text-white">MERIT</span>
              <span className="text-2xl font-serif text-merit-gold ml-1">REAL ESTATE</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Merit Real Estate has been a trusted name in the real estate industry, offering exceptional services that
              exceed client expectations with a steadfast commitment to quality, innovation, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#preface" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#residences" className="text-gray-400 hover:text-white transition-colors">
                  Residences
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="text-gray-400 hover:text-white transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-gray-400 hover:text-white transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Our Residences</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#residences" className="text-gray-400 hover:text-white transition-colors">
                  Urban Comfort Residences
                </Link>
              </li>
              <li>
                <Link href="#residences" className="text-gray-400 hover:text-white transition-colors">
                  Harmony Heaven Residences
                </Link>
              </li>
              <li>
                <Link href="#residences" className="text-gray-400 hover:text-white transition-colors">
                  Grand Via Residences
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Request Information
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Schedule a Viewing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on new properties and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-merit-green hover:bg-merit-green/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Merit Real Estate. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Duplication or reproduction of this website in any form is strictly prohibited without prior written
            consent.
          </p>
        </div>
      </div>
    </footer>
  )
}

