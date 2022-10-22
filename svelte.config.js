import preprocess from "svelte-preprocess";
import preprocessReact from "svelte-preprocess-react/preprocessReact";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import node from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: node(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	// preprocess: [
	// 	preprocess({ postcss: true }),
	// 	mdsvex({
	// 		extensions: ['.md'],
	// 		layout: {}
	// 	}),
	// ]

	preprocess: [
		preprocessReact({
			preprocess: [
				preprocess({
					postcss: true,
				}),
				mdsvex({
					extensions: ['.md'],
					layout: {}
				})
			],
		}),
	]
};

export default config;
