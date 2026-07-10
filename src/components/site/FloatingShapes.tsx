"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Formas geométricas azules flotantes (arcos y triángulos) que se desplazan
 * suavemente, como los adornos de las secciones de Veritran. Decorativas.
 */
export function FloatingShapes({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const float = (dy: number, duration: number, delay = 0) =>
    reduce
      ? undefined
      : {
          animate: { y: [0, dy, 0] },
          transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Arco azul (esquina inferior izquierda) */}
      <motion.div
        className="absolute -left-10 bottom-10 h-40 w-40 rounded-full border-[14px] border-[#0057B8]/70"
        style={{ clipPath: "polygon(0 0, 55% 0, 0 55%)" }}
        {...(float(-14, 7) ?? {})}
      />
      {/* Arco claro (esquina inferior derecha) */}
      <motion.div
        className="absolute right-16 bottom-24 h-20 w-20 rounded-full border-[10px] border-[#7BC4FF]/60"
        style={{ clipPath: "polygon(45% 100%, 100% 45%, 100% 100%)" }}
        {...(float(12, 9, 1) ?? {})}
      />
      {/* Triángulo (play) azul a la derecha */}
      <motion.div
        className="absolute right-24 top-1/3 h-0 w-0"
        style={{
          borderTop: "16px solid transparent",
          borderBottom: "16px solid transparent",
          borderLeft: "26px solid rgba(0,87,184,0.85)",
        }}
        {...(float(-18, 8, 0.5) ?? {})}
      />
    </div>
  );
}

export default FloatingShapes;
