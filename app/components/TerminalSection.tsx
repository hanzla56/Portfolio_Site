'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export default function TerminalSection() {
  const [text, setText] = useState('');
  const fullText = `> npm run fetch-skills\n\n[ OK ] Initializing environment...\n[ OK ] Loading dependencies...\n\n{\n  "skills": ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],\n  "passion": "Building scalable web applications",\n  "status": "Ready for new challenges"\n}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900"
      >
        <div className="flex items-center px-4 py-3 bg-zinc-800 border-b border-zinc-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto flex items-center text-xs text-zinc-400 font-mono">
            <Terminal size={14} className="mr-2" />
            developer@portfolio:~
          </div>
        </div>
        <div className="p-6 font-mono text-sm md:text-base text-zinc-300 whitespace-pre-wrap min-h-[300px]">
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-5 bg-cyan-400 ml-1 align-middle"
          />
        </div>
      </motion.div>
    </section>
  );
}
