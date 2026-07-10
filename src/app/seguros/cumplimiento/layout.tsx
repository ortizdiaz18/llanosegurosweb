import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Seguro de Cumplimiento",
  description: "Garantiza tus contratos y obligaciones con respaldo para licitaciones públicas y privadas.",
  path: "/seguros/cumplimiento",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
