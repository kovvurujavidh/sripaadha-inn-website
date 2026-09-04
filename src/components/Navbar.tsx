"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span
              className={cn(
                "font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              SriPaadha Inn
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md",
                    isScrolled
                      ? isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary hover:bg-primary/5"
                      : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full transition-colors duration-300",
                        isScrolled ? "bg-primary" : "bg-white"
                      )}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:09298855551"
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                isScrolled
                  ? "text-gray-600 hover:text-primary"
                  : "text-white/80 hover:text-white"
              )}
            >
              <Phone size={15} />
              <span>092988 55551</span>
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-white transition-all duration-400 overflow-hidden z-40",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col px-6 py-6 gap-1 h-full overflow-y-auto">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className={cn(
                "text-gray-800 font-medium py-4 px-4 rounded-xl transition-all text-base",
                activeSection === link.href.replace("#", "")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-gray-50 border-b border-gray-100 last:border-0"
              )}
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {link.name}
            </a>
          ))}
          <div
            className="mt-4 space-y-3 transition-all"
            style={{
              transitionDelay: mobileOpen ? "300ms" : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <a
              href="tel:09298855551"
              className="flex items-center justify-center gap-2 text-primary font-semibold py-3.5 px-4 border-2 border-primary/20 rounded-xl hover:bg-primary/5 transition-colors"
            >
              <Phone size={18} />
              092988 55551
            </a>
            <a
              href="#contact"
              className="block bg-primary text-white text-center font-semibold py-3.5 px-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              onClick={handleNavClick}
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
