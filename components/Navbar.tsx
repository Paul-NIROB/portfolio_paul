"use client";

import { Command } from "lucide-react";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-lg font-bold text-accent">
          NP<span className="text-foreground">.dev</span>
        </a>

        <div className="flex items-center gap-6 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="hidden text-foreground/70 transition hover:text-accent md:block"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={() => window.dispatchEvent(new Event("open-palette"))}
            className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-1.5 font-mono text-xs text-foreground/70 transition hover:border-accent hover:text-accent"
          >
            <Command size={14} />
            <span className="sm:hidden">Menu</span>
            <span className="hidden sm:inline">Ctrl K</span>
          </button>
        </div>
      </nav>
    </header>
  );
}