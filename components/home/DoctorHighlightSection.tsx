import Link from "next/link";
import type { DoctorHighlightData } from "@/components/home/types";

type DoctorHighlightSectionProps = {
  doctor: DoctorHighlightData | undefined;
  id: string;
  backgroundClassName: string;
  profileHref: string;
  scheduleLabel: string;
  whatsappLink: string;
};

export function DoctorHighlightSection({
  doctor,
  id,
  backgroundClassName,
  profileHref,
  scheduleLabel,
  whatsappLink,
}: DoctorHighlightSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 rounded-2xl p-6 sm:p-8 ${backgroundClassName}`}>
      <h2 className="text-2xl font-semibold text-[#1f2823]">{doctor?.name}</h2>
      <p className="mt-3 text-base leading-7 text-[#2f3a32]">{doctor?.shortPhilosophy}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={profileHref}
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
          {scheduleLabel}
        </a>
      </div>
    </section>
  );
}
