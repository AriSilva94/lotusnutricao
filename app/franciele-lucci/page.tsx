import type { Metadata } from "next";
import Link from "next/link";
import { doctors, whatsappLink } from "@/lib/site-data";

const profile = doctors.find((doctor) => doctor.slug === "franciele-lucci");

export const metadata: Metadata = {
  title: "Dra. Franciele Lucci | Nutricionista em Jundiaí",
  description:
    "Perfil da Dra. Franciele Lucci na Clínica Lótus em Jundiaí: nutrição gentil, formação em comportamento alimentar, esportiva e transtornos alimentares.",
};

export default function FrancielePage() {
  return (
    <main id="content" className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold text-[#1f2823] sm:text-4xl">{profile?.name}</h1>
      <p className="mt-5 text-base leading-8 text-[#2f3a32]">{profile?.fullPhilosophy}</p>

      <section className="mt-10 rounded-2xl border border-[#d8d5ce] bg-white p-6">
        <h2 className="text-xl font-semibold text-[#2f3a32]">Formação</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-[#445248]">
          {profile?.education.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      </section>

      <section className="mt-6 rounded-2xl border border-[#d8d5ce] bg-white p-6">
        <h2 className="text-xl font-semibold text-[#2f3a32]">Diferenciais</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-[#445248]">
          {profile?.highlights.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#2f7c58] px-5 py-3 text-sm font-semibold text-white"
        >
          Agendar consulta
        </a>
        <Link href="/" className="rounded-full border border-[#7c857f] px-5 py-3 text-sm font-semibold text-[#2f3a32]">
          Voltar para home
        </Link>
      </div>
    </main>
  );
}
