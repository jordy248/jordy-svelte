<script>
	import getImageDimensions from '$lib/utilities/imageDimensions.js';

	export let url;
	export let title;
	export let description;
	export let siteTitle;
	export let locale;
	export let image;
	export let squareImage;
	export let article;
	export let facebookPage;
	export let facebookAuthorPage;

	async function updateImageDimensions(image) {
		try {
			const { width, height } = await getImageDimensions(image.url);
			image.width = width;
			image.height = height;
		} catch (error) {
			console.log(error);
			return false;
		}
		return true;
	}

	(async function (image, squareImage) {
		if (image && image.url && (!image.width || !image.height)) {
			await updateImageDimensions(image);
		}

		if (
			squareImage &&
			squareImage.url &&
			(!squareImage.width || !squareImage.height)
		) {
			await updateImageDimensions(squareImage);
		}
	})(image, squareImage);
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={locale} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={article ? 'article' : 'website'} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	{#if article}
		<meta property="article:publisher" content={facebookPage} />
		<meta property="article:author" content={facebookAuthorPage} />
		<meta property="article:published_time" content={article?.datePublished} />
		<meta property="article:modified_time" content={article?.lastUpdated} />
	{/if}

	{#if image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content={image.width || 1200} />
		<meta property="og:image:height" content={image.height || 627} />
		<meta property="og:image:alt" content={image.alt} />
	{/if}
	{#if squareImage}
		<meta property="og:image" content={squareImage.url} />
		<meta property="og:image:width" content={squareImage.width || 400} />
		<meta property="og:image:height" content={squareImage.height || 400} />
		<meta property="og:image:alt" content={squareImage.alt} />
	{/if}
</svelte:head>
