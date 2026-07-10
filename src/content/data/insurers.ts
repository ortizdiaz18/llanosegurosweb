import type { Insurer } from "@/content/types";

/**
 * Aseguradoras aliadas. Coloca cada archivo en /public/aseguradoras/ con
 * exactamente el nombre indicado en `logo`. En la Fase 2 esta lista vendrá
 * de Cloudflare D1 y los logos de R2 (editable desde el admin).
 */
export const insurersSeed: Insurer[] = [
  { name: "Previsora", logo: "/aseguradoras/previsora.png" },
  { name: "Equidad", logo: "/aseguradoras/equidad.png" },
  { name: "HDI", logo: "/aseguradoras/hdi.png" },
  { name: "Allianz", logo: "/aseguradoras/allianz.png" },
  { name: "Solidaria", logo: "/aseguradoras/solidaria.png" },
  { name: "Mapfre", logo: "/aseguradoras/mapfre.png" },
  { name: "Colpatria", logo: "/aseguradoras/colpatria.png" },
  { name: "Suramericana", logo: "/aseguradoras/suramericana.png" },
  { name: "Seguros Bolívar", logo: "/aseguradoras/bolivar.png" },
  { name: "Seguros del Estado", logo: "/aseguradoras/estado.png" },
  { name: "Seguros Mundial", logo: "/aseguradoras/mundial.png" },
];
