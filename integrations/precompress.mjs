// @ts-check
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import { brotliCompress, constants, gzip } from 'node:zlib'

const gzipAsync = promisify(gzip)
const brotliAsync = promisify(brotliCompress)

// Already-compressed formats (woff, woff2, images) gain nothing
const EXTENSIONS = new Set([
	'.html',
	'.css',
	'.js',
	'.mjs',
	'.json',
	'.svg',
	'.xml',
	'.txt',
	'.ico',
	'.webmanifest',
])

/**
 * Writes `.gz` and `.br` siblings for text assets in the build output,
 * for nginx `gzip_static` / `brotli_static`.
 * @returns {import('astro').AstroIntegration}
 */
export default function precompress() {
	return {
		name: 'precompress',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const root = fileURLToPath(dir)
				const entries = await readdir(root, {
					recursive: true,
					withFileTypes: true,
				})
				const files = entries
					.filter((e) => e.isFile() && EXTENSIONS.has(extname(e.name)))
					.map((e) => join(e.parentPath, e.name))

				await Promise.all(
					files.map(async (file) => {
						const source = await readFile(file)
						const [gz, br] = await Promise.all([
							gzipAsync(source, {
								level: constants.Z_BEST_COMPRESSION,
								memLevel: constants.Z_MAX_MEMLEVEL,
							}),
							brotliAsync(source, {
								params: {
									[constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
									[constants.BROTLI_PARAM_QUALITY]:
										constants.BROTLI_MAX_QUALITY,
									[constants.BROTLI_PARAM_LGWIN]:
										constants.BROTLI_MAX_WINDOW_BITS,
									[constants.BROTLI_PARAM_SIZE_HINT]: source.length,
								},
							}),
						])
						// Skip outputs that would be larger than the original
						if (gz.length < source.length) await writeFile(`${file}.gz`, gz)
						if (br.length < source.length) await writeFile(`${file}.br`, br)
						logger.info(
							`${relative(root, file)}: ${source.length} → gz ${gz.length}, br ${br.length}`,
						)
					}),
				)
			},
		},
	}
}
