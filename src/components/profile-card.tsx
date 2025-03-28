"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function ProfileCard() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleCardClick}
        className={`cursor-pointer ${
          theme === 'dark'
            ? 'bg-card/30 backdrop-blur-sm'
            : 'bg-white/30 backdrop-blur-sm'
        } rounded-[2rem] overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]`}
      >
        <div className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/profile.png"
                alt="Rishi Singh Parihar"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
                Rishi Singh Parihar
              </h2>
              <p className={`text-sm ${
                theme === 'dark'
                  ? 'text-muted-foreground/80'
                  : 'text-muted-foreground/70'
              }`}>
                Full Stack Developer
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://github.com/rishisinghparihar"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground hover:text-primary transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-primary/10'
                  : 'hover:bg-primary/5'
              } p-2 rounded-full`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:rishi.singh.parihar@gmail.com"
              className={`text-muted-foreground hover:text-primary transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-primary/10'
                  : 'hover:bg-primary/5'
              } p-2 rounded-full`}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rishisinghparihar"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground hover:text-primary transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-primary/10'
                  : 'hover:bg-primary/5'
              } p-2 rounded-full`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/rishisinghparihar"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground hover:text-primary transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-primary/10'
                  : 'hover:bg-primary/5'
              } p-2 rounded-full`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              style={{ top: '64px' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md ${
                theme === 'dark'
                  ? 'bg-card/90 backdrop-blur-sm'
                  : 'bg-white/90 backdrop-blur-sm'
              } rounded-[2rem] shadow-2xl border`}
            >
              <div className="p-8">
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/profile.png"
                      alt="Rishi Singh Parihar"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
                      Rishi Singh Parihar
                    </h2>
                    <p className={`text-base mt-1 ${
                      theme === 'dark'
                        ? 'text-muted-foreground/80'
                        : 'text-muted-foreground/70'
                    }`}>
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6">
                  <a
                    href="https://github.com/rishisinghparihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground hover:text-primary transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-primary/10'
                        : 'hover:bg-primary/5'
                    } p-3 rounded-full`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:rishi.singh.parihar@gmail.com"
                    className={`text-muted-foreground hover:text-primary transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-primary/10'
                        : 'hover:bg-primary/5'
                    } p-3 rounded-full`}
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rishisinghparihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground hover:text-primary transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-primary/10'
                        : 'hover:bg-primary/5'
                    } p-3 rounded-full`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/rishisinghparihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground hover:text-primary transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-primary/10'
                        : 'hover:bg-primary/5'
                    } p-3 rounded-full`}
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
                <button
                  onClick={handleClose}
                  className={`mt-8 w-full py-3 px-4 rounded-[1rem] ${
                    theme === 'dark'
                      ? 'bg-primary/10 text-primary hover:bg-primary/20'
                      : 'bg-primary/5 text-primary hover:bg-primary/10'
                  } transition-colors font-medium`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 