"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Github, ExternalLink, Star, GitFork, GitCommit } from "lucide-react";
import { getPinnedRepos, type Repository } from "@/lib/github";

export function Projects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    async function fetchRepos() {
      try {
        const data = await getPinnedRepos("Rishisinghparihar");
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);

        } else {
          setError('No pinned repositories found. Please pin some repositories on your GitHub profile.');
        }
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError('Failed to load projects. Please check your GitHub token and try again.');
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
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
              Featured Projects
            </h2>
            <p className={`text-lg ${
              theme === 'dark'
                ? 'text-muted-foreground/90'
                : 'text-muted-foreground/80'
            }`}>
              My pinned GitHub repositories
            </p>
          </div>

          {error ? (
            <div className="text-center text-red-500">
              {error}
            </div>
          ) : loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className={`h-48 rounded-3xl ${
                    theme === 'dark'
                      ? 'bg-card/30'
                      : 'bg-white/30'
                  }`} />
                  <div className="mt-4 space-y-2">
                    <div className={`h-4 w-3/4 rounded ${
                      theme === 'dark'
                        ? 'bg-card/30'
                        : 'bg-white/30'
                    }`} />
                    <div className={`h-3 w-1/2 rounded ${
                      theme === 'dark'
                        ? 'bg-card/30'
                        : 'bg-white/30'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          ) : repos.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No pinned repositories found
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative ${
                    theme === 'dark'
                      ? 'bg-card/30 backdrop-blur-sm'
                      : 'bg-white/30 backdrop-blur-sm'
                  } rounded-3xl overflow-hidden border hover:border-primary/50 transition-colors`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        {repo.homepageUrl && (
                          <a
                            href={repo.homepageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className={`text-sm mb-4 ${
                      theme === 'dark'
                        ? 'text-muted-foreground/80'
                        : 'text-muted-foreground/70'
                    }`}>
                      {repo.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.repositoryTopics.nodes.map((topic) => (
                        <span
                          key={topic.topic.name}
                          className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer ${
                            theme === 'dark'
                              ? 'bg-primary/20 text-primary hover:bg-primary/30'
                              : 'bg-primary/15 text-primary hover:bg-primary/25'
                          }`}
                        >
                          {topic.topic.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazerCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forkCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitCommit className="w-4 h-4" />
                        <span>{repo.defaultBranchRef.target.history.totalCount}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 