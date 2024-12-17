"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/navigation";

type SideNavProps = {
  isVisible: boolean;
  toggleSidNav: () => void;
};

const SideNav = ({ isVisible, toggleSidNav }: SideNavProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed w-[70vw] h-screen bg-gradient-to-tl from-blue-500 to-teal-500 z-20 shadow-xl text-white p-8"
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleSidNav}
              className="text-2xl md:text-3xl text-white focus:outline-none"
            >
              &times;
            </button>
          </div>
          <ul className="space-y-8">
            <li
              className="text-2xl md:text-3xl cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={toggleSidNav}
            >
              <Link href="#skills">About Us</Link>
            </li>

            <li
              className="text-2xl md:text-3xl cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={toggleSidNav}
            >
              <Link href="project">Projects</Link>
            </li>
            <li
              className="text-2xl md:text-3xl cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={toggleSidNav}
            >
              <Link href="#skills">Skills</Link>
            </li>
            <li
              className="text-2xl md:text-3xl cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={toggleSidNav}
            >
              <Link href="#services">Services</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
