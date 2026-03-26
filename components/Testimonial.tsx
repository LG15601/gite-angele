"use client";

import ScrollReveal from "./ScrollReveal";

export default function Testimonial() {
  return (
    <section className="py-24 lg:py-32 bg-sand text-center">
      <div className="w-[90%] max-w-[800px] mx-auto">
        <ScrollReveal>
          <span className="font-display text-7xl leading-none text-gold/50 block -mb-4">
            &ldquo;
          </span>
          <p
            className="font-display italic text-stone my-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Un cadre exceptionnel, un accueil chaleureux, et cette vue... On ne
            voulait plus partir.
          </p>
          <div className="text-gold tracking-widest text-xl mb-4">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>
          <p className="text-stone/70 text-sm font-medium">
            Famille D. — Août 2024
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
