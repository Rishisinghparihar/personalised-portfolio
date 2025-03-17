"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export function Projects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=E-Commerce",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      id: "2",
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      image: "https://placehold.co/600x400/6366f1/ffffff?text=AI+Chat",
      tags: ["React", "Socket.io", "OpenAI"],
    },
    {
      id: "3",
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts and nutrition",
      image: "https://placehold.co/600x400/10b981/ffffff?text=Fitness+Tracker",
      tags: ["React Native", "Firebase", "TypeScript"],
    },
  ];

  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Projects</h2>
        <a
          href="/projects"
          className="text-sm text-primary hover:underline transition-colors"
        >
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="rounded-lg overflow-hidden bg-card border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg">{project.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
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
  );
} 