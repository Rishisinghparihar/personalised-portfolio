"use client";

import { motion } from "framer-motion";

export function ProgressGraph() {
  const data = [
    { day: "Mon", value: 30 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 25 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 75 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 35 },
  ];

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="glass rounded-xl p-6 h-full">
      <h2 className="text-xl font-semibold mb-6">Weekly Progress</h2>
      <div className="flex items-end justify-between h-48 gap-2">
        {data.map((item, index) => (
          <div
            key={item.day}
            className="flex flex-col items-center gap-2 flex-1"
          >
            <motion.div
              className="w-full bg-primary/20 rounded-t-lg relative group"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${(item.value / maxValue) * 100}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {item.value}%
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  ease: "easeOut",
                }}
              />
            </motion.div>
            <span className="text-xs text-muted-foreground">{item.day}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-sm text-muted-foreground">Learning Progress</span>
        </div>
        <select 
          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Select time period"
        >
          <option value="this-week">This Week</option>
          <option value="last-week">Last Week</option>
          <option value="this-month">This Month</option>
        </select>
      </div>
    </div>
  );
} 