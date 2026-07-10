import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Seguro de Auto",
  description: "Protege tu vehículo con la mejor cobertura. Cotiza tu seguro de auto gratis en 1 minuto.",
  path: "/seguros/auto",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
