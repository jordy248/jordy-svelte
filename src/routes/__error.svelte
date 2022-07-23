<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status,
			},
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<h1>Something Happened</h1>

<h3>error {status}: {error.message}</h3>
