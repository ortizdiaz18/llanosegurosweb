import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return buildMetadata({
    title: "Artículo del blog",
    description:
      "Guías y consejos sobre seguros de Llano Seguros para proteger lo que construyes.",
    path: `/blog/${id}`,
  });
}

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
