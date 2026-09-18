"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight, BsArrowUpRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const stack = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AI APIs"];

export default function Intro() {
  const reduceMotion = useReducedMotion();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 w-full max-w-[72rem] scroll-mt-[100rem] sm:mb-40">
      <div className="grid min-h-[calc(100vh-9rem)] content-between gap-12 sm:min-h-[42rem]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="grid gap-8 pt-8 lg:grid-cols-[1fr_15rem] lg:items-start">
          <div>
            <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/55 dark:text-white/55"><motion.span animate={reduceMotion ? undefined : { scale: [1, 1.55, 1], opacity: [1, .55, 1] }} transition={{ duration: 2.2, repeat: Infinity }} className="h-2.5 w-2.5 rounded-full bg-[#ff7251]" />Frontend craft · Full stack thinking</motion.div>
            <h1 className="display-text max-w-[63rem] text-[clamp(3.7rem,9.4vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              {[
                <span key="a">I turn ideas</span>,
                <span key="b">into <span className="relative inline-block text-[#ff7251]"><span className="relative z-10">fast</span><motion.span aria-hidden className="absolute inset-x-0 bottom-[0.07em] h-[0.08em] origin-left bg-current opacity-30" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: .85, duration: .65 }} /></span></span>,
                <span key="c">digital products.</span>,
              ].map((line, index) => <span key={index} className="block overflow-hidden pb-[0.16em]"><motion.span className="block" initial={{ y: "115%", rotate: 2 }} animate={{ y: 0, rotate: 0 }} transition={{ delay: .12 + index * .11, duration: .8, ease: [0.16, 1, 0.3, 1] }}>{line}</motion.span></span>)}
            </h1>
          </div>
          <div className="relative border-l border-black/15 pl-5 dark:border-white/15">
            <div className="relative mb-7 aspect-square w-full max-w-[12rem] overflow-hidden rounded-full border border-black/15 dark:border-white/15">
              <motion.div aria-hidden className="absolute inset-[13%] rounded-full border border-dashed border-[#ff7251]/70" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
              <motion.div aria-hidden className="absolute inset-[28%] rounded-full border border-[#c7ff35]" animate={reduceMotion ? undefined : { rotate: -360, scale: [1, 1.08, 1] }} transition={{ duration: 11, repeat: Infinity, ease: "linear" }} />
              <div className="absolute inset-0 grid place-items-center"><div className="grid h-12 w-12 place-items-center rounded-full bg-[#10110f] text-[.62rem] font-black uppercase tracking-widest text-[#c7ff35] dark:bg-[#f4f1e9] dark:text-[#10110f]">Build</div></div>
              <motion.div aria-hidden className="absolute inset-[8%]" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }}><span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#ff7251] shadow-[0_0_22px_8px_rgba(255,114,81,.25)]" /></motion.div>
              <div className="scan-line absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#c7ff35] to-transparent" />
            </div>
            <p className="text-sm leading-6 text-black/60 dark:text-white/60">Based in India<br />Working across time zones</p>
            <div className="mt-5 flex items-end gap-3"><p className="text-4xl font-semibold tracking-[-0.06em]">5.5+</p><span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#c7ff35] shadow-[0_0_12px_4px_rgba(199,255,53,.3)]" /></div>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-black/45 dark:text-white/45">Years shipping</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.7 }} className="grid gap-8 border-t border-black/15 pt-6 lg:grid-cols-[1fr_1.4fr] dark:border-white/15">
          <div className="flex items-end gap-3">
            <motion.div whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: .98 }}><Link href="#contact" onClick={() => { setActiveSection("Contact"); setTimeOfLastClick(Date.now()); }} className="group flex items-center gap-4 rounded-full bg-[#10110f] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_35px_-18px_rgba(0,0,0,.7)] dark:bg-[#c7ff35] dark:text-[#10110f]">
              Start a conversation <BsArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link></motion.div>
            <a href="#about" aria-label="Explore my work" className="grid place-items-center rounded-full border border-black/15 p-4 transition hover:rotate-45 hover:bg-[#c7ff35] dark:border-white/15 dark:hover:text-black"><BsArrowDownRight /></a>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-black/65 sm:text-xl dark:text-white/65">I&apos;m Partha, an engineer building polished React experiences and reliable Node.js systems. I care about the details users feel and the architecture teams depend on.</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold uppercase tracking-[0.12em]">
              <a href="/CV.pdf" download className="flex items-center gap-2 border-b border-current pb-1"><HiOutlineDocumentArrowDown /> Résumé</a>
              <a href="https://www.linkedin.com/in/partha-changmai-6a9293208/" target="_blank" rel="noreferrer" className="flex items-center gap-2 opacity-60 transition hover:opacity-100"><BsLinkedin /> LinkedIn</a>
              <a href="https://github.com/ParthaChangmai" target="_blank" rel="noreferrer" className="flex items-center gap-2 opacity-60 transition hover:opacity-100"><BsGithub /> GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 overflow-hidden border-y border-black/15 py-4 dark:border-white/15" aria-label="Core technology stack">
        <div className="animate-marquee flex w-max items-center">{[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`} className="flex items-center text-xs font-bold uppercase tracking-[0.2em]"><span className="mx-6 h-1.5 w-1.5 rounded-full bg-[#ff7251]" />{item}</span>)}</div>
      </div>
    </section>
  );
}
