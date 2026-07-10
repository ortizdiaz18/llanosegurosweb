// Re-export nombrado (forma que el análisis estático de Next 16 reconoce como
// función). La instancia es edge-safe: vive en src/auth.edge.ts y no carga
// bcrypt, así corre en el runtime Edge que exige Cloudflare/OpenNext.
export { auth as proxy } from "@/auth.edge";

export const config = {
  // Protege todas las rutas del panel (la excepción de /admin/login está en
  // el callback `authorized` de src/auth.config.ts).
  matcher: ["/admin/:path*"],
};
