<script>
	import metaData from '$lib/config/meta.js';
	import Base from '$lib/meta/base/index.svelte';
	import OpenGraph from '$lib/meta/openGraph/index.svelte';
	import TwitterCards from '$lib/meta/twitter/index.svelte';

	export let url;
	export let title;
	export let description;
	export let siteTitle;
	export let locale;
	export let image;
	export let imageAlt;
	export let squareImage;
	export let article;

	const baseProps = {
		url: url || metaData?.website?.url,
		title: title || metaData?.website?.title,
		description: description || metaData?.website?.description,
	};

	const openGraphProps = {
		url: url || metaData?.website?.url,
		title: title || metaData?.website?.title,
		description: description || metaData?.website?.description,
		siteTitle: siteTitle || metaData?.website?.title,
		locale: locale || metaData?.website?.locale,
		image: image || metaData?.website?.image,
		squareImage: squareImage || metaData?.website?.squareImage,
		article: article || null,
	};

	const twitterCardProps = {
		cardType: 'summary',
		site: url || metaData?.website?.twitter?.twitterSite,
		title: title || metaData?.website?.title,
		description: description || metaData?.website?.description,
		image: image || metaData?.website?.image?.url,
		imageAlt: imageAlt || metaData?.website?.image?.alt,
	};
</script>

<Base {...baseProps} />
<OpenGraph {...openGraphProps} />
<TwitterCards {...twitterCardProps} />
