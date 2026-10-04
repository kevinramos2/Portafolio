// Fuente de verdad de los datos personales y de contacto del sitio.

export const site = {
  name: 'Kevin Ramos',
  user: 'kevinramos2',
  role: 'Estudiante de Ingeniería de Sistemas e Informática',
  university: 'Universidad Nacional de Colombia',
  location: 'Medellín, Colombia',
  locationShort: 'Medellín, CO',
  timezone: 'UTC-5',
  title: 'Kevin Ramos — Portafolio',
  description:
    'Estudiante de Ingeniería de Sistemas en la Universidad Nacional de Colombia. Construyo software que resuelve problemas reales y lo llevo a producción.',
  github: 'https://github.com/kevinramos2',
  // Vacío → la sección de contacto muestra solo GitHub.
  email: 'kevin.ralu22@gmail.com',
  emailSubject: 'Hola Kevin — vi tu portafolio',
  whoami: ['python', 'django', 'fastapi', 'react'],
} as const;

export const nav = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#academico', label: 'Académico' },
  { href: '#stack', label: 'Stack' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#contacto', label: 'Contacto' },
] as const;

export const stackGroups = [
  { title: 'Backend', items: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Prisma'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Infraestructura', items: ['Render', 'Vercel', 'Neon', 'GitHub Actions', 'Replit'] },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Google Sheets API', 'API de Claude', 'PyMuPDF', 'Jupyter'],
  },
  { title: 'Sistemas y datos', items: ['C', 'Java', 'Montecarlo', 'Pandas', 'scikit-learn'] },
] as const;

export const timeline = [
  {
    period: '2026',
    title: 'Panel de revisión de aspirantes',
    text: 'En uso por el equipo de selección de la UNAL para las convocatorias de Trabajador Oficial.',
  },
  {
    period: '2026',
    title: 'Punto de venta de Velas Manare',
    text: 'POS con inventario, créditos y facturación electrónica DIAN a través de Siigo, desplegado en Vercel con PostgreSQL en Neon.',
  },
  {
    period: '2026',
    title: 'Portafolio personal',
    text: 'Este sitio: Astro, Tailwind y despliegue automático en GitHub Pages.',
  },
  {
    period: '2026',
    title: 'Velas Manare en la web',
    text: 'Sitio con catálogo de 115 referencias y pedidos por WhatsApp, desplegado en Vercel.',
  },
  {
    period: '2025–2026',
    title: 'Objetos perdidos',
    text: 'Desarrollo completo y despliegue en Render con PostgreSQL en Neon.',
  },
  {
    period: '2025',
    title: 'Ciencia de datos',
    text: 'Clasificación de artículos biomédicos con NLP y laboratorios de Fundamentos de Analítica.',
  },
  {
    period: '2024–2025',
    title: 'Desarrollo web',
    text: 'HTML, CSS y JavaScript a mano, sin frameworks.',
  },
  {
    period: '2024',
    title: 'Ingeniería de software',
    text: 'Aplicación de escritorio de inventario, ventas y facturación para la Fábrica de Velas Manare, en equipo.',
  },
  {
    period: '2024',
    title: 'Fundamentos',
    text: 'Cinco prácticas de Simulación de Sistemas, estructuras de datos en Java y un TLB en C.',
  },
] as const;

/** Antepone el `base` de Astro a una ruta interna. */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
