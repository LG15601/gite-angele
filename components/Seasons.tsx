"use client";

import ScrollReveal from "./ScrollReveal";

const seasons = [
  {
    name: "Printemps",
    color: "text-forest",
    border: "border-t-forest",
    description:
      "L'éveil de la nature. Les vallons se couvrent de fleurs sauvages, idéal pour les randonneurs en quête de couleurs.",
  },
  {
    name: "Été",
    color: "text-terracotta",
    border: "border-t-terracotta",
    description:
      "La douceur de vivre. Baignades, marchés nocturnes de pays, festivals et ciels étoilés inoubliables.",
  },
  {
    name: "Automne",
    color: "text-gold",
    border: "border-t-gold",
    description:
      "L'été indien. La châtaigneraie se pare d'or. Saison des champignons et des promenades en forêt.",
  },
  {
    name: "Hiver",
    color: "text-stone",
    border: "border-t-stone",
    description:
      "L'ambiance cocooning. Soirées au cantou, ski au Super Lioran (45min), et marchés de Noël.",
  },
];

export default function Seasons() {
  return (
    <section className="py-24 lg:py-32">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2
            className="font-display font-normal text-stone leading-tight"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            Au fil des 4 Saisons
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, i) => (
            <ScrollReveal key={season.name} delay={i * 0.1}>
              <div
                className={`bg-white-soft p-8 border-t-4 ${season.border} shadow-[0_10px_30px_-10px_rgba(61,50,41,0.1)] h-full`}
              >
                <span
                  className={`font-display text-2xl ${season.color} block mb-4`}
                >
                  {season.name}
                </span>
                <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                  {season.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
