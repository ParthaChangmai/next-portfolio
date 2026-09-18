"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref} className="mb-28 w-full max-w-[72rem] scroll-mt-28 sm:mb-40">
      <SectionHeading index="02" kicker="Capabilities">A practical stack for the whole product surface.</SectionHeading>
      <ul className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/15">
        {skillsData.map((skill, index) => <motion.li key={skill.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 4) * 0.05 }} className="group flex min-h-[7.5rem] flex-col justify-between border-b border-r border-black/15 p-5 transition duration-300 hover:bg-[#c7ff35] hover:text-[#10110f] dark:border-white/15 dark:hover:bg-[#c7ff35] dark:hover:text-[#10110f]"><span className="text-xl opacity-55 transition group-hover:opacity-100"><skill.icon /></span><div className="flex items-end justify-between"><span className="font-semibold">{skill.name}</span><span className="text-[0.62rem] font-bold opacity-35">{String(index + 1).padStart(2, "0")}</span></div></motion.li>)}
      </ul>
    </section>
  );
}
