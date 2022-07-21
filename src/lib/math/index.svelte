<script>
  // import 'mathjax/es5/tex-chtml.js';
  // import { onMount } from 'svelte';
  import katex from "katex";

  // onMount(() => {
	// 	MathJax = {
  //     tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
  //     svg: {fontCache: 'global'}
  //   };
	// });

  // export let equation;
	export let inline;
  export let equation;

  const displayMode = inline === "false";
  const options = {
		displayMode,
		throwOnError: false
	};

  // const katexOut = katex.render(equation, options);
  const katexString = katex.renderToString(equation, options);
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
</svelte:head>

<span>
  {@html katexString}
</span>
