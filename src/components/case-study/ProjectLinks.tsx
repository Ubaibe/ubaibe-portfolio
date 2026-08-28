"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface ProjectLinksProps {
  github?: string;
  demo?: string;
}

export function ProjectLinks({ github, demo }: ProjectLinksProps) {
  return (
    <div className="py-16 md:py-24 border-t border-[#222A33]">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
            PROJECT DETAILS
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#34414D] text-[#E8EAED] text-sm font-medium hover:border-[#55DDE0] hover:text-[#55DDE0] transition-colors"
              >
                View GitHub
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#34414D] text-[#E8EAED] text-sm font-medium hover:border-[#55DDE0] hover:text-[#55DDE0] transition-colors"
              >
                Live Demo
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#5E6772] hover:text-[#55DDE0] transition-colors"
            >
              <ArrowRight
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Back to Projects
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
