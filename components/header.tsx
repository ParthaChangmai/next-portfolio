"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full border-b border-slate-900/10 bg-[#f7f8f5]/90 shadow-sm backdrop-blur-xl sm:top-5 sm:h-[3.5rem] sm:w-[38rem] sm:rounded-full sm:border dark:border-white/10 dark:bg-[#0d110f]/90"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.55rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.82rem] font-semibold text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-2">
          {links.map((link) => {
            return (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {link.name === activeSection ? (
                  <Link
                    className="flex w-full items-center justify-center px-4 py-3 text-slate-950 transition dark:text-white"
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-full bg-lime-300/70 dark:bg-lime-300/15"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                ) : (
                  <Link
                    className="flex w-full items-center justify-center px-4 py-3 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
