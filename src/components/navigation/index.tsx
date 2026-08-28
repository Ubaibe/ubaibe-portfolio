"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Hackathons", href: "/#hackathons" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#080B0F]/80 backdrop-blur-md border-b border-[#222A33]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="text-sm font-medium tracking-widest text-[#E8EAED] hover:text-[#55DDE0] transition-colors"
          aria-label="Ubaibe home"
        >
          {site.shortName}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.12em] text-[#929AA5] hover:text-[#55DDE0] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-[#929AA5] hover:text-[#55DDE0] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#080B0F]/95 backdrop-blur-md border-b border-[#222A33]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-[0.12em] text-[#929AA5] hover:text-[#55DDE0] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
