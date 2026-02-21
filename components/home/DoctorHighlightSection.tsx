import type { DoctorHighlightData } from "@/components/home/types";
import Image from "next/image";
import Link from "next/link";

type DoctorHighlightSectionProps = {
  id: string;
  doctors: DoctorHighlightData[];
};

export function DoctorHighlightSection({
  id,
  doctors,
}: DoctorHighlightSectionProps) {
  return (
    <section
      id={id}
      className="relative left-1/2 right-1/2 mt-14 -mx-[50vw] w-screen overflow-hidden bg-lotus-rose-500 py-16 sm:py-20"
    >
      <Image
        src="/assets/img/background-icone-branco-e-bege.png"
        alt=""
        aria-hidden="true"
        width={470}
        height={470}
        className="pointer-events-none absolute -left-56 top-1/2 hidden h-auto w-104 -translate-y-1/2 opacity-95 md:block lg:-left-36"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <Image
            src="/assets/img/Icone-Branco-e-Bege-300x300.png"
            alt="Ícone Lótus"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
          />
          <h2 className="mt-4 text-center text-3xl leading-tight font-bold text-white sm:text-4xl">
            Conheça nossas doutoras!
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2 lg:gap-6">
          {doctors.map((doctor) => {
            const isKaroline = doctor.slug === "karoline-martins";

            return (
              <article
                key={doctor.slug}
                className="flex min-h-120 flex-col items-center rounded-4xl bg-[#ececec] px-6 py-10 text-center sm:px-8"
              >
                {isKaroline ? (
                  <Image
                    src="/assets/img/karoline-home.png"
                    alt={doctor.name}
                    width={270}
                    height={270}
                    className="h-54 w-54 rounded-full object-cover sm:h-58 sm:w-58"
                  />
                ) : (
                  <div
                    className="h-54 w-54 sm:h-58 sm:w-58"
                    aria-hidden="true"
                  />
                )}

                <h3 className="mt-8 text-[1.9rem] leading-[1.1] font-bold text-lotus-burgundy sm:text-[2.1rem]">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-[1.2rem] leading-none text-lotus-burgundy sm:text-[1.35rem]">
                  Nutricionista
                </p>

                <Link
                  href={`/${doctor.slug}`}
                  className="mt-8 inline-flex rounded-full bg-lotus-gold px-7 py-2 text-[1.35rem] leading-none font-semibold text-white transition-colors hover:bg-[#cb925f] sm:text-[1.55rem]"
                >
                  Conheça mais sobre ela
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
