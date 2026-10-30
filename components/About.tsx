"use client";

import { motion } from "framer-motion";
import { GraduationCap, Rocket, Target } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.Tech CSE at Sharda University, 2023 to present",
  },
  {
    icon: Rocket,
    title: "Currently",
    text: "Lead Manager at ipoRemedi and Full Stack Java intern",
  },
  {
    icon: Target,
    title: "Looking for",
    text: "My first role as a software engineer",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-2 font-mono text-sm text-accent">01. About</h2>
        <h3 className="mb-6 text-3xl font-bold sm:text-4xl">
          Builder first, student second
        </h3>

        <p className="max-w-2xl text-foreground/70">
          I like turning ideas into working products. I lead product, design
          and hiring on ipoRemedi, and I enjoy the space where fintech and
          software meet. I learn by building, debugging, and explaining what I
          built to others.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-accent/60"
            >
              <card.icon className="mb-4 text-accent" />
              <h4 className="font-semibold">{card.title}</h4>
              <p className="mt-2 text-sm text-foreground/60">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}