/**
 * Helper central para construir enlaces a WhatsApp.
 * El número se configura en NEXT_PUBLIC_WHATSAPP_NUMBER (.env).
 */
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573106224956";

/**
 * Devuelve la URL wa.me, opcionalmente con un mensaje prellenado.
 */
export function waUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export { WHATSAPP_NUMBER };
