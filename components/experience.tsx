"use client";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-[72rem] scroll-mt-28 sm:mb-40">
      <SectionHeading index="03" kicker="Experience">5.5+ years translating complex requirements into software people can use.</SectionHeading>
      <div className="border-t border-black/15 dark:border-white/15">
        {[...experiencesData].reverse().map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="group grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_19rem_1fr] lg:py-10 dark:border-white/15">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-lg transition group-hover:border-[#ff7251] group-hover:bg-[#ff7251] group-hover:text-white dark:border-white/15">{item.icon}</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#ff7251]">{item.date}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-1 text-sm text-black/50 dark:text-white/50">{item.location}</p>
            </div>
            <ul className="space-y-3 text-[0.95rem] leading-7 text-black/60 sm:col-start-2 lg:col-start-3 dark:text-white/60">
              {item.description.map((point) => <li key={point} className="flex gap-3"><span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7ff35] ring-1 ring-black/20" />{point}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
