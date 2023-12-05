import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'nntr7c',

  e2e: {
    baseUrl: 'http://localhost:5173/',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
