'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">
            PORTFOLIO<span className="text-indigo-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-800"></div>
            <button
              onClick={() => {
                if (!mounted) return;
                const currentTheme = theme || 'light';
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
              }}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-all hover:scale-110 active:scale-95"
              aria-label="Toggle dark mode"
              disabled={!mounted}
            >
              {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => {
                if (!mounted) return;
                const currentTheme = theme || 'light';
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
              }}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
              aria-label="Toggle dark mode"
              disabled={!mounted}
            >
              {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-cyan-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
