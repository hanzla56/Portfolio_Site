'use client';
import { motion } from 'framer-motion';
import { PenTool, Code, Rocket } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    { icon: PenTool, title: "Design & Architect", desc: "Mapping out the user journey, database schema, and component architecture before writing a single line of code." },
    { icon: Code, title: "Build & Iterate", desc: "Writing clean, scalable code with modern frameworks. Ensuring responsiveness, accessibility, and pixel-perfect UI." },
    { icon: Rocket, title: "Deploy & Optimize", desc: "Setting up CI/CD pipelines, optimizing performance, and monitoring analytics to ensure a flawless launch." }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">How I Work</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">A proven process for delivering high-quality software on time.</p>
      </div>

      <div className="relative">
        {/* Background track line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 dark:bg-zinc-800 md:-translate-x-1/2 rounded-full"></div>
        
        {/* Animated glowing fill line */}
        <motion.div 
          className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-cyan-400 md:-translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`hidden md:block w-1/2 ${isEven ? 'pl-20' : 'pr-20 text-right'}`}>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>

                <div className="absolute left-0 md:left-1/2 -translate-x-1 md:-translate-x-1/2 w-20 h-20 bg-white dark:bg-zinc-950 rounded-full border-4 border-zinc-100 dark:border-zinc-900 flex items-center justify-center z-10 shadow-xl">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                <div className="md:hidden pl-28 pt-2">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
                
                {/* Empty div for the other side in desktop layout */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
