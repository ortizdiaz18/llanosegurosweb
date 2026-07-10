import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Aseguradoras aliadas",
  description: "Trabajamos con las mejores aseguradoras del país para ofrecerte la cobertura ideal al mejor precio.",
  path: "/aseguradoras",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
