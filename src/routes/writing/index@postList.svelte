<script context="module">
	export async function load() {
		const posts = import.meta.globEager('../../lib/posts-markdown/*.md');
		const postImages = import.meta.globEager(
			'../../lib/assets/**/*.{png,svg,jpg}'
		);

		const postsList = Object.values(posts);
		const postsMeta = postsList
			.map((p) => p.metadata)
			.sort((a, b) => {
				const aDate = +new Date(a.date);
				const bDate = +new Date(b.date);

				if (aDate < bDate) {
					return 1;
				}
				if (aDate > bDate) {
					return -1;
				}
				return 0;
			});

		return {
			props: {
				postsMeta,
				postImages,
			},
		};
	}
</script>

<script>
	export let postsMeta;

	export let index = 0;
	$: incrementedIndex = index + 1;
</script>

<h1 class="text-center text-3xl py-3 sm:text-4xl sm:py-4">Writing</h1>

<aside class="mt-5">
	{#each postsMeta as postMeta, incrementedIndex}
		<div
			class="article flex flex-col justify-center my-2 p-4 border-t-4 border-zinc-500"
		>
			<div class="w-full flex-[1_0_auto] flex flex-row justify-center">
				<div class="absolute left-8">
					<span class="text-5xl text-zinc-50/10">{incrementedIndex}</span>
				</div>
				<div class="flex flex-col">
					<h3 class="text-xl">
						<a
							href="/writing/about/{postMeta.slug}"
							title={postMeta.title}
							class="link text-zinc-200"
						>
							{postMeta.title}
						</a>
					</h3>
					<span class="text-sm">
						{new Date(postMeta.date).toISOString().split('T')[0]}
					</span>
				</div>
			</div>
			<div />
		</div>
	{/each}
</aside>

<style lang="scss">
</style>
