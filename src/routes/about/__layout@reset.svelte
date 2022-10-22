<script>
	import '../../app.css';
	import '../../styles/css/app.css';

	import Header from '$lib/header/index.svelte';
	import Footer from '$lib/footer/index.svelte';
</script>

<Header />

<div class="md:container w-full m-0">
	<slot />
</div>

<Footer />

<style lang="scss" global>
	@import '../../styles/scss/app.scss';
</style>
