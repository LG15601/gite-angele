"use client";

import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/lib/getDictionary";

const photoSrcs = [
  "/images/facade-pierre-fleurs.webp",
  "/images/salon-chesterfield.webp",
  "/images/drone-nature.webp",
  "/images/chambre-lavande.webp",
  "/images/piscine-petanque.webp",
  "/images/salon-vue-large.webp",
  "/images/pergola-table-vue2.webp",
  "/images/potager-composteur.webp",
  "/images/chambre-bureau-miroir.webp",
  "/images/transat-bois-facade.webp",
  "/images/dortoir.webp",
  "/images/olivier-jardin.webp",
  "/images/transats-vue-nuages.webp",
  "/images/nespresso-magimix.webp",
  "/images/chambre-lavande-lot3.webp",
  "/images/ext-vue.webp",
  "/images/coin-pierre-fauteuil.webp",
  "/images/bibliotheque-chesterfield.webp",
  "/images/chambre-elegante.webp",
  "/images/serviettes-lit.webp",
];

export default function Gallery({ dict }: { dict: Dictionary["gallery"] }) {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-sand">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2
            className="font-display font-normal text-stone leading-tight"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            {dict.title}
          </h2>
          <div className="w-10 h-px bg-terracotta mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photoSrcs.map((src, i) => (
            <ScrollReveal key={src} delay={i * 0.05}>
              <div className="relative overflow-hidden rounded-sm shadow-md group">
                <img
                  src={src}
                  alt={dict.alts[i] || ""}
                  loading="lazy"
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone/0 group-hover:bg-stone/20 transition-colors duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
