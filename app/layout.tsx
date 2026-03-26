import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Gîte Angèle | Authenticité en Terres de Cantal",
  description:
    "Gîte de charme restauré dans le Cantal. 12 personnes, piscine privée, vue panoramique. Une expérience authentique au cœur de l'Auvergne.",
  keywords:
    "gîte cantal, location vacances cantal, piscine privée, sénezergues, gîte charme auvergne, gîte 12 personnes",
  openGraph: {
    title: "Gîte Angèle | Authenticité en Terres de Cantal",
    description:
      "Gîte de charme restauré dans le Cantal. 12 personnes, piscine privée, vue panoramique.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="font-body font-light leading-relaxed">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
