import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Seguro de Salud",
  description: "Accede a la mejor red de clínicas y médicos del país con planes individuales y familiares.",
  path: "/seguros/salud",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
