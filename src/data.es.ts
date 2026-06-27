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
    slug: 'eradrin-bot',
    title: 'Bot asistente de rol para Discord',
    subtitle: 'Bot asistente para servidores de roleplay en Discord',
    description:
      'Un bot de Discord para un servidor de rol que responde preguntas, recupera información de personajes y tira dados usando discord.js, TypeScript y Gemini AI.',
    techs: ['JavaScript', 'TypeScript', 'Discord.js', 'Gemini AI'],
    live: '',
    source: 'https://github.com/TanisJam/eradrin-bot',
    screenshot: '/assets/projects/bot.png',
    tag: 'TOOL',
    accent: 'green',
  },
  {
    slug: 'shopping-cart',
    title: 'Demo de carrito de compras',
    subtitle: 'Demo simple de e-commerce con carrito',
    description:
      'Una demo de carrito de compras que permite navegar productos por categoría, filtrarlos y buscarlos, con persistencia del estado del carrito.',
    techs: ['React', 'TypeScript', 'Redux', 'Vite', 'Material UI'],
    live: 'https://first-cart-chi.vercel.app/',
    source: 'https://github.com/TanisJam/first-cart',
    screenshot: '/assets/projects/shop.png',
    tag: 'APP',
    accent: 'coral',
  },
  {
    slug: 'reposo',
    title: 'Landing page de El Reposo del Cuervo',
    subtitle: 'Landing para una comunidad de D&D en Discord',
    description:
      'Una landing page para una comunidad de D&D creada para explicar el servidor, sus reglas y cómo unirse, usando Next.js, TypeScript y Tailwind CSS.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI'],
    live: 'https://elreposodelcuervo.mnr.ar/',
    source: 'https://github.com/TanisJam/reposo',
    screenshot: '/assets/projects/reposo.png',
    tag: 'SITE',
    accent: 'pink',
  },
  {
    slug: 'hero-nft',
    title: 'Hero NFT',
    subtitle: 'Landing demo para transacciones NFT',
    description:
      'Una landing demo orientada a transacciones NFT creada con Next.js y Sass.',
    techs: ['NextJS', 'Sass', 'ESLint'],
    live: 'https://hero-nft.vercel.app/',
    source: 'https://github.com/TanisJam/hero-page-nft',
    screenshot: '/assets/projects/nft.png',
    tag: 'DEMO',
    accent: 'green',
  },
];
