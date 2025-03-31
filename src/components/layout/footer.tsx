"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Github, Linkedin, Instagram } from "lucide-react";
import { ViewsCounter } from "@/components/ui/views-counter";

export function Footer() {
  const { theme } = useTheme();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Rishisinghparihar",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rishi-singh-parihar-17401a253/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rishi.singh.parihar/",
      icon: Instagram,
    },
  ];

  return (
    <footer className={`py-8 px-8 sm:px-12 lg:px-16 ${
      theme === 'dark'
        ? 'bg-background/80 backdrop-blur-sm border-t border-border/50'
        : 'bg-white/80 backdrop-blur-sm border-t border-border/20'
    }`}>
      <div className="max-w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Rishi
            </Link>
            <p className={`text-sm ${
              theme === 'dark'
                ? 'text-muted-foreground/80'
                : 'text-muted-foreground/70'
            }`}>
              Creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className={`text-sm ${
                      theme === 'dark'
                        ? 'text-muted-foreground/80 hover:text-primary'
                        : 'text-muted-foreground/70 hover:text-primary'
                    } transition-colors`}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-muted/80 hover:bg-primary/10'
                      : 'bg-gray-100 hover:bg-primary/10'
                  } transition-colors`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${
            theme === 'dark'
              ? 'text-muted-foreground/80'
              : 'text-muted-foreground/70'
          }`}>
            © {new Date().getFullYear()} Rishi Parihar. All rights reserved.
          </p>
          <ViewsCounter />
        </div>
      </div>
    </footer>
  );
} 