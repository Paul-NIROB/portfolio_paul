"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const jobs = [
  {
    role: "Lead Manager",
    company: "IPO Remedi (Startup)",
    period: "Aug 2026 - Present",
    points: [
      "Lead a startup team and own product direction, task planning, and day-to-day execution",
      "Coordinate development, content, and operations to deliver IPO-focused tools and information to users",
    ],
  },
  {
    role: "Full Stack Java Developer Intern",
    company: "The Developers Arena (Remote)",
    period: "May 2026 - Jul 2026",
    points: [
      "Hands-on full stack training through real-world projects, mentorship, and assessments",
      "Practical exposure to full stack development workflows with a focus on Java-based technologies",
    ],
  },
  {
    role: "Freelance Developer",
    company: "ConvertIAS website clone",
    period: "Jul 2024 - Aug 2024",
    points: [
      "Built a functional clone with notes, CSAT, and student evaluation features",
      "Used MongoDB for data persistence and Django for basic server-side routing",
    ],
  },
];

const certs = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "Feb 2026" },
  { name: "Prompt Engineering", issuer: "Microsoft", date: "Nov 2025" },
  { name: "Software Engineering Job Simulation", issuer: "JPMorgan (Forage)", date: "Aug 2025" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)", date: "May 2025" },
  { name: "MS Excel", issuer: "SimpliLearn", date: "Feb 2025" },
  { name: "Java Job Simulation", issuer: "Forage", date: "Jul 2024" },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-2 font-mono text-sm text-accent">04. Experience</h2>
      <h3 className="mb-10 text-3xl font-bold sm:text-4xl">Where I have worked</h3>

      <div className="space-y-10 border-l border-white/15 pl-6 sm:pl-8">
        {jobs.map((job, i) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full bg-accent shadow-[0_0_12px] shadow-accent sm:-left-[39px]" />
            <p className="font-mono text-xs text-accent">{job.period}</p>
            <h4 className="mt-1 text-lg font-semibold">{job.role}</h4>
            <p className="text-sm text-foreground/60">{job.company}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/75">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <h4 className="mt-20 mb-6 flex items-center gap-2 text-xl font-semibold">
        <Award className="text-accent" size={20} /> Certifications
      </h4>

      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((c) => (
          <div
            key={c.name}
            className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-signal/60"
          >
            <p className="font-medium">{c.name}</p>
            <p className="mt-1 text-xs text-foreground/50">
              {c.issuer} · {c.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}