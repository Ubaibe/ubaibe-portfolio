import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProjectMeta } from "@/components/case-study/ProjectMeta";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { Architecture } from "@/components/case-study/Architecture";
import { ProjectLinks } from "@/components/case-study/ProjectLinks";
import { Reveal } from "@/components/case-study/Reveal";

export async function generateStaticParams() {
  return [{ slug: "assetflow" }, { slug: "ai-invoiceflow" }, { slug: "forgeone-ai" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const overviewMeta = [
    { label: "Project Type", value: project.projectType ?? "—" },
    { label: "Duration", value: project.developmentDuration ?? "—" },
    { label: "Network", value: project.network ?? "—" },
    { label: "Testing", value: project.testing ?? "—" },
  ];

  const stackMeta = [
    { label: "Category", value: project.categories.join(" · ") },
    { label: "Stack", value: project.technologies?.join(" · ") ?? "—" },
    { label: "Status", value: project.status.replace("-", " ") },
    { label: "Deployment", value: project.deployment ?? "—" },
  ];

  if (project.slug === "assetflow") {
    return (
      <main className="min-h-screen">
        <CaseStudyHero
          label={`01 / ${project.categories.join(" · ")}`}
          title={project.title}
          description={project.description ?? project.shortDescription}
          network={project.network}
          github={project.github}
          demo={project.demo}
        />

        <section className="border-t border-[#222A33]">
          <div className="mx-auto max-w-7xl px-6">
            <ProjectMeta items={overviewMeta} />
          </div>
        </section>

        <CaseStudySection label="02 / THE PROBLEM" title="The Problem">
          <p>
            Invoice financing requires connecting invoices, financing, investors,
            and on-chain workflows in a coherent system. AssetFlow addresses this
            by bringing the financing process on-chain, enabling transparent and
            programmable interactions between financing participants through
            blockchain-based smart contracts.
          </p>
        </CaseStudySection>

        <CaseStudySection label="03 / THE SOLUTION" title="The Solution">
          <p>
            AssetFlow is an AI-powered invoice financing platform built on BOT
            Chain. It connects the financing workflow with blockchain-based smart
            contracts, creating a transparent environment for invoice financing
            operations.
          </p>
        </CaseStudySection>

        <CaseStudySection label="04 / ENGINEERING" title="Engineering">
          <p>
            The application is built with Solidity smart contracts responsible for
            core financing functionality, integrated through Hardhat and OpenZeppelin
            libraries. The frontend interacts with these contracts using ethers,
            targeting BOT Chain Testnet for deployment.
          </p>
        </CaseStudySection>

        <CaseStudySection label="05 / KEY FEATURES" title="Key Features">
          <ul className="space-y-3">
            {project.features?.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-[#55DDE0] mt-1.5">—</span>
                <span className="text-[#929AA5]">{feature}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <Architecture
          title="06 / SMART CONTRACT ARCHITECTURE"
          components={["AssetRegistry", "FinancingPool", "MockUSDT"]}
        />

        <section className="py-16 md:py-24 border-t border-[#222A33]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <Reveal>
                  <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                    07 / TESTING
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[36px] md:text-[48px] font-semibold tracking-tight text-[#E8EAED] leading-[1.1]">
                    53
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mt-2">
                    Tests Passing
                  </p>
                </Reveal>
              </div>

              <div>
                <Reveal>
                  <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                    08 / DEPLOYMENT
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[36px] md:text-[48px] font-semibold tracking-tight text-[#E8EAED] leading-[1.1]">
                    {project.network}
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mt-2">
                    Deployed and functional
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#222A33]">
          <div className="mx-auto max-w-7xl px-6">
            <ProjectMeta items={stackMeta} />
          </div>
        </section>

        <ProjectLinks github={project.github} demo={project.demo} />
      </main>
    );
  }

  if (project.slug === "ai-invoiceflow") {
    const aiOverviewMeta = [
      { label: "Project Type", value: project.projectType ?? "—" },
      { label: "Duration", value: project.developmentDuration ?? "—" },
      { label: "Stack", value: project.technologies?.join(" · ") ?? "—" },
      { label: "Focus", value: project.categories.join(" · ") },
    ];

    const aiStackMeta = [
      { label: "Category", value: project.categories.join(" · ") },
      { label: "Stack", value: project.technologies?.join(" · ") ?? "—" },
      { label: "Status", value: project.status.replace("-", " ") },
      { label: "Project Type", value: project.projectType ?? "—" },
    ];

    return (
      <main className="min-h-screen">
        <CaseStudyHero
          label={`01 / ${project.categories.join(" · ")}`}
          title={project.title}
          description={project.description ?? project.shortDescription}
          github={project.github}
        />

        <section className="border-t border-[#222A33]">
          <div className="mx-auto max-w-7xl px-6">
            <ProjectMeta items={aiOverviewMeta} />
          </div>
        </section>

        <CaseStudySection label="02 / THE PROBLEM" title="The Problem">
          <p>
            Businesses can have valid invoices but still face delays accessing
            working capital. Invoice financing involves multiple participants and
            sensitive financial information that must be handled carefully. AI can
            assist with evaluating invoice financing opportunities, while privacy
            remains important when financial data is shared across borrowers and
            lenders.
          </p>
        </CaseStudySection>

        <CaseStudySection label="03 / THE SOLUTION" title="The Solution">
          <p>
            AI InvoiceFlow is a private AI-powered invoice financing application.
            Borrowers upload invoices through the platform, the application
            processes the invoice information, AI underwriting evaluates the
            opportunity, and lenders can review financing requests through a
            dedicated dashboard. The entire workflow is managed within the
            application.
          </p>
        </CaseStudySection>

        <CaseStudySection label="04 / ENGINEERING" title="Engineering">
          <p>
            The application is built with a Flask backend and SQLAlchemy for data
            management. It includes authentication, invoice upload handling, and
            separate dashboards for borrowers and lenders. AI underwriting
            functionality is integrated into the application workflow to assist
            with evaluating invoice financing opportunities.
          </p>
        </CaseStudySection>

        <CaseStudySection label="05 / KEY FEATURES" title="Key Features">
          <ul className="space-y-3">
            {project.features?.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-[#55DDE0] mt-1.5">—</span>
                <span className="text-[#929AA5]">{feature}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection label="06 / PRIVACY ARCHITECTURE" title="Privacy Architecture">
          <p>
            The application was designed with privacy-oriented financial workflows
            in mind. Canton was intended to provide the privacy-preserving ledger
            component for the platform. However, the Canton integration was not
            successfully completed. The rest of the application—including the
            Flask backend, SQLAlchemy database layer, authentication, invoice
            uploads, borrower dashboard, lender dashboard, AI underwriting, and
            application workflow—was functional in the working demo.
          </p>
        </CaseStudySection>

        <CaseStudySection label="07 / AI UNDERWRITING" title="AI Underwriting">
          <p>
            AI is used as part of the application&apos;s underwriting workflow to
            help evaluate invoice financing opportunities. The AI functionality is
            integrated into the application to assist with processing and
            assessing invoice data, supporting the overall financing workflow
            without requiring manual intervention for every evaluation step.
          </p>
        </CaseStudySection>

        <section className="border-t border-[#222A33]">
          <div className="mx-auto max-w-7xl px-6">
            <ProjectMeta items={aiStackMeta} />
          </div>
        </section>

        <ProjectLinks github={project.github} demo={project.demo} />
      </main>
    );
  }

  if (project.slug === "forgeone-ai") {
    const forgeOverviewMeta = [
      { label: "Project Type", value: project.projectType ?? "—" },
      { label: "Hackathon", value: "ChainHack 2026" },
      { label: "Deployment", value: project.deployment ?? "—" },
      { label: "Focus", value: project.categories.join(" · ") },
    ];

    const forgeStackMeta = [
      { label: "Category", value: project.categories.join(" · ") },
      { label: "Stack", value: project.technologies?.join(" · ") ?? "—" },
      { label: "Status", value: project.status.replace("-", " ") },
      { label: "Project Type", value: project.projectType ?? "—" },
    ];

    const monitoringMetrics = [
      "Machine temperature",
      "Motor vibration",
      "Power consumption",
      "Throughput",
      "Humidity",
      "Pressure",
      "Uptime",
      "Overall health",
    ];

    return (
      <main className="min-h-screen">
        <CaseStudyHero
          label={`01 / ${project.categories.join(" · ")}`}
          title={project.title}
          description={project.description ?? project.shortDescription}
          github={project.github}
          demo={project.demo}
        />

        <section className="border-t border-[#222A33]">
          <div className="mx-auto max-w-7xl px-6">
            <ProjectMeta items={forgeOverviewMeta} />
          </div>
        </section>

        <CaseStudySection label="02 / THE PROBLEM" title="The Problem">
          <p>
            Industrial environments generate machine and operational data that can
            be difficult to monitor and interpret through a single interface.
            ForgeOne AI was designed as a demonstration of how an intelligent
            monitoring platform could bring machine telemetry, operational
            metrics, and analytics into one dashboard.
          </p>
        </CaseStudySection>

        <CaseStudySection label="03 / THE SOLUTION" title="The Solution">
          <p>
            ForgeOne AI is an industrial machine-monitoring platform. Simulated
            sensor data is generated by a backend service, exposed through APIs,
            and consumed by a frontend dashboard that renders interactive charts
            and monitoring interfaces. The platform demonstrates how factory
            telemetry, maintenance workflows, and operational insights can be
            unified in a single application.
          </p>
        </CaseStudySection>

        <CaseStudySection label="04 / ENGINEERING" title="Engineering">
          <p>
            The application is built with a Flask backend and SQLAlchemy for data
            management. It includes a simulated IoT sensor engine that generates
            realistic industrial telemetry, a maintenance workflow system, and a
            deterministic analytics engine that evaluates machine health and
            generates maintenance recommendations. The frontend uses Chart.js to
            visualize telemetry trends and operational metrics.
          </p>
        </CaseStudySection>

        <CaseStudySection label="05 / KEY FEATURES" title="Key Features">
          <ul className="space-y-3">
            {project.features?.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-[#55DDE0] mt-1.5">—</span>
                <span className="text-[#929AA5]">{feature}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection label="06 / INDUSTRIAL MONITORING" title="Industrial Monitoring">
          <p className="mb-6">
            The dashboard tracks the following simulated machine metrics:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {monitoringMetrics.map((metric) => (
              <div
                key={metric}
                className="border border-[#222A33] bg-[#0D1217] px-4 py-3"
              >
                <p className="text-xs text-[#929AA5]">{metric}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <Architecture
          title="07 / SYSTEM ARCHITECTURE"
          components={[
            "Sensor Data Simulation",
            "Backend / API",
            "Database",
            "Dashboard",
            "Charts & Monitoring",
          ]}
        />

        <CaseStudySection label="08 / DASHBOARD & DATA" title="Dashboard & Data">
          <p>
            The dashboard consumes factory data through the application&apos;s API.
            A backend service generates demonstration sensor data and the frontend
            renders it through interactive charts and KPI metrics. The dashboard
            provides machine-level diagnostics, factory-wide health summaries, and
            maintenance priorities based on the simulated telemetry.
          </p>
        </CaseStudySection>

        <section className="py-16 md:py-24 border-t border-[#222A33]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <Reveal>
                  <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                    09 / DEPLOYMENT
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[36px] md:text-[48px] font-semibold tracking-tight text-[#E8EAED] leading-[1.1]">
                    {project.deployment}
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mt-2">
                    Live demonstration
                  </p>
                </Reveal>
              </div>

              <div>
                <Reveal>
                  <p className="text-xs md:text-sm uppercase tracking-[0.14em] text-[#55DDE0] mb-4">
                    10 / HACKATHON
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[36px] md:text-[48px] font-semibold tracking-tight text-[#E8EAED] leading-[1.1]">
                    ChainHack 2026
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#5E6772] mt-2">
                    Submitted — Participation certificate received
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#222A33]">
          <div className="mx-auto max-w-7xl px-6">
            <ProjectMeta items={forgeStackMeta} />
          </div>
        </section>

        <ProjectLinks github={project.github} demo={project.demo} />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <CaseStudyHero
        label={`01 / ${project.categories.join(" · ")}`}
        title={project.title}
        description={project.description ?? project.shortDescription}
        network={project.network}
        github={project.github}
        demo={project.demo}
      />

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <ProjectMeta items={overviewMeta} />
        </div>
      </section>

      <CaseStudySection label="02 / THE PROBLEM" title="The Problem">
        <p>{project.problem ?? "Problem description not yet documented."}</p>
      </CaseStudySection>

      <CaseStudySection label="03 / THE SOLUTION" title="The Solution">
        <p>{project.solution ?? "Solution description not yet documented."}</p>
      </CaseStudySection>

      <CaseStudySection label="04 / ENGINEERING" title="Engineering">
        <p>
          {project.engineeringHighlights
            ? project.engineeringHighlights.join(" ")
            : "Engineering details not yet documented."}
        </p>
      </CaseStudySection>

      <CaseStudySection label="05 / KEY FEATURES" title="Key Features">
        <ul className="space-y-3">
          {project.features?.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="text-[#55DDE0] mt-1.5">—</span>
              <span className="text-[#929AA5]">{feature}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      {project.architecture && (
        <CaseStudySection label="06 / ARCHITECTURE" title="Architecture">
          <p>{project.architecture}</p>
        </CaseStudySection>
      )}

      <section className="border-t border-[#222A33]">
        <div className="mx-auto max-w-7xl px-6">
          <ProjectMeta items={stackMeta} />
        </div>
      </section>

      <ProjectLinks github={project.github} demo={project.demo} />
    </main>
  );
}
