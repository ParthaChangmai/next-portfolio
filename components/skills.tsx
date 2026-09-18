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
        {skillsData.map((skill, index) => <motion.li key={skill.name} initial={{ opacity: 0, y: 28, scale: .97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ y: -8, scale: 1.035, zIndex: 10 }} viewport={{ once: true }} transition={{ delay: (index % 4) * 0.05, type: "spring", stiffness: 250, damping: 20 }} className="group relative flex min-h-[7.5rem] flex-col justify-between overflow-hidden border-b border-r border-black/15 p-5 transition-colors duration-300 hover:bg-[#c7ff35] hover:text-[#10110f] hover:shadow-[0_22px_50px_-28px_rgba(0,0,0,.65)] dark:border-white/15 dark:hover:bg-[#c7ff35] dark:hover:text-[#10110f]"><motion.span className="text-xl opacity-55 group-hover:opacity-100" whileHover={{ rotate: 14, scale: 1.2 }}><skill.icon /></motion.span><span className="absolute -right-4 -top-8 text-[5rem] font-black opacity-0 transition-opacity group-hover:opacity-[.06]">{String(index + 1).padStart(2, "0")}</span><div className="flex items-end justify-between"><span className="font-semibold">{skill.name}</span><span className="text-[0.62rem] font-bold opacity-35">{String(index + 1).padStart(2, "0")}</span></div></motion.li>)}
      </ul>
    </section>
  );
}
