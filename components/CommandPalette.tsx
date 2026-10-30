"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  User,
  Wrench,
  FolderGit2,
  FileText,
  Mail,
  ExternalLink,
} from "lucide-react";
import { links } from "@/data/portfolio";

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const items = [
  { label: "About", hint: "Jump to section", icon: User, run: () => goTo("about") },
  { label: "Skills", hint: "Jump to section", icon: Wrench, run: () => goTo("skills") },
    { label: "Experience", hint: "Jump to section", icon: FileText, run: () => goTo("experience") },
  { label: "Contact", hint: "Jump to section", icon: Mail, run: () => goTo("contact") },
  { label: "Resume", hint: "Open PDF", icon: FileText, run: () => window.open(links.resume, "_blank") },
  { label: "GitHub", hint: "Open profile", icon: ExternalLink, run: () => window.open(links.github, "_blank") },
  { label: "LinkedIn", hint: "Open profile", icon: ExternalLink, run: () => window.open(links.linkedin, "_blank") },
  { label: "Email me", hint: "Start a message", icon: Mail, run: () => (window.location.href = links.email) },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  function close() {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }

  function choose(index: number) {
    const item = results[index];
    if (!item) return;
    close();
    item.run();
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-32 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-white/15 bg-[#0d0f17] shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search size={18} className="text-accent" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelected(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setSelected((s) => Math.min(s + 1, results.length - 1));
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setSelected((s) => Math.max(s - 1, 0));
                  }
                  if (e.key === "Enter") choose(selected);
                }}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
              />
              <span className="rounded border border-white/20 px-1.5 py-0.5 font-mono text-[10px] text-foreground/50">
                ESC
              </span>
            </div>

            <ul className="max-h-72 overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-foreground/50">
                  No results
                </li>
              )}
              {results.map((item, i) => (
                <li key={item.label}>
                  <button
                    onClick={() => choose(i)}
                    onMouseEnter={() => setSelected(i)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      selected === i ? "bg-accent/15 text-accent" : "text-foreground/80"
                    }`}
                  >
                    <item.icon size={16} />
                    <span className="flex-1">{item.label}</span>
                    <span className="text-xs text-foreground/40">{item.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}