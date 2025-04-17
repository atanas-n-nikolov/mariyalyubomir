import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageminPlugin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    imageminPlugin({
      pngquant: {
        quality: [0.65, 0.90],  
      },
      mozjpeg: {
        quality: 65,           
        progressive: true,     
      },
      optipng: {
        optimizationLevel: 7,  
      },
      gifsicle: {
        interlaced: false,     
      },
      webp: {
        quality: 75,           
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
          { removeUselessDefs: true },
          { removeEmptyAttrs: true },
          { removeStyleElement: true },
          { removeTitle: true },
          { minifyStyles: true },
          { convertShapeToPath: true },
        ]
      },
      logLevel: 'warn',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})
