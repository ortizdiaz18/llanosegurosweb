import type { Config } from "drizzle-kit";

/**
 * Configuración de Drizzle Kit para generar migraciones sobre Cloudflare D1.
 * En la Fase 2 se conecta con las credenciales de Cloudflare (wrangler).
 */
export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "sqlite",
  driver: "d1-http",
} satisfies Config;
