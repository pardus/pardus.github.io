import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import { defineConfig } from 'vite'
import { mdsvex } from 'mdsvex'
import postcss from 'postcss'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
    clearScreen: false,

    plugins: [
        routify({
            ssr: { enable: !!production },
        }),
        svelte({
            compilerOptions: {
                dev: !production,
                hydratable: !!process.env.ROUTIFY_SSR_ENABLE,
            },
            extensions: ['.md', '.svelte'],
            preprocess: [
                mdsvex({ extension: 'md' })]
        }),

    ],
    css: { postcss },

    server: {
        port: 5000,
        host: true
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
