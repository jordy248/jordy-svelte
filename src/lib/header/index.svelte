<script>
	const headerLinks = [
		{
			text: 'Home',
			link: '/home',
		},
		{
			text: 'Writing',
			link: '/writing',
		},
		{
			text: 'About',
			link: '/about',
		},
	];

	function expandHeader() {
		document.body.classList.toggle('nav-expanded');
	}
</script>

<header class="flex flex-col sm:flex-row justify-center items-center sm:sticky top-0 z-[2147483647] w-full px-4 sm:px-8 py-4 border-b border-zinc-600 brightness-90 backdrop-blur-md text-zinc-50 transition-all duration-250">
	<a href="/" class="logo no-underline transition-all duration-200 delay-300" on:click={expandHeader}>
		<div
		class="[flex: 2 1 auto] flex flex-row justify-center items-center text-center text-5xl font-Neonderthaw"
	>
		<span class="glow-red">jordy</span><span class="animate-flicker">n</span
		><span class="glow-red">elson</span>
	</div>
	</a>

	<div class="sm:invisible sm:hidden absolute top-[0] right-[0] my-4 mx-4" on:click={expandHeader}>
		<svg class="hamburger" viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg" stroke="none" fill="none">
			<rect x="0" y="18" height="4" class="hamburger--slice hamburger--mid"></rect>
			<rect x="0" y="10" height="4" class="hamburger--slice hamburger--top"></rect>
			<rect x="0" y="26" height="4" class="hamburger--slice hamburger--bottom"></rect>
		</svg>
	</div>

	<!-- invisible hidden sm:visible -->
	<nav class="sm:opacity-100 flex flex-auto flex-row flex-nowrap justify-end sm:py-2">
		{#each headerLinks as headerLink}
			<a
				href={headerLink.link}
				class="block [flex: 1 1 100%] sm:[flex: 1 1 auto] px-4 py-2 my-2 sm:my-2 font-medium hover:glow-blue hover:text-sky-200"
				on:click={expandHeader}
				>{headerLink.text}</a
			>
		{/each}
	</nav>
</header>

<style lang="scss">
</style>
