// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Bij domeinkoppeling wijzigen naar https://www.recreatiebedrijfboot.nl (zie SEO.md)
  site: 'https://demo-recreatiebedrijf-boot.vercel.app',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
