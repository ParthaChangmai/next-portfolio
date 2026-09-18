import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiChakraui,
  SiDocker,
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Development Trainee",
    location: "Java Training And Placement Center (JTPC) ",
    description: [
      "Trained in HTML5, CSS3, JavaScript, and React through guided web development work.",
      "Participated in code reviews and collaborative development workflows.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "April 2019 - October 2019",
  },
  {
    title: "Associate Software Developer",
    location: "Codepilot Technologies Private Limited",
    description: [
      "Maintained and extended React applications, adding features and improving usability.",
      "Collaborated with clients to translate business requirements into functional features.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "February 2020 - January 2021",
  },
  {
    title: "Software Engineer",
    location: "Baliza.io",
    description: [
      "Built React and Next.js applications from the ground up, including a custom CMS with video playback and an enterprise portal integrated with Google Maps.",
      "Designed and integrated REST APIs and Node.js services for PostgreSQL-backed applications.",
      "Reduced application load times by over 20% using rendering optimizations, lazy loading, and code splitting.",
      "Delivered accessible, responsive interfaces and automated UI tests with Jest and React Testing Library.",
      "Integrated OpenAI, Claude, and Gemini APIs to automate content management workflows.",
    ],
    icon: React.createElement(FaReact),
    date: "July 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Montra",
    eyebrow: "Personal finance command center",
    description:
      "A private financial operating system for transactions, budgets, savings goals, analytics, CSV workflows, and account-level data protection.",
    outcome: "Full CRUD finance workflows with Supabase authentication, PostgreSQL RLS, live calculations, and responsive analytics.",
    capabilities: [
      "Create, edit, delete, search, import, and export transactions",
      "Track monthly budgets against live category spending",
      "Build savings goals and record individual contributions",
      "Use privacy mode, alerts, analytics, and seeded demo data",
    ],
    architecture:
      "Supabase SSR protects authenticated routes while PostgreSQL Row-Level Security isolates profiles, transactions, budgets, and goals for every account at the database layer.",
    tags: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Recharts"],
    repoUrl: "https://github.com/ParthaChangmai/personal-finance-command-center",
    visual: "finance",
  },
  {
    title: "Job Tracker Pro AI",
    eyebrow: "AI-assisted career platform",
    description:
      "A full-stack workspace for finding roles, analyzing resume fit, and managing every application across kanban and table views.",
    outcome: "Combines live job search, resume parsing, AI enrichment, OAuth, analytics, reminders, and a private application pipeline.",
    capabilities: [
      "Search live roles and save them with per-user duplicate protection",
      "Parse PDF, DOCX, TXT, and Markdown resumes for fit analysis",
      "Manage notes, reminders, follow-ups, and application status",
      "Switch between Kanban, table, analytics, and CSV export views",
    ],
    architecture:
      "Server Components handle data-first pages, route handlers keep third-party secrets private, and both job search and AI analysis degrade to realistic local fallbacks when external keys are unavailable.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "AI"],
    repoUrl: "https://github.com/ParthaChangmai/Job-Portal",
    visual: "jobs",
  },
  {
    title: "World Music Pulse",
    eyebrow: "Global music discovery",
    description:
      "A visual-first discovery experience that turns worldwide music charts into cinematic browsing, comparison, and trend stories.",
    outcome: "Live Apple Music charts, iTunes enrichment, country comparisons, rank movement, and resilient snapshot fallbacks without required API keys.",
    capabilities: [
      "Browse live country charts with search and grid or list views",
      "Compare national charts and identify songs crossing borders",
      "Explore track details, metadata, artwork, and related music",
      "Follow new, rising, stable, and falling tracks across snapshots",
    ],
    architecture:
      "A reusable provider layer combines Apple Music RSS data with iTunes enrichment, then falls back to local JSON snapshots so charts, comparisons, and trend stories remain available when a live request fails.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Framer Motion", "Music APIs"],
    repoUrl: "https://github.com/ParthaChangmai/Top-Music",
    visual: "music",
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React.js",
    icon: FaReact,
  },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Next.js",
    icon: TbBrandNextjs,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "REST APIs",
    icon: TbApi,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Chakra",
    icon: SiChakraui,
  },
  {
    name: "Jest",
    icon: SiJest,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "Git & GitHub",
    icon: FaGithub,
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
];
