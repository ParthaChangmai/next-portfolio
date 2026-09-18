"use client";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { BsGeoAltFill, BsPlayFill, BsStars } from "react-icons/bs";
import { HiOutlineBolt } from "react-icons/hi2";
import SectionHeading from "./section-heading";

const workStreams = [
  {
    eyebrow: "Content operations",
    title: "Built a content platform around video and AI-assisted publishing.",
    detail: "Developed the React and Next.js product from the ground up, then connected OpenAI, Claude, and Gemini APIs to practical content workflows.",
    outcome: "One workflow for video, content, and AI assistance",
    tags: ["React", "Next.js", "Node.js", "AI APIs"],
    visual: "content",
  },
  {
    eyebrow: "Operational intelligence",
    title: "Turned emergency information into a map-led operational view.",
    detail: "Shipped an enterprise portal that combines responsive workflows, backend services, and Google Maps context for operational alerts.",
    outcome: "Location context where decisions happen",
    tags: ["React", "REST APIs", "PostgreSQL", "Google Maps"],
    visual: "map",
  },
  {
    eyebrow: "Performance and quality",
    title: "Made large React products faster, safer, and easier to evolve.",
    detail: "Used rendering optimization, lazy loading, code splitting, accessibility improvements, and automated UI tests to strengthen production applications.",
    outcome: "20%+ faster application load time",
    tags: ["React.memo", "Code splitting", "Jest", "RTL"],
    visual: "performance",
  },
] as const;

function WorkVisual({ type, reduceMotion }: { type: (typeof workStreams)[number]["visual"]; reduceMotion: boolean | null }) {
  if (type === "content") {
    return (
      <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.7rem] bg-[#10110f] p-5 text-white shadow-[0_30px_65px_-40px_rgba(0,0,0,.9)]">
        <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-[#ff7251]" /><i className="h-2 w-2 rounded-full bg-[#c7ff35]" /><i className="h-2 w-2 rounded-full bg-white/25" /></span><span className="text-[.55rem] font-bold uppercase tracking-[.18em] text-white/35">Content engine</span></div>
        <div className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-3">
          <div className="relative grid min-h-[9rem] place-items-center overflow-hidden rounded-2xl bg-white/[.07]"><motion.div animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }} className="grid h-12 w-12 place-items-center rounded-full bg-[#c7ff35] text-xl text-black"><BsPlayFill /></motion.div><div className="absolute inset-x-3 bottom-3 h-1 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full origin-left bg-[#ff7251]" animate={reduceMotion ? undefined : { scaleX: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} /></div></div>
          <div className="space-y-3"><div className="h-10 rounded-xl bg-[#c7ff35] p-3"><div className="h-1.5 w-2/3 rounded-full bg-black/30" /></div><div className="space-y-2 rounded-xl bg-white/[.07] p-3"><div className="h-1.5 rounded-full bg-white/20" /><div className="h-1.5 w-4/5 rounded-full bg-white/10" /><div className="h-1.5 w-2/3 rounded-full bg-white/10" /></div><div className="flex items-center gap-2 text-[.55rem] font-bold uppercase tracking-wider text-[#c7ff35]"><BsStars /> AI assist</div></div>
        </div>
      </div>
    );
  }

  if (type === "map") {
    return (
      <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.7rem] bg-[#c7ff35] shadow-[0_30px_65px_-42px_rgba(80,110,0,.55)]">
        <div aria-hidden className="absolute inset-0 opacity-[.18] [background-image:linear-gradient(#10110f_1px,transparent_1px),linear-gradient(90deg,#10110f_1px,transparent_1px)] [background-size:34px_34px]" />
        <svg aria-hidden className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 500 340"><path d="M-20 240 C100 180 105 90 235 145 S380 270 530 155" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="8 8"/><path d="M75 -20 C160 80 160 235 260 370" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        {[[27,34],[65,28],[72,67]].map(([left,top], index) => <motion.span key={left} className="absolute grid h-11 w-11 place-items-center rounded-full border-4 border-[#c7ff35] bg-[#10110f] text-[#ff7251] shadow-xl" style={{ left: `${left}%`, top: `${top}%` }} animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 2.5 + index, repeat: Infinity, delay: index * .35 }}><BsGeoAltFill /></motion.span>)}
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-[#10110f] px-4 py-3 text-white"><div><p className="text-[.55rem] font-bold uppercase tracking-[.16em] text-white/40">Live operations</p><p className="mt-1 text-sm font-semibold">Map context connected</p></div><span className="h-2.5 w-2.5 rounded-full bg-[#c7ff35] shadow-[0_0_12px_3px_rgba(199,255,53,.4)]" /></div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.7rem] bg-[#ff7251] p-6 text-[#10110f] shadow-[0_30px_65px_-42px_rgba(150,50,30,.55)]">
      <div className="flex items-center justify-between"><span className="text-[.6rem] font-black uppercase tracking-[.18em]">Performance trace</span><HiOutlineBolt className="text-xl" /></div>
      <div className="mt-7 grid grid-cols-[1fr_7rem] items-end gap-5">
        <div className="flex h-32 items-end gap-2">{[44,58,52,73,68,92].map((height, index) => <motion.div key={index} className={`flex-1 rounded-t-lg ${index === 5 ? "bg-[#c7ff35]" : "bg-black/15"}`} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ delay: index * .08, duration: .55 }} />)}</div>
        <div><p className="text-5xl font-semibold tracking-[-.08em]">20%<sup className="text-xl">+</sup></p><p className="mt-2 text-[.6rem] font-black uppercase tracking-[.14em] opacity-55">Faster load time</p></div>
      </div>
      <div className="mt-6 flex items-center gap-2 border-t border-black/15 pt-4 text-[.58rem] font-black uppercase tracking-[.13em]"><span className="h-2 w-2 rounded-full bg-[#10110f]" />Optimized rendering pipeline</div>
    </div>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.15);
  const workRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: workRef, offset: ["start .75", "end .35"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const [currentRole, ...earlierRoles] = [...experiencesData].reverse();

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-[72rem] scroll-mt-28 sm:mb-40">
      <SectionHeading index="04" kicker="Selected impact">The work behind the role: products, systems, and outcomes.</SectionHeading>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 flex flex-col justify-between gap-5 border-y border-black/15 py-5 sm:flex-row sm:items-center dark:border-white/15">
        <div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#10110f] text-xl text-[#c7ff35] dark:bg-[#c7ff35] dark:text-[#10110f]">{currentRole.icon}</span><div><h3 className="font-semibold">{currentRole.title} · {currentRole.location}</h3><p className="mt-1 text-xs text-black/45 dark:text-white/45">{currentRole.date}</p></div></div>
        <span className="flex w-fit items-center gap-2 text-[.65rem] font-bold uppercase tracking-[.17em]"><motion.span animate={reduceMotion ? undefined : { scale: [1, 1.5, 1], opacity: [1, .5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-2 w-2 rounded-full bg-[#c7ff35] ring-4 ring-[#c7ff35]/15" />Currently building</span>
      </motion.div>

      <div ref={workRef} className="relative">
        <motion.div aria-hidden className="absolute bottom-0 left-0 top-0 hidden w-[2px] origin-top bg-[#ff7251] sm:block" style={{ scaleY: progress }} />
        {workStreams.map((work, index) => (
          <motion.article key={work.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .7, delay: index * .06, ease: [0.16, 1, 0.3, 1] }} className="group grid gap-8 border-b border-black/15 py-10 first:border-t sm:grid-cols-[3rem_1fr] sm:pl-6 lg:grid-cols-[3rem_1fr_1fr] lg:items-center lg:gap-12 lg:py-14 dark:border-white/15">
            <div className="flex items-center gap-3 sm:block"><span className="text-xs font-black text-[#ff7251]">0{index + 1}</span><span className="mt-3 hidden h-px w-6 bg-[#ff7251] transition-all group-hover:w-10 sm:block" /></div>
            <div className={index % 2 === 1 ? "lg:order-3" : ""}>
              <p className="text-[.65rem] font-black uppercase tracking-[.2em] text-black/40 dark:text-white/40">{work.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-4xl">{work.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/58 dark:text-white/58">{work.detail}</p>
              <div className="mt-6 flex items-start gap-3 border-l-2 border-[#c7ff35] pl-4"><span className="text-sm font-semibold">{work.outcome}</span></div>
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">{work.tags.map(tag => <span key={tag} className="text-[.62rem] font-bold uppercase tracking-[.13em] text-black/40 dark:text-white/40">{tag}</span>)}</div>
            </div>
            <motion.div whileHover={{ y: -7, rotate: index % 2 === 0 ? .5 : -.5 }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className={index % 2 === 1 ? "lg:order-2" : ""}><WorkVisual type={work.visual} reduceMotion={reduceMotion} /></motion.div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 border-t border-black/15 pt-6 lg:grid-cols-[13rem_1fr] dark:border-white/15">
        <div><p className="text-[.65rem] font-black uppercase tracking-[.2em] text-[#ff7251]">Career context</p><p className="mt-2 text-sm leading-6 text-black/45 dark:text-white/45">The foundation behind the selected work.</p></div>
        <div className="grid gap-px overflow-hidden border border-black/15 bg-black/15 sm:grid-cols-2 dark:border-white/15 dark:bg-white/15">
          {earlierRoles.map((role, index) => <motion.div key={role.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="bg-[#f4f1e9] p-6 dark:bg-[#090a08]"><div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/15 text-lg dark:border-white/15">{role.icon}</span><div><p className="text-[.6rem] font-bold uppercase tracking-[.15em] text-black/40 dark:text-white/40">{role.date}</p><h4 className="mt-3 font-semibold">{role.title}</h4><p className="mt-1 text-xs leading-5 text-black/45 dark:text-white/45">{role.location}</p></div></div></motion.div>)}
        </div>
      </div>
    </section>
  );
}
