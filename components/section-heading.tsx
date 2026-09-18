"use client";

import { motion } from "framer-motion";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  index?: string;
  kicker?: string;
};

export default function SectionHeading({ children, index = "01", kicker = "Selected profile" }: SectionHeadingProps) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .5 }} className="relative mb-10 grid gap-4 border-t border-black/15 pt-5 sm:mb-14 sm:grid-cols-[8rem_1fr] dark:border-white/15">
      <motion.span aria-hidden initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }} className="absolute -top-px left-0 h-[2px] w-24 origin-left bg-[#ff7251]" />
      <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .08 }} className="flex gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
        <span>{index}</span><span>{kicker}</span>
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }} className="display-text max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
        {children}
      </motion.h2>
    </motion.div>
  );
}
