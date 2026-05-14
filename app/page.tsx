'use client';

import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import BentoGrid from './components/BentoGrid';
import StatCounter from './components/StatCounter';
import TerminalSection from './components/TerminalSection';
import ProcessTimeline from './components/ProcessTimeline';
import TiltCardCTA from './components/TiltCardCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <Hero />
      <TechMarquee />
      <TerminalSection />
      <BentoGrid />
      <ProcessTimeline />
      <StatCounter />
      <TiltCardCTA />
    </div>
  );
}
