import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nosotros",
  description: "Conoce a Llano Seguros: quiénes somos, nuestra misión y por qué somos tu aliado para proteger lo que más importa.",
  path: "/nosotros",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
