import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "¿Cómo funciona?",
  description: "Cotiza, compara y contrata tu seguro en minutos con asesoría personalizada y sin costo.",
  path: "/como-funciona",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
