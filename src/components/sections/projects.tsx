"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image: "/projects/task-manager.jpg",
    tags: ["React", "Firebase", "Material UI"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing projects and skills.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-lg overflow-hidden border hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 