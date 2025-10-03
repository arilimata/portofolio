"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Flex } from "@radix-ui/themes";

const texts = [
  "Full-Stack Web Developer",
  "Backend Engineer",
  "Frontend Enthusiast",
];

export default function TypingIntro() {
  const [index, setIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, 100);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, 50);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
    >
      <motion.div
        className="text-lg sm:text-xl font-bold text-blue-600 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
        <motion.span
          className="inline-block w-[2px] bg-blue-600 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </motion.div>
    </Flex>
  );
}
