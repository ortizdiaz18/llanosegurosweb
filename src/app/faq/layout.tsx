import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Preguntas frecuentes",
  description: "Resolvemos tus dudas sobre seguros, coberturas, siniestros y cómo cotizar con Llano Seguros.",
  path: "/faq",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
