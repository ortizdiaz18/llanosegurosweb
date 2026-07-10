"use client";

import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { WordHighlight } from "@/components/motion/WordHighlight";
import { Eyebrow } from "@/components/site/Eyebrow";
import { getInsurers, INSURERS_COUNT as CONTENT_INSURERS_COUNT } from "@/content";
import type { Insurer } from "@/content";

// La lista y el conteo vienen de la capa de contenido (fuente única).
// Se re-exportan aquí para mantener la API previa del resto del sitio.
export type { Insurer };
export const insurers: Insurer[] = getInsurers();
export const INSURERS_COUNT = CONTENT_INSURERS_COUNT;

function InsurerCard({ item }: { item: Insurer }) {
  return (
    <div className="group mx-3 flex h-20 shrink-0 items-center justify-center rounded-2xl border border-[#E6E9ED] bg-white px-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0057B8]/30 hover:shadow-lg hover:shadow-blue-900/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.logo}
        alt={item.name}
        title={item.name}
        className="h-10 w-auto max-w-[150px] object-contain"
      />
    </div>
  );
}

/**
 * Banner de aseguradoras con marquee continuo en dos filas (direcciones
 * opuestas) y máscaras de degradado a los lados, al estilo premium de Veritran.
 */
export function InsurersMarquee() {
  const rowA = insurers;
  const rowB = [...insurers].reverse();

  return (
    <section className="overflow-hidden border-y border-[#E6E9ED] bg-white py-14">
      <div className="container-wide">
        <Reveal className="mb-9 text-center">
          <div className="mb-4 flex justify-center">
            <Eyebrow label="Nuestro respaldo" icon={ShieldCheck} />
          </div>
          <h2 className="mx-auto max-w-2xl font-manrope text-3xl font-extrabold text-[#1F2937] md:text-4xl">
            <WordHighlight text="Trabajamos con las **mejores aseguradoras** del país" />
          </h2>
          <p className="mt-3 font-inter text-gray-500">
            Comparamos entre las compañías líderes para conseguirte la mejor cobertura al mejor precio.
          </p>
        </Reveal>
      </div>

      <div className="relative space-y-4">
        {/* máscaras laterales */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Fila A */}
        <div className="flex w-max" style={{ animation: "marquee-left 40s linear infinite" }}>
          {[...rowA, ...rowA].map((item, i) => (
            <InsurerCard key={`a-${i}`} item={item} />
          ))}
        </div>
        {/* Fila B (sentido opuesto) */}
        <div className="flex w-max" style={{ animation: "marquee-right 40s linear infinite" }}>
          {[...rowB, ...rowB].map((item, i) => (
            <InsurerCard key={`b-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsurersMarquee;
