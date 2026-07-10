import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import type {
  SocialLinks,
  InsuranceBenefit,
  InsuranceCoverage,
  InsuranceStat,
  FaqItem,
} from "@/content/types";

/**
 * Esquema de la base de datos (Cloudflare D1 / SQLite) con Drizzle ORM.
 * Refleja el modelo de contenido de src/content. En la Fase 2 se generan
 * migraciones (drizzle-kit) y se hace seed con los datos locales actuales.
 */

/* ── Usuarios del admin ──────────────────────────── */
export const adminUsers = sqliteTable("admin_users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name"),
  role: text("role").notNull().default("admin"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

/* ── Ajustes del sitio (fila única) ──────────────── */
export const siteSettings = sqliteTable("site_settings", {
  id: text("id").primaryKey().default("default"),
  brandName: text("brand_name").notNull(),
  tagline: text("tagline").notNull(),
  whatsappNumber: text("whatsapp_number").notNull(),
  whatsappDisplay: text("whatsapp_display").notNull(),
  email: text("email").notNull(),
  nationalLine: text("national_line").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  hours: text("hours").notNull(),
  socials: text("socials", { mode: "json" }).$type<SocialLinks>().notNull(),
});

/* ── Aseguradoras ────────────────────────────────── */
export const insurers = sqliteTable("insurers", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  logo: text("logo").notNull(),
  sort: integer("sort").notNull().default(0),
});

/* ── FAQ ─────────────────────────────────────────── */
export const faqCategories = sqliteTable("faq_categories", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
  sort: integer("sort").notNull().default(0),
});

export const faqItems = sqliteTable("faq_items", {
  id: text("id").primaryKey(),
  categoryId: text("category_id")
    .notNull()
    .references(() => faqCategories.id, { onDelete: "cascade" }),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  sort: integer("sort").notNull().default(0),
});

/* ── Blog ────────────────────────────────────────── */
export const blogArticles = sqliteTable("blog_articles", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  category: text("category").notNull(),
  date: text("date").notNull(),
  readTime: text("read_time").notNull(),
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  imgUrl: text("img_url").notNull(),
  sort: integer("sort").notNull().default(0),
});

/* ── Tipos de seguro ─────────────────────────────── */
export const insuranceTypes = sqliteTable("insurance_types", {
  slug: text("slug").primaryKey(),
  label: text("label").notNull(),
  tagline: text("tagline").notNull(),
  subtitle: text("subtitle").notNull(),
  icon: text("icon").notNull(),
  heroDesc: text("hero_desc").notNull(),
  heroBadge: text("hero_badge").notNull(),
  imgUrl: text("img_url").notNull(),
  heroImgUrl: text("hero_img_url").notNull(),
  benefits: text("benefits", { mode: "json" }).$type<InsuranceBenefit[]>().notNull(),
  coverages: text("coverages", { mode: "json" }).$type<InsuranceCoverage[]>().notNull(),
  stats: text("stats", { mode: "json" }).$type<InsuranceStat[]>().notNull(),
  faqs: text("faqs", { mode: "json" }).$type<FaqItem[]>().notNull(),
  sort: integer("sort").notNull().default(0),
});
