import type { Metadata } from "next";
import { ClinicSection } from "@/components/home/ClinicSection";
import { DoctorHighlightSection } from "@/components/home/DoctorHighlightSection";
import { HeroSection } from "@/components/home/HeroSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { NutritionBannerSection } from "@/components/home/NutritionBannerSection";
import { SpecialtiesSection } from "@/components/home/SpecialtiesSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
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
    <main
      id="content"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
    >
      <HeroSection whatsappLink={whatsappLink} />
      <ClinicSection />
      <NutritionBannerSection />
      <SpecialtiesSection
        specialties={specialties}
        whatsappLink={whatsappLink}
      />

      <section className="mt-14">
        <DoctorHighlightSection
          id="fran"
          doctor={franciele}
          backgroundClassName="bg-[#edf2ee]"
          profileHref="/franciele-lucci"
          scheduleLabel="Agendar com Franciele"
          whatsappLink={whatsappLink}
        />
      </section>

      <section className="mt-8">
        <DoctorHighlightSection
          id="karol"
          doctor={karoline}
          backgroundClassName="bg-[#f0ece6]"
          profileHref="/karoline-martins"
          scheduleLabel="Agendar com Karoline"
          whatsappLink={whatsappLink}
        />
      </section>

      <section className="mt-14">
        <TestimonialsCarousel items={testimonials} />
      </section>

      <SiteFooter clinicAddress={clinicAddress} socialLinks={socialLinks} />
    </main>
  );
}
