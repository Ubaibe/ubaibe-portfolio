"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { TechnicalVisualization } from "./TechnicalVisualization";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="mx-auto max-w-7xl w-full px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <motion.p
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-6 md:mb-8"
            >
              {site.name}
            </motion.p>

            <motion.h1
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="text-[44px] md:text-[72px] lg:text-[88px] font-semibold leading-[1.05] tracking-tight text-[#E8EAED] mb-8"
            >
              Software Engineer
            </motion.h1>

            <motion.div
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="mb-10 md:mb-12"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-[#E8EAED] leading-snug">
                I build intelligent digital systems.
              </p>
              <p className="text-sm md:text-base text-[#929AA5] mt-4 md:mt-6 leading-relaxed max-w-lg">
                I build practical software across artificial intelligence,
                financial technology and decentralized systems.
              </p>
            </motion.div>

            <motion.div
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="/#work"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#55DDE0] text-[#080B0F] text-sm font-medium hover:bg-[#55DDE0]/90 transition-colors"
              >
                View My Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#34414D] text-[#E8EAED] text-sm font-medium hover:border-[#55DDE0] hover:text-[#55DDE0] transition-colors"
              >
                <ArrowUpRight size={16} />
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#55DDE0]/5 via-transparent to-[#8274FF]/5 blur-3xl" />
            <TechnicalVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
