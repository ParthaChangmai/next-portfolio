/* eslint-disable react/no-unescaped-entities */
"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">BBA</span>, I decided to pursue my passion
        for programming. I started self study and after learning the basics, I
        joined JTPC as a{" "}
        <span className="font-medium">Web Development Trainee</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">React, Next.js, Firebase, Supabase</span>.
        I am also familiar with TypeScript, Tailwind, chakra, and many more . I
        am always looking to learn new technologies. I am currently working{" "}
        <span className="font-medium">full-time position</span> as a software
        developer in{" "}
        <a
          className="font-medium underline"
          target="_blank"
          href="https://baliza.io/"
        >
          Baliza
        </a>
        .
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, bike rides. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">AI and its impacts</span>.
      </p>
    </motion.section>
  );
}
