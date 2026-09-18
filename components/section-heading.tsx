import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  index?: string;
  kicker?: string;
};

export default function SectionHeading({ children, index = "01", kicker = "Selected profile" }: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-4 border-t border-black/15 pt-5 sm:mb-14 sm:grid-cols-[8rem_1fr] dark:border-white/15">
      <div className="flex gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
        <span>{index}</span><span>{kicker}</span>
      </div>
      <h2 className="display-text max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
        {children}
      </h2>
    </div>
  );
}
