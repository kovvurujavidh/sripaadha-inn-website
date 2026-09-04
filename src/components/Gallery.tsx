"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const placeholders = [
  {
    label: "Guest Rooms",
    description: "Clean, air-conditioned rooms with modern amenities",
    gradient: "from-blue-900 via-slate-800 to-slate-900",
    tall: true,
  },
  {
    label: "Reception",
    description: "Welcoming front desk with 24-hour assistance",
    gradient: "from-amber-900 via-slate-800 to-slate-900",
  },
  {
    label: "Bathrooms",
    description: "Well-maintained bathrooms with geyser & hot water",
    gradient: "from-teal-900 via-slate-800 to-slate-900",
  },
  {
    label: "Temple View",
    description: "Steps away from the Main Temple entrance",
    gradient: "from-orange-900 via-slate-800 to-slate-900",
  },
  {
    label: "Dining Area",
    description: "Complimentary breakfast served daily",
    gradient: "from-rose-900 via-slate-800 to-slate-900",
  },
  {
    label: "Exterior",
    description: "Property entrance on Brahmin Street",
    gradient: "from-emerald-900 via-slate-800 to-slate-900",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (lightbox !== null) {
      setLightbox((lightbox - 1 + placeholders.length) % placeholders.length);
    }
  }, [lightbox]);

  const handleNext = useCallback(() => {
    if (lightbox !== null) {
      setLightbox((lightbox + 1) % placeholders.length);
    }
  }, [lightbox]);

  useEffect(() => {
    if (lightbox === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, handlePrev, handleNext]);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-xs mb-3">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              A Glimpse of SriPaadha Inn
            </h2>
            <p className="text-gray-600 text-lg">
              We&apos;re preparing real photographs of our property. Below is a
              preview of what to expect.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {placeholders.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <button
                onClick={() => setLightbox(idx)}
                className={`relative overflow-hidden rounded-2xl bg-gray-100 group cursor-pointer block w-full ${
                  item.tall ? "md:row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                {/* Gradient background with pattern */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23c9a35f' stroke-width='0.5'/%3E%3C/svg%3E")`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,163,95,0.08)_0%,_transparent_60%)]" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Camera
                    size={28}
                    className="text-white/20 mb-3 group-hover:text-white/40 transition-colors"
                  />
                  <h3 className="text-white font-serif font-semibold text-lg mb-1">
                    {item.label}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
                    {item.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between">
                  <p className="text-white font-medium p-5 text-sm">
                    {item.label}
                  </p>
                  <div className="p-5">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      Preview
                    </span>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8 italic">
          Placeholders — actual property photographs will replace these once
          available.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          <div className="absolute top-4 left-4 text-white/60 text-sm font-medium z-10">
            {lightbox + 1} / {placeholders.length}
          </div>

          {/* Placeholder content in lightbox */}
          <div
            className={`relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden animate-scale-in bg-gradient-to-br ${placeholders[lightbox].gradient}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23c9a35f' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <Camera size={48} className="text-white/20 mb-4" />
              <h3 className="text-white font-serif font-bold text-2xl mb-2">
                {placeholders[lightbox].label}
              </h3>
              <p className="text-white/40 text-base max-w-md">
                {placeholders[lightbox].description}
              </p>
              <p className="text-white/25 text-sm mt-4">
                Actual photograph coming soon
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl font-light p-3 sm:p-4 rounded-full hover:bg-white/10 transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl font-light p-3 sm:p-4 rounded-full hover:bg-white/10 transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
