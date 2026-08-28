import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#222A33] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-[#929AA5]">
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.12em] text-[#5E6772] hover:text-[#55DDE0] transition-colors"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.12em] text-[#5E6772] hover:text-[#55DDE0] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-xs uppercase tracking-[0.12em] text-[#5E6772] hover:text-[#55DDE0] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
