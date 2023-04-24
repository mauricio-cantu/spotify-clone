import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

svgLoader({
  defaultImport: 'component'
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.indexOf('sign') > -1
      }
    }
  }), svgLoader()]
})
