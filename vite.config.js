import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: true,
    port: 5000

  },
  resolve: {
    alias: {
      "$assets": "/src/lib/assets",
      "$data": "/src/lib/data",
      "$layout": "/src/lib/layout",
      "$store": "/src/lib/store",
      "$helpers": "/src/lib/helpers"

    }
  }
})
