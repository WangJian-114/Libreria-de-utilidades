// npm i -D @types/node
// npm i -D vite-plugin-dts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'jian-utils'
        },
        sourcemap: true,
        target: 'es6',
        minify: false
    },
    plugins: [dts({outDir: 'dist'})]
})