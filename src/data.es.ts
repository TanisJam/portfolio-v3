export const SITE_ES = {
  title: 'Mauricio Romero',
  description:
    'Sitio personal de Mauricio Romero — desarrollador de software en Aerolab que escribe sobre sistemas frontend, herramientas internas y desarrollo web práctico.',
  author: 'Mauricio Romero',
  role: 'Desarrollador de Software en Aerolab',
  email: 'mauricionromero@hotmail.com',
  location: 'Argentina',
  github: 'https://github.com/TanisJam',
  linkedin: 'https://www.linkedin.com/in/mauricionromero/',
  resumePdf: '/resume/Mauricio_cv.pdf',
};

export const HOME_ES = {
  eyebrow: 'Sitio personal',
  intro:
    'Soy Mauricio Romero, desarrollador de software y actualmente trabajo en Aerolab. Disfruto construir interfaces prácticas, liderar iniciativas con foco en frontend y documentar ideas que ayuden a los equipos a trabajar mejor.',
  highlights: [
    'Actualmente construyendo sistemas internos en Aerolab',
    'Ayudando a equipos de más de 40 oficinas de Endeavor a acceder a información crítica',
    'Trabajando entre frontend, herramientas internas y flujos asistidos por IA',
  ],
};

export const BIO_ES = [
  'Soy desarrollador de software con experiencia tanto en frontend como en backend, y actualmente formo parte de Aerolab. Mi trabajo reciente se enfoca en liderar el desarrollo de un sistema interno utilizado por el staff de Endeavor en más de 40 oficinas alrededor del mundo.',
  'Además de implementar, me importan los estándares técnicos: code reviews, planificación de roadmap, estimaciones y la construcción de flujos de trabajo que ayuden a los equipos a avanzar con confianza.',
  'Antes de dedicarme por completo al desarrollo de producto, trabajé más de cuatro años como consultor IT independiente, lo que me dio una base sólida en troubleshooting, redes, hardware y resolución práctica de problemas.',
];

export const SPECIALTIES_ES = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Salesforce',
  'Code reviews',
  'Planificación de roadmap',
  'Sistemas internos',
];

export const LANGUAGES_ES = [
  'Español — Nativo o bilingüe',
  'Inglés — Competencia profesional',
];

export const CERTIFICATIONS_ES = [
  'EF SET English Certificate — 72/100 (C2 Proficient)',
  'Fundamentos de Scrum',
  'Fundamentos de Bases de Datos',
  'Experiencia en proyecto. Aceleración de Alkemy',
];

export const EDUCATION_ES = [
  'Universidad Nacional de Rosario (UNR) — Ingeniería Industrial, marzo de 2014 a agosto de 2016',
];

export const EXPERIENCE_ES = [
  {
    title: 'Desarrollador de Software',
    company: 'Aerolab',
    date: 'Enero 2025 - Actualidad',
    description:
      'Liderando el desarrollo de un sistema interno para Endeavor.org para que el staff de más de 40 oficinas pueda acceder a información crítica con mayor eficiencia. Mi rol incluye guía técnica, code reviews, planificación de roadmap, estimaciones e incorporación de prácticas asistidas por IA que mejoran la calidad y el intercambio de conocimiento.',
  },
  {
    title: 'Consultor IT',
    company: 'Autónomo',
    date: 'Enero 2021 - Febrero 2025',
    description:
      'Trabajé de forma independiente en troubleshooting de hardware, redes, seguridad y desarrollo web a medida. Ayudé a clientes a detectar necesidades técnicas y traducirlas en soluciones prácticas de hardware y software.',
  },
  {
    title: 'Desarrollador Front End',
    company: 'Viking Sasquatch',
    date: 'Diciembre 2022 - Mayo 2024',
    description:
      'Contribuí a una plataforma de hipotecas y home equity loans usando React, TailwindCSS, Redux, TypeScript y Vite. Construí UI reutilizable, conecté flujos frontend con servicios backend, acompañé migraciones y participé en un proyecto de hackathon con React Native.',
  },
  {
    title: 'Desarrollador Front End',
    company: 'FirstClose',
    date: 'Diciembre 2022 - Abril 2023',
    description:
      'Ayudé a mejorar un producto web de originación hipotecaria construyendo componentes visuales, implementando interacciones y acompañando la migración hacia ReactJS para mejorar funcionalidad y performance.',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Esto Es',
    date: 'Enero 2022 - Diciembre 2022',
    description:
      'Desarrollé y mantuve experiencias de Telecom con Next.js, Material UI y Strapi. Participé en una migración desde CodeIgniter a Next.js, con fuerte foco en SSR, performance, modularidad y trabajo orientado a design systems.',
  },
  {
    title: 'Desarrollador Front-end React',
    company: 'Alkemy',
    date: 'Octubre 2021 - Diciembre 2021',
    description:
      'Trabajé en un contrato de formación construyendo el sitio de una ONG con blog, landings y back-office, siguiendo metodología Scrum y colaborando en un entorno de producto grupal.',
  },
];

export const PROJECTS_ES = [
  {
    slug: 'the-orange-mate',
    title: 'The Orange Mate',
    subtitle: 'Plataforma social para viajeros solos',
    description:
      'Una app social full-stack donde viajeros solos encuentran compañía y comparten gastos de viaje. Hecha con Next.js 15 y Supabase: autenticación, dashboard personalizado, chat 1 a 1 en tiempo real, sistema de amigos, planes de viaje con filtros de descubrimiento y reseñas, con tests E2E en Playwright.',
    techs: ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Playwright'],
    live: 'https://the-orange-mate.mnr.ar',
    source: 'https://github.com/TanisJam/the-orange-mate',
    tag: 'APP',
    accent: 'coral',
  },
  {
    slug: 'dungeon-hub',
    title: 'Dungeon Hub',
    subtitle: 'Companion de D&D para una campaña West Marches',
    description:
      'Un monorepo para un mundo de D&D 5e asíncrono y multi-DM: gestión de personajes, compendio de reglas navegable, mapa de campaña y una capa de conocimiento del mundo. Una API en Fastify, una web en Next.js y un bot de Discord comparten un paquete de dominio puro con esquemas Zod como única fuente de verdad de las reglas.',
    techs: ['TypeScript', 'Fastify', 'Next.js', 'Drizzle ORM', 'Supabase', 'Discord.js'],
    live: '',
    source: 'https://github.com/TanisJam/dungeon-hub',
    tag: 'APP',
    accent: 'green',
  },
  {
    slug: 'peel',
    title: 'peel',
    subtitle: 'Worktrees de git efímeros con dev servers gestionados',
    description:
      'Una CLI publicada que levanta cualquier rama en un worktree de git aislado, con su propio node_modules, un .env copiado y un puerto libre, y desarma todo al salir. Distribuida en npm como @tanisjam/peel.',
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
    subtitle: 'Un harness portable de Spec-Driven Development',
    description:
      'Un harness de SDD agnóstico de herramienta con una regla dura: no hay implementación antes de specs aprobadas. Ocho fases y ocho agentes especialistas, specs en markdown puro y validadores sin dependencias que garantizan la trazabilidad requisito-tarea-evidencia en Claude Code, Cursor, opencode y Codex.',
    techs: ['Node.js', 'Markdown', 'Spec-Driven Dev', 'CLI'],
    live: '',
    source: 'https://github.com/TanisJam/orange-grove',
    tag: 'TOOL',
    accent: 'pink',
  },
  {
    slug: 'just-a-drop',
    title: 'Just a Drop',
    subtitle: 'Drops de audio efímeros que se borran tras una escucha',
    description:
      'Grabás una nota de voz en el navegador, obtenés un link corto para compartir y lo enviás: quien lo recibe lo escucha una sola vez y desaparece. Los uploads se suben por chunks a un MinIO self-hosted, Redis impone el TTL de una escucha y un cron diario en Vercel limpia los drops vencidos: todo el backend corre en mi homelab, expuesto por un túnel de Cloudflare.',
    techs: ['Next.js', 'TypeScript', 'MinIO', 'Redis', 'Cloudflare Tunnel', 'Vercel'],
    live: 'https://just-a-drop.mnr.ar',
    source: 'https://github.com/TanisJam/just-a-drop',
    tag: 'APP',
    accent: 'green',
  },
  {
    slug: 'hecho-hex',
    title: 'Hecho Hex',
    subtitle: 'Muro de mensajes geoespacial sobre un mapa hexagonal',
    description:
      'Dejás mensajes anónimos pineados a tu ubicación sobre un mapa de Mapbox. Las notas se agregan en celdas hexagonales H3 de Uber, mostradas como una capa de nube de palabras y burbujas flotantes arrastrables, con actualizaciones en tiempo real vía Supabase y expiración a las 48 horas.',
    techs: ['Next.js', 'TypeScript', 'Mapbox GL', 'H3', 'Supabase', 'Framer Motion'],
    live: 'https://hecho-hex.mnr.ar',
    source: 'https://github.com/TanisJam/hecho-hex',
    tag: 'APP',
    accent: 'coral',
  },
];
