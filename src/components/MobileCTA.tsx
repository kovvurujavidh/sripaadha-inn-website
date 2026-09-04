"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200 px-4 py-3 safe-area-bottom transition-all duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="flex items-center gap-3">
        <a
          href="tel:09298855551"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-primary-dark active:scale-[0.98]"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-gray-800 active:scale-[0.98]"
        >
          <MessageCircle size={16} />
          Enquire
        </a>
      </div>
    </div>
  );
}
