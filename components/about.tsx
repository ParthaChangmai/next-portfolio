"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section ref={ref} id="about" className="mb-28 w-full max-w-[64rem] scroll-mt-28 sm:mb-36" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
      <SectionHeading>Engineering with product context</SectionHeading>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="surface rounded-3xl p-7 sm:p-9">
          <p className="eyebrow mb-4">What I do</p>
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">I build production web applications across the stack, from responsive React interfaces and reusable design systems to Node.js services, REST APIs, and PostgreSQL-backed features.</p>
        </div>
        <div className="surface rounded-3xl p-7 sm:p-9">
          <p className="eyebrow mb-4">How I work</p>
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">I collaborate with product, design, backend teams, and clients. My work emphasizes accessibility, automated testing, performance, thoughtful code reviews, and reliable delivery across browsers.</p>
        </div>
        <div className="surface rounded-3xl p-7 sm:col-span-2 sm:p-9">
          <p className="eyebrow mb-4">Current focus</p>
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">At Baliza.io, I&apos;ve delivered content management systems, enterprise portals with Google Maps, and AI-assisted workflows using OpenAI, Claude, and Gemini APIs. I enjoy roles where frontend craft and backend thinking meet.</p>
        </div>
      </div>
    </motion.section>
  );
}
