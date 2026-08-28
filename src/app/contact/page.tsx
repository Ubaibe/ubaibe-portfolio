import { Metadata } from "next";
import { site } from "@/data/site";
import { Reveal } from "@/components/case-study/Reveal";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: site.description,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-6">
              01 / Contact
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-[44px] md:text-[72px] lg:text-[88px] font-semibold tracking-tight text-[#E8EAED] leading-[1.05] mb-6">
              Let&apos;s build
              <br />
              something useful.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-[#929AA5] leading-relaxed max-w-2xl">
              Open to engineering collaborations, technical discussions, and
              opportunities across AI, Web3, and FinTech.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-16 md:py-24">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                02 / Reach Out
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6 max-w-3xl">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base md:text-lg text-[#E8EAED] hover:text-[#55DDE0] transition-colors"
                  >
                    {site.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mb-2">
                    LinkedIn
                  </p>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-[#E8EAED] hover:text-[#55DDE0] transition-colors"
                  >
                    {site.linkedin}
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mb-2">
                    GitHub
                  </p>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-[#E8EAED] hover:text-[#55DDE0] transition-colors"
                  >
                    {site.github}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
