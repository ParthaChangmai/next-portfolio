import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <p className="eyebrow mb-3">Portfolio</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
