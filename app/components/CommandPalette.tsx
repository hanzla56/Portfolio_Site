'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { Home, User, Briefcase, Mail, FileText, X } from 'lucide-react';

const commands = [
  { id: 'home', label: 'Home', icon: Home, href: '/' },
  { id: 'about', label: 'About', icon: User, href: '/about' },
  { id: 'projects', label: 'Projects', icon: Briefcase, href: '/projects' },
  { id: 'blog', label: 'Blog', icon: FileText, href: '/blog' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '/contact' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <Command className="relative z-50 w-full max-w-lg rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl">
        <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
          <Command.Input
            placeholder="Type a command or search..."
            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <button
            onClick={() => setOpen(false)}
            className="ml-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        <Command.List className="max-h-96 overflow-y-auto p-2">
          <Command.Empty>No results found.</Command.Empty>
          {commands.map((command) => {
            const Icon = command.icon;
            return (
              <Command.Item
                key={command.id}
                onSelect={() => handleSelect(command.href)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <Icon size={18} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-white">{command.label}</span>
              </Command.Item>
            );
          })}
        </Command.List>
      </Command>
    </div>
  );
}
