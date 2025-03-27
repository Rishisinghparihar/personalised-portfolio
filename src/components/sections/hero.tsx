"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { TypewriterText } from "@/components/ui/typewriter-text";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I&apos;m{" "}
              <TypewriterText 
                texts={["Rishi Parihar", "Web Developer"]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
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
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors"
              >
                View Projects
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
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
            <div className="relative w-full max-w-xs mx-auto">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-xl" />
              
              {/* Main Image Container */}
              <div className="relative">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-lg" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/profile.png"
                      alt="Rishi Parihar"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/10 rounded-full blur-lg" />
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-primary/10 rounded-full blur-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 