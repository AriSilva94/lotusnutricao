"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { whatsappLink } from "@/lib/site-data";

type NavItem = {
  label: string;
  href: string;
  highlight?: boolean;
};

const navItems: NavItem[] = [
  { label: "Conheça a Clínica", href: "/#aclinica" },
  { label: "Dra Franciele", href: "/#fran" },
  { label: "Dra Karoline Martins", href: "/#karol" },
  { label: "Especialidades", href: "/#Trabalho", highlight: true },
  { label: "Agende sua Consulta", href: whatsappLink },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-lotus-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Ir para início">
          <Image
            src="/assets/img/lotusnutricao-logo.png"
            alt="Lótus Vida & Nutrição"
            width={220}
            height={72}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-lotus-border-strong px-3 py-2 text-sm text-lotus-burgundy md:hidden"
          aria-label="Abrir menu principal"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-base font-medium">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith("http");

              return (
                <li key={item.label}>
                  <Link
                    className={`inline-block transform transition-all duration-200 hover:-translate-y-0.5 hover:text-lotus-gold ${
                      item.highlight ? "text-lotus-gold" : "text-lotus-burgundy"
                    }`}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Menu mobile"
        className={`${open ? "block" : "hidden"} border-t border-lotus-border bg-white md:hidden`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
          {navItems.map((item) => {
            const isExternal = item.href.startsWith("http");

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:text-lotus-gold ${
                    item.highlight ? "text-lotus-gold" : "text-lotus-burgundy"
                  }`}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
