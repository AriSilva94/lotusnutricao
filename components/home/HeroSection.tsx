import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type HeroSectionProps = {
  whatsappLink: string;
};

const treatments = [
  "Emagrecimento",
  "Hipertrofia",
  "Transtornos Alimentares",
  "Nutrição Comportamental",
  "Patologias Clínicas",
];

export function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-lotus-rose-500 text-white">
      <div className="mx-auto w-full max-w-6xl py-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div aria-hidden="true" className="hidden min-h-105 lg:block" />

          <div className="mx-auto w-full max-w-107.5 lg:mx-0">
            <Image
              src="/assets/img/Icone-Branco-e-Bege-300x300.png"
              alt="Ícone da Clínica Lótus"
              width={80}
              height={80}
              className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
              priority
            />

            <h1 className="mt-6 text-center text-4xl leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-[4.25rem]">
              TRATAMENTO
              <br />
              PERSONALIZADO
            </h1>

            <ul className="mt-8 space-y-2.5 pl-10 md:pl-6 text-lg leading-8 sm:text-[2rem] sm:leading-11">
              {treatments.map((treatment) => (
                <li key={treatment} className="list-disc">
                  {treatment}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#14C751] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#11b549]"
            >
              <FaWhatsapp aria-hidden="true" className="h-5 w-5 shrink-0" />
              Agendar consulta agora!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
