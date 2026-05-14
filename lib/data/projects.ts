export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'backend' | 'frontend' | 'other';
  featured: boolean;
  date: string;
  problem?: string;
  solution?: string;
  results?: string;
  lessons?: string;
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard.',
    longDescription:
      'Built a comprehensive e-commerce solution from scratch with modern technologies. The platform includes user authentication, product management, shopping cart, payment processing with Stripe, and a complete admin dashboard for managing orders and inventory.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    category: 'fullstack',
    featured: true,
    date: '2023-08-15',
    problem: 'Existing e-commerce solutions were too rigid and expensive for small businesses.',
    solution: 'Developed a custom, scalable platform with a modular architecture, allowing for easy customization and feature additions.',
    results: 'Increased sales by 30% for early adopters and reduced operational costs by 20%.',
    lessons: 'Learned the importance of robust error handling in payment gateways and efficient database indexing for large product catalogs.',
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team collaboration features.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
    category: 'fullstack',
    featured: true,
    date: '2023-06-20',
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with location-based forecasts and interactive maps.',
    techStack: ['Next.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard.vercel.app',
    category: 'frontend',
    featured: true,
    date: '2023-05-10',
  },
  {
    slug: 'api-gateway',
    title: 'Microservices API Gateway',
    description:
      'A high-performance API gateway for managing microservices architecture with rate limiting and authentication.',
    techStack: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/yourusername/api-gateway',
    category: 'backend',
    featured: false,
    date: '2023-04-05',
  },
  {
    slug: 'mobile-fitness-app',
    title: 'Fitness Tracking App',
    description:
      'A mobile application for tracking workouts, nutrition, and fitness goals with social features.',
    techStack: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/fitness-app',
    category: 'mobile',
    featured: false,
    date: '2023-03-15',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://portfolio-demo.vercel.app',
    category: 'frontend',
    featured: false,
    date: '2023-02-01',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach((project) => categories.add(project.category));
  return Array.from(categories);
}
