'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  target?: string;
  className?: string;
  magnetic?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  target,
  className = '',
  magnetic = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 focus:ring-gray-500',
    secondary:
      'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-gray-500',
    outline:
      'border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 focus:ring-gray-500',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={combinedClassName}>
      {children}
    </button>
  );
}
