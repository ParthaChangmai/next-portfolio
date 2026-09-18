"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.35);

  return (
    <section ref={ref} id="projects" className="mb-28 w-full max-w-[72rem] scroll-mt-28 sm:mb-40">
      <SectionHeading index="02" kicker="Personal projects">Three products built to solve real, everyday problems.</SectionHeading>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}>
        {projectsData.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
