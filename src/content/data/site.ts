import type { SiteSettings } from "@/content/types";

/**
 * Ajustes del sitio (contacto, marca, redes). Editable desde el admin en Fase 2.
 * El número de WhatsApp usado por los CTA sigue viniendo de NEXT_PUBLIC_WHATSAPP_NUMBER
 * (lib/whatsapp) para el enlace; aquí se guarda también el valor visible.
 */
export const siteSettingsSeed: SiteSettings = {
  brandName: "Llano Seguros",
  tagline: "Protegemos lo que construyes",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573106224956",
  whatsappDisplay: "+57 310 622 4956",
  email: "hola@llanoseguros.com",
  nationalLine: "01 8000 123 456",
  address: "Cra. 7 # 72-41, Of. 502",
  city: "Bogotá, Colombia",
  hours: "Lun–Vie 7:00 am – 7:00 pm",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};
