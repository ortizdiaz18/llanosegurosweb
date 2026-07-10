"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ENABLE_QUOTER } from "@/lib/flags";
import { waUrl } from "@/lib/whatsapp";
import { Reveal, WordHighlight, GlowOrbs } from "@/components/motion";
import { Eyebrow } from "@/components/site/Eyebrow";
import { DotGrid } from "@/components/site/DotGrid";
import { insurers } from "@/components/site/InsurersMarquee";
import { getAseguradorasContent } from "@/content";

export default function Aseguradoras() {
  const c = getAseguradorasContent();
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1F2937] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#0057B8] rounded-full blur-3xl" />
        </div>
        <DotGrid opacity={0.35} />
        <GlowOrbs />
        <div className="container-wide relative">
          <Reveal className="mb-5 flex justify-center"><Eyebrow label={c.heroEyebrow} icon={Award} tone="dark" /></Reveal>
          <h1 className="font-manrope font-extrabold text-5xl text-white mb-4"><WordHighlight text={c.heroTitle} highlightClassName="text-[#4DA3FF] underline decoration-[#4DA3FF]/40 underline-offset-[8px] decoration-4" /></h1>
          <p className="text-gray-300 font-inter text-lg max-w-xl mx-auto">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="gradient-brand py-12">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {c.benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-white text-sm font-inter">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-extrabold text-4xl text-[#1F2937] mb-3">{c.gridTitle}</h2>
            <p className="text-gray-500 font-inter text-lg">{c.gridSubtitle}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {insurers.map(({ name, logo }) => (
              <div
                key={name}
                className="group flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-[#E6E9ED] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#0057B8]/30 hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt={name}
                  title={name}
                  className="h-12 w-auto max-w-[150px] object-contain"
                />
                <span className="text-center font-inter text-xs font-medium text-gray-500">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-brand py-16">
        <div className="container-wide text-center">
          <h2 className="font-manrope font-extrabold text-4xl text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-blue-200 font-inter text-lg mb-8">{c.ctaDesc}</p>
          {ENABLE_QUOTER ? (<Link href="/cotizar">
            <Button className="bg-[#10B981] hover:bg-[#059669] text-white rounded-xl px-8 h-12 text-base font-inter font-semibold">
              {c.ctaButton} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>) : (<a href={waUrl()} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#10B981] hover:bg-[#059669] text-white rounded-xl px-8 h-12 text-base font-inter font-semibold">
              {c.ctaButton} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>)}
        </div>
      </section>

      <Footer />
    </div>
  );
}