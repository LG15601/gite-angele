import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { notFound } from "next/navigation";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const localeMap: Record<string, string> = {
    fr: "fr_FR",
    en: "en_GB",
    it: "it_IT",
    es: "es_ES",
    de: "de_DE",
  };

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords:
      "gîte cantal, location vacances cantal, gîte de charme sénezergues, maison vacances auvergne, gîte 12 personnes cantal, piscine privée cantal, châtaigneraie cantalienne, Le Valat, Calvinet, Maurs, Marcolès, Montsalvy, Mourjou, Cassaniouze, slow tourisme cantal, fromages AOP cantal, Salers, truffade, Conques UNESCO, GR 65, Puy Mary, Échappées Belles France 5, cantou cheminée, véranda panoramique, ciel étoilé auvergne, vacances famille cantal, gîte charme auvergne, hébergement Compostelle cantal",
    metadataBase: new URL("https://giteangele.fr"),
    alternates: {
      canonical: `https://giteangele.fr/${locale}`,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [l, `https://giteangele.fr/${l}`])
        ),
        "x-default": "https://giteangele.fr/fr",
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      type: "website",
      locale: localeMap[locale] || "fr_FR",
      url: `https://giteangele.fr/${locale}`,
      siteName: "Gîte Angèle",
      images: [
        {
          url: "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: "Gîte Angèle — Cantal, Auvergne",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ["/images/og-image.webp"],
    },
    robots: { index: true, follow: true },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "VacationRental"],
  name: "Gîte Angèle",
  alternateName: "Gîte Le Valat — Sénezergues",
  description:
    "Gîte de charme pour 12 personnes dans un ancien corps de ferme restauré à Sénezergues, au cœur de la Châtaigneraie Cantalienne. Piscine privée, véranda panoramique 180°, cantou authentique. Slow tourisme entre Maurs, Calvinet et Conques.",
  url: "https://giteangele.fr",
  telephone: "+33682478020",
  email: ["contact@gite-angele.fr", "gitelevalat@gmail.com"],
  image: [
    "https://giteangele.fr/images/og-image.webp",
    "https://giteangele.fr/images/batisse-hero.webp",
    "https://giteangele.fr/images/cantal-sunset.webp",
    "https://giteangele.fr/images/pergola-table-vue.webp",
    "https://giteangele.fr/images/salon-cantou-poele.webp",
    "https://giteangele.fr/images/chambre-lavande.webp",
    "https://giteangele.fr/images/piscine-petanque.webp",
    "https://giteangele.fr/images/veranda-billard-jeux.webp",
    "https://giteangele.fr/images/jardin-angele-panneau.webp",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Le Valat",
    addressLocality: "Sénezergues",
    postalCode: "15340",
    addressRegion: "Cantal, Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.703281,
    longitude: 2.41296,
  },
  hasMap: "https://www.google.com/maps?q=44.703281,2.41296",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Piscine privée sécurisée", value: true },
    { "@type": "LocationFeatureSpecification", name: "WiFi gratuit", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking privé", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cheminée / Cantou traditionnel", value: true },
    { "@type": "LocationFeatureSpecification", name: "Véranda panoramique 180°", value: true },
    { "@type": "LocationFeatureSpecification", name: "Billard", value: true },
    { "@type": "LocationFeatureSpecification", name: "Terrain de pétanque", value: true },
    { "@type": "LocationFeatureSpecification", name: "Jardin potager bio", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pergola avec table 12 places", value: true },
    { "@type": "LocationFeatureSpecification", name: "Barbecue", value: true },
    { "@type": "LocationFeatureSpecification", name: "Animaux bienvenus", value: true },
    { "@type": "LocationFeatureSpecification", name: "Draps et serviettes fournis", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bois de cheminée inclus", value: true },
  ],
  numberOfRooms: 4,
  occupancy: {
    "@type": "QuantitativeValue",
    maxValue: 12,
    unitText: "personnes",
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: 173,
    unitCode: "MTK",
    unitText: "m²",
  },
  priceRange: "1 500€ – 2 500€ / semaine",
  checkinTime: "16:00",
  checkoutTime: "10:00",
  petsAllowed: true,
  availableLanguage: ["French", "English", "German", "Spanish", "Italian"],
  offers: [
    {
      "@type": "Offer",
      name: "Haute saison (Juillet–Août)",
      price: 2500,
      priceCurrency: "EUR",
      unitCode: "WEE",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Moyenne saison (Juin, Septembre)",
      price: 2000,
      priceCurrency: "EUR",
      unitCode: "WEE",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Basse saison (Octobre–Mai)",
      price: 1500,
      priceCurrency: "EUR",
      unitCode: "WEE",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Court séjour (2 nuits minimum)",
      price: 800,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    bestRating: 5,
    ratingCount: 1,
    reviewCount: 1,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Famille D." },
      datePublished: "2024-08",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Un cadre exceptionnel, un accueil chaleureux, et cette vue... On ne voulait plus partir.",
    },
  ],
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Châtaigneraie Cantalienne, Cantal, Auvergne",
  },
  tourBookingPage: "https://wa.me/33682478020",
  sameAs: ["https://www.abritel.fr/location-vacances/p1005412"],
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body font-light leading-relaxed">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
