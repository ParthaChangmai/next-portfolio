"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  return (
    <motion.div
      initial={{ x: -100, y: "-50%", opacity: 0 }}
      animate={{ x: 0, y: "-50%", opacity: 1 }}
      className="fixed left-0 top-[35%] z-40 hidden flex-col xl:flex"
    >
      <ul>
        <li className="ml-[-108px] flex h-[54px] w-[160px] items-center justify-between rounded-r-xl bg-white/80 pr-4 shadow-sm backdrop-blur transition-all duration-300 hover:ml-0 hover:bg-[#0A66C2] hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-[#0A66C2]">
          <a
            className="flex pl-4 justify-between items-center w-full dark:text-white hover:text-white"
            href="https://www.linkedin.com/in/partha-changmai-6a9293208"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="ml-[-108px] flex h-[54px] w-[160px] items-center justify-between rounded-r-xl bg-white/80 pr-4 shadow-sm backdrop-blur transition-all duration-300 hover:ml-0 hover:bg-[#333] hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-[#333]">
          <a
            className="flex pl-4 justify-between items-center w-full dark:text-white hover:text-white"
            href="https://github.com/ParthaChangmai"
            target="_blank"
            rel="noreferrer"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="ml-[-108px] flex h-[54px] w-[160px] items-center justify-between rounded-r-xl bg-white/80 pr-4 shadow-sm backdrop-blur transition-all duration-300 hover:ml-0 hover:bg-lime-600 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-lime-600">
          <a
            className="flex pl-4 justify-between items-center w-full dark:text-white hover:text-white"
            href="mailto:partha.partha.changmai@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Social;
