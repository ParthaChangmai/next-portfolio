"use client";

import { projectsData } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BsArrowUpRight, BsCheck2, BsGithub, BsXLg } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineCpuChip, HiOutlineCurrencyDollar, HiOutlineMusicalNote } from "react-icons/hi2";

type ProjectProps = (typeof projectsData)[number] & { index: number };

function FinanceVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return <div className="relative min-h-[20rem] overflow-hidden rounded-[1.7rem] bg-[#e8f88d] p-4 text-[#171917] sm:p-5"><div className="grid min-h-[18rem] grid-cols-[3.5rem_1fr] overflow-hidden rounded-2xl bg-[#f4f3ef] shadow-2xl"><div className="bg-[#171917] p-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#dff47a] text-sm"><HiOutlineCurrencyDollar /></span><div className="mt-8 space-y-3">{[1,2,3,4].map(item=><span key={item} className={`block h-7 rounded-md ${item===1?"bg-white/15":"bg-white/[.055]"}`} />)}</div></div><div className="p-4"><div className="flex items-center justify-between"><div><p className="text-[.5rem] font-bold uppercase tracking-wider opacity-40">Financial overview</p><p className="mt-1 text-lg font-semibold">••••••••</p></div><span className="rounded-full bg-white px-2 py-1 text-[.48rem] font-bold">Privacy mode</span></div><div className="mt-4 grid grid-cols-3 gap-2">{["Income","Spending","Savings"].map((label,index)=><div key={label} className={`rounded-lg p-2 ${index===0?"bg-[#171917] text-white":"bg-white"}`}><p className="text-[.43rem] uppercase opacity-45">{label}</p><p className="mt-1 text-[.65rem] font-bold">••••</p></div>)}</div><div className="mt-3 rounded-xl bg-white p-3"><div className="flex items-center justify-between text-[.48rem] font-bold"><span>Cash flow</span><span className="opacity-35">Monthly view</span></div><div className="mt-3 flex h-20 items-end gap-1.5">{[45,62,54,71,60,76,69,84,74,91,82,95].map((height,index)=><motion.i key={index} initial={{height:0}} whileInView={{height:`${height}%`}} viewport={{once:true}} transition={{delay:index*.04}} className={`flex-1 rounded-t-sm ${index>8?"bg-[#1f6f5c]":"bg-[#dff47a]"}`} />)}</div></div></div></div><motion.span aria-hidden animate={reduceMotion?undefined:{x:[-20,16,-20],y:[0,-8,0]}} transition={{duration:5,repeat:Infinity}} className="absolute -bottom-6 -right-5 h-24 w-24 rounded-full bg-[#ff7251]/35 blur-2xl" /></div>;
}

function JobVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return <div className="relative min-h-[20rem] overflow-hidden rounded-[1.7rem] bg-[#dfe7ff] p-5 text-[#15182a]"><div aria-hidden className="absolute inset-0 opacity-[.18] [background-image:radial-gradient(circle,#15182a_1px,transparent_1px)] [background-size:18px_18px]" /><div className="relative z-10 flex items-center justify-between"><span className="flex items-center gap-2 text-[.55rem] font-black uppercase tracking-[.15em]"><HiOutlineBriefcase /> Application pipeline</span><span className="rounded-full bg-white/65 px-2 py-1 text-[.48rem] font-bold">Private workspace</span></div><div className="relative z-10 mt-5 grid grid-cols-3 gap-2">{["Saved","Interviewing","Offer"].map((title,column)=><div key={title} className="rounded-xl bg-white/55 p-2.5 backdrop-blur"><p className="text-[.48rem] font-bold uppercase tracking-wider opacity-45">{title}</p><div className="mt-3 space-y-2">{Array.from({length:column===0?3:2}).map((_,index)=><motion.div key={index} animate={reduceMotion?undefined:{y:index===0&&column===1?[0,-4,0]:0}} transition={{duration:3,repeat:Infinity}} className="rounded-lg bg-white p-2 shadow-sm"><span className={`block h-5 w-5 rounded-md ${["bg-[#ff826c]","bg-[#687bf4]","bg-[#dff47a]"][column]}`} /><span className="mt-2 block h-1.5 rounded-full bg-black/15" /><span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-black/[.07]" /></motion.div>)}</div></div>)}</div><div className="relative z-10 mt-3 flex items-center justify-between rounded-xl bg-[#15182a] p-3 text-white"><div><p className="text-[.48rem] uppercase tracking-wider text-white/40">Resume fit</p><p className="mt-1 text-xs font-semibold">AI match analysis</p></div><div className="grid h-11 w-11 place-items-center rounded-full border-4 border-[#dff47a] text-[.55rem] font-black uppercase">Ready</div></div></div>;
}

function MusicVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return <div className="relative min-h-[20rem] overflow-hidden rounded-[1.7rem] bg-[#181126] p-5 text-white"><div className="absolute -right-14 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-[#fc5c7d] via-[#8e54e9] to-[#39c6f4] blur-2xl opacity-55" /><div className="relative z-10 flex items-center justify-between"><span className="flex items-center gap-2 text-[.55rem] font-bold uppercase tracking-[.16em] text-white/55"><HiOutlineMusicalNote /> Global pulse</span><span className="text-[.5rem] text-[#f9c6ff]">Live + snapshots</span></div><div className="relative z-10 mt-5 grid grid-cols-[1fr_.9fr] gap-4"><div><div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff8060] via-[#d03791] to-[#4727a8]"><motion.div animate={reduceMotion?undefined:{rotate:360}} transition={{duration:18,repeat:Infinity,ease:"linear"}} className="absolute inset-[16%] rounded-full border-[1.8rem] border-black/55"><span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4e9cd]" /></motion.div><span className="absolute bottom-3 left-3 rounded-full bg-black/45 px-2 py-1 text-[.45rem] font-bold backdrop-blur">GLOBAL CHARTS</span></div><p className="mt-3 text-sm font-semibold">World chart discovery</p><p className="mt-1 text-[.55rem] text-white/40">Live charts · movement · metadata</p></div><div className="space-y-2">{["APT.","Birds of a Feather","Die With a Smile","Espresso"].map((track,index)=><motion.div key={track} animate={reduceMotion?undefined:{x:index===0?[0,4,0]:0}} transition={{duration:3,repeat:Infinity}} className={`flex items-center gap-2 rounded-xl p-2 ${index===0?"bg-white/15":"bg-white/[.055]"}`}><span className="w-3 text-[.5rem] font-bold text-white/30">0{index+1}</span><span className={`h-8 w-8 rounded-lg bg-gradient-to-br ${["from-pink-400 to-violet-700","from-cyan-300 to-blue-700","from-amber-300 to-red-600","from-lime-300 to-emerald-700"][index]}`} /><div className="min-w-0"><p className="truncate text-[.55rem] font-semibold">{track}</p><p className="mt-1 text-[.44rem] text-white/30">Snapshot data</p></div></motion.div>)}</div></div></div>;
}

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: ProjectProps;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[1200] grid place-items-center bg-[#090a08]/80 p-3 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.index}-title`}
        initial={{ opacity: 0, y: 28, scale: .97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: .98 }}
        transition={{ duration: .28, ease: [.16, 1, .3, 1] }}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] bg-[#f4f1e9] text-[#10110f] shadow-2xl dark:bg-[#10110f] dark:text-white"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.title} details`}
          className="sticky right-4 top-4 z-20 ml-auto mr-4 mt-4 grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-[#f4f1e9]/90 text-sm backdrop-blur transition hover:rotate-90 dark:border-white/15 dark:bg-[#171815]"
        >
          <BsXLg />
        </button>

        <div className="px-6 pb-8 pt-1 sm:px-10 sm:pb-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-[#ff7251]">0{project.index + 1}</span>
            <p className="eyebrow">{project.eyebrow}</p>
          </div>
          <h3 id={`project-${project.index}-title`} className="mt-5 text-4xl font-semibold leading-none tracking-[-.06em] sm:text-6xl">{project.title}</h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-black/60 dark:text-white/60">{project.description}</p>

          <div className="mt-8 grid overflow-hidden rounded-[1.4rem] border border-black/10 bg-white/35 lg:grid-cols-[1.2fr_1fr] dark:border-white/10 dark:bg-white/[.035]">
            <div className="p-6 sm:p-8 lg:border-r lg:border-black/10 dark:lg:border-white/10">
              <p className="eyebrow flex items-center gap-2"><BsCheck2 className="text-base text-[#ff7251]" /> What it includes</p>
              <ul className="mt-6 space-y-4">
                {project.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3 text-sm leading-6 text-black/65 dark:text-white/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7ff35] ring-4 ring-[#c7ff35]/15" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-black/10 p-6 sm:p-8 lg:border-t-0 dark:border-white/10">
              <p className="eyebrow flex items-center gap-2"><HiOutlineCpuChip className="text-base text-[#ff7251]" /> How it is built</p>
              <p className="mt-6 text-sm leading-7 text-black/60 dark:text-white/60">{project.architecture}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {project.tags.map((tag) => <li key={tag} className="text-[.62rem] font-bold uppercase tracking-[.13em] text-black/45 dark:text-white/45">{tag}</li>)}
            </ul>
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#10110f] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-1 dark:bg-[#c7ff35] dark:text-[#10110f]">
              <BsGithub /> Open source code <BsArrowUpRight />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Project({
  title,
  eyebrow,
  description,
  outcome,
  capabilities,
  architecture,
  tags,
  repoUrl,
  visual,
  index,
}: ProjectProps) {
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const detailsButtonRef = useRef<HTMLButtonElement>(null);

  const closeDetails = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => detailsButtonRef.current?.focus());
  };

  const project = { title, eyebrow, description, outcome, capabilities, architecture, tags, repoUrl, visual, index } as ProjectProps;

  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 45 }, visible: { opacity: 1, y: 0, transition: { duration: .65, delay: index * .1, ease: [.16, 1, .3, 1] } } }}
      className="group border-b border-black/15 py-12 first:border-t lg:py-20 dark:border-white/15"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.12fr] lg:items-center lg:gap-14">
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-[#ff7251]">0{index + 1}</span>
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <h3 className="mt-6 text-4xl font-semibold leading-[.98] tracking-[-.06em] sm:text-5xl">{title}</h3>
          <p className="mt-5 max-w-xl leading-7 text-black/58 dark:text-white/58">{description}</p>
          <p className="mt-5 border-l-2 border-[#c7ff35] pl-4 text-sm font-semibold leading-6">{outcome}</p>
          <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
            {tags.map((tag) => <li key={tag} className="text-[.62rem] font-bold uppercase tracking-[.13em] text-black/40 dark:text-white/40">{tag}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <button ref={detailsButtonRef} type="button" onClick={() => setIsOpen(true)} className="inline-flex items-center gap-3 rounded-full bg-[#10110f] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-1 dark:bg-[#c7ff35] dark:text-[#10110f]">
              View more <BsArrowUpRight />
            </button>
            <a href={repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-xs font-bold transition hover:border-black/40 dark:border-white/15 dark:hover:border-white/40">
              <BsGithub /> Repository
            </a>
          </div>
        </div>

        <motion.div
          whileHover={{ y: -7, rotate: index % 2 === 0 ? .45 : -.45 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className={index % 2 === 1 ? "lg:order-1" : ""}
        >
          {visual === "finance" ? <FinanceVisual reduceMotion={reduceMotion} /> : visual === "jobs" ? <JobVisual reduceMotion={reduceMotion} /> : <MusicVisual reduceMotion={reduceMotion} />}
        </motion.div>
      </div>

      {isOpen && createPortal(<ProjectDetailsModal project={project} onClose={closeDetails} />, document.body)}
    </motion.article>
  );
}
