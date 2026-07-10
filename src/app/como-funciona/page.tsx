"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoterGate } from "@/components/site/QuoterGate";
import { Reveal, WordHighlight, GlowOrbs, Stagger, StaggerItem } from "@/components/motion";
import { Eyebrow } from "@/components/site/Eyebrow";
import { DotGrid } from "@/components/site/DotGrid";
import { getComoFuncionaContent } from "@/content";
import { resolveIcon } from "@/lib/insurance-icons";

export default function ComoFunciona() {
  const c = getComoFuncionaContent();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f2d498aeaa_f638941ddb6351b6.png" alt="business strategy process workflow" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <DotGrid className="z-[1]" opacity={0.4} />
        <GlowOrbs className="z-[1]" />
        <div className="container-wide relative z-10">
          <Reveal className="mb-5 flex justify-center"><Eyebrow label={c.heroEyebrow} icon={Users} tone="dark" /></Reveal>
          <h1 className="font-manrope font-extrabold text-5xl md:text-6xl text-white mb-5 leading-tight drop-shadow-md">
            <WordHighlight text={c.heroTitle} highlightClassName="text-[#4DA3FF] underline decoration-[#4DA3FF]/40 underline-offset-[8px] decoration-4" />
          </h1>
          <p className="text-white/80 font-inter text-xl max-w-xl mx-auto leading-relaxed">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-manrope font-extrabold text-4xl text-[#1F2937] mb-3">{c.stepsTitle}</h2>
            <p className="text-gray-500 font-inter text-lg max-w-lg mx-auto">{c.stepsSubtitle}</p>
          </div>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" gap={0.1}>
            {c.steps.map((s) => {
              const Icon = resolveIcon(s.icon);
              return (
                <StaggerItem key={s.num}>
                  <div className="group relative flex h-full flex-col rounded-2xl border border-[#E6E9ED] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0057B8]/25 hover:shadow-lg hover:shadow-blue-900/5">
                    <div className="relative mb-5 w-14">
                      <div className="w-14 h-14 bg-blue-50 text-[#0057B8] rounded-2xl flex items-center justify-center transition-colors duration-200 group-hover:bg-[#0057B8] group-hover:text-white">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0057B8] text-white text-xs font-bold flex items-center justify-center font-inter shadow-md shadow-blue-900/20">
                        {s.num}
                      </div>
                    </div>
                    <h3 className="font-manrope font-bold text-lg text-[#1F2937] leading-snug mb-3 min-h-[3.5rem]">{s.title}</h3>
                    <p className="text-gray-500 font-inter text-sm leading-relaxed flex-1">{s.desc}</p>
                    <p className="mt-4 pt-4 border-t border-[#E6E9ED] text-[#0057B8] font-inter text-xs font-semibold flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" /> {s.detail}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Financing highlight */}
      <section className="gradient-brand py-14">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/15 text-blue-100 text-sm font-inter px-4 py-1.5 rounded-full mb-4">
                <CreditCard className="w-4 h-4" /> {c.financingBadge}
              </div>
              <h2 className="font-manrope font-extrabold text-3xl md:text-4xl text-white mb-3">{c.financingTitle}</h2>
              <p className="text-blue-100 font-inter text-base leading-relaxed">{c.financingDesc}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full md:w-auto md:min-w-[280px]">
              {c.financingItems.map((text) => (
                <div key={text} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span className="text-white font-inter text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F8FAFC] py-14 border-y border-[#E6E9ED]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {c.stats.map(({ val, label }) => (
              <div key={label}>
                <div className="font-manrope font-extrabold text-4xl text-[#0057B8] mb-1">{val}</div>
                <div className="text-gray-500 text-sm font-inter">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-extrabold text-4xl text-[#1F2937] mb-3">{c.advantagesTitle}</h2>
            <p className="text-gray-500 font-inter text-lg max-w-lg mx-auto">{c.advantagesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.advantages.map(({ icon, title, desc }) => {
              const Icon = resolveIcon(icon);
              return (
                <div key={title} className="bg-[#F8FAFC] border border-[#E6E9ED] rounded-2xl p-6 flex gap-4 hover:border-[#0057B8] hover:shadow-md transition-all duration-200">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#0057B8]" />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-[#1F2937] mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm font-inter leading-relaxed">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="bg-[#F8FAFC] py-14 border-t border-[#E6E9ED]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E6E9ED] shadow-sm p-8 md:p-12 text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <blockquote className="font-manrope font-semibold text-xl md:text-2xl text-[#1F2937] leading-relaxed mb-6">
              &ldquo;{c.testimonialQuote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.testimonialAvatar} alt={c.testimonialName} className="w-10 h-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="font-inter font-semibold text-[#1F2937] text-sm">{c.testimonialName}</p>
                <p className="text-gray-400 text-xs font-inter">{c.testimonialRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-brand py-16">
        <div className="container-wide text-center">
          <h2 className="font-manrope font-extrabold text-4xl text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-blue-200 font-inter text-lg mb-8 max-w-md mx-auto">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button className="bg-white text-[#0057B8] hover:bg-blue-50 rounded-xl px-9 h-12 text-base font-inter font-semibold shadow-lg">
                {c.ctaPrimary} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <QuoterGate><Link href="/cotizar">
              <Button variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 rounded-xl px-9 h-12 text-base font-inter font-semibold">
                {c.ctaSecondary}
              </Button>
            </Link></QuoterGate>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
