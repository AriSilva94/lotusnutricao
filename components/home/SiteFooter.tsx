import type { SocialLinks } from "@/components/home/types";

type SiteFooterProps = {
  clinicAddress: string;
  socialLinks: SocialLinks;
};

export function SiteFooter({ clinicAddress, socialLinks }: SiteFooterProps) {
  return (
    <footer className="mt-14 border-t border-[#d8d5ce] py-8 text-sm text-[#3f4f45]">
      <p>{clinicAddress}</p>
      <p className="mt-2">
        Instagram:{" "}
        <a className="underline" href={socialLinks.instagram}>
          @clinicalotusjundiai
        </a>
        {" | "}
        Facebook:{" "}
        <a className="underline" href={socialLinks.facebook}>
          Clínica Lótus
        </a>
      </p>
    </footer>
  );
}
