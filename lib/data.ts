import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
