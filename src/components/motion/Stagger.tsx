"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  /** Separación entre hijos en segundos. */
  gap?: number;
  once?: boolean;
};

const container = (gap: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: gap },
  },
});

/**
 * Contenedor que escalona la aparición de sus hijos <StaggerItem>.
 */
export function Stagger({ children, className, gap = 0.1, once = true }: StaggerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container(gap)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const OFFSET = 40;

function offsetFor(direction: StaggerItemProps["direction"]) {
  switch (direction) {
    case "up":
      return { y: OFFSET };
    case "down":
      return { y: -OFFSET };
    case "left":
      return { x: OFFSET };
    case "right":
      return { x: -OFFSET };
    default:
      return {};
  }
}

export function StaggerItem({ children, className, direction = "up" }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offsetFor(direction) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

export default Stagger;
