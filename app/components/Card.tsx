import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden p-6 ${
        hover
          ? 'hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-1'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
