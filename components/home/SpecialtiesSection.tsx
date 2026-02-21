import type { SpecialtyData } from "@/components/home/types";

type SpecialtiesSectionProps = {
  specialties: SpecialtyData[];
  whatsappLink: string;
};

export function SpecialtiesSection({ specialties, whatsappLink }: SpecialtiesSectionProps) {
  return (
    <section id="Trabalho" className="mt-14 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-[#1f2823] sm:text-3xl">Especialidades</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((specialty) => (
          <article key={specialty.title} className="rounded-2xl border border-[#d8d5ce] bg-white p-5">
            <h3 className="text-lg font-semibold text-[#2f3a32]">{specialty.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#4b5b51]">{specialty.description}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-[#2f7c58] underline"
            >
              Quero agendar
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
