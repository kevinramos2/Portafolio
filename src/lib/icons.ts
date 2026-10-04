import {
  siAnthropic,
  siC,
  siCss,
  siDjango,
  siFastapi,
  siGit,
  siGithub,
  siGithubactions,
  siGoogle,
  siGooglesheets,
  siHtml5,
  siJavascript,
  siJupyter,
  siNeon,
  siNextdotjs,
  siNumpy,
  siOpenjdk,
  siPandas,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRender,
  siReplit,
  siScikitlearn,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
} from 'simple-icons';

// Nombre de tecnología (tal como se escribe en el contenido) → path SVG de Simple Icons.
// Lo que no esté aquí se muestra solo como texto.
const icons: Record<string, string> = {
  python: siPython.path,
  django: siDjango.path,
  fastapi: siFastapi.path,
  postgresql: siPostgresql.path,
  prisma: siPrisma.path,
  react: siReact.path,
  typescript: siTypescript.path,
  'tailwind css': siTailwindcss.path,
  tailwind: siTailwindcss.path,
  vite: siVite.path,
  'next.js': siNextdotjs.path,
  'shadcn/ui': siShadcnui.path,
  html: siHtml5.path,
  css: siCss.path,
  javascript: siJavascript.path,
  render: siRender.path,
  vercel: siVercel.path,
  neon: siNeon.path,
  'github actions': siGithubactions.path,
  replit: siReplit.path,
  git: siGit.path,
  github: siGithub.path,
  'google sheets api': siGooglesheets.path,
  'google oauth': siGoogle.path,
  'api de claude': siAnthropic.path,
  jupyter: siJupyter.path,
  c: siC.path,
  java: siOpenjdk.path,
  pandas: siPandas.path,
  numpy: siNumpy.path,
  'scikit-learn': siScikitlearn.path,
};

export function iconPath(name: string): string | undefined {
  return icons[name.toLowerCase()];
}

export function iconId(name: string): string {
  return `i-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}
