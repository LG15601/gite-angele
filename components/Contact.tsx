"use client";

import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/lib/getDictionary";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <>
      {/* Tarifs */}
      <section
        id="tarifs"
        className="py-24 lg:py-32 bg-cream border-t border-stone/5"
      >
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2
              className="font-display font-normal text-stone leading-tight"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              {dict.tarifsTitle}
            </h2>
            <div className="w-10 h-px bg-terracotta mx-auto mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto mb-12">
            {dict.tarifs.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className={`text-center p-8 border border-stone/10 rounded-sm ${
                    i === 0
                      ? "bg-terracotta/5 border-terracotta/20"
                      : "bg-white-soft"
                  }`}
                >
                  <span className="text-terracotta uppercase text-xs tracking-widest font-medium block mb-2">
                    {t.season}
                  </span>
                  <span className="font-display text-4xl text-stone block mb-1">
                    {t.price}
                  </span>
                  <span className="text-charcoal/50 text-sm">
                    {dict.perWeek}
                  </span>
                  <span className="text-charcoal/60 text-xs block mt-2">
                    {t.period}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-charcoal/60 text-sm mb-4">
                {dict.shortStay}&nbsp;:{" "}
                <strong className="text-stone">800€</strong>
                &nbsp;&middot;&nbsp;{dict.cleaningOption}&nbsp;:{" "}
                <strong className="text-stone">150€</strong>
              </p>
              <p className="text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                {dict.includedTitle}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {dict.included.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs text-charcoal/70 px-3 py-1.5 bg-sand rounded-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Practical info */}
      <section
        id="contact"
        className="py-24 lg:py-32 bg-white-soft border-t border-stone/5"
      >
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal>
              <div>
                <h3 className="text-terracotta uppercase text-sm tracking-widest font-body font-medium mb-6">
                  {dict.access.title}
                </h3>
                <p className="text-stone text-lg leading-relaxed">
                  {dict.access.address}
                </p>
                <ul className="mt-3 space-y-1 text-stone/70 text-sm">
                  {dict.access.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-terracotta uppercase text-sm tracking-widest font-body font-medium mb-6">
                  {dict.contactInfo.title}
                </h3>
                <p className="text-stone text-lg leading-relaxed">
                  <strong>Marie Goutel</strong>
                </p>
                <p className="mt-2">
                  <a
                    href="tel:+33682478020"
                    className="text-terracotta hover:text-terracotta/80 transition-colors text-lg"
                  >
                    06 82 47 80 20
                  </a>
                </p>
                <p className="mt-1">
                  <a
                    href="mailto:contact@gite-angele.fr"
                    className="text-stone/70 hover:text-terracotta transition-colors text-sm"
                  >
                    contact@gite-angele.fr
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:gitelevalat@gmail.com"
                    className="text-stone/70 hover:text-terracotta transition-colors text-sm"
                  >
                    gitelevalat@gmail.com
                  </a>
                </p>
                <p className="mt-3">
                  <a
                    href="https://wa.me/33682478020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:text-forest/80 transition-colors text-sm font-medium"
                  >
                    {dict.contactInfo.whatsapp} &rarr;
                  </a>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-terracotta uppercase text-sm tracking-widest font-body font-medium mb-6">
                  {dict.stay.title}
                </h3>
                <ul className="space-y-2 text-stone/80 text-sm">
                  {dict.stay.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
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
              {dict.cta.title}
            </h2>
            <p className="text-white/85 mb-8">{dict.cta.subtitle}</p>
            <a
              href="https://wa.me/33682478020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-white text-terracotta font-medium text-sm uppercase tracking-widest hover:bg-stone hover:text-white transition-all duration-300"
            >
              {dict.cta.button}
            </a>
            <p className="mt-6 text-white/60 text-sm">
              {dict.cta.callText}{" "}
              <a href="tel:+33682478020" className="underline">
                06 82 47 80 20
              </a>
              {" "}&middot;{" "}
              <a href="mailto:contact@gite-angele.fr" className="underline">
                contact@gite-angele.fr
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
