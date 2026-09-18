"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Loader from "@/components/loader";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useTheme } from "@/context/theme-context";

export default function Home() {
  const { isLoading } = useTheme();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="flex flex-col items-center px-4 sm:px-6">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
