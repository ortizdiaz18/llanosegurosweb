import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Instancia de Auth.js SOLO con la config edge-safe (sin bcrypt ni providers).
// Se usa exclusivamente en el proxy/middleware (runtime Edge). La verificación
// real de credenciales (bcrypt) vive en src/auth.ts, del lado servidor.
export const { auth } = NextAuth(authConfig);
