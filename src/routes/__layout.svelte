<script>
	import '../app.css';
	import '../styles/css/app.css';

	import Meta from '$lib/meta/index.svelte';
	import Header from '$lib/header/index.svelte';
	import Footer from '$lib/footer/index.svelte';
</script>

<Meta />

<Header />

<div class="container w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
	<slot />
</div>

<Footer />

<style lang="scss" global>
	@import '../styles/scss/app.scss';
</style>
