import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
<<<<<<< HEAD
  
  viteConfig,
  defineConfig({
    base: '/yem-daramony/', // 🔥 required for GitHub Pages
=======
  viteConfig,
  defineConfig({
    base: '/profile/',
>>>>>>> 26395d2 (update new)
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
