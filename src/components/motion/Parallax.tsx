"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Intensidad del desplazamiento en px a lo largo del scroll. Positivo = baja. */
  offset?: number;
};

/**
 * Aplica un desplazamiento vertical tipo parallax al hacer scroll.
 * Ideal para fondos de hero. Desactivado con prefers-reduced-motion.
 */
export function Parallax({ children, className, offset = 120 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

export default Parallax;
