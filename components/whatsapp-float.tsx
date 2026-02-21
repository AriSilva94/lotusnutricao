import { whatsappLink } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 rounded-full bg-[#2f7c58] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f7c58]/40 hover:bg-[#256548]"
    >
      WhatsApp
    </a>
  );
}
