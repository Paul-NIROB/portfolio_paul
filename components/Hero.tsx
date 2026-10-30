"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const roles = ["Software Engineer", "Full-Stack Developer", "Fintech Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const delay = !deleting && text === current ? 1200 : deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) setDeleting(true);
        else setText(current.slice(0, text.length + 1));
      } else {
        if (text === "") {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        } else {
          setText(current.slice(0, text.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* glowing background blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-signal/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>

       <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Nirob Paul</h1>

        <h2 className="mt-4 h-10 font-mono text-2xl text-foreground/70 sm:text-3xl">
          {text}
          <span className="animate-pulse text-accent">|</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-foreground/60">
          B.Tech CSE student building full-stack products with React, Next.js, Node.js and AI. I lead the team behind ipoRemedi and I'm looking for my first software role.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <Download size={18} /> Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg border border-signal px-6 py-3 font-semibold transition hover:bg-signal/20"
          >
            Contact me <ArrowDown size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}