import type { FaqCategory } from "@/content/types";

/** Preguntas frecuentes por categoría. Editable desde el admin en Fase 2. */
export const faqSeed: FaqCategory[] = [
  {
    label: "General",
    faqs: [
      { q: "¿Qué es Llano Seguros?", a: "Llano Seguros es una correduría de seguros independiente que te permite comparar y cotizar seguros de las principales aseguradoras del país en un solo lugar." },
      { q: "¿Es gratuito el servicio de cotización?", a: "Sí, completamente. Cotizar, comparar y asesorarte con nuestros expertos no tiene ningún costo." },
      { q: "¿Cuánto tiempo toma obtener una cotización?", a: "En menos de 1 minuto puedes obtener cotizaciones comparadas de múltiples aseguradoras." },
      { q: "¿Llano Seguros es una aseguradora?", a: "No, somos una correduría o bróker de seguros. Actuamos como tus asesores para encontrar la mejor póliza entre múltiples aseguradoras." },
    ],
  },
  {
    label: "Pólizas",
    faqs: [
      { q: "¿Cómo recibo mi póliza?", a: "Una vez que contratas, recibes todos los documentos digitalmente a tu correo de forma inmediata." },
      { q: "¿Puedo modificar mi póliza?", a: "Sí, puedes solicitar modificaciones a través de tu portal de cliente o contactando a nuestros asesores." },
      { q: "¿Qué pasa si quiero cancelar mi seguro?", a: "Puedes cancelar tu póliza siguiendo el proceso establecido por cada aseguradora. Te acompañamos en el proceso." },
      { q: "¿Cómo funciona la renovación?", a: "Recibirás una notificación con 30 días de anticipación antes de tu renovación con opciones de renovar o cambiar de plan." },
    ],
  },
  {
    label: "Pagos",
    faqs: [
      { q: "¿Cuáles son los métodos de pago?", a: "Aceptamos tarjeta de crédito, débito automático, PSE y pagos en efectivo en puntos autorizados." },
      { q: "¿Puedo pagar en cuotas?", a: "Sí, muchos planes ofrecen opciones de pago mensual, trimestral, semestral o anual." },
      { q: "¿Qué pasa si no pago a tiempo?", a: "Tendrás un periodo de gracia. Después de ese período, la póliza puede suspenderse. Te notificamos con anticipación." },
    ],
  },
  {
    label: "Siniestros",
    faqs: [
      { q: "¿Cómo reporto un siniestro?", a: "Puedes reportarlo desde tu portal de cliente, por WhatsApp o llamando a nuestra línea 24/7." },
      { q: "¿Cuánto tarda el proceso de un siniestro?", a: "Depende del tipo de siniestro y la aseguradora. Nosotros hacemos seguimiento y te acompañamos en todo el proceso." },
      { q: "¿Qué documentos necesito para un siniestro?", a: "Depende del tipo de póliza. En general: identificación, número de póliza y documentación del evento." },
    ],
  },
];
