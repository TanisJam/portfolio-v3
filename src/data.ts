export const SITE = {
  title: 'Mauricio Romero',
  description:
    'Personal site of Mauricio Romero — software developer at Aerolab writing about frontend systems, internal tools, and practical web development.',
  siteUrl: 'https://www.mnr.ar',
  author: 'Mauricio Romero',
  role: 'Software Developer at Aerolab',
  email: 'mauricionromero@hotmail.com',
  location: 'Argentina',
  github: 'https://github.com/TanisJam',
  linkedin: 'https://www.linkedin.com/in/mauricionromero/',
  portfolio: 'https://www.mnr.ar',
  resumePdf: '/resume/Profile.pdf',
};

export const HOME = {
  eyebrow: 'Personal site',
  title: 'Software, writing, and the systems behind good product work.',
  intro:
    'I am Mauricio Romero, a software developer currently working at Aerolab. I enjoy building practical interfaces, leading frontend-heavy initiatives, and documenting the ideas that make teams work better.',
  summary:
    'This site is now my personal hub: writing lives on the homepage and blog, while my professional profile has its own place in /resume.',
  highlights: [
    'Currently building internal systems at Aerolab',
    'Helping teams across 40+ Endeavor offices access critical information',
    'Working across frontend, internal tooling, and AI-assisted workflows',
  ],
};

export const BIO = [
  'I’m a software developer with experience in both frontend and backend, currently part of Aerolab. My recent work has focused on leading development for an internal system used by Endeavor staff across more than 40 offices worldwide.',
  'Alongside implementation, I care about technical standards: code reviews, roadmap planning, estimations, and shaping workflows that help teams move with confidence.',
  'Before fully moving into product development, I spent more than four years as an independent IT consultant, which gave me a strong foundation in troubleshooting, networking, hardware, and practical problem-solving.',
];

export const WRITING_TOPICS = [
  'Frontend systems',
  'Internal tools',
  'AI-assisted workflows',
  'Engineering process',
  'Career notes',
];

export const SPECIALTIES = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Salesforce',
  'Code reviews',
  'Roadmap planning',
  'Internal systems',
];

export const LANGUAGES = [
  'Spanish — Native or bilingual',
  'English — Professional working proficiency',
];

export const CERTIFICATIONS = [
  'EF SET English Certificate — 72/100 (C2 Proficient)',
  'Fundamentos de Scrum',
  'Fundamentos de Bases de Datos',
  'Experiencia en proyecto. Aceleración de Alkemy',
];

export const EDUCATION = [
  'Universidad Nacional de Rosario (UNR) — Industrial Engineering, March 2014 to August 2016',
];

export const TECHS = [
  { name: 'Vite', logo: 'vite' },
  { name: 'NextJS', logo: 'nextjs' },
  { name: 'ReactJS', logo: 'react' },
  { name: 'Tailwind CSS', logo: 'tailwind' },
  { name: 'TypeScript', logo: 'ts' },
  { name: 'Redux', logo: 'redux' },
  { name: 'Sass', logo: 'sass' },
  { name: 'CSS', logo: 'css' },
  { name: 'HTML', logo: 'html' },
  { name: 'JavaScript', logo: 'js' },
  { name: 'Strapi', logo: 'strapi' },
  { name: 'SQLite', logo: 'sqlite' },
  { name: 'MongoDB', logo: 'mongodb' },
  { name: 'Bootstrap', logo: 'bootstrap' },
  { name: 'Styled-components', logo: 'sc' },
  { name: 'Node', logo: 'node' },
  { name: 'Docker', logo: 'docker' },
  { name: 'Jest', logo: 'jest' },
  { name: 'GitHub', logo: 'github' },
  { name: 'Jira', logo: 'jira' },
];

export const EXPERIENCE = [
  {
    title: 'Software Developer',
    company: 'Aerolab',
    image: '/assets/logo.svg',
    date: 'January 2025 - Present',
    description:
      'Leading development of an internal system for Endeavor.org so staff across 40+ offices can access critical information more efficiently. My role includes technical guidance, code reviews, roadmap planning, estimations, and introducing AI-assisted practices that improve quality and team knowledge sharing.',
  },
  {
    title: 'IT Consultant',
    company: 'Autónomo',
    image: '/assets/logo.svg',
    date: 'January 2021 - February 2025',
    description:
      'Worked independently across hardware troubleshooting, networking, security, and custom web development. I helped clients identify technical needs and translate them into practical hardware and software solutions.',
  },
  {
    title: 'Front End Developer',
    company: 'Viking Sasquatch',
    link: 'https://www.linkedin.com/company/viking-sasquatch/',
    image: '/assets/VS.jpg',
    date: 'December 2022 - May 2024',
    description:
      'Contributed to a mortgage and home equity loan platform using React, TailwindCSS, Redux, TypeScript, and Vite. Built reusable UI, connected frontend flows to backend services, supported migration work, and participated in a React Native hackathon project.',
  },
  {
    title: 'Front End Developer',
    company: 'FirstClose',
    link: 'https://www.linkedin.com/company/firstclose/',
    image: '/assets/FC.jpg',
    date: 'December 2022 - April 2023',
    description:
      'Helped improve a web-based mortgage origination product by building visual components, implementing interactions, and supporting the migration toward ReactJS to improve functionality and performance.',
  },
  {
    title: 'Frontend Developer',
    company: 'Esto Es',
    link: 'https://www.linkedin.com/company/estoes/posts/',
    image: '/assets/estoes.jpg',
    date: 'January 2022 - December 2022',
    description:
      'Built and maintained Telecom experiences with Next.js, Material UI, and Strapi. Contributed to a migration from CodeIgniter to Next.js, with strong focus on SSR, performance, modularity, and design-system oriented work.',
  },
  {
    title: 'React Front-end Developer',
    company: 'Alkemy',
    image: '/assets/logo.svg',
    date: 'October 2021 - December 2021',
    description:
      'Worked in a training contract building an NGO website with blog, landing pages, and back-office features while following Scrum methodology and collaborating in a group product environment.',
  },
];

export const PROJECTS = [
  {
    slug: 'eradrin-bot',
    icon: 'discord',
    title: 'Discord Roleplay Assistant Bot',
    subtitle: 'Roleplay Assistant Bot for Discord',
    description:
      'A Discord bot for a roleplaying server that answers questions, retrieves character information, and rolls dice using discord.js, TypeScript, and Gemini AI.',
    techs: ['JavaScript', 'TypeScript', 'Discord.js', 'Gemini AI'],
    live: '',
    source: 'https://github.com/TanisJam/eradrin-bot',
    screenshot: '/assets/projects/bot.png',
    tag: 'TOOL',
    accent: 'green',
  },
  {
    slug: 'shopping-cart',
    icon: 'cart-shopping',
    title: 'Shopping Cart Demo',
    subtitle: 'Simple E-commerce Shopping Cart Demo',
    description:
      'A demo shopping cart application that allows browsing products by category, filtering products, and searching within categories, with persistent cart state.',
    techs: ['React', 'TypeScript', 'Redux', 'Vite', 'Material UI'],
    live: 'https://first-cart-chi.vercel.app/',
    source: 'https://github.com/TanisJam/first-cart',
    screenshot: '/assets/projects/shop.png',
    tag: 'APP',
    accent: 'coral',
  },
  {
    slug: 'reposo',
    icon: 'crow',
    title: 'El Reposo Del Cuervo Landing Page',
    subtitle: 'Landing Page for a D&D Discord Server',
    description:
      'A landing page for a D&D community, built to explain the server, its rules, and how to join, using Next.js, TypeScript, and Tailwind CSS.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI'],
    live: 'https://elreposodelcuervo.mnr.ar/',
    source: 'https://github.com/TanisJam/reposo',
    screenshot: '/assets/projects/reposo.png',
    tag: 'SITE',
    accent: 'pink',
  },
  {
    slug: 'hero-nft',
    icon: 'nft',
    title: 'Hero NFT',
    subtitle: 'Demo Landing Page for NFT Transactions',
    description:
      'A demo landing page for NFT-related transactions created with Next.js and Sass.',
    techs: ['NextJS', 'Sass', 'ESLint'],
    live: 'https://hero-nft.vercel.app/',
    source: 'https://github.com/TanisJam/hero-page-nft',
    screenshot: '/assets/projects/nft.png',
    tag: 'DEMO',
    accent: 'green',
  },
];

export const NAVIGATION = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];
