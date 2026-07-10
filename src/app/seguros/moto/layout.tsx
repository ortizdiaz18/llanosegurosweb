import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Seguro de Moto",
  description: "Seguro integral para tu motocicleta: cobertura amplia, precios competitivos y asesoría personalizada.",
  path: "/seguros/moto",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
