"use client";

import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import type { Testimonial } from "@/lib/site-data";

type TestimonialsCarouselProps = {
  items: Testimonial[];
};

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number | null>(null);
  const itemCount = items.length;

  const goTo = (index: number) => {
    if (!itemCount) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(itemCount - 1, index));
    setCurrent(nextIndex);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    startXRef.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging || startXRef.current === null) {
      return;
    }

    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const rawDelta = event.clientX - startXRef.current;
    const edgeFriction =
      (current === 0 && rawDelta > 0) ||
      (current === itemCount - 1 && rawDelta < 0)
        ? 0.35
        : 1;

    setDragX(rawDelta * edgeFriction);
  };

  const handlePointerEnd = () => {
    if (!isDragging) {
      return;
    }

    const viewportWidth = viewportRef.current?.clientWidth ?? 0;
    const threshold = Math.max(60, viewportWidth * 0.14);

    if (dragX <= -threshold) {
      next();
    } else if (dragX >= threshold) {
      prev();
    }

    setIsDragging(false);
    setDragX(0);
    startXRef.current = null;
  };

  if (!itemCount) {
    return null;
  }

  return (
    <section
      aria-label="Depoimentos"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-lotus-rose-100 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/assets/img/background-icone-testimonials.png"
          alt=""
          width={780}
          height={780}
          className="h-auto w-140 opacity-90 sm:w-190 lg:w-235"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-4xl font-bold text-lotus-burgundy sm:text-5xl">
          Depoimentos
        </h2>

        <div className="mt-10 flex items-center justify-center gap-2 sm:gap-6">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="hidden h-11 w-11 items-center justify-center rounded-full text-[#f3e8e8] transition-colors hover:text-white sm:inline-flex"
            aria-label="Depoimento anterior"
          >
            <FiChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>

          <div className="w-full max-w-3xl">
            <div
              ref={viewportRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerEnd}
              onPointerCancel={handlePointerEnd}
              onPointerLeave={handlePointerEnd}
              className={`overflow-hidden touch-pan-y select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              aria-live="polite"
            >
              <div
                className="flex"
                style={{
                  transform: `translateX(calc(-${current * 100}% + ${dragX}px))`,
                  transition: isDragging
                    ? "none"
                    : "transform 460ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {items.map((item, index) => (
                  <article
                    key={`${item.author}-${index}`}
                    className="w-full shrink-0 overflow-hidden rounded-md bg-[#e8e8e8] shadow-[0_10px_24px_rgba(64,34,46,0.08)]"
                  >
                    <div className="border-b border-[#cfd2d4] px-4 py-3 sm:px-5">
                      <p className="text-lg font-bold text-[#272727]">
                        {item.author}
                      </p>
                      <div
                        className="mt-1 flex items-center gap-0.5 text-[#f4b740]"
                        aria-label="Avaliação: 5 de 5 estrelas"
                      >
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="min-h-40 px-4 py-3 text-center text-lg leading-8 text-[#5b5b5b] sm:min-h-42 sm:px-6">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            disabled={current === itemCount - 1}
            className="hidden h-11 w-11 items-center justify-center rounded-full text-[#f3e8e8] transition-colors hover:text-white sm:inline-flex"
            aria-label="Próximo depoimento"
          >
            <FiChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d0b7be] text-lotus-burgundy transition-colors hover:bg-[#e1c5ca]"
            aria-label="Depoimento anterior"
          >
            <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={next}
            disabled={current === itemCount - 1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d0b7be] text-lotus-burgundy transition-colors hover:bg-[#e1c5ca]"
            aria-label="Próximo depoimento"
          >
            <FiChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {items.map((_, index) => (
            <button
              type="button"
              onClick={() => goTo(index)}
              key={index}
              className={`h-1.5 w-1.5 rounded-full ${
                index === current ? "bg-[#8b5a69]" : "bg-[#a78690]"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        Depoimento {current + 1} de {items.length}
      </div>
    </section>
  );
}
