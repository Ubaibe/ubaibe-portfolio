export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  categories: string[];
  technologies?: string[];
  status: "in-development" | "completed" | "archived";
  network?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  architecture?: string;
  features?: string[];
  engineeringHighlights?: string[];
  testing?: string;
  deployment?: string;
  developmentDuration?: string;
  projectType?: string;
  lessonsLearned?: string;
  images?: string[];
  screenshotHero?: string;
  screenshotDashboard?: string;
}

export const projects: Project[] = [
  {
    slug: "assetflow",
    title: "AssetFlow",
    shortDescription: "AI-powered invoice financing platform built on BOT Chain.",
    description: "AI-powered invoice financing platform built on BOT Chain.",
    categories: ["RWA", "FinTech", "Web3"],
    technologies: ["Solidity", "Hardhat", "OpenZeppelin", "ethers"],
    status: "completed",
    network: "BOT Chain Testnet",
    projectType: "Individual project",
    developmentDuration: "Approximately 7–8 days",
    github: "https://github.com/Ubaibe/assetflow.git",
    demo: "https://assetflow-1s03.onrender.com",
    featured: true,
    features: [
      "frontend",
      "Solidity smart contracts",
      "smart-contract integration",
      "testing",
    ],
    testing: "53 tests passing",
    deployment: "Deployed and functional on BOT Chain testnet.",
    screenshotHero: "/projects/assetflow/hero.png",
    screenshotDashboard: "/projects/assetflow/borrower-dashboard.png",
  },
  {
    slug: "ai-invoiceflow",
    title: "AI InvoiceFlow",
    shortDescription:
      "Private AI-powered invoice financing with privacy-oriented financial workflows.",
    description:
      "Private AI-powered invoice financing platform combining intelligent underwriting with privacy-oriented financial workflows.",
    categories: ["AI", "FinTech", "Privacy"],
    technologies: ["Python", "Flask", "SQLAlchemy", "AI"],
    status: "completed",
    projectType: "Individual project",
    developmentDuration: "Approximately 8 days",
    github: "https://github.com/Ubaibe/AI-InvoiceFlow.git",
    featured: true,
    features: [
      "frontend",
      "Flask backend",
      "SQLAlchemy",
      "authentication",
      "invoice uploads",
      "borrower dashboard",
      "lender dashboard",
      "AI underwriting",
      "application workflow",
    ],
    lessonsLearned:
      "Canton was intended as the privacy-preserving ledger component, but the integration was not successfully completed.",
    screenshotHero: "/projects/ai-invoiceflow/marketplace.png",
    screenshotDashboard: "/projects/ai-invoiceflow/command-center.png",
  },
  {
    slug: "forgeone-ai",
    title: "ForgeOne AI",
    shortDescription: "AI-powered industrial machine monitoring platform.",
    description: "AI-powered industrial machine monitoring platform.",
    categories: ["Industrial AI", "IoT"],
    technologies: ["Python", "Flask", "SQLAlchemy", "Chart.js", "HTML", "CSS", "JavaScript"],
    status: "completed",
    projectType: "Solo project",
    github: "https://github.com/Ubaibe/ForgeOne.git",
    demo: "https://forgeone.onrender.com",
    featured: true,
    features: [
      "backend APIs",
      "frontend/dashboard",
      "interactive charts",
      "authentication",
      "database",
      "industrial monitoring interface",
    ],
    deployment: "Render",
    lessonsLearned:
      "Submitted to ChainHack 2026 and received participation certificate/recognition. IoT sensor data is simulated for demonstration purposes.",
  },
];
