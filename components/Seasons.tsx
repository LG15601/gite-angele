"use client";

import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/lib/getDictionary";

const seasonStyles = [
  { color: "text-forest", border: "border-t-forest" },
  { color: "text-terracotta", border: "border-t-terracotta" },
  { color: "text-gold", border: "border-t-gold" },
  { color: "text-stone", border: "border-t-stone" },
];

export default function Seasons({ dict }: { dict: Dictionary["seasons"] }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2
            className="font-display font-normal text-stone leading-tight"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            {dict.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.items.map((season, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`bg-white-soft p-8 border-t-4 ${seasonStyles[i]?.border} shadow-[0_10px_30px_-10px_rgba(61,50,41,0.1)] h-full`}
              >
                <span
                  className={`font-display text-2xl ${seasonStyles[i]?.color} block mb-4`}
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
