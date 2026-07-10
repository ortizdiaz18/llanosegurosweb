import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de privacidad",
  description: "Política de privacidad y tratamiento de datos personales de Llano Seguros.",
  path: "/privacidad",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
