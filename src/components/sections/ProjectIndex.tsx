"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 };
  const animate = shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 };

  const number = String(index + 1).padStart(2, "0");

  const metaItems = [
    ...(project.technologies?.map((t) => ({ key: t, label: t })) ?? []),
    ...(project.network ? [{ key: "network", label: project.network }] : []),
    ...(project.testing ? [{ key: "testing", label: project.testing }] : []),
    ...(project.deployment && !project.network
      ? [{ key: "deployment", label: project.deployment }]
      : []),
  ];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block border-b border-[#222A33] py-10 md:py-14 hover:bg-[#11171D] transition-colors -mx-6 px-6"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
          <div className="flex gap-6 md:gap-10">
            <span className="text-xs text-[#5E6772] font-mono pt-1 shrink-0">
              {number}
            </span>
            <div className="max-w-3xl">
              <h3 className="text-xl md:text-2xl font-semibold text-[#E8EAED] group-hover:text-[#55DDE0] group-hover:translate-x-1 transition-all">
                {project.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mt-2">
                {project.categories.join(" · ")}
              </p>
              <p className="text-sm md:text-base text-[#929AA5] mt-4 leading-relaxed">
                {project.shortDescription}
              </p>

              {metaItems.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
                  {metaItems.map((item) => (
                    <span
                      key={item.key}
                      className="text-xs text-[#5E6772]"
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#5E6772] group-hover:text-[#55DDE0] group-hover:translate-x-1.5 transition-all shrink-0 pt-1">
            <span className="hidden sm:inline">View Project</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectIndex() {
  const featuredProjects = projects.filter((p) => p.featured === true);

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
            02 / PROJECTS
          </p>
          <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-semibold tracking-tight text-[#E8EAED] leading-[1.1]">
            Selected work.
          </h1>
          <p className="text-base md:text-lg text-[#929AA5] leading-relaxed max-w-2xl mt-6">
            A collection of AI, Web3, fintech, and software engineering projects.
          </p>
        </div>

        <div>
          {featuredProjects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
