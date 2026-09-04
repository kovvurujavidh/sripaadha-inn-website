import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Reviews />
        <Location />
        <Enquiry />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
