import { promises as fs } from "node:fs";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

import type {
  SiteSettings, Insurer, FaqCategory, BlogArticle, InsuranceType,
  HomeContent, NosotrosContent, ComoFuncionaContent, AseguradorasContent, LegalPage,
} from "@/content/types";

import { siteSettingsSeed } from "@/content/data/site";
import { insurersSeed } from "@/content/data/insurers";
import { faqSeed } from "@/content/data/faq";
import { blogArticlesSeed } from "@/content/data/blog";
import { insuranceSeed } from "@/content/data/insurance";
import { homeSeed } from "@/content/data/home";
import { nosotrosSeed } from "@/content/data/nosotros";
import { comoFuncionaSeed } from "@/content/data/como-funciona";
import { aseguradorasSeed } from "@/content/data/aseguradoras";
import { terminosSeed, privacidadSeed } from "@/content/data/legal";

/**
 * Almacén de contenido del sitio. Hoy persiste en un archivo JSON local
 * (.data/content.json); en la Fase Cloudflare este mismo modelo se moverá a
 * D1 con Drizzle (src/db/schema.ts) sin cambiar los consumidores del admin.
 *
 * Solo servidor (usa fs). Nunca importar desde componentes "use client".
 */
export type ContentStore = {
  site: SiteSettings;
  insurers: Insurer[];
  faq: FaqCategory[];
  blog: BlogArticle[];
  insurance: Record<string, InsuranceType>;
  home: HomeContent;
  nosotros: NosotrosContent;
  comoFunciona: ComoFuncionaContent;
  aseguradoras: AseguradorasContent;
  terminos: LegalPage;
  privacidad: LegalPage;
};

const STORE_PATH = path.join(process.cwd(), ".data", "content.json");

function defaults(): ContentStore {
  return {
    site: siteSettingsSeed,
    insurers: insurersSeed,
    faq: faqSeed,
    blog: blogArticlesSeed,
    insurance: insuranceSeed,
    home: homeSeed,
    nosotros: nosotrosSeed,
    comoFunciona: comoFuncionaSeed,
    aseguradoras: aseguradorasSeed,
    terminos: terminosSeed,
    privacidad: privacidadSeed,
  };
}

/** Lee el almacén de forma síncrona (seeds + overrides del JSON si existe). */
export function readStore(): ContentStore {
  const base = defaults();
  try {
    if (existsSync(STORE_PATH)) {
      const raw = readFileSync(STORE_PATH, "utf8");
      const saved = JSON.parse(raw) as Partial<ContentStore>;
      return { ...base, ...saved };
    }
  } catch {
    // Si algo falla, usamos los valores por defecto (seeds).
  }
  return base;
}

/** Guarda un parche del almacén (mezcla superficial) y devuelve el resultado. */
export async function writeStore(patch: Partial<ContentStore>): Promise<ContentStore> {
  const current = readStore();
  const next = { ...current, ...patch };
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(next, null, 2), "utf8");
  return next;
}
