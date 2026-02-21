import { whatsappLink } from "@/lib/site-data";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/45 transition-colors hover:bg-[#1ebe57]"
    >
      <FaWhatsapp aria-hidden="true" className="h-8 w-8" />
    </a>
  );
}
