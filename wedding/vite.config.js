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
          { removeViewBox: false }, // Оставя viewBox, което е важно за резолюцията
          { cleanupIDs: false },    // Премахва ID-та, които не се използват
          { removeUselessDefs: true }, // Премахва ненужни дефиниции
          { removeEmptyAttrs: true },  // Премахва празни атрибути
          { removeStyleElement: true }, // Премахва стилове от SVG
          { removeTitle: true },       // Премахва заглавията
          { minifyStyles: true },      // Минифицира стиловете
          { convertShapeToPath: true }, // Превръща фигури в пътеки
        ]
      },
      logLevel: 'warn', // Това ще ни даде повече информация за грешките
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
