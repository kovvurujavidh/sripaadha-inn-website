"use client";

import { useState, type FormEvent } from "react";
import { Send, Phone, MapPin, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (no backend required for static site)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="enquiry" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-xs mb-3">
              Enquiry
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Plan Your Stay
            </h2>
            <p className="text-gray-600 text-lg">
              Send us your enquiry and we&apos;ll get back to you shortly. Or
              call us directly for instant assistance.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Quick contact */}
          <ScrollReveal className="lg:w-2/5 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                Quick Contact
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:09298855551"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      092988 55551
                    </p>
                    <p className="text-sm text-gray-500">
                      Call for instant booking
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=72HP+22+Kanipakam"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Visit Us</p>
                    <p className="text-sm text-gray-500">
                      Brahmin Street, Beside Main Temple
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Tip:</strong> Call directly
                  for the best rates and real-time room availability. Walk-in
                  guests are also welcome.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Enquiry form */}
          <ScrollReveal direction="right" className="lg:w-3/5">
            {submitted ? (
              <div className="bg-gray-50 rounded-2xl p-12 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                  Enquiry Received!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you for your interest in SriPaadha Inn. We&apos;ll
                  respond to your enquiry shortly. For immediate assistance,
                  please call us.
                </p>
                <a
                  href="tel:09298855551"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  <Phone size={18} />
                  Call 092988 55551
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                  Send an Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-gray-400"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="checkin"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkin"
                      name="checkin"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkout"
                      name="checkout"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none placeholder:text-gray-400"
                    placeholder="Any special requests or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
