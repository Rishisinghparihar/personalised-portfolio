"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Github, Star, GitFork, Users } from "lucide-react";
import Image from "next/image";

interface GitHubProfileProps {
  avatarUrl: string;
  login: string;
  repositories: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
  totalStars: number;
  totalForks: number;
}

export function GitHubProfile({
  avatarUrl,
  login,
  repositories,
  followers,
  totalStars,
  totalForks,
}: GitHubProfileProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === 'dark'
          ? 'bg-card/30 backdrop-blur-sm'
          : 'bg-white/30 backdrop-blur-sm'
      } rounded-3xl p-8 border border-border/20`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 mb-4">
          <Image
            src={avatarUrl}
            alt={login}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
          {login}
        </h3>
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <div className="flex flex-col items-center p-3 rounded-xl bg-card/20">
            <Github className="w-5 h-5 mb-1 text-primary" />
            <span className="text-sm text-muted-foreground">Repos</span>
            <span className="text-lg font-semibold">{repositories.totalCount}</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-card/20">
            <Users className="w-5 h-5 mb-1 text-primary" />
            <span className="text-sm text-muted-foreground">Followers</span>
            <span className="text-lg font-semibold">{followers.totalCount}</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-card/20">
            <Star className="w-5 h-5 mb-1 text-primary" />
            <span className="text-sm text-muted-foreground">Stars</span>
            <span className="text-lg font-semibold">{totalStars}</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-card/20">
            <GitFork className="w-5 h-5 mb-1 text-primary" />
            <span className="text-sm text-muted-foreground">Forks</span>
            <span className="text-lg font-semibold">{totalForks}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 