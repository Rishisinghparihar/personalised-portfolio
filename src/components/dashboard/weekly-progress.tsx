"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

interface WeeklyProgressProps {
  data: {
    day: string;
    commits: number;
  }[];
}

export function WeeklyProgress({ data }: WeeklyProgressProps) {
  const { theme } = useTheme();
  const [currentWeekData, setCurrentWeekData] = useState<{ day: string; commits: number }[]>([]);

  useEffect(() => {
    // Get current week's data
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Get the start of the current week (Sunday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - currentDay);
    
    // Create array of last 7 days
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });

    // Map the data to match the current week
    const weekData = weekDays.map(date => {
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const matchingData = data.find(d => d.day === dayName);
      return {
        day: dayName,
        commits: matchingData?.commits || 0
      };
    });

    setCurrentWeekData(weekData);
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`${
        theme === 'dark'
          ? 'bg-card/30 backdrop-blur-sm'
          : 'bg-white/30 backdrop-blur-sm'
      } rounded-3xl p-8 border border-border/20`}
    >
      <h3 className="text-lg font-semibold mb-6 text-center">Current Week Progress</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={currentWeekData}>
            <XAxis
              dataKey="day"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                border: 'none',
                borderRadius: '0.5rem',
              }}
            />
            <Line
              type="monotone"
              dataKey="commits"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ fill: '#8884d8', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
} 