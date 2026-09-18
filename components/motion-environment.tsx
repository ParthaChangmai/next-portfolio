"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function MotionEnvironment() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-400);
  const pointerY = useMotionValue(-400);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${smoothX}px ${smoothY}px, rgba(199,255,53,.12), transparent 72%)`;
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    if (reduceMotion) return;
    const updatePointer = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };
    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-[1] hidden mix-blend-multiply md:block dark:mix-blend-screen" style={{ background: spotlight }} />
      <motion.div aria-hidden className="fixed left-0 top-0 z-[1000] h-[3px] w-full origin-left bg-[#ff7251]" style={{ scaleX: progress }} />
      <div aria-hidden className="noise-layer" />
      <motion.div aria-hidden className="pointer-events-none fixed -right-40 top-[18%] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#c7ff35]/10 blur-[100px]" animate={reduceMotion ? undefined : { x: [0, -80, 20, 0], y: [0, 70, -30, 0], scale: [1, 1.18, 0.92, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="pointer-events-none fixed -left-48 bottom-[5%] -z-10 h-[26rem] w-[26rem] rounded-full bg-[#ff7251]/10 blur-[110px]" animate={reduceMotion ? undefined : { x: [0, 100, -20, 0], y: [0, -60, 35, 0], scale: [1, 0.9, 1.2, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
    </>
  );
}
