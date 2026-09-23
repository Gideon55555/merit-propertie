"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Building2,
  Sparkles,
  ExternalLink,
  Play,
  Eye,
  Move,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { View360Badge } from "./view-360-badge";

export interface ResidenceSpec {
  name: string;
  value: string;
}

export interface ResidenceData {
  slug: string;
  title: string;
  subtitle: string;
  collection: string;
  location: string;
  grossArea: string;
  netArea: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  hasMaidRoom?: boolean;
  hasParking?: boolean;
  image: string;
  renderImage?: string;
  virtualTourUrl?: string;
  description: string;
  features: string[];
  conclusion: string;
  specs: ResidenceSpec[];
  otherUnits: {
    name: string;
    href: string;
    area: string;
  }[];
}

export default function ResidenceDetail({ data }: { data: ResidenceData }) {
  const [isTourStarted, setIsTourStarted] = useState(false);
  const [isLoadingTour, setIsLoadingTour] = useState(true);
  return (
    <div className="min-h-screen bg-merit-green text-white font-secondary">
      {/* Top Header & Breadcrumbs */}
      <div className="pt-28 pb-8 border-b border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <Link
            href="/properties"
            className="inline-flex items-center text-sm text-merit-gold hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Properties Catalog
          </Link>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge className="bg-merit-gold text-black font-semibold">
                  {data.collection}
                </Badge>
                <Badge className="bg-white/10 text-white border border-white/20">
                  Residential
                </Badge>
                <Badge className="bg-merit-green border border-merit-gold/50 text-merit-gold">
                  Available for Purchase
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-primary text-white font-bold leading-tight">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-merit-gold font-medium mt-1">
                {data.subtitle}
              </p>

              <div className="flex items-center text-sm text-white/70 mt-3">
                <MapPin className="w-4 h-4 text-merit-gold mr-1.5" />
                <span>{data.location}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                asChild
                className="bg-merit-gold hover:bg-merit-gold/90 text-merit-green font-bold px-6 py-6 text-base shadow-md"
              >
                <Link href="/contact">
                  <Phone className="w-4 h-4 mr-2" /> Inquire About Unit
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 border-2 border-white/40 text-white hover:bg-white hover:text-merit-green font-bold px-6 py-6 text-base transition-all"
              >
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" /> Book Private Viewing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="bg-white/5 border-b border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            <div className="p-3 rounded-lg bg-black/20 border border-white/5">
              <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                Gross Area
              </div>
              <div className="text-xl font-bold font-primary text-merit-gold">
                {data.grossArea}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/20 border border-white/5">
              <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                Net Living Area
              </div>
              <div className="text-xl font-bold font-primary text-merit-gold">
                {data.netArea}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/20 border border-white/5">
              <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                Bedrooms
              </div>
              <div className="text-xl font-bold font-primary text-white flex items-center justify-center gap-1">
                <Bed className="w-4 h-4 text-merit-gold" /> {data.bedrooms}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/20 border border-white/5">
              <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                Bathrooms
              </div>
              <div className="text-xl font-bold font-primary text-white flex items-center justify-center gap-1">
                <Bath className="w-4 h-4 text-merit-gold" /> {data.bathrooms}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/20 border border-white/5">
              <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                Balconies
              </div>
              <div className="text-xl font-bold font-primary text-white">
                {data.balconies}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/20 border border-white/5">
              <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                Location
              </div>
              <div className="text-xl font-bold font-primary text-white">
                Piassa
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Floor Plan & Room Specs Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Floor Plan Visual Diagram */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-merit-gold font-semibold">
                    Architectural Blueprint
                  </span>
                  <h2 className="text-2xl font-primary text-white font-bold">
                    Floor Plan Layout
                  </h2>
                </div>
                <Badge className="bg-merit-gold/20 text-merit-gold border border-merit-gold/30">
                  Scaled Render
                </Badge>
              </div>

              <div className="relative w-full aspect-square bg-black/40 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-4">
                <Image
                  src={data.image}
                  alt={`${data.title} Floor Plan`}
                  fill
                  priority
                  className="object-contain p-4 hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-xs text-white/50 text-center mt-4">
                *Dimensions and layouts are indicative and subject to architectural precision.
              </p>
            </div>
          </div>

          {/* Room Specs & Details Table */}
          <div className="lg:col-span-5 space-y-8">
            {/* Overview */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-primary text-merit-gold font-bold mb-4">
                Apartment Overview
              </h3>
              <p className="text-white/80 leading-relaxed text-sm md:text-base mb-6">
                {data.description}
              </p>

              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2.5 mb-6">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-merit-gold mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-white/70 italic border-t border-white/10 pt-4 leading-relaxed">
                {data.conclusion}
              </p>
            </div>

            {/* Room Dimensions Table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-primary text-white font-bold mb-4 flex items-center">
                <Square className="w-5 h-5 text-merit-gold mr-2" />
                Room Area Breakdown
              </h3>

              <div className="divide-y divide-white/10">
                {data.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="py-3 flex justify-between items-center text-sm"
                  >
                    <span className="text-white/70">{spec.name}</span>
                    <span className="font-mono font-semibold text-merit-gold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3D Virtual Tour Showcase */}
        {data.virtualTourUrl && (
          <div className="mt-16 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-merit-gold/30 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-merit-gold/10 border border-merit-gold/30 text-merit-gold text-xs font-semibold uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> 360° Interactive Experience
                </div>
                <h2 className="text-3xl md:text-5xl font-primary text-white font-bold">
                  Step Inside: 3D Virtual Tour
                </h2>
                <p className="text-white/75 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                  Experience the spatial flow, premium finishes, and natural light of the {data.title} through an interactive 360° virtual walkthrough.
                </p>
              </div>

              <a
                href={data.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-white hover:text-merit-green bg-white/10 hover:bg-white border border-white/30 font-semibold px-4 py-2.5 rounded-lg transition-all"
              >
                <span>Open Fullscreen in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

            {/* Tour Frame Container */}
            <div className="relative aspect-[16/10] md:aspect-video w-full rounded-2xl overflow-hidden border-2 border-merit-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-black flex items-center justify-center group">
              {!isTourStarted ? (
                <div
                  onClick={() => setIsTourStarted(true)}
                  className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-6 md:p-8 cursor-pointer select-none overflow-hidden"
                >
                  {/* Background Luxury Render Layer with Smooth Hover Zoom */}
                  <Image
                    src={data.renderImage || data.image}
                    alt={`${data.title} Virtual Tour Preview`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                    priority
                  />

                  {/* Cinematic Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/80 group-hover:via-black/35 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-radial from-transparent via-merit-green/10 to-black/60 pointer-events-none" />

                  {/* Top HUD Bar */}
                  <div className="relative z-20 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide shadow-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>LIVE 3D SPACE</span>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-merit-gold/20 backdrop-blur-md border border-merit-gold/40 text-xs font-bold text-merit-gold tracking-widest uppercase shadow-md">
                      <span>4K ULTRA-HD 360°</span>
                    </div>
                  </div>

                  {/* Center Hero: 360° Orbit SVG Badge + Interactive CTA */}
                  <div className="relative z-20 flex flex-col items-center justify-center my-auto py-2 text-center">
                    <View360Badge className="mb-3" />

                    <div className="inline-flex items-center gap-3 bg-merit-gold hover:bg-merit-gold/90 text-merit-green px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base shadow-[0_10px_35px_rgba(192,178,131,0.5)] transform group-hover:scale-105 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current" />
                      <span>Start 360° Virtual Walkthrough</span>
                    </div>

                    <p className="text-white/80 text-xs sm:text-sm mt-2.5 font-medium tracking-wide drop-shadow">
                      Click anywhere to step inside & explore the {data.subtitle}
                    </p>
                  </div>

                  {/* Bottom HUD Bar */}
                  <div className="relative z-20 flex items-center justify-between gap-3 text-xs text-white/90 pt-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      <Eye className="w-3.5 h-3.5 text-merit-gold" />
                      <span className="hidden sm:inline">Panoramic Exploration</span>
                      <span className="sm:hidden">360° Tour</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      <Move className="w-3.5 h-3.5 text-merit-gold" />
                      <span>Drag to rotate & look around</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative">
                  {isLoadingTour && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-merit-green/95">
                      <div className="w-14 h-14 border-4 border-merit-gold border-t-transparent rounded-full animate-spin mb-4" />
                      <p className="text-white font-serif italic tracking-widest animate-pulse">
                        Initializing 360° Space...
                      </p>
                    </div>
                  )}
                  <iframe
                    src={data.virtualTourUrl}
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full"
                    onLoad={() => setIsLoadingTour(false)}
                    title={`${data.title} 3D Virtual Tour`}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Building & Infrastructure Amenities */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-merit-gold font-semibold">
              Building Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-primary text-white font-bold mt-2">
              Merit Piassa Standards & Luxuries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-black/20 border border-white/5">
              <ShieldCheck className="w-8 h-8 text-merit-gold mb-4" />
              <h4 className="text-lg font-primary text-white font-bold mb-2">
                24/7 Security & Access Control
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Continuous CCTV monitoring, biometric access checkpoints, and trained personnel safeguarding your sanctuary.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/20 border border-white/5">
              <Building2 className="w-8 h-8 text-merit-gold mb-4" />
              <h4 className="text-lg font-primary text-white font-bold mb-2">
                Full Power & Water Backup
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Industrial standby power generator and high-capacity water reserve tanks ensuring uninterrupted living comfort.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/20 border border-white/5">
              <Sparkles className="w-8 h-8 text-merit-gold mb-4" />
              <h4 className="text-lg font-primary text-white font-bold mb-2">
                High-Speed Elevators & Luxury Finishes
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Advanced European-standard elevator cars, double-glazed windows, and refined porcelain & wood-grain finishes.
              </p>
            </div>
          </div>
        </div>

        {/* Switching to Other Floor Plans */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-primary text-white font-bold">
                Explore Other Merit Properties
              </h3>
              <p className="text-sm text-white/60">
                Compare floor plans and discover our full portfolio
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-merit-gold text-merit-gold hover:bg-merit-gold hover:text-black"
            >
              <Link href="/properties">All Properties Catalog</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.otherUnits.map((unit, idx) => (
              <Link
                key={idx}
                href={unit.href}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-merit-gold/50 hover:bg-white/10 transition-all block group"
              >
                <div className="text-sm font-semibold text-white group-hover:text-merit-gold transition-colors">
                  {unit.name}
                </div>
                <div className="text-xs text-merit-gold mt-1 font-mono">
                  {unit.area}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-merit-gold/20 via-white/5 to-merit-gold/20 border border-merit-gold/30 rounded-2xl p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-primary font-bold text-white mb-4">
            Ready to Make This Home Yours?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
            Contact our sales advisory team today for pricing schedules, financing options, or to arrange a private walkthrough.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-merit-gold hover:bg-merit-gold/90 text-merit-green font-bold text-base px-8 py-6 shadow-md"
            >
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" /> Contact Sales Advisors
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 border-2 border-white/40 text-white hover:bg-white hover:text-merit-green font-bold text-base px-8 py-6 transition-all"
            >
              <Link href="/properties">Browse Other Properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
