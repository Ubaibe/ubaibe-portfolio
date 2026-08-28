import { Metadata } from "next";
import { ProjectIndex } from "@/components/sections/ProjectIndex";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
  description: site.description,
};

export default function ProjectsPage() {
  return <ProjectIndex />;
}
