"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  /** Valor a mostrar. La primera cifra encontrada se anima desde 0. Ej: "+15.000", "98%", "<24h", "24/7". */
  value: string;
  className?: string;
  /** Duración de la animación en segundos. */
  duration?: number;
};

// Separa: prefijo (no dígitos) + número (con separadores) + sufijo
const NUM_RE = /^([^\d]*)([\d.,]+)(.*)$/;

function formatWithSeparators(n: number, sample: string): string {
  // Si la muestra usaba separador de miles ".", replicamos formato es-CO
  if (/[.,]/.test(sample)) {
    return new Intl.NumberFormat("es-CO").format(n);
  }
  return String(n);
}

/**
 * Muestra una estadística cuyo número anima de 0 al valor final cuando entra
 * en el viewport. Conserva prefijos/sufijos (+, %, <, texto) y el formato de miles.
 * Respeta prefers-reduced-motion.
 */
export function StatCounter({ value, className, duration = 1.6 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(NUM_RE);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr.replace(/[.,]/g, ""), 10);

    if (!inView || reduce || Number.isNaN(target)) {
      // Estado final directo (SSR / reduced motion / valor no numérico)
      setDisplay(value);
      return;
    }

    setDisplay(`${prefix}0${suffix}`);
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(`${prefix}${formatWithSeparators(Math.round(latest), numStr)}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export default StatCounter;
