<script>
	import '@fontsource/ibm-plex-mono';
	export let post;
</script>

<div>
	<svelte:component this={post} />
</div>

<style lang="scss" global>
	@import '../../styles/scss/codeHighlighting';
</style>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
		integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
		crossorigin="anonymous"
	/>
</svelte:head>
