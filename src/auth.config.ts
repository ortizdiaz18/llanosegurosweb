import type { NextAuthConfig } from "next-auth";

/**
 * Configuración base de Auth.js compartida por el middleware (edge) y el
 * servidor. No incluye proveedores con dependencias de Node (bcrypt), que
 * viven en src/auth.ts para no cargarse en el runtime edge del middleware.
 */
export const authConfig = {
  trustHost: true,
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
  providers: [],
  callbacks: {
    authorized({ auth: session, request }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
        return !!session?.user;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

export default authConfig;
