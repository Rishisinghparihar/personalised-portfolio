"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Code2,
  Layout,
  Database,
  GitBranch,
  Cpu,
  Boxes,
  Palette,
  Globe,
} from "lucide-react";

const categories = [
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "tools", name: "Tools" },
];

const skills = [
  {
    id: 1,
    name: "React",
    category: "frontend",
    icon: Layout,
    level: 90,
  },
  {
    id: 2,
    name: "Next.js",
    category: "frontend",
    icon: Globe,
    level: 85,
  },
  {
    id: 3,
    name: "TypeScript",
    category: "frontend",
    icon: Code2,
    level: 80,
  },
  {
    id: 4,
    name: "Node.js",
    category: "backend",
    icon: Cpu,
    level: 75,
  },
  {
    id: 5,
    name: "MongoDB",
    category: "backend",
    icon: Database,
    level: 70,
  },
  {
    id: 6,
    name: "Git",
    category: "tools",
    icon: GitBranch,
    level: 85,
  },
  {
    id: 7,
    name: "Docker",
    category: "tools",
    icon: Boxes,
    level: 65,
  },
  {
    id: 8,
    name: "Figma",
    category: "tools",
    icon: Palette,
    level: 75,
  },
];

export function Skills() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-3xl ${
            theme === 'dark'
              ? 'bg-background/80 backdrop-blur-sm border border-border/50'
              : 'bg-white/80 backdrop-blur-sm border border-border/20'
          } shadow-lg`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              Skills & Expertise
            </h2>
            <p className={`text-lg ${
              theme === 'dark'
                ? 'text-muted-foreground/90'
                : 'text-muted-foreground/80'
            }`}>
              Technologies I work with
            </p>
          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                aria-label={`Filter skills by ${category.name}`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-3xl ${
                  theme === 'dark'
                    ? 'bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50'
                    : 'bg-white/50 backdrop-blur-sm border border-border/20 hover:border-primary/30'
                } shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="absolute inset-y-0 left-0 bg-primary"
                  />
                  <span className="absolute right-2 top-1 text-xs text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 