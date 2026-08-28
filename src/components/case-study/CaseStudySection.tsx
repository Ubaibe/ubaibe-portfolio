"use client";

import { Reveal } from "./Reveal";

interface CaseStudySectionProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export function CaseStudySection({
  label,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight text-[#E8EAED] leading-[1.2] mb-8">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="text-base md:text-lg text-[#929AA5] leading-relaxed max-w-3xl">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
