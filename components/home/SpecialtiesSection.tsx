import type { SpecialtyData } from "@/components/home/types";
import Image from "next/image";
import type { CSSProperties } from "react";
import { FaWhatsapp } from "react-icons/fa";

type SpecialtiesSectionProps = {
  specialties: SpecialtyData[];
  whatsappLink: string;
};

export function SpecialtiesSection({
  specialties,
  whatsappLink,
}: SpecialtiesSectionProps) {
  const cardBackStyle: CSSProperties = {
    transform: "rotateX(180deg)",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };
  const cardFaceStyle: CSSProperties = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <section id="Trabalho" className="mt-18 scroll-mt-24 sm:mt-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <Image
          src="/assets/img/Icone-Bege-e-Roxo-300x300.png"
          alt="Ícone Lótus"
          width={60}
          height={60}
          className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        />

        <h2 className="mt-4 text-center text-4xl font-bold text-lotus-burgundy sm:text-5xl">
          Especialidades
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((specialty) => (
          <article
            key={specialty.title}
            tabIndex={0}
            className="group w-full overflow-hidden perspective-distant focus:outline-none"
          >
            <div className="relative aspect-5/4 w-full transition-transform duration-950 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform-3d group-hover:transform-[rotateX(180deg)] group-focus-within:transform-[rotateX(180deg)]">
              <div
                className="absolute inset-0 overflow-hidden"
                style={cardFaceStyle}
              >
                <Image
                  src={specialty.imagePath}
                  alt={specialty.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <h3 className="absolute inset-0 z-10 flex items-center justify-center px-5 text-center text-2xl leading-[1.15] font-bold wrap-break-word text-white sm:px-6 sm:text-3xl">
                  {specialty.title}
                </h3>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center overflow-hidden bg-lotus-burgundy px-4 py-3 text-center sm:px-5"
                style={cardBackStyle}
              >
                <p className="text-xs leading-4 font-semibold wrap-break-word text-white sm:text-sm sm:leading-5">
                  {specialty.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center">
        <p className="text-center text-[2rem] leading-tight font-semibold text-lotus-gold">
          Venha saber qual o melhor atendimento para você:
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#14C751] px-8 py-3 text-[1rem] leading-none font-semibold text-white transition-colors hover:bg-[#11b549]"
        >
          <FaWhatsapp aria-hidden="true" className="h-4 w-4 shrink-0" />
          Fale com a gente
        </a>
      </div>
    </section>
  );
}
