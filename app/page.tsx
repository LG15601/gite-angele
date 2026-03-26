import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Spaces from "@/components/Spaces";
import Gallery from "@/components/Gallery";
import Region from "@/components/Region";
import Seasons from "@/components/Seasons";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Presentation />
      <Spaces />
      <Gallery />
      <Region />
      <Seasons />
      <Testimonial />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
