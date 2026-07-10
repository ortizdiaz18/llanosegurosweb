import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Guías, consejos y noticias sobre seguros para tomar mejores decisiones y proteger lo que construyes.",
  path: "/blog",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
