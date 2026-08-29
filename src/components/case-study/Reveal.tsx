"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useState, useLayoutEffect } from "react";

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
  const [hasMounted, setHasMounted] = useState(false);

  useLayoutEffect(() => {
    setHasMounted(true);
  }, []);

  const animate = shouldReduceMotion || isInView || hasMounted;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 20 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
      transition={{
        duration: 0.4,
        delay: animate && !isInView ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}
