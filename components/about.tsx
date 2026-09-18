"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import SectionHeading from "./section-heading";

const principles = [
  ["01", "Interface", "Responsive, accessible React experiences with a strong visual system and performance built in."],
  ["02", "Systems", "Node.js services, REST APIs, PostgreSQL data models, and integrations that hold up in production."],
  ["03", "Delivery", "Clear collaboration with product and design, practical testing, and ownership from brief to release."],
];

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section ref={ref} id="about" className="mb-28 w-full max-w-[72rem] scroll-mt-28 sm:mb-40" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
      <SectionHeading index="01" kicker="Approach">Engineering that connects product ambition to production reality.</SectionHeading>
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[23rem] overflow-hidden rounded-[2rem] bg-[#10110f] p-7 text-white sm:p-9">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[3rem] border-[#c7ff35]/80" />
          <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-[#ff7251] blur-2xl" />
          <p className="eyebrow !text-white/50">Current focus</p>
          <p className="relative z-10 mt-20 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">Building AI-assisted products without losing the human details.</p>
          <a href="#experience" className="absolute bottom-7 left-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] sm:bottom-9 sm:left-9">See the work <BsArrowUpRight /></a>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-black/15 bg-white/35 dark:border-white/15 dark:bg-white/[0.025]">
          {principles.map(([index, title, copy]) => <div key={title} className="group grid gap-3 border-b border-black/15 p-6 last:border-0 sm:grid-cols-[3rem_8rem_1fr] sm:items-start sm:p-8 dark:border-white/15"><span className="text-xs font-bold text-[#ff7251]">{index}</span><h3 className="text-lg font-semibold tracking-tight">{title}</h3><p className="leading-7 text-black/60 transition group-hover:text-black dark:text-white/60 dark:group-hover:text-white">{copy}</p></div>)}
        </div>
      </div>
    </motion.section>
  );
}
