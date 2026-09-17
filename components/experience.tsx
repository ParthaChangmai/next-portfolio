"use client";

import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-[68rem] scroll-mt-28 sm:mb-36">
      <SectionHeading>Experience and impact</SectionHeading>
      <VerticalTimeline lineColor="">
        {[...experiencesData].reverse().map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.045)",
                boxShadow: "0 20px 60px -40px rgba(15,23,42,.45)",
                border: theme === "light" ? "1px solid rgba(15,23,42,.1)" : "1px solid rgba(255,255,255,.1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid #334155",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#334155",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="!mt-1 font-semibold text-lime-700 dark:text-lime-300">{item.location}</p>

              {item.description.map((el, i) => {
                return (
                  <p
                    key={i}
                    className="!mt-3 !font-normal leading-6 text-slate-600 dark:text-slate-300"
                  >
                    {el}
                  </p>
                );
              })}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
