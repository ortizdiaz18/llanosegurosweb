# Llano Seguros — Next.js

Migración del export de UXPilot (Vite + React Router) a **Next.js 16.2 (App Router)**.

## Requisitos
- Node 18.18+ (recomendado 20/22)
- npm

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de producción:

```bash
npm run build
npm run start
```

> Nota: el proyecto usa `.npmrc` con `legacy-peer-deps=true` porque algunas
> librerías (shadcn/ui, next-themes, vaul) aún declaran React 18 en sus peer
> deps, mientras que Next 16 requiere React 19. Es la configuración estándar
> para shadcn/ui sobre React 19 y no afecta el runtime.

## Variables de entorno (`.env`)

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp para todos los CTA (formato internacional sin `+`). Actual: `573106224956`. |
| `NEXT_PUBLIC_ENABLE_LOGIN` | Feature flag del botón "Ingresar"/login. `false` mientras no haya autenticación. |

## Estructura

```
src/
  app/                 # App Router (una carpeta por ruta)
    layout.tsx         # <html>/<body>, fuentes (next/font), <Providers>
    providers.tsx      # React Query + Tooltip + Toasters (client)
    page.tsx           # Home
    seguros/
      [type]/page.tsx  # ruta dinámica (fallback InsurancePage)
      auto|moto|salud|vida|hogar|empresarial|cumplimiento/page.tsx
    blog/[id]/page.tsx
    (contacto, cotizar, nosotros, aseguradoras, faq, como-funciona,
     terminos, privacidad)/page.tsx
    not-found.tsx      # 404
  components/
    Navbar.tsx         # next/link + usePathname + flag ENABLE_LOGIN
    Footer.tsx
    WhatsAppLink.tsx   # <a> reutilizable a wa.me
    ui/                # shadcn/ui (todos "use client")
  hooks/
  lib/
    utils.ts           # cn()
    whatsapp.ts        # waUrl(message?) -> URL wa.me
    flags.ts           # ENABLE_LOGIN
  data/  services/     # reservados para datos/API futuros
```

## Decisiones de migración

- **Routing:** React Router → App Router (sistema de archivos). `Link to=` →
  `next/link href=`, `useNavigate` → helper WhatsApp, `useLocation` →
  `usePathname`, `useParams` → `useParams` de `next/navigation`.
- **Client/Server:** las páginas interactivas (framer-motion, estado, formularios)
  y los componentes `ui/` llevan `"use client"`. `layout` y `not-found` son
  del servidor salvo lo estrictamente necesario.
- **WhatsApp en vez de backend:** todos los CTA y los formularios (Contacto,
  Cotizar) construyen un mensaje y abren WhatsApp con `waUrl()`. No hay envío a API.
- **Sin login/auth:** `Login`, `Portal`, `/recuperar` y `/gracias` no se migraron.
  El botón "Ingresar" se controla con `NEXT_PUBLIC_ENABLE_LOGIN`.
- **Fuentes:** Google Fonts (Manrope + Inter) vía `next/font` con variables CSS.
- **Imágenes:** se mantienen con `<img>` (primera pasada) apuntando a las mismas URLs.

## Estado de verificación

- `npx tsc --noEmit`: **sin errores** (tipos, imports y rutas validados).
- `npm run build` / `npm run dev`: ejecutar en tu máquina (no se pudieron correr
  en el entorno de migración por una limitación nativa del sandbox).
