import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import postcss from './postcss.config'
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: true,
      eslintrc: {
        enabled: true
      }
    }),
    uni()
  ],
  css: {
    postcss
  },
  resolve: {
    alias: {
      '@': `${resolve(__dirname)}/`
    }
  }
})
