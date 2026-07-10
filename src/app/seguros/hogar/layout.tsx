import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Seguro de Hogar",
  description: "Protege tu vivienda ante incendio, robo, daños y responsabilidad civil con asistencia 24/7.",
  path: "/seguros/hogar",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
