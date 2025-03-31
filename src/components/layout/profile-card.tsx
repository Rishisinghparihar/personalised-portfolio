"use client";

import { motion, AnimatePresence } from "framer-motion";
import { close } from "fs";
import { Github, Linkedin, Briefcase, Mail, X } from "lucide-react";
import { useEffect, useRef } from "react";

interface ProfileCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileCard({ isOpen, onClose }: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus the card when it opens
      cardRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            role="presentation"
            aria-hidden="true"
          />

          {/* Card */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 top-20 w-72 bg-card rounded-lg border shadow-lg z-50 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            tabIndex={-1}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute right-2 top-2 p-1.5 rounded-full bg-muted hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close profile"
            >
              <X className="w-4 h-4" />
            </motion.button>

            <div className="relative">
              {/* Profile Image */}
              <div className="w-full h-32 bg-gradient-to-r from-primary/20 to-primary/5" />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-4 border-background bg-muted flex items-center justify-center">
                  <span className="text-3xl">👨‍💻</span>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="pt-14 pb-6 px-6">
              <h3 id="profile-title" className="text-xl font-semibold text-center mb-2">
                Rishi Parihar
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Frontend Developer & UI/UX Designer
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/Rishisinghparihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.upwork.com/freelancers/~017a52ae3e87032ba9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Upwork"
                >
                  <Briefcase className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Contact Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:your.email@example.com"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 

