"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  return (
    <motion.section id="contact" ref={ref} className="relative mb-12 w-full max-w-[72rem] overflow-hidden rounded-[2rem] bg-[#10110f] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[3.5rem] border-[#c7ff35]/90" animate={{ rotate: 360, scale: [1, 1.06, 1] }} transition={{ rotate: { duration: 24, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} />
      <motion.div aria-hidden className="absolute -bottom-28 left-[35%] h-64 w-64 rounded-full bg-[#ff7251]/20 blur-[90px]" animate={{ x: [-40, 80, -40] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7ff35]">05 · Let&apos;s talk</p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }} className="display-text mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-6xl">Have a hard problem worth solving?</motion.h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-white/60">I&apos;m open to frontend and full stack roles where product quality and engineering depth both matter.</p>
          <a className="mt-8 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-bold" href="mailto:partha.partha.changmai@gmail.com">partha.partha.changmai@gmail.com <BsArrowUpRight /></a>
        </div>
        <form className="grid content-start gap-3" action={async (formData) => { const { error } = await sendEmail(formData); if (error) { toast.error(error); return; } toast.success("Message sent — I'll get back to you soon."); }}>
          <label className="text-xs font-bold uppercase tracking-[0.16em] text-white/45" htmlFor="senderEmail">Your email</label>
          <input id="senderEmail" className="mb-4 h-14 border-0 border-b border-white/20 bg-transparent px-0 text-white outline-none transition placeholder:text-white/25 focus:border-[#c7ff35] focus:ring-0" name="senderEmail" type="email" required maxLength={500} placeholder="you@company.com" />
          <label className="text-xs font-bold uppercase tracking-[0.16em] text-white/45" htmlFor="message">Tell me about the role or project</label>
          <textarea id="message" className="mb-5 h-36 resize-none border-0 border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#c7ff35] focus:ring-0" name="message" placeholder="What are you building?" required maxLength={5000} />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
