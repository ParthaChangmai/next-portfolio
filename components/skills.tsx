"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useReducedMotion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import SectionHeading from "./section-heading";

const interfaceNames = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Redux", "Next.js", "Tailwind", "Chakra", "Framer Motion"];
const systemNames = ["Node.js", "REST APIs", "PostgreSQL", "Docker"];
const qualityNames = ["Jest", "Git & GitHub"];

const selectSkills = (names: readonly string[]) => skillsData.filter((skill) => names.includes(skill.name));

const interfaceSkills = selectSkills(interfaceNames);
const systemSkills = selectSkills(systemNames);
const qualitySkills = selectSkills(qualityNames);

function SkillPill({ skill, light = false }: { skill: (typeof skillsData)[number]; light?: boolean }) {
  return (
    <motion.li whileHover={{ y: -4, scale: 1.04 }} className={`group/pill flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold backdrop-blur-sm ${light ? "border-black/15 bg-black/[.055]" : "border-white/15 bg-white/[.07] text-white"}`}>
      <motion.span whileHover={{ rotate: 15 }} className="text-base opacity-65 group-hover/pill:opacity-100"><skill.icon /></motion.span>{skill.name}
    </motion.li>
  );
}

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.2);
  const reduceMotion = useReducedMotion();
  const coreNodes = [
    skillsData.find((skill) => skill.name === "React.js")!,
    skillsData.find((skill) => skill.name === "Node.js")!,
    skillsData.find((skill) => skill.name === "TypeScript")!,
  ];

  return (
    <section id="skills" ref={ref} className="mb-28 w-full max-w-[72rem] scroll-mt-28 sm:mb-40">
      <SectionHeading index="02" kicker="Capabilities">One connected system, from interface craft to production infrastructure.</SectionHeading>

      <div className="grid gap-4 lg:grid-cols-12">
        <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }} className="group relative min-h-[31rem] overflow-hidden rounded-[2rem] bg-[#10110f] p-7 text-white shadow-[0_35px_80px_-52px_rgba(0,0,0,.95)] sm:p-9 lg:col-span-7">
          <div aria-hidden className="absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:38px_38px]" />
          <motion.div aria-hidden className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#ff7251]/18 blur-[85px]" animate={reduceMotion ? undefined : { x: [0, 100, 20, 0], y: [0, 60, 120, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
          <div className="relative z-10 flex items-center justify-between"><div><p className="text-[.65rem] font-bold uppercase tracking-[.2em] text-[#c7ff35]">Core engineering loop</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">Design. Build. Connect.</h3></div><span className="hidden rounded-full border border-white/15 px-3 py-2 text-[.6rem] font-bold uppercase tracking-[.18em] text-white/50 sm:block">Live stack map</span></div>

          <div className="relative z-10 mx-auto mt-8 aspect-[1.25/1] w-full max-w-[31rem]">
            <div aria-hidden className="absolute left-1/2 top-1/2 h-[72%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/15" />
            <motion.div aria-hidden className="absolute left-1/2 top-1/2 h-[52%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-[#ff7251]/50" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
            <div aria-hidden className="absolute left-[25%] right-[25%] top-1/2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div aria-hidden className="absolute bottom-[22%] left-1/2 top-[22%] w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />

            <motion.div className="absolute left-1/2 top-1/2 z-20 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#c7ff35]/50 bg-[#c7ff35] text-center text-[#10110f] shadow-[0_0_60px_rgba(199,255,53,.18)]" animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }} transition={{ duration: 3, repeat: Infinity }}><div><p className="text-2xl font-black tracking-[-.06em]">FULL</p><p className="text-[.58rem] font-black uppercase tracking-[.24em]">Stack</p></div></motion.div>

            {coreNodes.map((skill, index) => {
              const positions = ["left-[7%] top-[14%]", "right-[5%] top-[22%]", "bottom-[5%] left-[15%]"];
              return <motion.div key={skill.name} className={`absolute ${positions[index]} z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[.08] p-3 pr-4 shadow-xl backdrop-blur-xl`} animate={reduceMotion ? undefined : { y: index === 1 ? [0, 9, 0] : [0, -8, 0], x: index === 2 ? [0, 7, 0] : [0, -4, 0] }} transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-xl text-[#c7ff35]"><skill.icon /></span><div><p className="text-xs font-bold">{skill.name}</p><p className="mt-0.5 text-[.55rem] uppercase tracking-[.15em] text-white/35">Active layer</p></div></motion.div>;
            })}
            <div className="scan-line absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#c7ff35] to-transparent opacity-60" />
          </div>

          <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-5 text-[.62rem] font-bold uppercase tracking-[.16em] text-white/40"><span>UI → API → Data</span><span className="flex items-center gap-2 text-[#c7ff35]"><span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />System online</span></div>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }} className="group relative min-h-[31rem] overflow-hidden rounded-[2rem] bg-[#c7ff35] p-7 text-[#10110f] sm:p-9 lg:col-span-5">
          <span aria-hidden className="absolute -bottom-12 -right-7 text-[12rem] font-black leading-none tracking-[-.12em] opacity-[.07]">UI</span>
          <div className="relative z-10 flex items-start justify-between"><div><p className="text-[.65rem] font-black uppercase tracking-[.2em]">01 · Interface systems</p><p className="mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-.045em]">Accessible interfaces with speed, clarity, and a reusable visual language.</p></div><BsArrowUpRight className="mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
          <div className="relative z-10 mt-8 flex items-end gap-3 border-b border-black/15 pb-5"><span className="text-7xl font-semibold leading-none tracking-[-.08em]">10</span><span className="mb-2 text-[.62rem] font-black uppercase tracking-[.16em] opacity-50">Interface<br />capabilities</span></div>
          <ul className="relative z-10 mt-7 flex flex-wrap gap-2">{interfaceSkills.map((skill) => <SkillPill key={skill.name} skill={skill} light />)}</ul>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }} className="group relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-[#ff7251] p-7 text-[#10110f] sm:p-9 lg:col-span-5">
          <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[2.8rem] border-black/10 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110" />
          <div className="relative z-10 flex items-start justify-between"><div><p className="text-[.65rem] font-black uppercase tracking-[.2em]">02 · Application systems</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.05em]">Request to response.</h3></div><BsArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
          <div className="relative z-10 mt-9 flex items-center gap-2 text-[.62rem] font-black uppercase tracking-[.1em]"><span className="rounded-full bg-[#10110f] px-3 py-2 text-white">Client</span><span className="h-px flex-1 bg-black/25" /><motion.span animate={reduceMotion ? undefined : { x: [-4, 4, -4] }} transition={{ duration: 2, repeat: Infinity }} className="text-lg">→</motion.span><span className="h-px flex-1 bg-black/25" /><span className="rounded-full bg-[#10110f] px-3 py-2 text-white">Data</span></div>
          <ul className="relative z-10 mt-10 flex flex-wrap gap-2">{systemSkills.map((skill) => <SkillPill key={skill.name} skill={skill} light />)}</ul>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, delay: .08, ease: [0.16, 1, 0.3, 1] }} className="group relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-black/15 bg-white/45 p-7 backdrop-blur-xl sm:p-9 lg:col-span-7 dark:border-white/15 dark:bg-white/[.04]">
          <div aria-hidden className="absolute right-0 top-0 h-full w-1/2 opacity-[.06] [background-image:radial-gradient(circle,#10110f_1px,transparent_1px)] [background-size:18px_18px] dark:invert" />
          <div className="relative z-10 flex items-start justify-between"><div><p className="text-[.65rem] font-black uppercase tracking-[.2em] text-[#ff7251]">03 · Confidence layer</p><h3 className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-[-.05em]">Quality is part of the build, not a final checkpoint.</h3></div><BsArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
          <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">{qualitySkills.map((skill, index) => <motion.div key={skill.name} whileHover={{ x: 7 }} className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/45 p-4 dark:border-white/10 dark:bg-white/[.04]"><span className={`grid h-12 w-12 place-items-center rounded-2xl text-xl ${index === 0 ? "bg-[#c7ff35] text-black" : "bg-[#10110f] text-white dark:bg-white dark:text-black"}`}><skill.icon /></span><div><p className="font-semibold">{skill.name}</p><p className="mt-1 text-xs text-black/45 dark:text-white/45">{index === 0 ? "Test behavior" : "Ship together"}</p></div></motion.div>)}</div>
          <p className="relative z-10 mt-7 text-sm leading-6 text-black/50 dark:text-white/50">Automated checks, focused reviews, and predictable version control keep releases dependable.</p>
        </motion.article>
      </div>
    </section>
  );
}
