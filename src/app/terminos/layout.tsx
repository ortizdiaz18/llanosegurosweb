import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso de los servicios de Llano Seguros.",
  path: "/terminos",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
