import type { DoctorProfile, Specialty } from "@/lib/site-data";

export type SocialLinks = {
  instagram: string;
  facebook: string;
};

export type DoctorHighlightData = Pick<DoctorProfile, "name" | "shortPhilosophy" | "slug">;
export type SpecialtyData = Specialty;
