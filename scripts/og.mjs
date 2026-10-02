// Genera public/og.png (1200×630). Se ejecuta a mano con `npm run og` cuando cambie el texto;
// el PNG resultante se versiona para que el build no dependa de las fuentes del sistema.
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#1E2A24" stroke-opacity="0.6"/>
    </pattern>
    <radialGradient id="glow" cx="50%" cy="0%" r="70%">
      <stop offset="0" stop-color="#4ADE80" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#4ADE80" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#080B09"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <circle cx="86" cy="92" r="8" fill="#4ADE80"/>
  <text x="108" y="101" font-family="Consolas, 'JetBrains Mono', monospace" font-size="26" font-weight="700" fill="#E4EBE7">kevinramos2</text>
  <text x="80" y="235" font-family="'Segoe UI', Inter, Arial, sans-serif" font-size="88" font-weight="800" letter-spacing="-3" fill="#E4EBE7">Construyo software</text>
  <text x="80" y="330" font-family="'Segoe UI', Inter, Arial, sans-serif" font-size="88" font-weight="800" letter-spacing="-3" fill="#E4EBE7">que resuelve</text>
  <text x="80" y="425" font-family="'Segoe UI', Inter, Arial, sans-serif" font-size="88" font-weight="800" letter-spacing="-3" fill="#4ADE80">problemas reales.</text>
  <text x="80" y="520" font-family="Consolas, 'JetBrains Mono', monospace" font-size="26" fill="#8FA396">Kevin Ramos · Ingeniería de Sistemas · UNAL · Medellín</text>
  <text x="80" y="562" font-family="Consolas, 'JetBrains Mono', monospace" font-size="26" fill="#7C8F84">python · django · fastapi · react</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
console.log('public/og.png generado');
