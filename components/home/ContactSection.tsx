import { FaWhatsapp } from "react-icons/fa";

type ContactSectionProps = {
  whatsappLink: string;
};

const mapEmbedUrl =
  "https://www.google.com/maps?q=Rua+Hilda+Del+Nero+Bisquolo,+102+-+Sala+708,+Jardim+Florida,+Jundia%C3%AD+-+SP,+13208-703&output=embed";

export function ContactSection({ whatsappLink }: ContactSectionProps) {
  return (
    <section
      id="contato"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-lotus-burgundy sm:text-4xl">
          Contato
        </h2>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
          <div className="mx-auto w-full max-w-70 lg:mx-0">
            <h3 className="text-2xl leading-tight font-bold text-lotus-burgundy">
              Lótus - Vida & Nutrição
            </h3>

            <p className="mt-4 text-lg leading-[1.4] text-lotus-burgundy">
              Hilda Del Nero Bisquolo, Nº 102 - Sala 708 - Jardim Florida,
              Jundiaí - SP, 13208-703
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-lotus-rose-500 px-6 py-4 text-lg leading-none font-semibold text-white transition-colors hover:bg-[#b54b71]"
            >
              <FaWhatsapp aria-hidden="true" className="h-6 w-6 shrink-0" />
              <span>Agende seu horário</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-sm border border-[#d3d3d3] bg-white">
            <iframe
              src={mapEmbedUrl}
              title="Mapa da clínica Lótus Vida & Nutrição"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-85 w-full sm:h-92.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
