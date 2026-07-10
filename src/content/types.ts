/**
 * Modelo de contenido del sitio (fuente única de verdad).
 *
 * En la Fase 1 estos tipos se alimentan de datos "seed" locales
 * (src/content/data/*). En la Fase 2 la misma forma se leerá desde
 * Cloudflare D1 mediante Drizzle, sin cambiar los consumidores.
 */

export type SocialLinks = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
};

export type SiteSettings = {
  /** Marca y eslogan. */
  brandName: string;
  tagline: string;
  /** Contacto (editable por el admin). */
  whatsappNumber: string; // formato internacional sin "+"
  email: string;
  nationalLine: string;
  whatsappDisplay: string;
  address: string;
  city: string;
  hours: string;
  socials: SocialLinks;
};

export type Insurer = {
  /** Nombre visible de la aseguradora. */
  name: string;
  /** Ruta del logo en /public/aseguradoras/ (o URL de R2 en Fase 2). */
  logo: string;
};

/* ── FAQ ─────────────────────────────────────────── */
export type FaqItem = { q: string; a: string };
export type FaqCategory = { label: string; faqs: FaqItem[] };

/* ── Seguros ─────────────────────────────────────── */
/** Nombre de icono (lucide-react). Se resuelve a componente en la UI. */
export type IconName = string;
export type InsuranceBenefit = { text: string; icon: IconName };
export type InsuranceCoverage = { title: string; desc: string; icon: IconName };
export type InsuranceStat = { value: string; label: string };

export type InsuranceType = {
  /** Slug de la ruta: auto, moto, salud, vida, hogar, empresarial, cumplimiento. */
  slug: string;
  label: string;
  tagline: string;
  subtitle: string;
  icon: IconName;
  heroDesc: string;
  heroBadge: string;
  benefits: InsuranceBenefit[];
  coverages: InsuranceCoverage[];
  stats: InsuranceStat[];
  faqs: FaqItem[];
  img_url: string;
  heroImg_url: string;
};

/* ── Home ────────────────────────────────────────── */
export type HomeStat = { icon: IconName; value: string; label: string };
export type HomeStep = { num: number; icon: IconName; title: string; desc: string };
export type HomeCategory = { label: string; icon: IconName; href: string; desc: string };
export type HomeTestimonial = { name: string; role: string; avatar: string; text: string; rating: number };
export type HomeBenefit = { icon: IconName; title: string; desc: string; tag: string };

export type HomeContent = {
  heroBadge: string;
  /** Usa **texto** para resaltar. */
  heroTitle: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  stats: HomeStat[];
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoriesSubtitle: string;
  categories: HomeCategory[];
  howEyebrow: string;
  howTitle: string;
  howSubtitle: string;
  steps: HomeStep[];
  howCtaTitle: string;
  howCtaDesc: string;
  howCtaButton: string;
  impactEyebrow: string;
  impactTitle: string;
  financingBadge: string;
  financingTitle: string;
  financingDesc: string;
  financingButton: string;
  whyEyebrow: string;
  whyTitle: string;
  whySubtitle: string;
  benefits: HomeBenefit[];
  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: HomeTestimonial[];
  faqCtaTitle: string;
  faqCtaDesc: string;
  faqCtaButton: string;
  finalCtaBadge: string;
  finalCtaTitle: string;
  finalCtaSubtitle: string;
  finalCtaPrimary: string;
  finalCtaSecondary: string;
};

/* ── Nosotros ────────────────────────────────────── */
export type ValueItem = { icon: IconName; title: string; desc: string };
export type Milestone = { year: string; event: string };
export type StatBand = { icon: IconName; val: string; label: string };
export type LabeledValue = { val: string; label: string };

export type NosotrosContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  founderBadge: string;
  founderTitle: string;
  founderParagraphs: string[];
  founderCardTitle: string;
  founderCardSubtitle: string;
  founderStats: LabeledValue[];
  mvTitle: string;
  mvSubtitle: string;
  missionBadge: string;
  missionTitle: string;
  missionQuote: string;
  visionBadge: string;
  visionTitle: string;
  visionQuote: string;
  statsBand: StatBand[];
  valuesBadge: string;
  valuesTitle: string;
  valuesSubtitle: string;
  values: ValueItem[];
  historyTitle: string;
  historySubtitle: string;
  milestones: Milestone[];
  ctaTitle: string;
  ctaDesc: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

/* ── Cómo funciona ───────────────────────────────── */
export type ProcessStep = { num: number; icon: IconName; title: string; desc: string; detail: string };
export type Advantage = { icon: IconName; title: string; desc: string };

export type ComoFuncionaContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  stepsTitle: string;
  stepsSubtitle: string;
  steps: ProcessStep[];
  financingBadge: string;
  financingTitle: string;
  financingDesc: string;
  financingItems: string[];
  stats: LabeledValue[];
  advantagesTitle: string;
  advantagesSubtitle: string;
  advantages: Advantage[];
  testimonialQuote: string;
  testimonialName: string;
  testimonialRole: string;
  testimonialAvatar: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

/* ── Aseguradoras (página) ───────────────────────── */
export type AseguradorasContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  benefits: string[];
  gridTitle: string;
  gridSubtitle: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
};

/* ── Páginas legales ─────────────────────────────── */
export type LegalSection = { title: string; content: string };
export type LegalPage = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

/* ── Blog ────────────────────────────────────────── */
export type BlogArticle = {
  id: string;
  img_url: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
};
