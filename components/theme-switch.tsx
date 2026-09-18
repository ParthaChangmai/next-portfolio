"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return <button aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#f4f1e9]/85 text-sm shadow-lg backdrop-blur-xl transition hover:-translate-y-1 dark:border-white/10 dark:bg-[#171815]/85" onClick={toggleTheme}>{theme === "light" ? <BsMoonStars /> : <BsSun />}</button>;
}
