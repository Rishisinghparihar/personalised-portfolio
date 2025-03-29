"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface MonthlyProgressProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

export function MonthlyProgress({ data }: MonthlyProgressProps) {
  const { theme } = useTheme();

  // Get commits and repositories data
  const commits = data.find(d => d.name === 'Commits') || { value: 0, color: '#0088FE' };
  const repositories = data.find(d => d.name === 'Repositories') || { value: 0, color: '#00C49F' };

  const chartData = [commits, repositories];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`${
        theme === 'dark'
          ? 'bg-card/30 backdrop-blur-sm'
          : 'bg-white/30 backdrop-blur-sm'
      } rounded-3xl p-8 border border-border/20`}
    >
      <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
        Monthly Progress
      </h3>
      <div className="h-64 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                border: 'none',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
              labelStyle={{
                color: theme === 'dark' ? '#ffffff' : '#000000',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
              formatter={(value: number) => [`${value}`, 'Count']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
} 