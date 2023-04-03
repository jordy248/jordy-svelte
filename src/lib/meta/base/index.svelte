<script>
	import metaData from '$lib/config/meta.js';

	export let title;
	export let description;
	export let url;
</script>

<svelte:head>
	{#if title !== metaData?.website?.title}
		<title>{title} - {metaData?.website?.title}</title>
	{:else}
		<title>{title}</title>
	{/if}
	<meta name="description" content={{ description }} />
	<link rel="canonical" href={url} />
</svelte:head>
