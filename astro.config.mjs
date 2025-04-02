import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://boxter100.github.io',
  base: '/Dental_Glow',
});