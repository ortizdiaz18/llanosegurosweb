"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET = 48;

function offsetFor(direction: Direction) {
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

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Dirección desde la que entra el contenido. */
  direction?: Direction;
  /** Retardo en segundos (útil para escalonar). */
  delay?: number;
  /** Duración en segundos. */
  duration?: number;
  /** Si se anima una sola vez (por defecto) o cada vez que entra en viewport. */
  once?: boolean;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Revela su contenido con un fade + desplazamiento cuando entra en el viewport.
 * Respeta prefers-reduced-motion y es seguro para SSR (el estado inicial se
 * renderiza en el servidor y la animación arranca en el cliente).
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offsetFor(direction) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduce ? 0.01 : duration,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      // @ts-expect-error ref typing across polymorphic motion tag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
