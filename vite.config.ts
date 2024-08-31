import { defineConfig, PluginOption} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react() as PluginOption], // Приведение типа для плагина React
  base: "18Module",

});






