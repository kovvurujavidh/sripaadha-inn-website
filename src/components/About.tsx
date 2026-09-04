import { Star, MapPin, Wifi, Coffee } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: <Star className="text-primary h-6 w-6" />,
    title: "3-Star Hotel",
    description:
      "A 3-star property offering comfortable accommodation for pilgrims and travelers visiting Kanipakam.",
  },
  {
    icon: <MapPin className="text-primary h-6 w-6" />,
    title: "Prime Location",
    description:
      "Located on Brahmin Street, just steps from the Main Temple and Kanipakam Bus Stand.",
  },
  {
    icon: <Wifi className="text-primary h-6 w-6" />,
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary internet access throughout your stay.",
  },
  {
    icon: <Coffee className="text-primary h-6 w-6" />,
    title: "Free Breakfast",
    description:
      "Start your day with a complimentary breakfast included with your stay.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:w-1/2 space-y-6">
            <ScrollReveal>
              <span className="inline-block text-primary font-semibold tracking-wider uppercase text-xs mb-3">
                Welcome to SriPaadha Inn
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.15]">
                A Peaceful Retreat
                <br />
                <span className="text-primary">Near the Divine</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-gray-600 text-lg leading-relaxed">
                SriPaadha Inn offers affordable luxury and comfort for pilgrims
                and travelers visiting Kanipakam. Our 3-star property is
                strategically located on Brahmin Street, just steps away from the
                Main Temple and the Bus Stand, making it the most convenient
                choice for your spiritual journey.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-gray-600 text-lg leading-relaxed">
                With a <strong className="text-gray-900">4.1/5 rating</strong>{" "}
                on Google from{" "}
                <strong className="text-gray-900">528 reviews</strong>, we
                pride ourselves on hospitality and comfort for every guest.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-start group"
                  >
                    <div className="p-2.5 bg-primary/10 rounded-xl shrink-0 group-hover:bg-primary/15 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Branded visual card */}
          <div className="lg:w-1/2">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 relative bg-gradient-to-br from-slate-800 via-slate-900 to-primary-dark">
                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23c9a35f' stroke-width='0.5'/%3E%3C/svg%3E")`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,163,95,0.1)_0%,_transparent_70%)]" />

                  {/* Hotel branding text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-px bg-primary/40 mb-6" />
                    <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                      Est. Kanipakam
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                      SriPaadha
                    </h3>
                    <span className="text-primary text-2xl font-serif font-light italic">
                      Inn
                    </span>
                    <div className="w-16 h-px bg-primary/40 mt-6 mb-4" />
                    <p className="text-white/50 text-sm tracking-wide">
                      3-Star Hotel &bull; Brahmin Street
                    </p>
                  </div>

                  {/* Photo placeholder badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white/50 text-xs px-3 py-1.5 rounded-full border border-white/10">
                    Actual photos coming soon
                  </div>
                </div>

                {/* Rating card overlay */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-5 border border-gray-100/80 max-w-[260px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-400/30"
                      />
                    </div>
                    <span className="font-bold text-gray-900">4.1</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Rated <strong>4.1 out of 5</strong> by guests on Google.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 font-medium">
                    528 Verified Google Reviews
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full -z-10" />
                <div className="absolute -bottom-4 right-8 w-20 h-20 bg-primary/10 rounded-full -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
