"use client";

import { motion, useReducedMotion } from "framer-motion";

type Orb = {
  className: string;
  duration?: number;
  delay?: number;
};

type GlowOrbsProps = {
  /** Orbes personalizados; si se omite usa un set azul por defecto. */
  orbs?: Orb[];
  className?: string;
};

const DEFAULT_ORBS: Orb[] = [
  { className: "top-24 right-32 w-80 h-80 bg-[#0057B8]/20", duration: 6, delay: 0 },
  { className: "bottom-20 left-16 w-96 h-96 bg-[#003f8a]/25", duration: 8, delay: 2 },
];

/**
 * Orbes de luz difusos (glow) que laten suavemente, como los fondos de Veritran.
 * Puramente decorativos: pointer-events-none y sin animación con reduced-motion.
 */
export function GlowOrbs({ orbs = DEFAULT_ORBS, className = "" }: GlowOrbsProps) {
  const reduce = useReducedMotion();
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={
            reduce
              ? undefined
              : { scale: [1, 1.18, 1], opacity: [0.4, 0.65, 0.4] }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: orb.duration ?? 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: orb.delay ?? 0,
                }
          }
        />
      ))}
    </div>
  );
}

export default GlowOrbs;
