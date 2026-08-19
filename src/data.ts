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
  resumePdf: '/resume/Mauricio_cv.pdf',
};

export const HOME = {
  eyebrow: 'Personal site',
  intro:
    'I am Mauricio Romero, a software developer currently working at Aerolab. I enjoy building practical interfaces, leading frontend-heavy initiatives, and documenting the ideas that make teams work better.',
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
    slug: 'the-orange-mate',
    title: 'The Orange Mate',
    subtitle: 'Social platform for solo travelers',
    description:
      'A full-stack social app where solo travelers find companions and split travel costs. Built with Next.js 15 and Supabase, it ships authentication, a personalized dashboard, real-time 1-on-1 chat, a friends system, trip plans with discovery filters, and reviews — covered by Playwright E2E tests.',
    techs: ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Playwright'],
    live: '',
    source: 'https://github.com/TanisJam/the-orange-mate',
    tag: 'APP',
    accent: 'coral',
  },
  {
    slug: 'dungeon-hub',
    title: 'Dungeon Hub',
    subtitle: 'D&D companion for a West Marches campaign',
    description:
      'A monorepo companion for an asynchronous, multi-DM D&D 5e world: character management, a browsable rules compendium, a campaign map, and a world-knowledge layer. A Fastify API, a Next.js web app, and a Discord bot share a pure domain package with Zod schemas as the single source of rule truth.',
    techs: ['TypeScript', 'Fastify', 'Next.js', 'Drizzle ORM', 'Supabase', 'Discord.js'],
    live: '',
    source: 'https://github.com/TanisJam/dungeon-hub',
    tag: 'APP',
    accent: 'green',
  },
  {
    slug: 'peel',
    title: 'peel',
    subtitle: 'Ephemeral git worktrees with managed dev servers',
    description:
      'A published CLI that spins up any branch in an isolated git worktree with its own node_modules, a copied .env, and a free port — then tears it all down on exit. Distributed on npm as @tanisjam/peel.',
    techs: ['TypeScript', 'Node.js', 'CLI', 'npm'],
    live: 'https://www.npmjs.com/package/@tanisjam/peel',
    liveLabel: 'npm ↗',
    source: 'https://github.com/TanisJam/peel',
    tag: 'TOOL',
    accent: 'ink',
  },
  {
    slug: 'orange-grove',
    title: 'Orange Grove',
    subtitle: 'A portable Spec-Driven Development harness',
    description:
      'A tool-agnostic SDD harness with a hard rule: no implementation before approved specs. Eight phases and eight specialist agents, pure-markdown specs, and dependency-free validators that enforce requirement-to-task-to-evidence traceability across Claude Code, Cursor, opencode, and Codex.',
    techs: ['Node.js', 'Markdown', 'Spec-Driven Dev', 'CLI'],
    live: '',
    source: 'https://github.com/TanisJam/orange-grove',
    tag: 'TOOL',
    accent: 'pink',
  },
  {
    slug: 'just-a-drop',
    title: 'Just a Drop',
    subtitle: 'Ephemeral audio drops that vanish after one listen',
    description:
      'Record a voice note in the browser, get a short shareable link, and send it — the recipient plays it once, then it is gone. Chunked uploads stream to Cloudflare R2, Upstash Redis enforces the one-listen TTL, and an hourly Vercel cron clears expired drops.',
    techs: ['Next.js', 'TypeScript', 'Cloudflare R2', 'Upstash Redis', 'Vercel'],
    live: '',
    source: 'https://github.com/TanisJam/just-a-drop',
    tag: 'APP',
    accent: 'green',
  },
  {
    slug: 'hecho-hex',
    title: 'Hecho Hex',
    subtitle: 'Geospatial message board on a hexagonal map',
    description:
      'Drop anonymous messages pinned to your location on a Mapbox map. Notes aggregate into Uber H3 hex cells, rendered as a word-cloud layer and floating draggable bubbles, with real-time updates via Supabase and a 48-hour expiry.',
    techs: ['Next.js', 'TypeScript', 'Mapbox GL', 'H3', 'Supabase', 'Framer Motion'],
    live: '',
    source: 'https://github.com/TanisJam/hecho-hex',
    tag: 'APP',
    accent: 'coral',
  },
];

export const NAVIGATION = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];
