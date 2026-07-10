import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Llano Seguros – Protegemos lo que construyes",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Compara y cotiza seguros de auto, moto, salud, vida, hogar, empresarial y cumplimiento con asesoría personalizada y sin costo.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "es_CO",
    url: SITE_URL,
    title: "Llano Seguros – Protegemos lo que construyes",
    description:
      "Compara y cotiza seguros con asesoría personalizada y sin costo. Protegemos lo que construyes.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Llano Seguros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Llano Seguros – Protegemos lo que construyes",
    description:
      "Compara y cotiza seguros con asesoría personalizada y sin costo.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
