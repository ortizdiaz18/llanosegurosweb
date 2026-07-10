"use client";

import Link from "next/link";
import {
  CheckCircle2, ChevronDown, ChevronRight, ArrowRight, Phone,
  Star, MessageSquare, ShieldCheck, Sparkles, UserCheck, BarChart3, CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { waUrl } from "@/lib/whatsapp";
import { Reveal, Stagger, StaggerItem, StatCounter, GlowOrbs, WordHighlight } from "@/components/motion";
import { Eyebrow } from "@/components/site/Eyebrow";
import { DotGrid } from "@/components/site/DotGrid";
import { FloatingShapes } from "@/components/site/FloatingShapes";
import { InsurersMarquee } from "@/components/site/InsurersMarquee";
import { getHomeContent } from "@/content";
import { resolveIcon } from "@/lib/insurance-icons";

const DARK_BG = "linear-gradient(160deg, #071023 0%, #0a1b3d 55%, #0d2a5c 100%)";
const HL_DARK = "text-[#4DA3FF] underline decoration-[#4DA3FF]/40 underline-offset-[8px] decoration-4";

export default function Index() {
  const home = getHomeContent();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            className="w-full h-full object-cover scale-110"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5be98b1163_f709feb41b2cb834.png"
            alt="professional insurance concept, modern city skyline at dusk, happy family in foreground"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #04122e 0%, rgba(0,87,184,0.55) 55%, rgba(4,18,46,0.85) 100%)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04122e] via-transparent to-[#04122e]/60" />
        </motion.div>
        <DotGrid className="z-[1]" opacity={0.5} />
        <GlowOrbs className="z-[1]" />

        <motion.div className="container-wide relative z-20 text-center py-28" style={{ opacity: heroOpacity }}>
          <div className="mx-auto max-w-4xl">
            <Reveal direction="up">
              <div className="mb-7 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-inter font-medium text-white backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4DA3FF]" />
                  {home.heroBadge}
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="font-manrope font-extrabold text-white leading-[1.06] text-5xl md:text-7xl mb-6 drop-shadow-xl">
                <WordHighlight text={home.heroTitle} highlightClassName="text-[#4DA3FF] underline decoration-[#4DA3FF]/40 underline-offset-[10px] decoration-[6px]" />
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg md:text-xl font-inter leading-relaxed text-white/80 mb-10">
                {home.heroSubtitle}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Button className="h-auto rounded-xl bg-[#0057B8] px-8 py-4 text-base font-inter font-semibold text-white shadow-2xl shadow-blue-900/50 transition-colors duration-200 hover:bg-[#004a9e]">
                      <Phone className="mr-2 h-5 w-5" /> {home.heroCtaPrimary}
                    </Button>
                  </motion.div>
                </a>
                <Link href="/nosotros">
                  <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Button variant="outline" className="h-auto rounded-xl border-white/40 bg-transparent px-8 py-4 text-base font-inter text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20">
                      {home.heroCtaSecondary} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </Reveal>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-28 left-8 z-20 hidden flex-col items-center gap-2 lg:flex">
          <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="h-4 w-4 text-white/60" />
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-white/10 backdrop-blur-md">
          <div className="container-wide py-5">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {home.stats.map((s) => {
                const Icon = resolveIcon(s.icon);
                return (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon className="h-5 w-5 text-[#4DA3FF]" />
                    </div>
                    <div>
                      <StatCounter value={s.value} className="block font-manrope text-xl font-extrabold leading-none text-white" />
                      <div className="mt-0.5 font-inter text-xs text-white/60">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── ASEGURADORAS ALIADAS ─────────────────────── */}
      <InsurersMarquee />

      {/* ── INSURANCE CATEGORIES ─────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <Reveal className="mb-14 text-center">
            <div className="mb-4 flex justify-center">
              <Eyebrow label={home.categoriesEyebrow} icon={ShieldCheck} />
            </div>
            <h2 className="mx-auto max-w-2xl font-manrope text-4xl font-extrabold text-[#1F2937] md:text-5xl">
              <WordHighlight text={home.categoriesTitle} />
            </h2>
            <p className="mt-4 font-inter text-lg text-gray-500">{home.categoriesSubtitle}</p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {home.categories.map((c) => {
              const Icon = resolveIcon(c.icon);
              return (
                <StaggerItem key={c.label}>
                  <Link href={c.href} className="block h-full">
                    <motion.div
                      className="group relative h-full overflow-hidden rounded-2xl border border-[#E6E9ED] bg-white p-6"
                      whileHover={{ y: -6, boxShadow: "0 20px 50px -12px rgba(0,87,184,0.18)", borderColor: "rgba(0,87,184,0.35)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-transparent transition-all duration-300 group-hover:from-blue-50/60" />
                      <motion.div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50" whileHover={{ scale: 1.12, backgroundColor: "#0057B8" }} transition={{ duration: 0.25 }}>
                        <Icon className="h-6 w-6 text-[#0057B8] transition-colors duration-200 group-hover:text-white" />
                      </motion.div>
                      <h3 className="mb-1 font-manrope text-lg font-bold text-[#1F2937]">Seguro de {c.label}</h3>
                      <p className="font-inter text-sm leading-relaxed text-gray-500">{c.desc}</p>
                      <div className="mt-4 flex items-center gap-1 font-inter text-sm font-medium text-[#0057B8]">
                        Ver más
                        <motion.span className="inline-flex" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                          <ChevronRight className="h-4 w-4" />
                        </motion.span>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── HOW IT WORKS (dark) ──────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: DARK_BG }}>
        <DotGrid opacity={0.6} />
        <GlowOrbs />
        <FloatingShapes />
        <div className="container-wide relative z-10">
          <Reveal className="mb-16 text-center">
            <div className="mb-4 flex justify-center">
              <Eyebrow label={home.howEyebrow} icon={UserCheck} tone="dark" />
            </div>
            <h2 className="mx-auto max-w-3xl font-manrope text-4xl font-extrabold text-white md:text-5xl">
              <WordHighlight text={home.howTitle} highlightClassName={HL_DARK} />
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-inter text-lg text-white/70">{home.howSubtitle}</p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
            {home.steps.map((s) => {
              const Icon = resolveIcon(s.icon);
              return (
                <StaggerItem key={s.num}>
                  <motion.div
                    className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                    whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(77,163,255,0.4)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0057B8] font-inter text-sm font-bold text-white shadow-lg shadow-blue-900/40">
                      {s.num}
                    </div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                      <Icon className="h-6 w-6 text-[#4DA3FF]" />
                    </div>
                    <h3 className="mb-2 font-manrope text-base font-bold text-white">{s.title}</h3>
                    <p className="font-inter text-sm leading-relaxed text-white/65">{s.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal className="mt-14" direction="up">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm md:flex-row md:p-10">
              <div className="max-w-xl">
                <h3 className="mb-2 font-manrope text-2xl font-extrabold text-white">{home.howCtaTitle}</h3>
                <p className="font-inter text-base leading-relaxed text-white/70">{home.howCtaDesc}</p>
              </div>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button className="h-11 rounded-xl bg-white px-7 font-inter font-semibold text-[#0057B8] shadow-lg transition-colors duration-200 hover:bg-blue-50">
                    <Phone className="mr-2 h-4 w-4" /> {home.howCtaButton}
                  </Button>
                </motion.div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <Reveal className="mb-14 text-center">
            <div className="mb-4 flex justify-center">
              <Eyebrow label={home.impactEyebrow} icon={BarChart3} />
            </div>
            <h2 className="mx-auto max-w-2xl font-manrope text-4xl font-extrabold text-[#1F2937] md:text-5xl">
              <WordHighlight text={home.impactTitle} />
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E6E9ED] bg-[#E6E9ED] lg:grid-cols-4" gap={0.1}>
            {home.stats.map((s) => {
              const Icon = resolveIcon(s.icon);
              return (
                <StaggerItem key={s.label}>
                  <div className="flex h-full flex-col gap-2 bg-white p-8">
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="h-5 w-5 text-[#0057B8]" />
                    </div>
                    <StatCounter value={s.value} className="font-manrope text-4xl font-extrabold text-[#1F2937] md:text-5xl" />
                    <span className="font-inter text-sm text-gray-500">{s.label}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── FINANCING BANNER ─────────────────────────── */}
      <Reveal>
        <section className="relative overflow-hidden py-10 gradient-brand">
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          />
          <div className="container-wide relative z-10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15">
                  <CreditCard className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 font-inter text-xs font-semibold text-white">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {home.financingBadge}
                  </div>
                  <h3 className="mb-1 font-manrope text-xl font-extrabold text-white md:text-2xl">{home.financingTitle}</h3>
                  <p className="max-w-lg font-inter text-sm leading-relaxed text-blue-100 md:text-base">{home.financingDesc}</p>
                </div>
              </div>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button className="h-12 whitespace-nowrap rounded-xl bg-white px-7 font-inter text-sm font-semibold text-[#0057B8] shadow-xl shadow-blue-900/30 transition-colors duration-200 hover:bg-blue-50">
                    <Phone className="mr-2 h-4 w-4" /> {home.financingButton}
                  </Button>
                </motion.div>
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <Reveal className="mb-14 text-center">
            <div className="mb-4 flex justify-center">
              <Eyebrow label={home.whyEyebrow} icon={Sparkles} />
            </div>
            <h2 className="mx-auto max-w-2xl font-manrope text-4xl font-extrabold text-[#1F2937] md:text-5xl">
              <WordHighlight text={home.whyTitle} />
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-inter text-lg text-gray-500">{home.whySubtitle}</p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
            {home.benefits.map((b, i) => {
              const Icon = resolveIcon(b.icon);
              return (
                <StaggerItem key={b.title}>
                  <motion.div
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6E9ED] bg-white shadow-sm"
                    whileHover={{ y: -8, boxShadow: "0 28px 56px -14px rgba(0,87,184,0.18)", borderColor: "rgba(0,87,184,0.25)" }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  >
                    <div className="h-1 w-full" style={{ background: i < 2 ? "linear-gradient(90deg, #003f8a, #0077e6)" : "linear-gradient(90deg, #1F2937, #374151)" }} />
                    <div className="flex flex-1 flex-col p-7">
                      <motion.div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50" whileHover={{ scale: 1.12, rotate: -4 }} transition={{ type: "spring", stiffness: 400 }}>
                        <Icon className="h-7 w-7 text-[#0057B8]" />
                      </motion.div>
                      <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 font-inter text-xs font-semibold text-[#0057B8]">
                        <CheckCircle2 className="h-3 w-3" /> {b.tag}
                      </span>
                      <h3 className="mb-3 font-manrope text-lg font-extrabold leading-snug text-[#1F2937]">{b.title}</h3>
                      <p className="flex-1 font-inter text-sm leading-relaxed text-gray-500">{b.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <Reveal className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <Eyebrow label={home.testimonialsEyebrow} icon={Star} />
            </div>
            <h2 className="font-manrope text-4xl font-extrabold text-[#1F2937] md:text-5xl">
              <WordHighlight text={home.testimonialsTitle} />
            </h2>
            <p className="mt-4 font-inter text-lg text-gray-500">{home.testimonialsSubtitle}</p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3" gap={0.1}>
            {home.testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  className="h-full rounded-2xl border border-[#E6E9ED] bg-[#F8FAFC] p-6"
                  whileHover={{ y: -5, boxShadow: "0 16px 40px -8px rgba(0,87,184,0.12)", borderColor: "rgba(0,87,184,0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="mb-5 font-inter text-sm leading-relaxed text-gray-600">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <div className="font-manrope text-sm font-semibold text-[#1F2937]">{t.name}</div>
                      <div className="font-inter text-xs text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── FAQ CTA BANNER ───────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#E6E9ED] bg-white p-8 md:flex-row md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <MessageSquare className="h-6 w-6 text-[#0057B8]" />
                </div>
                <div>
                  <h3 className="mb-1 font-manrope text-2xl font-extrabold text-[#1F2937]">{home.faqCtaTitle}</h3>
                  <p className="font-inter text-base text-gray-500">{home.faqCtaDesc}</p>
                </div>
              </div>
              <Link href="/faq" className="shrink-0">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button className="h-11 rounded-xl bg-[#0057B8] px-7 font-inter font-semibold text-white shadow-lg shadow-blue-900/15 transition-colors duration-200 hover:bg-[#004a9e]">
                    {home.faqCtaButton} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA (dark image) ───────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f0520035d8_bbcfcd16fb92eefa.png"
            alt="modern city skyline at dusk, warm golden hour light, professional insurance concept"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #04122e 0%, rgba(0,87,184,0.6) 55%, rgba(4,18,46,0.85) 100%)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04122e] via-transparent to-transparent" />
        </div>
        <DotGrid className="z-[1]" opacity={0.4} />
        <GlowOrbs className="z-[1]" />

        <div className="container-wide relative z-10 text-center">
          <Reveal>
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-inter text-sm font-medium text-white backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-[#4DA3FF]" /> {home.finalCtaBadge}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto max-w-3xl font-manrope text-4xl font-extrabold leading-tight text-white md:text-6xl">
              <WordHighlight text={home.finalCtaTitle} highlightClassName="text-[#4DA3FF] underline decoration-[#4DA3FF]/40 underline-offset-[10px] decoration-4" />
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 mb-10 max-w-xl font-inter text-lg leading-relaxed text-blue-100">{home.finalCtaSubtitle}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button className="h-12 rounded-xl bg-[#0057B8] px-8 text-base font-inter font-semibold text-white shadow-2xl shadow-blue-900/40 transition-colors duration-200 hover:bg-[#004a9e]">
                    <Phone className="mr-2 h-4 w-4" /> {home.finalCtaPrimary}
                  </Button>
                </motion.div>
              </a>
              <Link href="/contacto">
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button variant="outline" className="h-12 rounded-xl border-white/50 bg-transparent px-8 text-base font-inter text-white transition-colors duration-200 hover:bg-white/15">
                    {home.finalCtaSecondary} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
