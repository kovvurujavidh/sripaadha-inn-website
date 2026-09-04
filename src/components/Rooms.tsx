import { Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 md:py-28 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-xs mb-3">
              Accommodation
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Rooms &amp; Stay
            </h2>
            <p className="text-gray-600 text-lg">
              SriPaadha Inn offers comfortable accommodation for pilgrims and
              travelers visiting Kanipakam. Contact us for room options, rates,
              and availability.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-10 md:p-14 border border-gray-100 shadow-sm text-center">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Find the Right Room for You
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We offer a range of rooms to suit different needs and budgets.
                Get in touch with us directly for the best rates, current
                availability, and to book your stay.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:09298855551"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone size={18} />
                  Call 092988 55551
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle size={18} />
                  Send Enquiry
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
