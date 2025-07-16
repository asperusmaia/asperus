 // Se fuder caralho! porra tomar no cu! foda-se
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ESTA É A CORREÇÃO DEFINITIVA:
  // Deixar o 'base' como uma string vazia ou './' força o Vite a usar
  // caminhos relativos (./assets/...) em vez de absolutos (/assets/...).
  // Isso funciona em QUALQUER plataforma de hospedagem.
  base: './',

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
