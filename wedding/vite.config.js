import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageminPlugin from 'vite-plugin-imagemin' // Този пакет е нужен за компресия

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imageminPlugin({
      pngquant: {
        quality: [0.65, 0.90],  // Определя качеството на PNG изображенията
      },
      mozjpeg: {
        quality: 65,           // Определя качеството на JPEG изображенията
        progressive: true,     // Направете JPEG изображенията прогресивни
      },
      optipng: {
        optimizationLevel: 7,  // Изберете нивото на оптимизация за PNG
      },
      gifsicle: {
        interlaced: false,     // Уверете се, че GIF изображенията не са интерласирани
      },
      webp: {
        quality: 75,           // Определя качеството на WebP изображенията
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', // Определя начина на именуване на файловете
      },
    },
  },
})
