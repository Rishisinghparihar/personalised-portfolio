"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text">
              Rishi Parihar
            </Link>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
              A passionate Frontend Developer creating beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h3>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t text-center text-sm sm:text-base text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Rishi Parihar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 