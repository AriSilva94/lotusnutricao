import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Lótus Vida & Nutrição | Jundiaí",
  description:
    "Clínica de nutrição em Jundiaí com foco em nutrição gentil, saúde da mulher, esportiva, clínica e acompanhamento humanizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${lora.variable} antialiased`}>
        <Header />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
