"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Sofía García H.",
    text: "Excelente servicio. Entregaron el mismo día y con una calidad increíble de atención al cliente y rapidez. Quedé muy feliz.",
  },
  {
    name: "Alan García",
    text: "Atención excelente y precios competitivos. Arreglos florales de muy buen gusto. Felicidades.",
  },
  {
    name: "Ivette Bautista",
    text: "Súper recomendable, buen servicio, flores frescas y buen precio.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white py-12 border-t border-tinta/10">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display text-2xl font-semibold mb-2">Lo que dicen en Google</h2>
        <p className="text-girasol text-lg tracking-widest mb-6">★★★★★</p>

        <div className="min-h-[110px] flex flex-col items-center justify-center">
          <p className="text-tinta/80 text-base leading-relaxed max-w-lg">
            &ldquo;{current.text}&rdquo;
          </p>
          <p className="mt-4 font-display font-semibold text-sm text-coral">
            {current.name}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Testimonio anterior"
            className="w-8 h-8 rounded-full border border-tinta/15 hover:border-coral hover:text-coral transition-colors"
          >
            ←
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i === index ? "bg-coral" : "bg-tinta/20"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Siguiente testimonio"
            className="w-8 h-8 rounded-full border border-tinta/15 hover:border-coral hover:text-coral transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
