import type { NosotrosContent } from "@/content/types";
import { insurersSeed } from "./insurers";

const count = String(insurersSeed.length);

/** Contenido editable de la página "Nosotros". */
export const nosotrosSeed: NosotrosContent = {
  heroEyebrow: "Nuestra historia",
  heroTitle: "Más de 30 años **construyendo confianza**",
  heroSubtitle:
    "Somos una agencia de seguros comprometida con ofrecerte la mejor protección, con la más alta ética y el mejor servicio desde 2009.",

  founderBadge: "Nuestra fundación",
  founderTitle: "Una historia de dedicación y confianza",
  founderParagraphs: [
    "Llano Seguros Ltda. fue fundada en 2009 por Luis Fernando Llano Sierra, con una visión clara: ofrecer a las familias y empresas colombianas una asesoría en seguros íntegra, transparente y verdaderamente personalizada.",
    "Desde nuestros inicios, hemos trabajado con un equipo de profesionales idóneos, comprometidos con entender las necesidades reales de cada cliente y brindarle soluciones que protejan su patrimonio de manera efectiva.",
    "Hoy, con más de 16 años de experiencia, somos referentes para nuestros clientes por nuestra asesoría integral de seguros, respaldados por las principales aseguradoras del país.",
  ],
  founderCardTitle: "Llano Seguros Ltda.",
  founderCardSubtitle: "Fundada en 2009",
  founderStats: [
    { val: "2009", label: "Año de fundación" },
    { val: "+16", label: "Años de experiencia" },
    { val: count, label: "Aseguradoras aliadas" },
    { val: "100%", label: "Compromiso con el cliente" },
  ],

  mvTitle: "Misión y Visión",
  mvSubtitle: "Los pilares que guían nuestro trabajo cada día",
  missionBadge: "Nuestra Misión",
  missionTitle: "Asesoría íntegra para proteger tu patrimonio",
  missionQuote:
    "En Llano Seguros trabajamos cada día con la convicción de que asegurar es proteger y cuidar es brindar tranquilidad. Nos comprometemos a ofrecer asesoría personalizada, soluciones integrales en seguros y un acompañamiento permanente, actuando siempre con honestidad, responsabilidad y compromiso para proteger el patrimonio, la familia y los proyectos de nuestros clientes.",
  visionBadge: "Nuestra Visión",
  visionTitle: "Reconocidos a nivel nacional por nuestra calidad",
  visionQuote:
    "Ser una agencia de seguros reconocida en Colombia por la excelencia en el servicio, la confianza de nuestros clientes y la calidad de nuestra asesoría, consolidándonos como un aliado estratégico que protege lo que más valoran las personas, las familias y las empresas.",

  statsBand: [
    { icon: "Users", val: "2009", label: "Año de fundación" },
    { icon: "Award", val: count, label: "Aseguradoras aliadas" },
    { icon: "Award", val: "+16", label: "Años de experiencia" },
    { icon: "CheckCircle2", val: "100%", label: "Compromiso ético" },
  ],

  valuesBadge: "Lo que nos define",
  valuesTitle: "Nuestros valores",
  valuesSubtitle: "Los principios que guían cada decisión que tomamos",
  values: [
    { icon: "ShieldCheck", title: "Ética", desc: "Actuamos con honestidad e integridad en cada interacción, poniendo siempre los intereses del cliente primero." },
    { icon: "Award", title: "Profesionalismo", desc: "Contamos con personal idóneo y capacitado para brindar asesoría de la más alta calidad." },
    { icon: "Heart", title: "Respeto", desc: "Valoramos la confianza que cada cliente deposita en nosotros y la tratamos con la mayor consideración." },
    { icon: "Handshake", title: "Trabajo en Equipo", desc: "Colaboramos juntos para ofrecer soluciones integrales que protejan el patrimonio de nuestros clientes." },
  ],

  historyTitle: "Nuestra historia",
  historySubtitle: "Un camino de más de 16 años de crecimiento y confianza",
  milestones: [
    { year: "2009", event: "Fundación de Llano Seguros Ltda. en Colombia por Luis Fernando Llano Sierra, con la misión de ofrecer asesoría íntegra y transparente." },
    { year: "2010", event: "Consolidación de alianzas estratégicas con las principales aseguradoras del país: Sura, Bolívar, Allianz y más." },
    { year: "2015", event: "Expansión del portafolio de servicios a seguros empresariales, de vida y salud para personas y compañías." },
    { year: "2020", event: "Reconocimiento por excelencia en servicio al cliente y renovación de alianzas con aseguradoras líderes nacionales." },
    { year: "2025", event: "Más de 16 años protegiendo el patrimonio de familias y empresas colombianas con ética y profesionalismo." },
  ],

  ctaTitle: "¿Listo para proteger lo que más valoras?",
  ctaDesc: "Contáctanos hoy y uno de nuestros asesores especializados te brindará la orientación que necesitas.",
  ctaPrimary: "Cotizar ahora",
  ctaSecondary: "Contáctanos",
};
