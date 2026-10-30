"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  const [active, setActive] = useState("All");

  const tabs = ["All", ...skillCategories.map((c) => c.name)];

  const visible = skillCategories
    .filter((c) => active === "All" || c.name === active)
    .flatMap((c) => c.skills);

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-2 font-mono text-sm text-accent">02. Skills</h2>
      <h3 className="mb-8 text-3xl font-bold sm:text-4xl">My toolbox</h3>

      <div className="mb-10 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === tab
                ? "border-accent bg-accent text-black"
                : "border-white/20 hover:border-accent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-3"
      >
        {visible.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-signal/40 bg-signal/10 px-4 py-2 font-mono text-sm transition hover:scale-110 hover:bg-signal/30"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}