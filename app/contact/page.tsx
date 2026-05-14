'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          Get in Touch
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-sm flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
            <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-600 dark:text-purple-400">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">Email</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">hello@example.com</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-sm flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
            <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-600 dark:text-indigo-400">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">Location</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">San Francisco, CA</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form className="p-8 md:p-10 rounded-3xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-wide uppercase text-zinc-700 dark:text-zinc-300">Name</label>
                <input type="text" className="w-full bg-zinc-100 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all font-medium" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-wide uppercase text-zinc-700 dark:text-zinc-300">Email</label>
                <input type="email" className="w-full bg-zinc-100 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all font-medium" placeholder="john@example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-wide uppercase text-zinc-700 dark:text-zinc-300">Message</label>
              <textarea rows={5} className="w-full bg-zinc-100 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none font-medium" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="button" className="group mt-4 w-full py-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-xl shadow-purple-500/20">
              Send Message <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
