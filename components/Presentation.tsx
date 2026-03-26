"use client";

import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-terracotta fill-none stroke-[1.5]">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: "173 m² · 4 chambres · 12 couchages",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-terracotta fill-none stroke-[1.5]">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M2 12h20" />
      </svg>
    ),
    text: "Piscine privée sécurisée",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-terracotta fill-none stroke-[1.5]">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    text: "Vue panoramique 180°",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-terracotta fill-none stroke-[1.5]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    text: "Cantou ancestral & poêle à bois",
  },
];

export default function Presentation() {
  return (
    <section id="intro" className="py-24 lg:py-32">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-gold font-display text-xl md:text-2xl mb-4">
              L&apos;Esprit des Lieux
            </p>
            <p className="text-lg md:text-xl font-body font-light leading-relaxed text-stone mb-6">
              Niché au c&oelig;ur de la Châtaigneraie Cantalienne, le Gîte Angèle
              révèle l&apos;âme authentique d&apos;un ancien corps de ferme restauré avec
              raffinement.
            </p>
            <p className="text-charcoal/80 font-body font-light leading-relaxed max-w-[65ch]">
              173 m² d&apos;espace, des panoramas à couper le souffle, et cette
              quiétude absolue que seul le Cantal sait offrir. Ici, le temps
              suspend son vol pour laisser place à l&apos;essentiel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ul className="space-y-5">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-stone text-lg">
                  {feature.icon}
                  {feature.text}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
