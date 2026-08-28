"use client";

import { Reveal } from "./Reveal";

interface ProjectMetaProps {
  items: { label: string; value: string }[];
}

export function ProjectMeta({ items }: ProjectMetaProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#222A33] border border-[#222A33]">
      {items.map((item, index) => (
        <Reveal key={item.label} delay={index * 0.05}>
          <div className="bg-[#080B0F] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mb-2">
              {item.label}
            </p>
            <p className="text-sm md:text-base text-[#E8EAED] leading-relaxed">
              {item.value}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
