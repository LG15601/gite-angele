"use client";

import ScrollReveal from "./ScrollReveal";

interface Space {
  title: string;
  description: string;
  image: string;
  alt: string;
  accent: string;
  features: string[];
}

const spaces: Space[] = [
  {
    title: "La Véranda Panoramique",
    description:
      "Véritable belvédère sur la nature cantalienne. Baignée de lumière, elle offre une vue imprenable sur les vallons boisés et les couchers de soleil flamboyants.",
    image: "/images/veranda.jpg",
    alt: "Véranda panoramique du Gîte Angèle",
    accent: "bg-terracotta",
    features: [
      "Vue 180° sur la vallée",
      "Espace repas convivial",
      "Accès direct terrasse",
    ],
  },
  {
    title: "Le Cantou",
    description:
      "Le cœur battant de la maison. Autour de la cheminée traditionnelle auvergnate, les soirées se prolongent dans une ambiance chaleureuse et feutrée.",
    image: "/images/cantou-poele.webp",
    alt: "Cantou en pierre avec poêle à bois dans le salon du Gîte Angèle",
    accent: "bg-stone",
    features: [
      "Cheminée traditionnelle",
      "Salon cosy",
      "Architecture de caractère",
    ],
  },
  {
    title: "Les Nuits",
    description:
      "Quatre univers distincts pour des nuits réparatrices. Du romantisme de la chambre parentale à l'esprit aventure du dortoir avec son tipi.",
    image: "/images/chambre.webp",
    alt: "Chambre chaleureuse avec lit double et éclairage tamisé au Gîte Angèle",
    accent: "bg-gold",
    features: [
      "Suite parentale avec vue",
      "Dortoir enfants ludique",
      "Literie premium",
    ],
  },
  {
    title: "L'Extérieur & Piscine",
    description:
      "Une oasis de fraîcheur privée. Baignades sous le ciel bleu intense du Cantal ou sous la voie lactée, loin de toute pollution lumineuse.",
    image: "/images/exterieur-sieges.webp",
    alt: "Transats en bois dans le jardin arboré du Gîte Angèle",
    accent: "bg-forest",
    features: [
      "Piscine privée 8x4m",
      "Terrain de pétanque",
      "Jardin arboré",
    ],
  },
];

export default function Spaces() {
  return (
    <section id="spaces" className="py-24 lg:py-32 bg-white-soft">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display font-normal text-stone leading-tight" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
            Les Espaces de Vie
          </h2>
          <div className="w-10 h-px bg-terracotta mx-auto mt-6" />
        </ScrollReveal>

        <div className="space-y-24 lg:space-y-32">
          {spaces.map((space, index) => (
            <ScrollReveal key={space.title}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-sm lg:[direction:ltr]">
                  <img
                    src={space.image}
                    alt={space.alt}
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm shadow-lg hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className={`relative py-4 lg:py-8 lg:[direction:ltr] ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div
                    className={`absolute ${
                      index % 2 === 1 ? "lg:right-0 left-0 lg:left-auto" : "left-0"
                    } top-4 bottom-4 w-0.5 ${space.accent}`}
                  />
                  <div className={index % 2 === 1 ? "lg:pr-8 pl-6 lg:pl-0" : "pl-6 lg:pl-8"}>
                    <h3 className="font-display text-3xl text-stone mb-4">
                      {space.title}
                    </h3>
                    <p className="text-charcoal/80 font-light leading-relaxed mb-6 max-w-[65ch]">
                      {space.description}
                    </p>
                    <ul className="space-y-2">
                      {space.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-charcoal/60 text-[0.95rem] relative pl-4"
                        >
                          <span className="absolute left-0 text-gold">
                            &bull;
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
