"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShimmerButton } from "./ui/shimmer-button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Properties", path: "/properties" },
  { name: "Amenities", path: "/amenities" },
  { name: "Location", path: "/location" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    if (window.scrollY > 10) {
      setScrolled(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openNav = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "auto";
    }
  };
  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || pathname.includes("/amenities") || isOpen
            ? "bg-merit-green backdrop-blur shadow-md"
            : "bg-transparent"
        )}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="">
            <Image
              src="/images/logo.png"
              width={130}
              height={130}
              alt="Merit Properties Logo"
              className="object-contain w-32 md:w-40"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "font-medium transition-colors relative py-2",
                  pathname === link.path
                    ? "text-merit-gold"
                    : "text-white hover:text-white/80 transition-colors",
                  pathname !== link.path &&
                    pathname === "/" &&
                    !scrolled &&
                    "text-white"
                )}>
                {/* className="font-sans text-sm font-medium text-merit-gold hover:text-merit-gold/80 transition-colors"> */}
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-merit-gold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            <ShimmerButton
              background="rgb(var(--merit-gold)"
              className="shadow-2xl bg-merit-gold hover:bg-merit-gold/90">
              <span className="whitespace-pre-wrap text-merit-green text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                Get in Touch
              </span>
            </ShimmerButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => openNav(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X size={24} /> : <Menu className="" size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-merit-green overflow-hidden">
              <div className="container  mx-auto px-4 py-4 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={cn(
                      "font-sans text-sm font-medium transition-colors py-2",
                      pathname === link.path
                        ? "text-merit-gold"
                        : "text-white hover:text-white/80 transition-colors"
                    )}
                    onClick={() => openNav(false)}>
                    {link.name}
                  </Link>
                ))}
                <Button
                  className="bg-merit-gold hover:bg-merit-gold/90 text-black w-full"
                  onClick={() => openNav(false)}>
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1
           }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          onClick={() => openNav(false)}
          className="fixed z-40 h-screen inset-0 bg-black/80"
        />
      )}
    </>
  );
}
