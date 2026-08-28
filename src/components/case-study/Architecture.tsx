"use client";

import { Reveal } from "./Reveal";

interface ArchitectureProps {
  title: string;
  components: string[];
}

export function Architecture({ title, components }: ArchitectureProps) {
  return (
    <div className="py-16 md:py-24 border-t border-[#222A33]">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
            {title}
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8">
          {components.map((component, index) => (
            <Reveal key={component} delay={index * 0.1}>
              <div className="flex-1 border border-[#222A33] bg-[#0D1217] p-6 md:p-8 text-center">
                <p className="text-sm md:text-base font-medium text-[#E8EAED] tracking-wide">
                  {component}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
