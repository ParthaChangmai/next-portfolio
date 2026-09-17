"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const stats = [
  ["5.5+", "years building web products"],
  ["20%", "faster application load time"],
  ["Full stack", "React interfaces to Node.js APIs"],
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 w-full max-w-[72rem] scroll-mt-[100rem] sm:mb-36">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="surface overflow-hidden rounded-[2rem] px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-300/15 px-4 py-2 text-sm font-semibold text-lime-800 dark:text-lime-200">
              <span className="h-2 w-2 rounded-full bg-lime-500" />
              Frontend and Full Stack Engineer
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-[5.25rem] lg:leading-[0.98]">
              I build fast, accessible products from interface to API.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              I&apos;m Partha, a software engineer working with React, Next.js, TypeScript, Node.js, REST APIs, and PostgreSQL. I turn product requirements into dependable web experiences and measurable performance improvements.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="group flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800 dark:bg-lime-300 dark:text-slate-950 dark:hover:bg-lime-200" onClick={() => { setActiveSection("Contact"); setTimeOfLastClick(Date.now()); }}>
                Let&apos;s work together <BsArrowRight className="transition group-hover:translate-x-1" />
              </Link>
              <a className="surface flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition hover:-translate-y-1" href="/CV.pdf" download>
                Download résumé <HiDownload />
              </a>
              <a className="surface rounded-full p-4 transition hover:-translate-y-1" href="https://www.linkedin.com/in/partha-changmai-6a9293208/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><BsLinkedin /></a>
              <a className="surface rounded-full p-4 transition hover:-translate-y-1" href="https://github.com/ParthaChangmai" target="_blank" rel="noreferrer" aria-label="GitHub profile"><BsGithub /></a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-slate-900/10 bg-slate-950 p-5 text-white dark:border-white/10 dark:bg-white/[0.07]">
                <p className="text-2xl font-semibold tracking-tight text-lime-300">{value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
