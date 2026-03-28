"use client";

import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/lib/getDictionary";

const spaceImages = [
  { image: "/images/veranda-panoramique-ext.webp", accent: "bg-terracotta" },
  { image: "/images/cantou-poele.webp", accent: "bg-stone" },
  { image: "/images/chambre-grise-king.webp", accent: "bg-gold" },
  { image: "/images/pergola-table-vue.webp", accent: "bg-forest" },
  { image: "/images/transat-vue-campagne.webp", accent: "bg-terracotta" },
  { image: "/images/jardin-angele-panneau.webp", accent: "bg-forest" },
];

export default function Spaces({ dict }: { dict: Dictionary["spaces"] }) {
  return (
    <section id="spaces" className="py-24 lg:py-32 bg-white-soft">
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

        <div className="space-y-24 lg:space-y-32">
          {dict.items.map((space, index) => (
            <ScrollReveal key={index}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-sm lg:[direction:ltr]">
                  <img
                    src={spaceImages[index]?.image}
                    alt={space.alt}
                    loading="lazy"
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm shadow-lg hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                <div
                  className={`relative py-4 lg:py-8 lg:[direction:ltr] ${
                    index % 2 === 1 ? "lg:text-right" : ""
                  }`}
                >
                  <div
                    className={`absolute ${
                      index % 2 === 1
                        ? "lg:right-0 left-0 lg:left-auto"
                        : "left-0"
                    } top-4 bottom-4 w-0.5 ${spaceImages[index]?.accent}`}
                  />
                  <div
                    className={
                      index % 2 === 1
                        ? "lg:pr-8 pl-6 lg:pl-0"
                        : "pl-6 lg:pl-8"
                    }
                  >
                    <h3 className="font-display text-3xl text-stone mb-4">
                      {space.title}
                    </h3>
                    <p className="text-charcoal/80 font-light leading-relaxed mb-6 max-w-[65ch]">
                      {space.description}
                    </p>
                    <ul className="space-y-2">
                      {space.features.map((feature, fi) => (
                        <li
                          key={fi}
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
