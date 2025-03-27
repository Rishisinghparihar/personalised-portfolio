"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterText({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText === texts[currentTextIndex]) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => texts[currentTextIndex].slice(0, prev.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`gradient-text ${className}`}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1"
      />
    </motion.span>
  );
} 