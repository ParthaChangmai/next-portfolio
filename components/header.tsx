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
        className="fixed left-1/2 top-3 flex h-[3.75rem] w-[calc(100%_-_1.5rem)] max-w-[72rem] -translate-x-1/2 items-center rounded-2xl border border-black/10 bg-[#f4f1e9]/85 px-3 shadow-[0_12px_50px_-28px_rgba(0,0,0,.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0d0e0c]/85 sm:top-5 sm:px-5"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <motion.div whileHover={{ rotate: -8, scale: 1.08 }} whileTap={{ scale: .94 }} className="relative z-10 mr-auto hidden sm:block"><Link href="#home" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#10110f] text-xs font-black text-[#c7ff35] shadow-[0_8px_20px_-12px_rgba(0,0,0,.8)] dark:bg-[#c7ff35] dark:text-[#10110f]">PC</Link></motion.div>
        <a href="#contact" className="relative z-10 ml-auto hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] sm:flex"><span className="h-2 w-2 rounded-full bg-[#c7ff35] shadow-[0_0_0_4px_rgba(199,255,53,.14)]" />Available</a>
      </motion.div>

      <nav className="fixed left-1/2 top-[1.12rem] flex h-11 -translate-x-1/2 sm:top-[1.58rem]">
        <ul className="flex items-center justify-center gap-0.5 text-[0.7rem] font-bold uppercase tracking-[0.09em] text-black/50 dark:text-white/50">
          {links.map((link) => {
            return (
              <motion.li
                className={`${link.name === "Home" || link.name === "Contact" ? "hidden sm:flex" : "flex"} relative h-3/4 items-center justify-center`}
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {link.name === activeSection ? (
                  <Link
                    className="flex w-full items-center justify-center px-2.5 py-3 text-black sm:px-3 dark:text-white"
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="absolute inset-x-2 bottom-1 -z-10 h-0.5 rounded-full bg-[#ff7251] sm:inset-x-3"
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
                    className="flex w-full items-center justify-center px-2.5 py-3 transition hover:text-black sm:px-3 dark:hover:text-white"
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
