"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 };
  const animate = shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}
