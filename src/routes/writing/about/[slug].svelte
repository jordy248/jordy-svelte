<script context="module">
	export async function load({ params, session }) {
		try {
			// get lang
			const { language = 'en-US' } = session.user;

			// get post
			const Post = await import(
				`../../../lib/posts-markdown/${params.slug}.md`
			);
			console.log('Post', Post);

			return {
				props: {
					Post: Post,
					language,
				},
			};
		} catch (e) {
			console.log(e);
			return {
				status: 404,
				error: 'Post not found',
			};
		}
	}
</script>

<script>
	import Meta from '$lib/meta/index.svelte';
	import Header from '$lib/header/index.svelte';
	import Footer from '$lib/footer/index.svelte';
	import ProcessedPost from '$lib/processedPost/index.svelte';

	export let Post;
	export let language;

	function getFormattedDate(dateString, locale) {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		const d = new Date(dateString);
		const formattedDate = d.toLocaleDateString(locale, options);
		return formattedDate;
	}

	const datePublished =
		Post.metadata.date && getFormattedDate(Post.metadata.date, language);
	const dateUpdated =
		Post.metadata.updated && getFormattedDate(Post.metadata.updated, language);

	const metaProps = {
		url: `https://jordy.is/writing/about/${Post.metadata.slug}/`,
		title: Post.metadata.title,
		description: Post.metadata.description,
		image: `https://jordy.is/images/post-images/${Post.metadata.image}`,
		article: {
			datePublished: Post.metadata.date,
			lastUpdated: Post.metadata.updated || Post.metadata.date,
		},
	};
</script>

<Meta {...metaProps} />

<main class="container">
	<div
		class="w-2/3 m-auto flex flex-col justify-start align-center mb-8 text-zinc-200"
	>
		<h1 class="text-3xl py-3 sm:text-4xl sm:py-4 md:text-5xl">
			{Post.metadata.title}
		</h1>

		{#if datePublished}
			<div class="block w-max mt-2 pt-1 border-t border-zinc-50 text-sm">
				<span
					><strong class="text-zinc-50">Published:</strong>
					{datePublished}</span
				>
				{#if dateUpdated}
					<span
						><strong class="text-zinc-50">Updated: </strong>{dateUpdated}</span
					>
				{/if}
			</div>
		{/if}
	</div>

	<article class="text-zinc-200 text-lg w-full m-auto sm:w-3/4 ">
		<!-- <svelte:component this={Post.default}/> -->
		<ProcessedPost post={Post.default} />
	</article>
</main>
