import type { AseguradorasContent } from "@/content/types";
import { insurersSeed } from "./insurers";

const count = String(insurersSeed.length);

/** Contenido editable de la página "Aseguradoras". */
export const aseguradorasSeed: AseguradorasContent = {
  heroEyebrow: "Aseguradoras aliadas",
  heroTitle: "Las mejores aseguradoras **del país**",
  heroSubtitle: `Trabajamos con ${count} aseguradoras líderes para ofrecerte la mejor comparación de precios y coberturas.`,
  benefits: [
    `Acceso a ${count} aseguradoras en una sola plataforma`,
    "Comparación objetiva sin favoritismos",
    "Precios negociados por volumen",
    "Asesoría experta e imparcial",
    "Gestión centralizada de todas tus pólizas",
  ],
  gridTitle: "Nuestras aseguradoras aliadas",
  gridSubtitle: "Elegidas por su solidez, solvencia y calidad de servicio",
  ctaTitle: "Compara todas en un solo lugar",
  ctaDesc: "Nosotros hacemos el trabajo de comparar por ti. Tú solo eliges la mejor opción.",
  ctaButton: "Cotizar ahora",
};
