'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProjectBySlug } from '../../../lib/data/projects';

export default function ProjectDetails() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/projects" className="inline-flex items-center text-zinc-500 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors font-bold tracking-tight">
          <ArrowLeft size={20} className="mr-2" /> Back to Projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex gap-3 mb-6 flex-wrap">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 rounded-full">
              Featured
            </span>
          )}
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-4 mb-12">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:scale-105 transition-transform shadow-xl shadow-indigo-500/20">
              <ExternalLink size={18} className="mr-2" /> View Live Site
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-white/5">
              <Github size={18} className="mr-2" /> Source Code
            </a>
          )}
        </div>

        <div className="w-full aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl mb-16 relative overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl flex items-center justify-center">
          <div className="text-zinc-500 font-bold text-2xl tracking-widest uppercase">
            Project Image
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </section>
            
            {project.problem && (
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">The Challenge</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.problem}</p>
              </section>
            )}
            
            {project.solution && (
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">The Solution</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.solution}</p>
              </section>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-32 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-4 py-2 text-sm font-bold bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-zinc-800 dark:text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
