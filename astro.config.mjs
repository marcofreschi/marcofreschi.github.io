import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcofreschi.github.io',
  server: {
    host: 'localhost',
    port: 4321,
  },
  vite: {
    server: {
      allowedHosts: ['localhost', '127.0.0.1', '::1', 'all'],
    },
  },
});
