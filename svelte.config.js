// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// // If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// // See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// adapter: adapter()

		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			// Add this block inside your existing kit configuration
			handleMissingId(id, from) {
				// This function will be called whenever a missing ID is encountered.
				// You can decide how to handle it, for example, by ignoring specific IDs.
				if (id === '0') {
					return; // Ignore missing ID '0'
				}
				// Additional check for unexpected ID values
				if (typeof id === 'object') {
					console.error(`Unexpected object ID encountered: ${JSON.stringify(id)} from ${from}`);
					return; // Optionally handle or log the object ID case
				}
				// For any other IDs, throw an error to keep the default behavior
				throw new Error(`Missing ID ${id} from ${from}`);
			}
		}
	}
};

export default config;
