'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedProjects } from '../../lib/data/projects';

export default function BentoGrid() {
  const projects = getFeaturedProjects().slice(0, 3);

  if (projects.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4"
        >
          Featured Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          A selection of projects that showcase my passion for clean code and stunning interfaces.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Project 1 - Spans 2 columns */}
        {projects[0] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="relative z-20">
              <div className="flex gap-2 mb-4 flex-wrap">
                {projects[0].techStack.slice(0, 3).map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{projects[0].title}</h3>
              <p className="text-zinc-300 max-w-md mb-6">{projects[0].description}</p>
              <Link href={`/projects/${projects[0].slug}`} className="inline-flex items-center text-white font-medium hover:text-cyan-400 transition-colors">
                View Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Project 2 - Top Right */}
        {projects[1] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 flex flex-col justify-end p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/20 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="relative z-20">
              <h3 className="text-xl font-bold text-white mb-2">{projects[1].title}</h3>
              <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{projects[1].description}</p>
              <Link href={`/projects/${projects[1].slug}`} className="inline-flex items-center text-white text-sm font-medium hover:text-cyan-400 transition-colors">
                View Details <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Project 3 - Bottom Right */}
        {projects[2] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 flex flex-col justify-end p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="relative z-20">
              <h3 className="text-xl font-bold text-white mb-2">{projects[2].title}</h3>
              <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{projects[2].description}</p>
              <Link href={`/projects/${projects[2].slug}`} className="inline-flex items-center text-white text-sm font-medium hover:text-cyan-400 transition-colors">
                View Details <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
