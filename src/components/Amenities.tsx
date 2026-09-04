import { Wifi, Coffee, Car, Wind, Shirt } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const amenities = [
  {
    icon: <Wifi size={28} strokeWidth={1.5} />,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary internet throughout the hotel.",
  },
  {
    icon: <Coffee size={28} strokeWidth={1.5} />,
    title: "Free Breakfast",
    description:
      "Start your day with a complimentary breakfast included with your stay.",
  },
  {
    icon: <Car size={28} strokeWidth={1.5} />,
    title: "Parking",
    description:
      "Convenient parking available for guests during your stay.",
  },
  {
    icon: <Wind size={28} strokeWidth={1.5} />,
    title: "Air Conditioning",
    description:
      "Comfortable A/C rooms for a pleasant stay in Kanipakam.",
  },
  {
    icon: <Shirt size={28} strokeWidth={1.5} />,
    title: "Laundry Service",
    description:
      "Laundry services available on request.",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-xs mb-3">
              Facilities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Everything You Need for a Perfect Stay
            </h2>
            <p className="text-gray-600 text-lg">
              We&apos;ve curated our amenities to ensure your stay is
              comfortable, convenient, and hassle-free while you focus on your
              spiritual journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className="group p-7 rounded-2xl border border-gray-100 hover:border-primary/25 bg-gray-50/50 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full">
                <div className="text-gray-400 mb-4 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
