"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/sidebar";
import { Stats } from "@/components/dashboard/stats";
import { Projects } from "@/components/dashboard/projects";
import { ProgressGraph } from "@/components/dashboard/progress-graph";
import { Todo } from "@/components/dashboard/todo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="main-content p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text">
              Hi, I&apos;m [Your Name]!
            </h1>
            <p className="text-muted-foreground mt-2">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          <Stats />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Projects />
            <div className="space-y-6">
              <ProgressGraph />
              <Todo />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
