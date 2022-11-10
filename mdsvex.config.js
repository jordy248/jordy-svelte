import { join, resolve } from 'node:path';
import { defineMDSveXConfig as defineConfig } from "mdsvex";

import highlighter from'./src/lib/utilities/codeHighlighter.js';

const __dirname = resolve();
console.log(join(__dirname, 'test'));

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },
  highlight: {
    highlighter,
  },
  // layout: join(__dirname, './src/lib/components/MarkdownLayout.svelte'),
  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
