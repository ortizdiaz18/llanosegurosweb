"use client";

import Link from "next/link";
import { Target, Eye, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoterGate } from "@/components/site/QuoterGate";
import { Reveal, WordHighlight, GlowOrbs } from "@/components/motion";
import { Eyebrow } from "@/components/site/Eyebrow";
import { DotGrid } from "@/components/site/DotGrid";
import { InsurersMarquee } from "@/components/site/InsurersMarquee";
import { getNosotrosContent } from "@/content";
import { resolveIcon } from "@/lib/insurance-icons";

export default function Nosotros() {
  const c = getNosotrosContent();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ec76f08fed_7a99fcbc8bdb0b95.png" alt="Colombian insurance brokers shaking hands in a modern professional office" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/85 via-[#1F2937]/70 to-[#0057B8]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/70 via-transparent to-transparent" />
        </div>
        <DotGrid className="z-[1]" opacity={0.4} />
        <GlowOrbs className="z-[1]" />
        <div className="container-wide relative z-10">
          <Reveal className="mb-5 flex justify-center">
            <Eyebrow label={c.heroEyebrow} icon={BookOpen} tone="dark" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-manrope font-extrabold text-5xl md:text-6xl text-white mb-5 leading-tight drop-shadow-md">
              <WordHighlight text={c.heroTitle} highlightClassName="text-[#4DA3FF] underline decoration-[#4DA3FF]/40 underline-offset-[8px] decoration-4" />
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/80 font-inter text-lg max-w-2xl mx-auto leading-relaxed">{c.heroSubtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#0057B8] text-sm font-inter font-semibold px-4 py-2 rounded-full mb-5">
                <BookOpen className="w-4 h-4" /> {c.founderBadge}
              </span>
              <h2 className="font-manrope font-extrabold text-3xl md:text-4xl text-[#1F2937] mb-5 leading-tight">{c.founderTitle}</h2>
              {c.founderParagraphs.map((p, i) => (
                <p key={i} className="text-gray-500 font-inter leading-relaxed mb-4 last:mb-0">{p}</p>
              ))}
            </div>
            <div className="relative">
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E6E9ED] p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#0057B8] rounded-2xl flex items-center justify-center shrink-0">
                    <span className="text-white font-manrope font-extrabold text-xl">LS</span>
                  </div>
                  <div>
                    <div className="font-manrope font-extrabold text-[#1F2937] text-xl">{c.founderCardTitle}</div>
                    <div className="text-[#0057B8] font-inter text-sm font-medium">{c.founderCardSubtitle}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {c.founderStats.map(({ val, label }) => (
                    <div key={label} className="bg-white rounded-xl border border-[#E6E9ED] p-4 text-center">
                      <div className="font-manrope font-extrabold text-2xl text-[#0057B8] mb-1">{val}</div>
                      <div className="text-gray-500 text-xs font-inter">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0057B8]/10 rounded-2xl z-0" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#1F2937]/10 rounded-2xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-extrabold text-4xl text-[#1F2937] mb-3">{c.mvTitle}</h2>
            <p className="text-gray-500 font-inter text-lg">{c.mvSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#E6E9ED] p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0057B8]" />
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#0057B8]" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-inter font-semibold text-[#0057B8] bg-blue-50 px-3 py-1 rounded-full mb-4">{c.missionBadge}</span>
              <h3 className="font-manrope font-bold text-xl text-[#1F2937] mb-4 leading-snug">{c.missionTitle}</h3>
              <p className="text-gray-500 font-inter leading-relaxed text-base italic border-l-4 border-[#0057B8] pl-4">&ldquo;{c.missionQuote}&rdquo;</p>
            </div>
            <div className="bg-[#1F2937] rounded-2xl border border-[#1F2937] p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-400" />
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-300" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-inter font-semibold text-blue-300 bg-white/10 px-3 py-1 rounded-full mb-4">{c.visionBadge}</span>
              <h3 className="font-manrope font-bold text-xl text-white mb-4 leading-snug">{c.visionTitle}</h3>
              <p className="text-white/70 font-inter leading-relaxed text-base italic border-l-4 border-blue-400 pl-4">&ldquo;{c.visionQuote}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-brand py-14">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {c.statsBand.map(({ icon, val, label }) => {
              const Icon = resolveIcon(icon);
              return (
                <div key={label}>
                  <Icon className="w-7 h-7 text-blue-200 mx-auto mb-2" />
                  <div className="font-manrope font-extrabold text-3xl text-white mb-1">{val}</div>
                  <div className="text-blue-200 text-sm font-inter">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-[#0057B8] text-sm font-inter font-semibold px-4 py-1.5 rounded-full mb-4">{c.valuesBadge}</span>
            <h2 className="font-manrope font-extrabold text-4xl text-[#1F2937] mb-3">{c.valuesTitle}</h2>
            <p className="text-gray-500 font-inter text-lg">{c.valuesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {c.values.map(({ icon, title, desc }) => {
              const Icon = resolveIcon(icon);
              return (
                <div key={title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E6E9ED] shadow-sm text-center hover:border-[#0057B8]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#0057B8]" />
                  </div>
                  <h3 className="font-manrope font-bold text-[#1F2937] mb-2 text-base">{title}</h3>
                  <p className="text-gray-500 text-sm font-inter leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-extrabold text-4xl text-[#1F2937] mb-3">{c.historyTitle}</h2>
            <p className="text-gray-500 font-inter text-lg">{c.historySubtitle}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            {c.milestones.map(({ year, event }, i) => (
              <div key={year} className="flex gap-5 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0057B8] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/20">
                    <span className="text-white text-xs font-bold font-inter">{year.slice(2)}</span>
                  </div>
                  {i < c.milestones.length - 1 && <div className="w-0.5 flex-1 bg-[#E6E9ED] mt-2" />}
                </div>
                <div className="pb-6 flex-1">
                  <div className="font-manrope font-bold text-[#0057B8] text-sm mb-1">{year}</div>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aseguradoras aliadas */}
      <InsurersMarquee />

      {/* CTA */}
      <section className="gradient-brand py-16">
        <div className="container-wide text-center">
          <h2 className="font-manrope font-extrabold text-4xl text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-blue-200 font-inter text-lg mb-8 max-w-xl mx-auto">{c.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoterGate><Link href="/cotizar">
              <Button className="bg-white text-[#0057B8] hover:bg-blue-50 rounded-xl px-8 h-12 text-base font-inter font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                {c.ctaPrimary} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link></QuoterGate>
            <Link href="/contacto">
              <Button variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white/10 rounded-xl px-8 h-12 text-base font-inter transition-all duration-300">
                {c.ctaSecondary} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
