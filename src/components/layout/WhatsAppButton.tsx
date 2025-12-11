"use client";

import { WhatsAppIcon } from "@/components/ui/Icons";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os produtos da Discloro."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
