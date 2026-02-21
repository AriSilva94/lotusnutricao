"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/site-data";

type TestimonialsCarouselProps = {
  items: Testimonial[];
};

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!items.length) {
    return null;
  }

  const prev = () => {
    setCurrent((value) => (value === 0 ? items.length - 1 : value - 1));
  };

  const next = () => {
    setCurrent((value) => (value === items.length - 1 ? 0 : value + 1));
  };

  const testimonial = items[current];

  return (
    <section aria-label="Depoimentos" className="rounded-2xl bg-[#ece6dd] p-6">
      <h3 className="text-xl font-semibold text-[#2f3a32]">Depoimentos</h3>
      <p className="mt-4 text-base leading-7 text-[#3f4f45]" aria-live="polite">
        “{testimonial.text}”
      </p>
      <p className="mt-3 text-sm font-semibold text-[#1f2823]">{testimonial.author}</p>
      <div className="mt-5 flex gap-2">
        <button
          type="button"
          onClick={prev}
          className="rounded-md border border-[#b5b0a7] px-3 py-2 text-sm text-[#2f3a32]"
          aria-label="Depoimento anterior"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={next}
          className="rounded-md border border-[#b5b0a7] px-3 py-2 text-sm text-[#2f3a32]"
          aria-label="Próximo depoimento"
        >
          Próximo
        </button>
      </div>
    </section>
  );
}
