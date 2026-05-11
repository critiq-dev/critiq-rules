import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    define: {
      'import.meta.env.PUBLIC_DB_PASSWORD': JSON.stringify(process.env.DB_PASSWORD),
    },
  },
});
