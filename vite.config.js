import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Default to relative path './' so it works cleanly on any GitHub Pages repo or custom domain without breaking asset links
  const basePath = env.VITE_BASE_PATH || process.env.VITE_BASE_PATH || './';

  return {
    base: basePath,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'esbuild',
    },
    server: {
      port: 5173,
      open: false,
    },
  };
});

