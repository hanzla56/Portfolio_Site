'use client';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Code, Users, TrendingUp, Award } from 'lucide-react';

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function StatCounter() {
  const stats = [
    { label: 'Projects Delivered', value: 50, icon: Code },
    { label: 'Happy Clients', value: 30, icon: Users },
    { label: 'Years Experience', value: 5, icon: TrendingUp },
    { label: 'Industry Awards', value: 10, icon: Award },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-sm text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <Icon className="mx-auto mb-4 text-indigo-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={36} />
                <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center justify-center">
                  <Counter value={stat.value} />+
                </div>
                <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
