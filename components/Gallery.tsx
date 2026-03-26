"use client";

import ScrollReveal from "./ScrollReveal";

const photos = [
  { src: "/images/piscine-petanque.jpg", alt: "Piscine et terrain de pétanque" },
  { src: "/images/interieur-1.jpg", alt: "Intérieur du salon" },
  { src: "/images/drone-nature.jpg", alt: "Vue aérienne du gîte" },
  { src: "/images/dortoir.jpg", alt: "Dortoir enfants avec tipi" },
  { src: "/images/exterieur-1.jpg", alt: "Façade en pierre" },
  { src: "/images/chambre-2.jpg", alt: "Chambre double avec vue" },
  { src: "/images/chambre-3.jpg", alt: "Chambre double cosy" },
  { src: "/images/ext-vue.jpg", alt: "Vue paysage cantalien" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-sand">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2
            className="font-display font-normal text-stone leading-tight"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            Galerie Photo
          </h2>
          <div className="w-10 h-px bg-terracotta mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-sm shadow-md group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone/0 group-hover:bg-stone/20 transition-colors duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
