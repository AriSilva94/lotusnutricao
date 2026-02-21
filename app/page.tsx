import Link from "next/link";
import type { Metadata } from "next";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import {
  clinicAddress,
  doctors,
  socialLinks,
  specialties,
  testimonials,
  whatsappLink,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Clínica Lótus Vida & Nutrição | Nutrição Gentil em Jundiaí",
  description:
    "Conheça a Clínica Lótus em Jundiaí: nutrição gentil, especialidades clínicas e atendimento humanizado com foco em resultados sustentáveis.",
};

export default function Home() {
  const franciele = doctors.find((doctor) => doctor.slug === "franciele-lucci");
  const karoline = doctors.find((doctor) => doctor.slug === "karoline-martins");

  return (
    <main id="content" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="grid gap-8 rounded-3xl bg-linear-to-br from-[#ebe2d4] to-[#dfe8df] p-8 sm:p-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4a5e53]">
            Clínica Lótus - Vida & Nutrição
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f2823] sm:text-5xl">
            Nutrição gentil com estratégia, acolhimento e constância.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#2f3a32] sm:text-lg">
            Cuidado nutricional personalizado para diferentes fases da vida com foco
            em transformação real e sustentável.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#2f7c58] px-5 py-3 text-sm font-semibold text-white"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#Trabalho"
              className="rounded-full border border-[#7c857f] px-5 py-3 text-sm font-semibold text-[#2f3a32]"
            >
              Ver especialidades
            </a>
          </div>
        </div>
        <div className="self-end rounded-2xl bg-[#f7f3ec] p-6 text-sm leading-7 text-[#2f3a32]">
          <p className="font-semibold">Atendimento em Jundiaí - SP</p>
          <p>{clinicAddress}</p>
          <p className="mt-4">
            Instagram:{" "}
            <a className="underline" href={socialLinks.instagram} target="_blank" rel="noreferrer">
              @clinicalotusjundiai
            </a>
          </p>
        </div>
      </section>

      <section id="aclinica" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#1f2823] sm:text-3xl">A Clínica</h2>
        <p className="mt-4 max-w-4xl text-base leading-8 text-[#2f3a32]">
          A filosofia da Clínica Lótus é de Nutrição Gentil: uma abordagem limpa,
          acolhedora e colaborativa para fortalecer sua autonomia alimentar sem
          restrições extremas. O objetivo é construir saúde, bem-estar e resultado
          de longo prazo.
        </p>
      </section>

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

      <section id="fran" className="mt-14 scroll-mt-24 rounded-2xl bg-[#edf2ee] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#1f2823]">{franciele?.name}</h2>
        <p className="mt-3 text-base leading-7 text-[#2f3a32]">{franciele?.shortPhilosophy}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/franciele-lucci"
            className="rounded-full border border-[#7c857f] px-5 py-3 text-sm font-semibold text-[#2f3a32]"
          >
            Ver perfil completo
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#2f7c58] px-5 py-3 text-sm font-semibold text-white"
          >
            Agendar com Franciele
          </a>
        </div>
      </section>

      <section id="karol" className="mt-8 scroll-mt-24 rounded-2xl bg-[#f0ece6] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#1f2823]">{karoline?.name}</h2>
        <p className="mt-3 text-base leading-7 text-[#2f3a32]">{karoline?.shortPhilosophy}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/karoline-martins"
            className="rounded-full border border-[#7c857f] px-5 py-3 text-sm font-semibold text-[#2f3a32]"
          >
            Ver perfil completo
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#2f7c58] px-5 py-3 text-sm font-semibold text-white"
          >
            Agendar com Karoline
          </a>
        </div>
      </section>

      <section className="mt-14">
        <TestimonialsCarousel items={testimonials} />
      </section>

      <footer className="mt-14 border-t border-[#d8d5ce] py-8 text-sm text-[#3f4f45]">
        <p>{clinicAddress}</p>
        <p className="mt-2">
          Instagram: <a className="underline" href={socialLinks.instagram}>@clinicalotusjundiai</a>
          {" | "}
          Facebook: <a className="underline" href={socialLinks.facebook}>Clínica Lótus</a>
        </p>
      </footer>
    </main>
  );
}
