import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Añadir un proyecto es soltar un `.md` en src/content/projects/.
// Si falta un campo o está mal escrito, el build falla con un mensaje claro.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(200),
      repo: z.url(),
      repoName: z.string(),
      demo: z.url().optional(),
      demoNote: z.string().optional(),
      year: z.number().int().min(2023).max(2030),
      yearEnd: z.number().int().min(2023).max(2030).optional(),
      // true → sección «Proyectos en vivo», tarjeta grande. false → «Trabajo académico».
      featured: z.boolean().default(false),
      order: z.number().int(),
      // Tamaño en la rejilla de trabajo académico; las tarjetas destacadas lo ignoran.
      span: z.enum(['2x1', '1x1']).default('1x1'),
      stack: z.array(z.string()).max(6),
      status: z.enum(['produccion', 'activo', 'practica']).default('activo'),
      highlights: z.array(z.string()).max(4).optional(),
      // Una entrada puede representar varios repositorios (p. ej. las prácticas de una materia).
      relatedRepos: z.array(z.object({ name: z.string(), label: z.string() })).optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Pasos del flujo, para las tarjetas grandes sin captura.
      flow: z.array(z.string()).max(5).optional(),
    }),
});

export const collections = { projects };
