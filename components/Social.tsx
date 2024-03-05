"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  return (
    <motion.div
      initial={{ x: -100, y: "-50%", opacity: 0 }}
      animate={{ x: 0, y: "-50%", opacity: 1 }}
      className="hidden lg:flex fixed flex-col top-[35%] left-0"
    >
      <ul>
        <li className="w-[160px] pr-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] dark:border-solid duration-500  hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2]">
          <a
            className="flex pl-4 justify-between items-center w-full dark:text-white hover:text-white"
            href="https://www.linkedin.com/in/partha-changmai-6a9293208"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] pr-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500  hover:bg-[#333333] dark:hover:bg-[#333333]">
          <a
            className="flex pl-4 justify-between items-center w-full dark:text-white hover:text-white"
            href="https://github.com/ParthaChangmai"
            target="_blank"
            rel="noreferrer"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] pr-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500  hover:bg-[#6fc2b0] dark:hover:bg-[#6fc2b0]">
          <a
            className="flex pl-4 justify-between items-center w-full dark:text-white hover:text-white"
            href="mailto:chaoviper@gmail.com"
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
