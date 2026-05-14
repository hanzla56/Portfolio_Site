'use client';
import { motion } from 'framer-motion';
import { Terminal, User } from 'lucide-react';

export default function AboutPage() {
  const experiences = [
    { year: '2023 - Present', role: 'Senior Full Stack Developer', company: 'Tech Innovators Inc.', desc: 'Leading the frontend architecture and building scalable microservices.' },
    { year: '2020 - 2023', role: 'Web Developer', company: 'Creative Agency', desc: 'Developed award-winning marketing websites and e-commerce platforms.' },
    { year: '2018 - 2020', role: 'Junior Developer', company: 'Startup Hub', desc: 'Built MVP applications using React and Node.js for early-stage startups.' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
          About Me
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          I am a passionate engineer dedicated to building exceptional digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-1 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 p-8 backdrop-blur-sm"
        >
          <div className="w-full aspect-square bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <User size={100} className="text-white opacity-80 group-hover:scale-110 transition-transform duration-500 z-0" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Hello!</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            I specialize in full-stack development, blending robust backend architecture with flawless, interactive user interfaces. I believe code should be both beautiful to read and powerful to run.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 p-8 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10 flex items-center gap-3">
            <Terminal className="text-indigo-500" />
            Experience
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-500 before:rounded-full after:absolute after:left-[5px] after:top-5 after:w-[2px] after:h-full after:bg-zinc-200 dark:after:bg-white/10 last:after:hidden">
                <span className="text-sm font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-2 block">{exp.year}</span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{exp.role}</h3>
                <h4 className="text-lg font-medium text-indigo-500 dark:text-indigo-400 mb-2">{exp.company}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
