'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  return (
    <article className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <Link href="/blog" className="inline-flex items-center text-zinc-500 hover:text-cyan-500 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors font-bold tracking-tight mb-8">
          <ArrowLeft size={20} className="mr-2" /> Back to Writings
        </Link>
        
        <div className="flex gap-4 mb-6 text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
          <span className="flex items-center"><Calendar size={16} className="mr-2" /> Oct 24, 2023</span>
          <span className="flex items-center"><Clock size={16} className="mr-2" /> 5 min read</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white leading-tight">
          The Future of React and Server Components
        </h1>
        
        <div className="flex items-center justify-between pb-8 border-b border-zinc-200 dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              H
            </div>
            <div>
              <div className="font-bold text-zinc-900 dark:text-white">Hanzla</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Full Stack Developer</div>
            </div>
          </div>
          <button className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-white/5 shadow-sm">
            <Share2 size={20} />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="prose prose-lg dark:prose-invert prose-zinc max-w-none"
      >
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
          React Server Components (RSC) represent one of the biggest paradigm shifts in the React ecosystem since hooks were introduced. By moving components to the server, we can significantly reduce the JavaScript bundle sent to the client.
        </p>
        
        <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl mb-12 flex items-center justify-center border border-zinc-200 dark:border-white/10 shadow-xl backdrop-blur-sm">
           <span className="text-zinc-500 font-bold uppercase tracking-widest">Blog Post Cover Image</span>
        </div>

        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6 tracking-tight">Why Server Components?</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          Traditionally, React applications required downloading all the JavaScript necessary to render a page before it could become interactive. With Server Components, the heavy lifting is done on the server, and only the resulting HTML and serialized data are sent to the browser.
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          This leads to significantly faster initial page loads, improved SEO, and a better overall user experience, especially on slower devices or networks.
        </p>

        <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 md:p-10 border border-zinc-200 dark:border-white/10 my-12 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Key Benefits:</h3>
          <ul className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 list-none pl-0">
            <li className="flex items-start"><span className="text-cyan-500 mr-3">✦</span> Zero-bundle-size React Server Components</li>
            <li className="flex items-start"><span className="text-cyan-500 mr-3">✦</span> Direct backend access without creating APIs</li>
            <li className="flex items-start"><span className="text-cyan-500 mr-3">✦</span> Automatic code splitting</li>
            <li className="flex items-start"><span className="text-cyan-500 mr-3">✦</span> Seamless integration with Client Components</li>
          </ul>
        </div>
      </motion.div>
    </article>
  );
}
