---
title: Panel de revisión de aspirantes
summary: Herramienta interna que lee expedientes PDF de convocatorias de la UNAL con la API de Claude, los valida contra el aviso oficial y guía la revisión humana paso a paso.
repo: https://github.com/kevinramos2/automatizaci-n-convocatorias-TO-UN
repoName: automatizaci-n-convocatorias-TO-UN
demo: https://automatizaci-n-convocatorias-to-un.vercel.app/
year: 2026
featured: true
order: 1
span: 2x2
status: produccion
stack: [Python, FastAPI, React, TypeScript, Tailwind CSS, API de Claude]
highlights:
  - 102 pruebas automatizadas
  - En uso por el equipo de selección
  - La decisión siempre es de una persona
  - Sin datos reales en el repo (Ley 1581)
cover: ../../assets/projects/panel-convocatorias.png
coverAlt: Panel de revisión en modo demo. Lista de aspirantes de prueba, visor del documento y el primer paso de los siete, con la sugerencia del sistema y la decisión de quien revisa.
flow:
  - Expediente PDF
  - Lectura y clasificación con Claude
  - Validación contra el aviso
  - Revisión humana en 7 pasos
  - Fila en Google Sheets
---
