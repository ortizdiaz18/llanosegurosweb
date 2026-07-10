import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

/**
 * Autenticación del panel de administración (Auth.js v5).
 * Credenciales del admin desde variables de entorno:
 *   ADMIN_EMAIL, ADMIN_PASSWORD_HASH (hash bcrypt), AUTH_SECRET.
 * En la Fase Cloudflare los usuarios pueden moverse a la tabla admin_users (D1).
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: (credentials) => {
        const email = String(credentials?.email ?? "").trim().toLowerCase();
        const password = String(credentials?.password ?? "");
        const adminEmail = (process.env.ADMIN_EMAIL ?? "").trim().toLowerCase();
        const hash = process.env.ADMIN_PASSWORD_HASH ?? "";
        if (!adminEmail || !hash) return null;
        if (email !== adminEmail) return null;
        if (!bcrypt.compareSync(password, hash)) return null;
        return { id: "admin", email: adminEmail, name: "Administrador" };
      },
    }),
  ],
});
