'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code, Terminal, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Background glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-indigo-500/30 dark:bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse transition-colors duration-500"></div>
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/20 dark:bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-float transition-colors duration-500"></div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-1/4 left-1/4 xl:left-1/3 -translate-x-40 p-4 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl hidden md:block z-10 transition-colors duration-500"
      >
        <Code size={32} className="text-indigo-500" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
        className="absolute bottom-1/4 right-1/4 xl:right-1/3 translate-x-40 p-4 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl hidden md:block z-10 transition-colors duration-500"
      >
        <Terminal size={32} className="text-cyan-500" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
        className="absolute top-1/3 right-1/4 translate-x-20 -translate-y-20 p-4 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl hidden lg:block z-10 transition-colors duration-500"
      >
        <Cpu size={32} className="text-purple-500" />
      </motion.div>

      <div className="relative z-20 max-w-5xl mx-auto text-center mt-16 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-block"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-md bg-white/5 border-zinc-300 dark:border-white/10 text-indigo-600 dark:text-indigo-300 shadow-sm transition-colors duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-indigo-600 to-cyan-500 dark:from-white dark:via-indigo-200 dark:to-cyan-400 drop-shadow-sm transition-all duration-500"
        >
          Engineering Digital <br className="hidden md:block" /> Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium transition-colors duration-500"
        >
          I specialize in building robust backend architectures with Django and highly interactive, stunning user interfaces with React.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/projects"
            className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden w-full sm:w-auto shadow-lg shadow-indigo-500/20"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10"></div>
            <span className="relative flex items-center justify-center gap-2">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link
            href="/contact"
            className="group px-8 py-4 rounded-xl font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5 backdrop-blur-sm transition-all duration-500 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Let's Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
