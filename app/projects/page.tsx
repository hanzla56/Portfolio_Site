'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../../lib/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
          All Projects
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          A comprehensive list of my work, experiments, and open-source contributions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 flex flex-col p-8 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:to-cyan-500/5 transition-colors duration-500"></div>
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-full text-zinc-800 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
                
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-indigo-600 dark:text-cyan-400 font-bold hover:text-indigo-700 dark:hover:text-cyan-300 transition-colors mt-auto">
                  View Project <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
