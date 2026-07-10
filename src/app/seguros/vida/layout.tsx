import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Seguro de Vida",
  description: "Protege el bienestar económico de tu familia con planes de vida flexibles y accesibles.",
  path: "/seguros/vida",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
