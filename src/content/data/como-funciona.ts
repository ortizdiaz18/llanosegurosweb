import type { ComoFuncionaContent } from "@/content/types";
import { insurersSeed } from "./insurers";

/** Contenido editable de la página "¿Cómo funciona?". */
export const comoFuncionaSeed: ComoFuncionaContent = {
  heroEyebrow: "Asesoría 100% humana",
  heroTitle: "Tu asesor te guía **en cada paso**",
  heroSubtitle:
    "Nada de bots ni procesos automáticos. Desde el primer contacto hasta la entrega de tu póliza, un asesor experto está contigo.",

  stepsTitle: "El proceso de tu asesoría",
  stepsSubtitle: "Simple, transparente y con acompañamiento humano en cada etapa.",
  steps: [
    { num: 1, icon: "Phone", title: "Contacto con tu asesor", desc: "Te comunicamos con un asesor especializado según el tipo de seguro que necesitas. Sin bots, sin formularios automáticos — una persona real desde el primer momento.", detail: "Disponibles por llamada, WhatsApp o correo electrónico." },
    { num: 2, icon: "FileSearch", title: "Cotización personalizada", desc: "Tu asesor analiza tu perfil, necesidades y presupuesto para preparar una cotización a tu medida con las mejores aseguradoras del mercado.", detail: "Opciones de financiación disponibles para facilitar el pago de tu prima." },
    { num: 3, icon: "BarChart2", title: "Comparación guiada", desc: "Tu asesor te explica, lado a lado, las diferencias entre coberturas, exclusiones y precios para que tomes la mejor decisión con total claridad.", detail: "Sin presiones, sin letras pequeñas. Claridad absoluta antes de firmar." },
    { num: 4, icon: "ShieldCheck", title: "Emisión y envío de tu póliza", desc: "Una vez elegida la opción ideal, tu asesor gestiona toda la documentación y te envía la póliza firmada con todo lo que necesitas para estar protegido.", detail: "Tu póliza y certificados llegan a tu correo en menos de 24 horas." },
  ],

  financingBadge: "Apoyo en financiación",
  financingTitle: "Paga tu seguro como más te convenga",
  financingDesc:
    "Tu asesor te orienta sobre las opciones de financiación disponibles para que el pago de tu prima no sea un obstáculo. Cuotas mensuales, diferidos o pago único — encontramos la modalidad que mejor se adapta a tu economía.",
  financingItems: [
    "Cuotas mensuales sin intereses*",
    "Financiación directa con aseguradora",
    "Asesoría para elegir el mejor plan de pago",
    "Sin penalización por cancelación anticipada",
  ],

  stats: [
    { val: String(insurersSeed.length), label: "Aseguradoras aliadas" },
    { val: "+5.000", label: "Clientes asesorados" },
    { val: "24h", label: "Entrega de póliza" },
    { val: "98%", label: "Satisfacción del cliente" },
  ],

  advantagesTitle: "¿Por qué asesorarte con nosotros?",
  advantagesSubtitle: "Más que un intermediario, somos el aliado que te acompaña en cada decisión",
  advantages: [
    { icon: "Users", title: "Asesor dedicado", desc: "Un profesional real te acompaña en cada paso del proceso." },
    { icon: "HeartHandshake", title: "Atención personalizada", desc: "Soluciones a medida de tu perfil, no cotizaciones genéricas." },
    { icon: "CreditCard", title: "Apoyo en financiación", desc: "Te ayudamos a encontrar opciones de pago cómodas para tu prima." },
    { icon: "BadgeCheck", title: "Sin compromisos ocultos", desc: "Transparencia total antes de que firmes cualquier documento." },
    { icon: "Star", title: "Mejor relación cobertura-precio", desc: `Negociamos con ${insurersSeed.length} aseguradoras para darte el mejor trato.` },
    { icon: "Clock", title: "Póliza en 24 horas", desc: "Gestión ágil para que tu protección empiece cuanto antes." },
  ],

  testimonialQuote:
    "Mi asesora fue increíble. Me explicó cada opción con paciencia, me ayudó a encontrar un plan de financiación y tenía mi póliza al día siguiente. Nunca pensé que contratar un seguro podía ser tan fácil.",
  testimonialName: "Laura M.",
  testimonialRole: "Seguro de vida · Cliente desde 2023",
  testimonialAvatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",

  ctaTitle: "¿Listo para hablar con tu asesor?",
  ctaDesc: "Sin formularios automáticos. Un experto real te atiende y prepara tu cotización personalizada.",
  ctaPrimary: "Hablar con un asesor",
  ctaSecondary: "Solicitar cotización",
};
