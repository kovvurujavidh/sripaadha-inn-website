import { MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 md:py-28 bg-gray-50/80 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-xs mb-3">
              Location &amp; Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Find Us in Kanipakam
            </h2>
            <p className="text-gray-600 text-lg">
              We are conveniently located right beside the Main Temple and
              Kanipakam Bus Stand.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/40 border border-gray-100/80">
            {/* Map */}
            <div className="lg:w-1/2 relative min-h-[400px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.482060155258!2d79.0270035541604!3d13.27961276707246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d33aeb6eb34f9%3A0x8bb85669f626c7f4!2sKanipakam%2C%20Andhra%20Pradesh%20517131!5e0!3m2!1sen!2sin!4v1709489222222!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "100%",
                  position: "absolute",
                  inset: 0,
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SriPaadha Inn on Google Maps"
              />
            </div>

            {/* Contact details */}
            <div id="contact" className="lg:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Brahmin Street,
                      <br />
                      Beside Main Temple &amp; Bus Stand,
                      <br />
                      Kanipakam, Andhra Pradesh 517131
                    </p>
                    <a
                      href="https://maps.google.com/?q=72HP+22+Kanipakam"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 text-primary text-sm font-medium hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a
                      href="tel:09298855551"
                      className="text-gray-600 hover:text-primary transition-colors text-lg font-medium"
                    >
                      092988 55551
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Available 24/7 for bookings &amp; inquiries
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Check-in / Check-out
                    </h4>
                    <p className="text-gray-600">
                      Please call to confirm check-in and check-out times.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="tel:09298855551"
                  className="block w-full text-center py-4 px-6 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Call Now to Book
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
