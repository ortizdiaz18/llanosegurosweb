import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Configuración del adaptador OpenNext para Cloudflare Workers.
// Por ahora usa los valores por defecto (sin caché incremental externo).
// Cuando migremos el /admin a D1/R2 podremos añadir aquí los overrides.
export default defineCloudflareConfig({});
