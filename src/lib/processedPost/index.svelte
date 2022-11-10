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
