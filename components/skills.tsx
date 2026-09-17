"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-[64rem] scroll-mt-28 text-center sm:mb-36"
    >
      <SectionHeading>Tools I use to ship</SectionHeading>
      <ul className="grid grid-cols-2 gap-3 text-left text-sm font-semibold text-slate-800 sm:grid-cols-3 md:grid-cols-4 dark:text-slate-100">
        {skillsData.map((skill, index) => (
          <motion.li
            className="surface flex items-center gap-3 rounded-2xl px-4 py-4 transition hover:-translate-y-1 hover:border-lime-500/40"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-300/20 text-lg text-lime-700 dark:text-lime-300"><skill.icon /></span>
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
