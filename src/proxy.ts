import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Usa SOLO la config edge-safe (sin bcrypt ni providers) para que el middleware
// corra en el runtime Edge. Cloudflare/OpenNext no soporta middleware en Node.js.
// La verificación de credenciales (bcrypt) vive en src/auth.ts y solo se usa en
// el servidor, nunca aquí.
export const { auth: proxy } = NextAuth(authConfig);

export const config = {
  // Protege todas las rutas del panel (la excepción de /admin/login está en
  // el callback `authorized` de src/auth.config.ts).
  matcher: ["/admin/:path*"],
};
