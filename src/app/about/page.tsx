import { Metadata } from "next";
import { site } from "@/data/site";
import { Reveal } from "@/components/case-study/Reveal";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.description,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-6">
              01 / About
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-[44px] md:text-[72px] lg:text-[88px] font-semibold tracking-tight text-[#E8EAED] leading-[1.05] mb-6">
              {site.name}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl font-light text-[#E8EAED] leading-snug max-w-3xl">
              Software Engineer
              <span className="text-[#5E6772] mx-3">·</span>
              AI
              <span className="text-[#5E6772] mx-2">·</span>
              Web3
              <span className="text-[#5E6772] mx-2">·</span>
              FinTech
              <span className="text-[#5E6772] mx-2">·</span>
              Full-Stack
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-sm text-[#5E6772] mt-4">
              Web3 builder (notlazy)
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-16 md:py-24">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                02 / Introduction
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-base md:text-lg text-[#929AA5] leading-relaxed max-w-3xl space-y-6">
                <p>
                  I build software products across artificial intelligence,
                  financial technology, Web3, and full-stack systems. My work
                  spans smart-contract development, AI-powered applications,
                  industrial monitoring platforms, and end-to-end web
                  applications.
                </p>
                <p>
                  I focus on delivering functional, well-engineered systems
                  rather than theoretical prototypes. Each project reflects a
                  commitment to understanding the underlying technology and
                  producing working implementations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-16 md:py-24">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                03 / What I Build
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-3 max-w-3xl">
                {[
                  "AI-powered applications and intelligent workflows",
                  "Web3 and smart-contract systems",
                  "FinTech platforms and financial tooling",
                  "Full-stack web applications",
                  "Industrial monitoring and analytics dashboards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#55DDE0] mt-1.5">—</span>
                    <span className="text-[#929AA5]">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-16 md:py-24">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                04 / Technical Focus
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "Flask",
                  "SQLAlchemy",
                  "Solidity",
                  "Hardhat",
                  "OpenZeppelin",
                  "ethers",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Chart.js",
                  "Next.js",
                  "TypeScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs uppercase tracking-[0.12em] text-[#929AA5] border border-[#222A33] px-3 py-1.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-16 md:py-24">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                05 / Startup
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="max-w-3xl">
                <h3 className="text-xl md:text-2xl font-semibold text-[#E8EAED] mb-2">
                  Liquick
                </h3>
                <p className="text-sm text-[#5E6772] uppercase tracking-[0.12em] mb-4">
                  Co-founder · Early-stage startup in development
                </p>
                <p className="text-base md:text-lg text-[#929AA5] leading-relaxed">
                  Currently building an early-stage startup. More details will
                  be shared as the project progresses.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-16 md:py-24">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                06 / Education
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="max-w-3xl">
                <h3 className="text-xl md:text-2xl font-semibold text-[#E8EAED] mb-2">
                  BTech Software Engineering
                </h3>
                <p className="text-base md:text-lg text-[#929AA5] leading-relaxed mb-2">
                  Federal University of Technology Akure
                </p>
                <p className="text-sm text-[#5E6772] uppercase tracking-[0.12em]">
                  Second Class
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-16 md:py-24">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                07 / Connect
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#55DDE0] text-[#080B0F] text-sm font-medium hover:bg-[#55DDE0]/90 transition-colors"
                >
                  Email
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#34414D] text-[#E8EAED] text-sm font-medium hover:border-[#55DDE0] hover:text-[#55DDE0] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#34414D] text-[#E8EAED] text-sm font-medium hover:border-[#55DDE0] hover:text-[#55DDE0] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
