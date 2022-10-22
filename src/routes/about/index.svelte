<script>
	// import { fetchUrl } from "fetch";
	import { createGraphiQLFetcher } from '@graphiql/toolkit';
	import { GraphiQL } from 'graphiql';
	import 'graphiql/graphiql.css';

	import { defaultQuery } from "../../graphql/schema.ts";

	const fetcher = createGraphiQLFetcher({
		url: 'http://localhost:3000/graphql',
		fetch: fetch
	});
</script>

<div class="w-full min-h-screen text-left margin-none">
	<div class="px-4 py-4">
		<h1 class="text-center text-3xl py-3 sm:text-4xl sm:py-4">
			Hey I'm the about page
		</h1>
		<p>Have you heard the one about the elevator? It works on so many levels.</p>
	</div>

	<div class="w-full min-h-screen">
		<!-- <GraphiQL fetcher={fetcher} /> -->
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/theme/dracula.css" />
			<react:GraphiQL 
			fetcher={fetcher}
			editorTheme="dracula"
            query={defaultQuery}
		/>
	</div>
</div>