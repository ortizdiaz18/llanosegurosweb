/**
 * Feature flags controlados por variables de entorno.
 * NEXT_PUBLIC_* para que estén disponibles en el navegador.
 */

/** Muestra el botón "Ingresar" / login. Sin auth todavía => false por defecto. */
export const ENABLE_LOGIN = process.env.NEXT_PUBLIC_ENABLE_LOGIN === "true";

/** Habilita el cotizador online (/cotizar) y todos sus accesos. Aún no => false. */
export const ENABLE_QUOTER = process.env.NEXT_PUBLIC_ENABLE_QUOTER === "true";
