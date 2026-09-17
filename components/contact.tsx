"use client";

// import { sendEmail } from "@/actions/sendEmail";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="surface mb-20 w-[min(100%,48rem)] rounded-[2rem] px-6 py-10 text-center sm:mb-28 sm:px-12 sm:py-12"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <SectionHeading>Let&apos;s build something useful</SectionHeading>

      <p className="-mt-6 text-slate-600 dark:text-slate-300">
        Have a frontend or full stack role in mind? Email me at{" "}
        <a className="underline" href="mailto:partha.partha.changmai@gmail.com">
          partha.partha.changmai@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form
        className="mt-10 flex flex-col text-left dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          aria-label="Your email"
          className="h-14 rounded-xl border border-slate-900/10 bg-white px-4 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-300/20 dark:bg-white/90"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          aria-label="Your message"
          className="my-3 h-52 rounded-xl border border-slate-900/10 bg-white p-4 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-300/20 dark:bg-white/90"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
