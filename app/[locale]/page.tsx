import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Navigation dict={dict.nav} locale={locale} />
      <Hero dict={dict.hero} />
      <Presentation dict={dict.presentation} />
      <Spaces dict={dict.spaces} />
      <Gallery dict={dict.gallery} />
      <Region dict={dict.region} />
      <Seasons dict={dict.seasons} />
      <Testimonial dict={dict.testimonial} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
      <WhatsAppButton dict={dict.whatsapp} />
    </>
  );
}
