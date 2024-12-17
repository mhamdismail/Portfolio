import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] };

export const listVariants = {
  initial: { height: 0 },
  open: {
    height: "auto",
    transition: {
      staggerChildren: 0.35,
      staggerDirection: 1,
      delayChildren: 0.35,
      duration: 1.5,
    },
  },
  exit: {
    height: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delayChildren: 0.1,
      duration: 1,
    },
  },
};

export const itemVariants = {
  initial: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -20, transition },
};

export const inputVariants = {
  initial: { width: 0, opacity: 0 },
  expanded: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};
