'use client';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { MouseEvent } from 'react';

export default function TiltCardCTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-center perspective-[1000px] z-10 relative">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-4xl rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-1 cursor-pointer shadow-2xl shadow-indigo-500/10"
      >
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl pointer-events-none"
        ></div>
        <div className="relative h-full w-full rounded-[23px] bg-white dark:bg-zinc-950 p-10 md:p-16 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
          
          <motion.div style={{ transform: "translateZ(80px)" }} className="flex justify-center mb-6">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-500">
              <Sparkles size={40} />
            </div>
          </motion.div>
          
          <motion.h2 style={{ transform: "translateZ(60px)" }} className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Ready to build something incredible?
          </motion.h2>
          
          <motion.p style={{ transform: "translateZ(40px)" }} className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
            Let's collaborate to turn your vision into a high-performance, beautiful digital reality. I'm currently accepting new projects.
          </motion.p>
          
          <motion.div style={{ transform: "translateZ(100px)" }}>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-indigo-500/20">
              Start a Conversation <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
