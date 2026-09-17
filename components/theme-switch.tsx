"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle color theme"
      className="surface fixed bottom-5 right-5 z-50 flex h-[3rem] w-[3rem] items-center justify-center rounded-full transition-all hover:-translate-y-1 active:scale-95"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
