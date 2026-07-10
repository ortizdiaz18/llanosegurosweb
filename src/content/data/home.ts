import type { HomeContent } from "@/content/types";
import { insurersSeed } from "./insurers";

/** Contenido editable de la página de inicio. */
export const homeSeed: HomeContent = {
  heroBadge: "+50.000 clientes protegidos confían en nosotros",
  heroTitle: "Protegemos lo **que construyes**",
  heroSubtitle:
    "Somos tu aliado de confianza en seguros. Asesoría experta y personalizada para proteger lo que más valoras.",
  heroCtaPrimary: "Hablar con un asesor",
  heroCtaSecondary: "Conoce más",

  stats: [
    { icon: "Users", value: "+50.000", label: "Clientes protegidos" },
    { icon: "ShieldCheck", value: String(insurersSeed.length), label: "Aseguradoras aliadas" },
    { icon: "RefreshCw", value: "98%", label: "Renovación de pólizas" },
    { icon: "Clock", value: "100%", label: "La mejor atención" },
  ],

  categoriesEyebrow: "Nuestros seguros",
  categoriesTitle: "El seguro ideal para **cada etapa de tu vida**",
  categoriesSubtitle: "Encuentra la protección que mejor se adapta a ti.",
  categories: [
    { label: "Auto", icon: "Car", href: "/seguros/auto", desc: "Protege tu vehículo con cobertura todo riesgo, asistencia 24/7 y carro de reemplazo." },
    { label: "Moto", icon: "Bike", href: "/seguros/moto", desc: "Cobertura para todas las marcas y cilindrajes. Robo, accidentes y responsabilidad civil." },
    { label: "Salud", icon: "Activity", href: "/seguros/salud", desc: "Red de +1.000 clínicas, urgencias, hospitalización y medicina preventiva." },
    { label: "Vida", icon: "Heart", href: "/seguros/vida", desc: "Capital asegurado desde $50M para proteger el futuro financiero de tu familia." },
    { label: "Hogar", icon: "Home", href: "/seguros/hogar", desc: "Cubre tu vivienda ante incendio, robo, daños por agua y responsabilidad civil." },
    { label: "Empresarial", icon: "Building2", href: "/seguros/empresarial", desc: "Seguros para pymes y grandes empresas: activos, empleados y responsabilidad civil." },
    { label: "Cumplimiento", icon: "Scale", href: "/seguros/cumplimiento", desc: "Pólizas de garantía para contratos públicos y privados. Emisión en menos de 24 horas." },
  ],

  howEyebrow: "Atención personalizada",
  howTitle: "Tu asesor te acompaña en **cada paso**",
  howSubtitle:
    "No estás solo. Un experto en seguros te guía desde el primer contacto hasta que recibes tu póliza.",
  steps: [
    { num: 1, icon: "UserCheck", title: "Atención por un experto", desc: "Contáctanos y un asesor especializado te atenderá de forma inmediata y personalizada." },
    { num: 2, icon: "BarChart3", title: "Cotización y Comparativa", desc: "Tu asesor cotiza con las mejores aseguradoras y te presenta opciones con precios y coberturas para comparar." },
    { num: 3, icon: "BadgeCheck", title: "Elección de Póliza", desc: "Tú decides con tranquilidad cuál es la mejor opción según tus necesidades y presupuesto." },
    { num: 4, icon: "Send", title: "Gestión y Envío", desc: "El asesor gestiona toda la compra y te envía tu póliza directamente a tu correo electrónico." },
  ],
  howCtaTitle: "¿Listo para hablar con tu asesor?",
  howCtaDesc: "Nuestros expertos están disponibles para atenderte de forma inmediata, sin filas ni esperas.",
  howCtaButton: "Hablar con un asesor",

  impactEyebrow: "Nuestro impacto",
  impactTitle: "Miles de familias **ya están protegidas**",

  financingBadge: "Beneficio exclusivo",
  financingTitle: "¿Necesitas financiar tu póliza?",
  financingDesc:
    "Si el costo del seguro es una preocupación, ¡te ayudamos! Ofrecemos opciones de financiación flexible para pagar en cuotas cómodas.",
  financingButton: "Consultar financiación",

  whyEyebrow: "Nuestra diferencia",
  whyTitle: "No somos una plataforma, somos **un equipo humano**",
  whySubtitle: "Expertos comprometidos con tu protección real, en cada momento.",
  benefits: [
    { icon: "Handshake", title: "Asesoría Humana y Cercana", desc: "Te atendemos personas reales, no algoritmos. Nuestros asesores especializados te escuchan, entienden tu situación y te guían para que tomes la mejor decisión con total confianza.", tag: "Trato personalizado" },
    { icon: "Award", title: "Respaldo de Élite", desc: "Trabajamos con las aseguradoras líderes del país: SURA, Bolívar, Allianz, MAPFRE, HDI y más. Accedes a la mejor protección con la solidez de las marcas más reconocidas del sector.", tag: "Top aseguradoras nacionales" },
    { icon: "Landmark", title: "Gestión de Financiación", desc: "El costo no debe ser un obstáculo. Te ayudamos a estructurar opciones de pago flexibles y financiación para que accedas a la cobertura que necesitas, sin comprometer tu presupuesto.", tag: "Cuotas flexibles" },
    { icon: "LifeBuoy", title: "Acompañamiento en Siniestros", desc: "Cuando más nos necesitas, estamos ahí. Te guiamos paso a paso en el proceso de reclamación para que recibas tu indemnización de forma rápida, justa y sin contratiempos.", tag: "Siempre a tu lado" },
  ],

  testimonialsEyebrow: "Testimonios",
  testimonialsTitle: "Lo que dicen **nuestros clientes**",
  testimonialsSubtitle: "Más de 50.000 clientes satisfechos nos respaldan.",
  testimonials: [
    { name: "María Fernández", role: "Empresaria", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg", text: "Excelente servicio. En menos de 5 minutos obtuve cotizaciones de múltiples aseguradoras. El asesor me ayudó a elegir la mejor opción.", rating: 5 },
    { name: "Carlos Mendoza", role: "Ingeniero", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg", text: "Muy profesionales. Tengo mis seguros de auto y hogar con ellos. El proceso fue sencillo y el precio excelente.", rating: 5 },
    { name: "Laura Gómez", role: "Médica", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg", text: "Nunca pensé que conseguir un seguro de salud podría ser tan fácil. Súper recomendados.", rating: 5 },
  ],

  faqCtaTitle: "¿Tienes alguna duda?",
  faqCtaDesc: "Consulta nuestras preguntas frecuentes y resuelve tus dudas de forma rápida.",
  faqCtaButton: "Ver preguntas frecuentes",

  finalCtaBadge: "Tu tranquilidad, nuestra prioridad",
  finalCtaTitle: "¿Listo para proteger **lo que más valoras?**",
  finalCtaSubtitle: "Habla con nuestros asesores expertos y encuentra el seguro perfecto para ti y tu familia.",
  finalCtaPrimary: "Hablar con un asesor",
  finalCtaSecondary: "Contáctanos",
};
