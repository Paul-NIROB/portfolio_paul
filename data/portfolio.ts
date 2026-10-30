export const links = {
  github: "https://github.com/Paul-NIROB",
  linkedin: "https://linkedin.com/in/nirob-paul",
  email: "mailto:nirobpaulgetit@gmail.com",
  resume: "/resume.pdf",
};

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    name: "Web & Backend",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Node.js", "REST APIs", "FastAPI", "Firebase"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "SQLite"],
  },
  {
    name: "Cloud & Tools",
    skills: ["AWS (Cloud Practitioner)", "Git", "GitHub", "JWT", "VS Code"],
  },
  {
    name: "AI & Automation",
    skills: ["Agentic AI", "n8n", "LLM APIs", "Prompt Engineering"],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  role: string;
  problem: string;
  built: string[];
  stack: string[];
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    id: "screenrange",
    title: "ScreenRange",
    tagline: "Rate individual character performances in films and shows",
    role: "Solo developer, May 2026 to Oct 2026",
    problem:
      "Movie sites rate whole films, but nobody can say how good one actor's performance as one character really was.",
    built: [
      "Community platform where users give a RangeScore out of 10 to a single character performance",
      "Integrated the TMDB API for film and cast data",
      "Added Google sign-in, community leaderboards, and top hero and villain rankings",
    ],
    stack: ["React.js", "Next.js", "JavaScript", "TMDB API", "Google Sign-In"],
    live: "https://screen-range.vercel.app/",
  },
  {
    id: "iporemedi",
    title: "ipoRemedi",
    tagline: "IPO grey-market premium tracking platform",
    role: "Lead Manager, Aug 2026 to present",
    problem:
      "Retail investors check several scattered sites to follow IPO grey-market premiums, and the data is noisy and hard to compare.",
    built: [
      "Own product direction, task planning, and day-to-day execution for the team",
      "Designed the dark-first design system and brand identity",
      "Coordinate development, content, and operations to deliver IPO tools and information to users",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://iporemedi.in",
  },
  {
    id: "gmpcal",
    title: "GMPCal",
    tagline: "Real-time IPO and grey market premium tracker",
    role: "Solo developer, Mar 2026 to May 2026",
    problem:
      "Grey market premium numbers change quickly and are spread across many pages.",
    built: [
      "Building a real-time GMP tracker with a React.js frontend",
    ],
    stack: ["React.js", "JavaScript"],
    code: "https://github.com/Paul-NIROB/gmpcal",
  },
  {
    id: "wideframe",
    title: "WideFrame",
    tagline: "Responsive movie review website",
    role: "Solo developer, Jul 2025 to Nov 2025",
    problem:
      "I wanted a clean place to read and write movie reviews with a simple, structured layout.",
    built: [
      "Developed a fully responsive site with a clean UI",
      "Integrated Firebase for real-time data storage and user authentication",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase"],
    code: "https://github.com/Paul-NIROB/WIDEFRAME",
  },
  {
    id: "kite-mcp",
    title: "Kite MCP + Claude",
    tagline: "Live portfolio analysis with RSI and ADX indicators",
    role: "Solo: setup, debugging, and calculations",
    problem:
      "I wanted Claude to read my live Zerodha holdings and compute technical indicators from raw price data.",
    built: [
      "Connected the Zerodha Kite MCP server to Claude Desktop",
      "Diagnosed and fixed a recurring TLS error caused by antivirus HTTPS scanning",
      "Corrected indicator math (Wilder's smoothing, enough lookback days)",
    ],
    stack: ["MCP", "Node.js", "Kite API"],
  },
];