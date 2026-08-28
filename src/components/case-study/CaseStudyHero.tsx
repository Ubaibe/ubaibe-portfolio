"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface CaseStudyHeroProps {
  label: string;
  title: string;
  description: string;
  network?: string;
  github?: string;
  demo?: string;
}

export function CaseStudyHero({
  label,
  title,
  description,
  network,
  github,
  demo,
}: CaseStudyHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-6">
            {label}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-[44px] md:text-[72px] lg:text-[88px] font-semibold tracking-tight text-[#E8EAED] leading-[1.05] mb-8">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl font-light text-[#E8EAED] leading-snug max-w-3xl mb-6">
            {description}
          </p>
        </Reveal>

        {network && (
          <Reveal delay={0.3}>
            <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mb-8">
              {network}
            </p>
          </Reveal>
        )}

        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#55DDE0] text-[#080B0F] text-sm font-medium hover:bg-[#55DDE0]/90 transition-colors"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#34414D] text-[#E8EAED] text-sm font-medium hover:border-[#55DDE0] hover:text-[#55DDE0] transition-colors"
              >
                GitHub
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
