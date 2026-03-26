"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <>
      {/* Practical info */}
      <section
        id="contact"
        className="py-24 lg:py-32 bg-cream border-t border-stone/5"
      >
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal>
              <div>
                <h3 className="text-terracotta uppercase text-sm tracking-widest font-body font-medium mb-6">
                  Tarifs
                </h3>
                <p className="text-stone text-lg leading-relaxed">
                  À partir de <strong>1 200&euro; / semaine</strong> en haute
                  saison.
                  <br />
                  <span className="text-stone/60 text-sm">
                    Location à la semaine du samedi au samedi.
                  </span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-terracotta uppercase text-sm tracking-widest font-body font-medium mb-6">
                  Accès
                </h3>
                <p className="text-stone text-lg leading-relaxed">
                  Le Valat, 15340 Sénezergues
                  <br />
                  <span className="text-sm">
                    40 min d&apos;Aurillac (Aéroport)
                    <br />
                    30 min de Conques
                  </span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-terracotta uppercase text-sm tracking-widest font-body font-medium mb-6">
                  Contact
                </h3>
                <p className="text-stone text-lg leading-relaxed">
                  <strong>Marie</strong>
                  <br />
                  <a
                    href="tel:+33682478020"
                    className="text-terracotta hover:text-terracotta/80 transition-colors"
                  >
                    06 82 47 80 20
                  </a>
                  <br />
                  <a
                    href="https://wa.me/33682478020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:text-forest/80 transition-colors text-sm"
                  >
                    Contacter sur WhatsApp &rarr;
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Booking */}
      <section
        id="booking"
        className="py-20 text-center text-white"
        style={{
          background: "linear-gradient(to right, #C4724D, #a65d3d)",
        }}
      >
        <div className="w-[90%] max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2
              className="font-display font-normal text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Réservez votre évasion cantalienne
            </h2>
            <p className="text-white/85 mb-8">
              12 personnes &middot; Piscine privée &middot; Nature préservée
            </p>
            <a
              href="https://wa.me/33682478020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-white text-terracotta font-medium text-sm uppercase tracking-widest hover:bg-stone hover:text-white transition-all duration-300"
            >
              Demander une disponibilité
            </a>
            <p className="mt-6 text-white/60 text-sm">
              ou appelez Marie au{" "}
              <a href="tel:+33682478020" className="underline">
                06 82 47 80 20
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
