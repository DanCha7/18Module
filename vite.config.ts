import { defineConfig, PluginOption, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react() as PluginOption], // Приведение типа для плагина React
  base: "18Module",
  server: {
    configureServer: (server: ViteDevServer) => {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('.ts') || req.url?.endsWith('.tsx')) {
          res.setHeader('Content-Type', 'application/javascript');
        }
        next();
      });
    },
  },
});






