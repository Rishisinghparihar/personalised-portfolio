"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "next-themes";

export function Contact() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
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
              Get In Touch
            </h2>
            <p className={`text-lg ${
              theme === 'dark'
                ? 'text-muted-foreground/90'
                : 'text-muted-foreground/80'
            }`}>
              Let&apos;s work together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-card/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border ${
                theme === 'dark'
                  ? 'border-border/30'
                  : 'border-border/10'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 sm:mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl ${
                      theme === 'dark'
                        ? 'bg-card/50 backdrop-blur-sm border border-border/50 focus:border-primary/50'
                        : 'bg-white/50 backdrop-blur-sm border border-border/20 focus:border-primary/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                    required
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl ${
                      theme === 'dark'
                        ? 'bg-card/50 backdrop-blur-sm border border-border/50 focus:border-primary/50'
                        : 'bg-white/50 backdrop-blur-sm border border-border/20 focus:border-primary/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                    required
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-2xl ${
                      theme === 'dark'
                        ? 'bg-card/50 backdrop-blur-sm border border-border/50 focus:border-primary/50'
                        : 'bg-white/50 backdrop-blur-sm border border-border/20 focus:border-primary/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors min-h-[120px] resize-y`}
                    required
                    aria-label="Your message"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/30'
                  } transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6">
                  Feel free to reach out to me through any of these channels.
                </p>
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  rsparihar876@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Social Links</h3>
                <div className="flex gap-3 sm:gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Rishisinghparihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/rishi-singh-parihar-17401a253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/rishi.singh.parihar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 