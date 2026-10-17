// @ts-check
import { defineConfig } from 'astro/config'
import precompress from './integrations/precompress.mjs'

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: 'always',
	},
	integrations: [precompress()],
})
