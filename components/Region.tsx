"use client";

import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/lib/getDictionary";

export default function Region({ dict }: { dict: Dictionary["region"] }) {
  return (
    <section id="cantal" className="py-24 lg:py-32 bg-stone relative">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <ScrollReveal className="mb-16">
          <h2
            className="font-display font-normal text-cream leading-tight"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            {dict.title}
          </h2>
          <p className="text-cream/70 font-light mt-4 max-w-[65ch]">
            {dict.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.highlights.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
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

        <ScrollReveal className="mt-16">
          <h3 className="font-display text-2xl text-cream mb-8 text-center">
            {dict.distancesTitle}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {dict.distances.map((d, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="text-center p-4 border border-white/10 rounded-sm">
                  <span className="font-display text-2xl text-gold block">
                    {d.time}
                  </span>
                  <span className="text-cream text-sm font-medium block mt-1">
                    {d.place}
                  </span>
                  <span className="text-cream/50 text-xs block">
                    {d.detail}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center">
          <p className="text-cream/40 italic text-sm">
            &ldquo;{dict.quote}&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
