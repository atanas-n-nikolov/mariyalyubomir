import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgo from 'vite-plugin-svgo'

export default defineConfig({
  plugins: [
    react(),
    svgo({
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          'convertStyleToAttrs',
          'removeDimensions'
        ],
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})
