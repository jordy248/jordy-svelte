<script context="module">
	export async function load() {
		const posts = import.meta.globEager('../../lib/posts-markdown/*.md');
		const postImages = import.meta.globEager(
			'../../lib/assets/**/*.{png,svg,jpg}'
		);

		const postsList = Object.values(posts);
		const postsMeta = postsList.map((p) => p.metadata);

		console.log('posts', posts);
		console.log('postsMeta', postsMeta);
		console.log('postImages', postImages);

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
</script>

<div class="w-full min-h-screen	text-center margin-auto">
	<slot><!-- optional fallback --></slot>

	<aside class="mt-5">
		{#each postsMeta as postMeta}
			<div class="flex flex-col">
				<div class="w-full flex-[1_0_auto]">
					<h3 class="text-xl">
						<a
							href="/writing/about/{postMeta.slug}"
							title={postMeta.title}
							class="link text-zinc-200">{postMeta.title}</a
						>
					</h3>
				</div>
				<div>
					<span class="text-sm">
						{new Date(postMeta.date).toISOString().split('T')[0]}
					</span>
				</div>
			</div>
		{/each}
		<!-- <ul>
      {#each postsMeta as postMeta}
        <li><a sveltekit:prefetch href="/writing/about/{postMeta.slug}">{postMeta.title}</a></li>
      {/each}
    </ul> -->
	</aside>
</div>
