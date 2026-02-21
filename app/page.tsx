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
  const highlightedDoctors = [franciele, karoline].filter(
    (doctor): doctor is NonNullable<typeof doctor> => Boolean(doctor),
  );

  return (
    <main id="content" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <HeroSection whatsappLink={whatsappLink} />
      <ClinicSection />
      <NutritionBannerSection />
      <SpecialtiesSection
        specialties={specialties}
        whatsappLink={whatsappLink}
      />

      <DoctorHighlightSection id="doutoras" doctors={highlightedDoctors} />

      <section className="mt-14">
        <TestimonialsCarousel items={testimonials} />
      </section>

      <SiteFooter clinicAddress={clinicAddress} socialLinks={socialLinks} />
    </main>
  );
}
