import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        sourcemapExcludeSources: false,
      },
    },
  },
  plugins: [dts({ tsconfigPath: './tsconfig.json' })],
});
