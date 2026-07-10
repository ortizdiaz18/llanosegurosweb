import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contáctanos",
  description: "Habla con un asesor de Llano Seguros por WhatsApp, teléfono o correo. Respuesta inmediata.",
  path: "/contacto",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
