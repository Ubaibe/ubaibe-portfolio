"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const words = [
  { text: "AI", delay: 0 },
  { text: "WEB3", delay: 0.1 },
  { text: "FINTECH", delay: 0.2 },
  { text: "FULL-STACK", delay: 0.3 },
];

export function ScrollTypography() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={shouldReduceMotion || isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-12 md:mb-16"
        >
          I build with
        </motion.p>

        <div className="flex flex-col gap-4 md:gap-6">
          {words.map((word) => (
            <motion.h2
              key={word.text}
              initial={{ opacity: 0, x: -30 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: shouldReduceMotion ? 0 : word.delay,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
              className="text-[36px] md:text-[48px] lg:text-[64px] font-semibold tracking-tight text-[#E8EAED] leading-[1.1]"
            >
              {word.text}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
}
