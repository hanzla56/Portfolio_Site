'use client';
import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiDjango, 
  SiCelery, 
  SiPostgresql, 
  SiRedis, 
  SiGit, 
  SiTailwindcss, 
  SiFramer, 
  SiDocker 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Globe } from 'lucide-react';

const TECH_STACK = [
  { name: 'React', icon: SiReact, color: 'group-hover:text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'group-hover:text-black dark:group-hover:text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'group-hover:text-[#3178C6]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'group-hover:text-[#339933]' },
  { name: 'Django', icon: SiDjango, color: 'group-hover:text-[#092E20] dark:group-hover:text-[#44B78B]' },
  { name: 'DRF', icon: Globe, color: 'group-hover:text-[#A30000]' },
  { name: 'Celery', icon: SiCelery, color: 'group-hover:text-[#37814A]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'group-hover:text-[#4169E1]' },
  { name: 'Redis', icon: SiRedis, color: 'group-hover:text-[#DC382D]' },
  { name: 'Git', icon: SiGit, color: 'group-hover:text-[#F05032]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover:text-[#06B6D4]' },
  { name: 'Framer', icon: SiFramer, color: 'group-hover:text-[#0055FF]' },
  { name: 'Docker', icon: SiDocker, color: 'group-hover:text-[#2496ED]' },
  { name: 'AWS', icon: FaAws, color: 'group-hover:text-[#FF9900]' },
];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden py-10 bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-200 dark:border-white/5 backdrop-blur-sm relative z-10 transition-colors duration-500">
      <div className="relative flex max-w-[100vw] overflow-hidden group/marquee">
        <div className="animate-marquee flex whitespace-nowrap group-hover/marquee:[animation-play-state:paused] items-center">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="group mx-8 flex items-center gap-4 text-zinc-400 dark:text-zinc-600 transition-all duration-300 cursor-default hover:scale-110"
              >
                <Icon size={32} className={`transition-colors duration-300 ${tech.color}`} />
                <span className={`text-2xl font-bold tracking-widest uppercase transition-colors duration-300 ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Soft fade edges */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full pointer-events-none bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-950 dark:to-transparent transition-colors duration-500"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full pointer-events-none bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-950 dark:to-transparent transition-colors duration-500"></div>
      </div>
    </div>
  );
}
