"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { useTheme } from "next-themes";

export function ViewsCounter() {
  const [views, setViews] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    // Here you would typically fetch the views count from your backend
    // For now, we'll use localStorage to simulate it
    const storedViews = localStorage.getItem("portfolioViews");
    const currentViews = storedViews ? parseInt(storedViews) : 0;
    const newViews = currentViews + 1;
    localStorage.setItem("portfolioViews", newViews.toString());
    setViews(newViews);
  }, []);

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
      theme === 'dark'
        ? 'bg-primary/10 border border-primary/20'
        : 'bg-primary/5 border border-primary/10'
    }`}>
      <Eye className={`w-4 h-4 ${
        theme === 'dark'
          ? 'text-primary/70'
          : 'text-primary/60'
      }`} />
      <span className={`text-sm font-medium ${
        theme === 'dark'
          ? 'text-primary/90'
          : 'text-primary/80'
      }`}>
        {views.toLocaleString()} views
      </span>
    </div>
  );
} 