import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    define: {
      'import.meta.env.PUBLIC_ANALYTICS_ID': JSON.stringify(process.env.ANALYTICS_ID),
    },
  },
});
