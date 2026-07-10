import { redirect } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { ENABLE_QUOTER } from "@/lib/flags";

export const metadata = buildMetadata({
  title: "Cotiza tu seguro",
  description: "Completa el cotizador y recibe la mejor opción para tu seguro por WhatsApp, gratis y sin compromiso.",
  path: "/cotizar",
});

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  // El cotizador online aún no está disponible: se bloquea el acceso a la ruta.
  if (!ENABLE_QUOTER) redirect("/contacto");
  return children;
}
