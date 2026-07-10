import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

const TITLES: Record<string, { title: string; description: string }> = {
  auto: { title: "Seguro de Auto", description: "Protege tu vehículo con la mejor cobertura. Cotiza gratis en 1 minuto." },
  moto: { title: "Seguro de Moto", description: "Seguro integral para tu motocicleta con cobertura amplia y asesoría personalizada." },
  salud: { title: "Seguro de Salud", description: "Accede a la mejor red de clínicas del país con planes individuales y familiares." },
  vida: { title: "Seguro de Vida", description: "Protege el bienestar económico de tu familia con planes flexibles y accesibles." },
  hogar: { title: "Seguro de Hogar", description: "Protege tu vivienda ante incendio, robo y daños con asistencia 24/7." },
  empresarial: { title: "Seguro Empresarial", description: "Soluciones de seguros para empresas: activos, empleados y responsabilidades." },
  cumplimiento: { title: "Seguro de Cumplimiento", description: "Respaldo para contratos y licitaciones públicas y privadas." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const data = TITLES[type] ?? {
    title: "Seguros",
    description: "Compara y cotiza tu seguro con Llano Seguros: asesoría personalizada y sin costo.",
  };
  return buildMetadata({
    title: data.title,
    description: data.description,
    path: `/seguros/${type}`,
  });
}

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
