import { insurersSeed } from "./data/insurers";
import { siteSettingsSeed } from "./data/site";
import { faqSeed } from "./data/faq";
import { blogArticlesSeed, blogCategoriesSeed } from "./data/blog";
import { insuranceSeed } from "./data/insurance";
import { homeSeed } from "./data/home";
import { nosotrosSeed } from "./data/nosotros";
import { comoFuncionaSeed } from "./data/como-funciona";
import { aseguradorasSeed } from "./data/aseguradoras";
import { terminosSeed, privacidadSeed } from "./data/legal";

export type {
  HomeContent,
  HomeStat,
  HomeStep,
  HomeCategory,
  HomeTestimonial,
  HomeBenefit,
  NosotrosContent,
  ValueItem,
  Milestone,
  StatBand,
  LabeledValue,
  ComoFuncionaContent,
  ProcessStep,
  Advantage,
  AseguradorasContent,
  LegalPage,
  LegalSection,
  SiteSettings,
  Insurer,
  SocialLinks,
  FaqItem,
  FaqCategory,
  BlogArticle,
  InsuranceType,
  InsuranceBenefit,
  InsuranceCoverage,
  InsuranceStat,
  IconName,
} from "./types";

/**
 * Acceso al contenido. Hoy devuelve datos locales (seed); en la Fase 2 estas
 * funciones leerán de Cloudflare D1 (Drizzle) manteniendo la misma firma.
 */
export function getInsurers() {
  return insurersSeed;
}

export function getSiteSettings() {
  return siteSettingsSeed;
}

/** Cantidad de aseguradoras aliadas (fuente única para todo el sitio). */
export const INSURERS_COUNT = insurersSeed.length;

export function getFaqCategories() {
  return faqSeed;
}

export function getBlogArticles() {
  return blogArticlesSeed;
}

export function getBlogCategories() {
  return blogCategoriesSeed;
}

export function getHomeContent() {
  return homeSeed;
}

export function getNosotrosContent() {
  return nosotrosSeed;
}

export function getComoFuncionaContent() {
  return comoFuncionaSeed;
}

export function getAseguradorasContent() {
  return aseguradorasSeed;
}

export function getTerminos() {
  return terminosSeed;
}

export function getPrivacidad() {
  return privacidadSeed;
}

export function getInsuranceTypes() {
  return Object.values(insuranceSeed);
}

export function getInsuranceType(slug: string | undefined) {
  return (slug && insuranceSeed[slug]) || insuranceSeed.auto;
}

/** Slugs de tipos de seguro con página dedicada / válidos. */
export const INSURANCE_SLUGS = Object.keys(insuranceSeed);
