"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTheme } from "next-themes";

export function DownloadResume() {
  const { theme } = useTheme();

  return (
    <motion.a
      href="/Rishi-Parihar-Resume.pdf"
      download
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-8 right-8 z-50 h-14 rounded-full flex items-center justify-center shadow-lg overflow-hidden ${
        theme === 'dark'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50'
          : 'bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/30'
      } transition-all duration-300 hover:shadow-xl group`}
      aria-label="Download Resume"
    >
      <motion.div
        className="flex items-center justify-start"
        initial={{ width: "3.5rem" }}
        whileHover={{ width: "10rem" }}
        transition={{ duration: 0.3 }}
      >
        <Download className="w-6 h-6 flex-shrink-0 ml-4" />
        <motion.span
          className="whitespace-nowrap overflow-hidden ml-2 text-sm font-medium"
          initial={{ opacity: 0, x: -20 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          Download CV
        </motion.span>
      </motion.div>
    </motion.a>
  );
} 