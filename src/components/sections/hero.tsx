"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { TypewriterText } from "@/components/ui/typewriter-text";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-center lg:text-left p-8 rounded-3xl ${
              theme === 'dark'
                ? 'bg-background/80 backdrop-blur-sm border border-border/50'
                : 'bg-white/80 backdrop-blur-sm border border-border/20'
            } shadow-lg`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary"
            >
              Hi, I&apos;m{" "}
              <TypewriterText 
                texts={["Rishi Parihar", "Web-Dev"]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-lg sm:text-lg ${
                theme === 'dark'
                  ? 'text-muted-foreground/90'
                  : 'text-muted-foreground/80'
              } mb-8 max-w-xl mx-auto lg:mx-0`}
            >
              A passionate Frontend Developer creating beautiful and functional web experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className={`px-6 py-2.5 ${
                  theme === 'dark'
                    ? 'bg-muted/80 hover:bg-muted text-foreground'
                    : 'bg-gray-100 hover:bg-gray-200 text-foreground'
                } rounded-xl transition-colors`}
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-colors"
              >
                Get in Touch
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex justify-center lg:justify-start gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Rishisinghparihar"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-muted/80 hover:bg-primary/10'
                    : 'bg-gray-100 hover:bg-primary/10'
                } transition-colors`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/rishi-singh-parihar-17401a253/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-muted/80 hover:bg-primary/10'
                    : 'bg-gray-100 hover:bg-primary/10'
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/rishi.singh.parihar/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-muted/80 hover:bg-primary/10'
                    : 'bg-gray-100 hover:bg-primary/10'
                } transition-colors`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className={`relative w-full max-w-xs mx-auto p-8 rounded-3xl ${
              theme === 'dark'
                ? 'bg-background/80 backdrop-blur-sm border border-border/50'
                : 'bg-white/80 backdrop-blur-sm border border-border/20'
            } shadow-lg`}>
              {/* Background Effects */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-primary/20 to-primary/5'
                  : 'from-primary/10 to-primary/5'
              } rounded-3xl blur-2xl`} />
              <div className={`absolute inset-0 bg-gradient-to-b ${
                theme === 'dark'
                  ? 'from-primary/10 to-transparent'
                  : 'from-primary/5 to-transparent'
              } rounded-3xl blur-xl`} />
              
              {/* Main Image Container */}
              <div className="relative">
                <div className="relative w-40 h-40 mx-auto">
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    theme === 'dark'
                      ? 'from-primary/20 to-primary/5'
                      : 'from-primary/10 to-primary/5'
                  } rounded-3xl blur-lg`} />
                  <div className={`relative w-full h-full rounded-3xl overflow-hidden border-4 ${
                    theme === 'dark'
                      ? 'border-primary/20'
                      : 'border-primary/10'
                  }`}>
                    <Image
                      src="/r.png"
                      alt="Rishi Parihar"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -top-3 -right-3 w-12 h-12 ${
                  theme === 'dark'
                    ? 'bg-primary/10'
                    : 'bg-primary/5'
                } rounded-2xl blur-lg`} />
                <div className={`absolute -bottom-3 -left-3 w-12 h-12 ${
                  theme === 'dark'
                    ? 'bg-primary/10'
                    : 'bg-primary/5'
                } rounded-2xl blur-lg`} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 