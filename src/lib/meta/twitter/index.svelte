<script>
	export let cardType;
	export let site;
	// export let siteID;
	// export let creator;
	// export let creatorID;
	export let description;
	export let title;
	export let image;
	export let imageAlt;
	// export let player;
	// export let playerWidth;
	// export let playerHeight;
	// export let playerStream;
	// export let iPhoneAppName;
	// export let iPhoneAppID;
	// export let iPhoneAppURL;
	// export let iPadAppName;
	// export let iPadAppID;
	// export let iPadAppURL;
	// export let googleAppName;
	// export let googleAppID;
	// export let googleAppURL;
</script>

<svelte:head>
	{#if cardType === 'summary' || cardType === 'summary_large_image'}
		<meta property="twitter:card" content={cardType} />
		<meta property="twitter:site" content={site} />
		<!-- <meta property="twitter:site:id" content={siteID} />
		<meta property="twitter:creator" content={creator} />
		<meta property="twitter:creator:id" content={creatorID} /> -->
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:image" content={image} />
		<meta property="twitter:image:alt" content={imageAlt} />
	{/if}

	<!-- {#if cardType === 'player'}
		<meta property="twitter:card" content={cardType} />
		<meta property="twitter:site" content={site} />
		<meta property="twitter:site:id" content={siteID} />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:image" content={image} />
		<meta property="twitter:image:alt" content={imageAlt} />
		<meta property="twitter:creator" content={creator} />
		<meta property="twitter:creator:id" content={creatorID} />
		<meta property="twitter:player" content={player} />
		<meta property="twitter:player:width" content={playerWidth} />
		<meta property="twitter:player:height" content={playerHeight} />
		<meta property="twitter:player:stream" content={playerStream} />
	{/if} -->

	<!-- {#if cardType === 'app'}
		<meta property="twitter:card" content={cardType} />
		<meta property="twitter:site" content={site} />
		<meta property="twitter:site:id" content={siteID} />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:app:name:iphone" content={iPhoneAppName} />
		<meta property="twitter:app:id:iphone" content={iPhoneAppID} />
		<meta property="twitter:app:url:iphone" content={iPhoneAppURL} />
		<meta property="twitter:app:name:ipad" content={iPadAppName} />
		<meta property="twitter:app:id:ipad" content={iPadAppID} />
		<meta property="twitter:app:url:ipad" content={iPadAppURL} />
		<meta property="twitter:app:name:googleplay" content={googleAppName} />
		<meta property="twitter:app:id:googleplay" content={googleAppID} />
		<meta property="twitter:app:url:googleplay" content={googleAppURL} />
	{/if} -->
</svelte:head>
