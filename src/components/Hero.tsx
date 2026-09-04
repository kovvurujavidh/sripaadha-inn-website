"use client";

import { MapPin, Phone, Star, ChevronDown, BedDouble } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[650px] w-full flex items-center justify-center overflow-hidden">
      {/* Background — rich gradient with subtle temple-inspired pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,163,95,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,163,95,0.1)_0%,_transparent_50%)]" />
        {/* Geometric diamond pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23c9a35f' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-sm font-medium mb-8 animate-fade-in-up delay-200">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="tracking-wide">3-Star Premium Hotel</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6 animate-fade-in-up delay-400">
          Comfort &amp; Devotion
          <br />
          in{" "}
          <span className="relative inline-block">
            <span className="text-primary">Kanipakam</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/40 rounded-full" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up delay-600">
          Affordable luxury right beside the Main Temple. The perfect stay for
          your spiritual journey in Andhra Pradesh.
        </p>

        {/* Rating badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-10 animate-fade-in-up delay-700">
          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
            <Star size={14} fill="currentColor" className="opacity-30" />
          </div>
          <span className="text-white text-sm font-semibold">4.1 / 5</span>
          <span className="text-white/30">|</span>
          <span className="text-white/70 text-sm">528 Google Reviews</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up delay-800">
          <a
            href="#contact"
            className="w-full sm:w-auto group relative px-8 py-4 bg-primary text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <BedDouble size={20} />
              Book Your Stay
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#rooms"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-medium text-lg rounded-lg hover:bg-white/15 hover:border-white/35 transition-all duration-300"
          >
            View Rooms
          </a>
        </div>

        {/* Quick info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300 animate-fade-in delay-1000">
          <a
            href="https://maps.google.com/?q=72HP+22+Kanipakam"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <MapPin
              size={16}
              className="text-primary group-hover:scale-110 transition-transform"
            />
            <span className="border-b border-transparent group-hover:border-white/40 transition-colors">
              Brahmin Street, Beside Main Temple
            </span>
          </a>
          <span className="hidden sm:inline text-white/15">|</span>
          <a
            href="tel:09298855551"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <Phone
              size={16}
              className="text-primary group-hover:scale-110 transition-transform"
            />
            <span className="border-b border-transparent group-hover:border-white/40 transition-colors">
              092988 55551
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-1200">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase font-medium">
            Explore
          </span>
          <ChevronDown
            size={24}
            className="animate-bounce group-hover:text-primary transition-colors"
          />
        </a>
      </div>
    </section>
  );
}
