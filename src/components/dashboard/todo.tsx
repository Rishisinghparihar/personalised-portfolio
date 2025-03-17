"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export function Todo() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      text: "Learn Next.js",
      completed: true,
    },
    {
      id: "2",
      text: "Build portfolio website",
      completed: false,
    },
    {
      id: "3",
      text: "Deploy to Vercel",
      completed: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      {
        id: Math.random().toString(36).substring(2, 9),
        text: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="glass rounded-xl p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-l-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 rounded-r-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Add
        </button>
      </div>
      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between p-3 rounded-lg bg-card"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 rounded-full border-2 border-primary checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  title="Mark task as completed"
                  aria-label="Mark task as completed"
                />
                <span
                  className={`${
                    todo.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-1 rounded-full hover:bg-secondary transition-colors"
                aria-label="Delete task"
                title="Delete task"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 