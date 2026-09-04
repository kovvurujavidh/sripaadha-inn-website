import { Star, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-white to-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-xs mb-3">
              Guest Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Trusted by Hundreds of Guests
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-lg mx-auto text-center">
            <div className="flex justify-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  fill={i < 4 ? "currentColor" : "none"}
                  className={i === 4 ? "text-yellow-400/30" : ""}
                />
              ))}
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">
              4.1{" "}
              <span className="text-2xl text-gray-500 font-normal">/ 5</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Based on 528 verified Google Reviews
            </p>
            <a
              href="https://www.google.com/search?q=SriPaadha+Inn+Kanipakam"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md"
            >
              Read all reviews on Google
              <ExternalLink size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
