import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xjodoin.github.io',
  base: '/unpetitcoeuralafois',
  integrations: [tailwind({ applyBaseStyles: false })]
});
