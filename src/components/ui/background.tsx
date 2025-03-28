"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function Background() {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 -z-10 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute top-0 left-0 w-[500px] h-[500px] ${
          theme === 'dark' 
            ? 'bg-primary/20' 
            : 'bg-primary/10'
        } rounded-full blur-3xl opacity-50`}
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute bottom-0 right-0 w-[500px] h-[500px] ${
          theme === 'dark' 
            ? 'bg-primary/20' 
            : 'bg-primary/10'
        } rounded-full blur-3xl opacity-50`}
      />
      {/* Grid pattern */}
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]'
      } bg-[size:24px_24px]`} />
    </div>
  );
} 