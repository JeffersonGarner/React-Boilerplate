/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const excludeFromBundleFilePaths = [ './test' ]

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: { external: excludeFromBundleFilePaths, },
    },
    plugins: [ react() ],
    test: {
        environment: 'jsdom',
        globals: true,
    },
})