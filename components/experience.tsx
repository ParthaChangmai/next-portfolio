"use client";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import SectionHeading from "./section-heading";

const roleMeta = [
  { number: "01", label: "Current chapter" },
  { number: "02", label: "Product delivery" },
  { number: "03", label: "Foundation" },
];

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ["start .8", "end .25"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });
  const gaugeRotation = useTransform(progress, [0, 1], [-125, 125]);
  const [currentRole, ...earlierRoles] = [...experiencesData].reverse();

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-[72rem] scroll-mt-28 sm:mb-40">
      <SectionHeading index="03" kicker="Experience">A career built around shipping, learning, and measurable product impact.</SectionHeading>

      <div ref={journeyRef} className="relative grid gap-5 lg:grid-cols-[19rem_1fr] lg:items-start">
        <div className="relative lg:sticky lg:top-28">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }} className="relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-[#c7ff35] p-7 text-[#10110f] shadow-[0_30px_70px_-42px_rgba(80,110,0,.7)]">
            <div aria-hidden className="absolute inset-0 opacity-[.13] [background-image:linear-gradient(#10110f_1px,transparent_1px),linear-gradient(90deg,#10110f_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative z-10 flex items-center justify-between text-[.65rem] font-black uppercase tracking-[.2em]"><span>Career signal</span><span>2019—Now</span></div>

            <div className="relative z-10 mx-auto mt-8 aspect-square w-[13rem]">
              <div className="absolute inset-0 rounded-full border border-black/20" />
              <div className="absolute inset-[12%] rounded-full border border-dashed border-black/30" />
              <div className="absolute inset-[24%] rounded-full bg-[#10110f] shadow-[0_18px_45px_-20px_rgba(0,0,0,.8)]" />
              <motion.div className="absolute inset-[5%]" style={{ rotate: gaugeRotation }}><span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#c7ff35] bg-[#ff7251] shadow-[0_0_22px_rgba(255,114,81,.75)]" /></motion.div>
              <div className="absolute inset-0 grid place-items-center text-center text-white"><div><p className="text-5xl font-semibold tracking-[-.08em]">5.5+</p><p className="mt-1 text-[.6rem] font-black uppercase tracking-[.22em] text-white/50">Years</p></div></div>
            </div>

            <div className="relative z-10 mt-7">
              <p className="text-2xl font-semibold leading-tight tracking-[-.045em]">From web fundamentals to full stack product ownership.</p>
              <div className="mt-6 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#10110f]" /><span className="h-2 w-8 rounded-full bg-[#10110f]/30" /><span className="h-2 w-2 rounded-full bg-[#ff7251]" /></div>
            </div>
          </motion.div>

          <div className="mx-7 hidden h-28 border-l border-black/15 lg:block dark:border-white/15"><motion.div className="h-full w-px origin-top bg-[#ff7251]" style={{ scaleY: progress }} /></div>
        </div>

        <div className="space-y-5">
          <motion.article initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[2rem] bg-[#10110f] p-7 text-white shadow-[0_30px_80px_-50px_rgba(0,0,0,.9)] sm:p-10">
            <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[3rem] border-[#ff7251]/85 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110" />
            <div aria-hidden className="absolute bottom-0 left-[30%] h-40 w-40 rounded-full bg-[#c7ff35]/10 blur-[70px]" />
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3"><motion.span whileHover={{ rotate: 12, scale: 1.1 }} className="grid h-11 w-11 place-items-center rounded-full bg-[#c7ff35] text-xl text-[#10110f]">{currentRole.icon}</motion.span><div><p className="text-[.65rem] font-bold uppercase tracking-[.2em] text-[#c7ff35]">{roleMeta[0].number} · {roleMeta[0].label}</p><p className="mt-1 text-xs text-white/45">{currentRole.date}</p></div></div>
              <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-[.65rem] font-bold uppercase tracking-[.16em]"><motion.span animate={{ scale: [1, 1.5, 1], opacity: [1, .5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-2 w-2 rounded-full bg-[#c7ff35]" />Currently building</span>
            </div>

            <div className="relative z-10 mt-10 grid gap-8 border-b border-white/15 pb-9 md:grid-cols-[1fr_11rem] md:items-end">
              <div><p className="text-sm font-semibold text-white/50">{currentRole.location}</p><h3 className="mt-2 text-4xl font-semibold leading-none tracking-[-.06em] sm:text-5xl">{currentRole.title}</h3></div>
              <div className="rounded-2xl border border-white/15 bg-white/[.06] p-4"><p className="text-4xl font-semibold tracking-[-.06em] text-[#c7ff35]">20%+</p><p className="mt-1 text-xs leading-5 text-white/50">Faster application load time</p></div>
            </div>

            <ul className="relative z-10 mt-8 grid gap-x-8 gap-y-4 md:grid-cols-2">
              {currentRole.description.map((point, index) => <motion.li key={point} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .08 * index }} className="flex gap-3 text-sm leading-6 text-white/62"><span className="mt-[.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff7251]" />{point}</motion.li>)}
            </ul>
            <div className="relative z-10 mt-9 flex flex-wrap gap-2">{["React", "Next.js", "Node.js", "PostgreSQL", "AI APIs"].map(tag => <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 text-[.65rem] font-bold uppercase tracking-[.1em] text-white/55">{tag}</span>)}</div>
          </motion.article>

          <div className="grid gap-5 md:grid-cols-2">
            {earlierRoles.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6, delay: index * .12, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -8, rotate: index === 0 ? -.5 : .5 }} className="group relative flex min-h-[24rem] flex-col overflow-hidden rounded-[2rem] border border-black/15 bg-white/40 p-7 backdrop-blur-sm dark:border-white/15 dark:bg-white/[.035]">
                <span aria-hidden className="absolute -right-3 -top-8 text-[8rem] font-black leading-none tracking-[-.1em] text-black/[.035] transition group-hover:text-[#ff7251]/10 dark:text-white/[.035]">{roleMeta[index + 1].number}</span>
                <div className="relative z-10 flex items-center justify-between"><motion.span whileHover={{ rotate: -12, scale: 1.1 }} className="grid h-11 w-11 place-items-center rounded-full border border-black/15 text-lg group-hover:border-[#ff7251] group-hover:bg-[#ff7251] group-hover:text-white dark:border-white/15">{item.icon}</motion.span><BsArrowUpRight className="opacity-30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" /></div>
                <div className="relative z-10 mt-8"><p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-[#ff7251]">{roleMeta[index + 1].label}</p><p className="mt-2 text-xs text-black/40 dark:text-white/40">{item.date}</p><h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-.045em]">{item.title}</h3><p className="mt-2 text-sm text-black/45 dark:text-white/45">{item.location}</p></div>
                <ul className="relative z-10 mt-auto space-y-3 pt-7">{item.description.map(point => <li key={point} className="flex gap-3 text-sm leading-6 text-black/60 dark:text-white/60"><span className="mt-[.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7ff35] ring-1 ring-black/15" />{point}</li>)}</ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
