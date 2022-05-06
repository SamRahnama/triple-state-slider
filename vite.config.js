import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: path.resolve(__dirname, './src/index.js'),
      name:'triple-state-slider',
      fileName: format => `triple-state-slider.${format}.js`,

    },
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue',
        },
      }
    }
  },
  plugins: [vue()]
})
