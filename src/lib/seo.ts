import type { Metadata } from "next";

/** URL pública del sitio (para OG absolutas y canonical). Configurable por env. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.llanoseguros.com";

export const SITE_NAME = "Llano Seguros";

/** Imagen de compartir por defecto (reutiliza un asset existente). */
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_52f15e1feb_f1ebb57deffe60ea.png";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Ruta relativa, ej: "/seguros/auto". Por defecto "/". */
  path?: string;
  /** Imagen OG absoluta o relativa; por defecto DEFAULT_OG_IMAGE. */
  image?: string;
};

/**
 * Construye el objeto Metadata de Next con OpenGraph + Twitter Card coherentes.
 * Uso: `export const metadata = buildMetadata({ title, description, path })`.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    // absolute evita que el template "%s | Llano Seguros" del layout raíz duplique el sufijo
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "es_CO",
      url,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
