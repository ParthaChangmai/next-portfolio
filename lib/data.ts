import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCss3, FaGithub, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiChakraui,
  SiDjango,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";

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
      "• Working with professionals to get familiar with the new technology .",
      "• Training in various languages such as HTML5, css, javascript, react.",
      "• One on one training and cod review with developers for better understanding.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "April 2019 - October 2019",
  },
  {
    title: "Associate Software Developer",
    location: "Codepilot Technologies Private Limited",
    description: [
      "• Maintaining pre existing projects and updating the components for better usability.",
      "• Adding new features to the react projects.",
      "• Meetings with clients to discuss there needs and make changes according to that.",
      "• Regular meetings with the team for suggestions.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "February 2020 - January 2021",
  },
  {
    title: "Software Engineer",
    location: "Baliza",
    description: [
      "• Creating a new react based project from the scratch.",
      "• Developed multiple React-based applications, including a custom CMS with an embedded video playback feature, an application for real-time customer management, and an enterprise-level portal to add alerts and emergencies all connected with google maps",
      "• Optimized performance of all applications by reducing total load time by 20%, and updating written code to be more memory efficient, improving user-experience and application stability.",
      "• Developed custom UI components to be reusable across all applications, leveraging a library of custom-built React components.",
      "• Code optimization to increase the over all performance of the app, and review of other colleagues code for better understanding and more stability of the app.",
      "• Meetings with clients for the discussion of changes and new features.",
    ],
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    name: "React",
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
    name: "Git",
    icon: FaGithub,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "Supabase",
    icon: SiSupabase,
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
    name: "Material UI",
    icon: SiMui,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Django",
    icon: SiDjango,
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
];
