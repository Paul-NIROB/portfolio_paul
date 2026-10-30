"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Code } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-2 font-mono text-sm text-accent">03. Projects</h2>
      <h3 className="mb-10 text-3xl font-bold sm:text-4xl">
        Things I've built
      </h3>

      <div className="space-y-5">
        {projects.map((p) => {
          const isOpen = openId === p.id;

          return (
            <motion.div
              key={p.id}
              layout
              className={`rounded-xl border bg-white/5 transition ${
                isOpen ? "border-accent/70" : "border-white/10 hover:border-accent/40"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : p.id)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <div>
                  <h4 className="text-xl font-semibold">{p.title}</h4>
                  <p className="mt-1 text-sm text-foreground/60">{p.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-signal/15 px-2 py-1 font-mono text-xs text-signal"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronDown
                  className={`shrink-0 text-accent transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 border-t border-white/10 p-6 text-sm">
                      <div>
                        <p className="mb-1 font-mono text-xs text-accent">MY ROLE</p>
                        <p className="text-foreground/80">{p.role}</p>
                      </div>

                      <div>
                        <p className="mb-1 font-mono text-xs text-accent">THE PROBLEM</p>
                        <p className="text-foreground/80">{p.problem}</p>
                      </div>

                      <div>
                        <p className="mb-1 font-mono text-xs text-accent">WHAT I BUILT</p>
                        <ul className="list-disc space-y-1 pl-5 text-foreground/80">
                          {p.built.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3 pt-2">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-black transition hover:scale-105"
                          >
                            <ExternalLink size={16} /> Live site
                          </a>
                        )}
                        {p.code && (
                          <a
                            href={p.code}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-signal px-4 py-2 font-semibold transition hover:bg-signal/20"
                          >
                            <Code size={16} /> Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}