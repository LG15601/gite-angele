"use client";

import ScrollReveal from "./ScrollReveal";

const highlights = [
  {
    title: "Conques UNESCO",
    description:
      "À 30 min. L'abbatiale Sainte-Foy, joyau de l'art roman sur le chemin de Compostelle.",
  },
  {
    title: "Volcans d'Auvergne",
    description:
      "Puy Mary Grand Site de France. Des panoramas grandioses sur la plus grande chaîne volcanique d'Europe.",
  },
  {
    title: "Nature & Rando",
    description:
      "Le GR 65 et des centaines de sentiers balisés au départ du gîte pour tous les niveaux.",
  },
  {
    title: "Gastronomie",
    description:
      "Terre des 5 fromages AOP. Salers, truffade, aligot et charcuteries de montagne.",
  },
];

export default function Region() {
  return (
    <section id="cantal" className="py-24 lg:py-32 bg-stone relative">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <ScrollReveal className="mb-16">
          <h2
            className="font-display font-normal text-cream leading-tight"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            Aux portes de l&apos;émerveillement
          </h2>
          <p className="text-cream/70 font-light mt-4 max-w-[65ch]">
            Découvrez un territoire d&apos;exception, entre volcans millénaires et
            patrimoine sacré.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-500 h-full">
                <h3 className="font-display text-2xl text-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <p className="text-cream/40 italic text-sm">
            &ldquo;Des Racines et des Ailes a révélé au grand public les trésors
            cachés de notre coin du Cantal.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
