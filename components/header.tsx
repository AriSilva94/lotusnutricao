"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "A Clínica", href: "/#aclinica" },
  { label: "Especialidades", href: "/#Trabalho" },
  { label: "Franciele", href: "/#fran" },
  { label: "Karoline", href: "/#karol" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#d8d5ce] bg-[#f7f3ec]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#2f3a32]">
          Clínica Lótus
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-[#b5b0a7] px-3 py-2 text-sm text-[#2f3a32] md:hidden"
          aria-label="Abrir menu principal"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm font-medium text-[#3f4f45]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-[#1f2823]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Menu mobile"
        className={`${open ? "block" : "hidden"} border-t border-[#d8d5ce] bg-[#f7f3ec] md:hidden`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-3 text-sm font-medium text-[#2f3a32]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
