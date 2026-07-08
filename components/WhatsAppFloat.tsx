import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hola, quisiera hacer un pedido en Florería Coral.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-coral text-papel
                 flex items-center justify-center text-2xl shadow-lg hover:bg-coral-dark
                 transition-colors z-50"
      aria-label="Pedir por WhatsApp"
    >
      💬
    </a>
  );
}
