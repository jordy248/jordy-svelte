import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from 'remark-math'

import highlighter from'./src/lib/utilities/codeHighlighter.js';


const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },
  highlight: {
    highlighter,
  },
  remarkPlugins: [
    remarkMath,
  ],
  rehypePlugins: [
    rehypeKatexSvelte,
  ],
});

export default config;
