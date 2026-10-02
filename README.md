# Portafolio

Portafolio personal de Kevin Ramos: una selección de proyectos con enlace directo a las demos desplegadas.

Astro 7 · Tailwind CSS v4 · TypeScript estricto · GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321/Portafolio/
npm run build    # genera ./dist
npm run check    # valida tipos y contenido
```

## Añadir un proyecto

Crear un `.md` en `src/content/projects/` con el frontmatter que define `src/content.config.ts`.
Si falta un campo o está mal escrito, el build falla con un mensaje claro.

- `span`: tamaño de la tarjeta en el bento (`2x2`, `2x1`, `1x1`).
- `order`: posición en la rejilla.
- `demo`: opcional. Sin él, la tarjeta sale como "Solo código".
- `relatedRepos`: agrupa varios repositorios bajo una sola tarjeta.

Las URLs de demo viven en el contenido, no en el campo `homepage` de GitHub.

## Datos personales y contacto

Todo está en `src/lib/site.ts`: nombre, enlaces, stack y trayectoria.

