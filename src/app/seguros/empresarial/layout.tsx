import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Seguro Empresarial",
  description: "Soluciones de seguros para empresas de todos los tamaños: activos, empleados y responsabilidades.",
  path: "/seguros/empresarial",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
