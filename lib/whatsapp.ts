// Reemplaza con el número real de WhatsApp de la floristería, formato internacional sin '+' ni espacios
export const WHATSAPP_NUMBER = "5215545382287";

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function productWhatsappLink(productName: string) {
  return whatsappLink(`Hola, me interesa el/la "${productName}" que vi en su sitio web.`);
}
