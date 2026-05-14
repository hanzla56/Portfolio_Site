'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { slug: 'future-of-react', title: 'The Future of React and Server Components', excerpt: 'An in-depth look at how React Server Components are changing the way we build web applications.', date: 'Oct 24, 2023', readTime: '5 min read' },
    { slug: 'mastering-tailwind', title: 'Mastering Tailwind CSS v4', excerpt: 'Everything you need to know about the new Tailwind CSS v4 engine and how to migrate your projects.', date: 'Nov 12, 2023', readTime: '8 min read' },
    { slug: 'building-microservices', title: 'Building Scalable Microservices with Node.js', excerpt: 'A comprehensive guide to architecture patterns for microservices using Node and Docker.', date: 'Dec 05, 2023', readTime: '12 min read' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
          Writings
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on modern web development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 flex flex-col p-8 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:to-indigo-500/5 transition-colors duration-500"></div>
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-4 mb-6 text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase">
                  <span className="flex items-center"><Calendar size={16} className="mr-2" /> {post.date}</span>
                  <span className="flex items-center"><Clock size={16} className="mr-2" /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-cyan-500 transition-colors leading-snug">{post.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">{post.excerpt}</p>
                
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-bold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors mt-auto">
                  Read Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
