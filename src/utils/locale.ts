export type Lang = 'en' | 'es';

export const CHROME_COPY = {
  en: {
    navLabel: 'Primary',
    nav: [
      { href: '/home', label: 'Home' },
      { href: '/blog', label: 'Blog' },
      { href: '/projects', label: 'Projects' },
      { href: '/resume', label: 'Resume' },
    ],
    footerEmail: 'email',
    switchLabel: 'ES',
    switchAria: 'Switch to Spanish',
  },
  es: {
    navLabel: 'Principal',
    nav: [
      { href: '/home', label: 'Inicio' },
      { href: '/blog', label: 'Blog' },
      { href: '/projects', label: 'Proyectos' },
      { href: '/resume', label: 'CV' },
    ],
    footerEmail: 'correo',
    switchLabel: 'EN',
    switchAria: 'Cambiar a inglés',
  },
} as const;

const EXTERNAL_PATTERN = /^(https?:|mailto:|#)/;

export const localizePath = (path: string, lang: Lang) => {
  if (EXTERNAL_PATTERN.test(path)) return path;
  if (lang === 'en') return path;

  if (path === '/') return '/es/';

  return `/es${path}`;
};

export const stripLangPrefix = (path: string) => {
  if (path === '/es' || path === '/es/') return '/';
  if (path.startsWith('/es/')) return path.slice(3);
  return path;
};

export const getAlternateLanguagePath = (path: string, lang: Lang) => {
  const basePath = stripLangPrefix(path);
  return lang === 'en' ? localizePath(basePath, 'es') : basePath;
};
