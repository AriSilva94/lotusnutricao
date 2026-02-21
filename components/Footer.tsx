import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { socialLinks, whatsappLink } from "@/lib/site-data";

const navItems = [
  { label: "Conheça a Clínica", href: "/#aclinica" },
  { label: "Dra Franciele", href: "/franciele-lucci" },
  { label: "Dra Karoline", href: "/karoline-martins" },
  { label: "Especialidades", href: "/#Trabalho" },
  { label: "Agende sua Consulta", href: whatsappLink, external: true },
];

const socialItems = [
  {
    label: "Facebook",
    href: socialLinks.facebook,
    icon: FaFacebookF,
    bgClass: "bg-lotus-rose-500",
  },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    icon: FaInstagram,
    bgClass: "bg-lotus-burgundy",
  },
  {
    label: "WhatsApp",
    href: whatsappLink,
    icon: FaWhatsapp,
    bgClass: "bg-lotus-gold",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-lotus-border bg-[#efefef] text-lotus-burgundy">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
        <div>
          <Link href="/" aria-label="Ir para início">
            <Image
              src="/assets/img/lotusnutricao-logo.png"
              alt="Lótus Vida & Nutrição"
              width={360}
              height={114}
              className="h-24 w-auto sm:h-28"
            />
          </Link>

          <p className="mt-5 max-w-120 text-base leading-snug font-semibold text-lotus-burgundy sm:text-lg">
            Aqui nós praticamos uma nutrição gentil, sem radicalismos, mas ao
            mesmo tempo efetiva e direcionada ao resultado, tratando nossos
            pacientes em sua totalidade com afeto e empatia.
          </p>
        </div>

        <div>
          <h3 className="text-base leading-none font-bold text-lotus-rose-500 sm:text-[1.5rem]">
            Navegue pelo site
          </h3>
          <ul className="mt-4 space-y-0.5 text-xl leading-tight sm:text-[1.9rem]">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="block text-base leading-tight transition-colors hover:text-lotus-rose-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base leading-none font-bold text-lotus-rose-500 sm:text-[1.5rem]">
            Siga nossas redes
          </h3>
          <ul className="mt-6 flex items-center gap-3">
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-transform hover:-translate-y-0.5 ${item.bgClass}`}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#d2b6bb] bg-[#ead0d3]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-sm leading-tight text-lotus-burgundy sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; 2023 - Todo o conteúdo deste site é de uso exclusivo.
            Proibida reprodução ou utilização a qualquer título, sob as penas da
            lei.
          </p>
        </div>
      </div>
    </footer>
  );
}
