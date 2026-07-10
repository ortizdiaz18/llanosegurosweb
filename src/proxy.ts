export { auth as proxy } from "@/auth";

export const config = {
  // Protege todas las rutas del panel (la excepción de /admin/login está en
  // el callback `authorized` de src/auth.config.ts).
  matcher: ["/admin/:path*"],
};
