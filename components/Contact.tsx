"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { links } from "@/data/portfolio";

const EMAIL = "nirobpaulgetit@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = links.email;
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 font-mono text-sm text-accent">05. Contact</h2>
        <h3 className="mb-4 text-3xl font-bold sm:text-5xl">Let us build something</h3>
        <p className="mx-auto max-w-xl text-foreground/60">
          I am looking for my first software engineering role. If you have an
          opening, or just want to talk about a project, my inbox is open.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={links.email}
            className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <Mail size={18} /> Email me
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 rounded-lg border border-signal px-6 py-3 font-mono text-sm transition hover:bg-signal/20"
          >
            {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} />}
            {copied ? "Copied!" : EMAIL}
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-foreground/60 transition hover:text-accent"
          >
            GitHub <ExternalLink size={14} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-foreground/60 transition hover:text-accent"
          >
            LinkedIn <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>

      <p className="mt-24 font-mono text-xs text-foreground/40">
        Designed and built by Nirob Paul with Next.js, Tailwind CSS and Framer Motion
      </p>
    </section>
  );
}