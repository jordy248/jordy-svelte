<script>
	// import { fetchUrl } from "fetch";
	import { createGraphiQLFetcher } from '@graphiql/toolkit';
	import { GraphiQL } from 'graphiql';
	import 'graphiql/graphiql.css';

	import Card from '$lib/card/index.svelte';
	import { defaultQuery } from '../../graphql/schema.ts';
	import getRandomJoke from './getRandomJoke.js';

	import bohPhoto from '$lib/assets/boh.jpg';
	import finnPhoto from '$lib/assets/finn.jpg';

	const fetcher = createGraphiQLFetcher({
		url: 'http://localhost:3000/graphql',
		// url: 'https://www.jordy.is/graphql',
		fetch: fetch,
	});

	const jokesPromise = getRandomJoke();
</script>

<div class="container w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
	<div class="w-full min-h-[calc(100vh-100px)]	text-left margin-auto">
		<div class="px-4 py-4">
			<h1 class="text-center text-3xl py-3 sm:text-4xl sm:py-4">About</h1>
		</div>
		<div class="px-4 py-4">
			<div>
				<div class="text-center">
					<div class="inline-block">
						<span class="text-xl">🥨</span> PA-Dutch-born
					</div>
					<div class="inline-block">
						<span class="text-xl">🚗</span> Detroit-raised
					</div>
					<div class="inline-block">
						<span class="text-xl">🦀</span> Baltimore-based
					</div>
				</div>
			</div>
			{#await jokesPromise}
				<Card obverseText="Getting a cheesey joke about..." />
			{:then joke}
				<Card obverseText={joke.setup} reverseText={joke.punchline} />
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
			<div>
				<p class="my-6">
					I identify opportunities to make digital products work better for
					users, build component, interface, and experience prototypes to
					realize those opportunities, and run experiments to validate and
					optimize those experiences.
				</p>
				<p class="my-6">
					My professional experience spans the non-profit, federal, and
					financial industries. Bringing academic training in the humanities and
					applied statistics to bear with a decade working at the intersection
					of digital marketing and front-end development, I take pride in my
					ability to decompose complex technical projects and communicate
					effortlessly with non-technical partners and stakeholders.
				</p>
				<p class="my-6">
					I currently serve as the primary front-end developer and statistical
					analyst in T. Rowe Price's Digital Optimization & Innovation Center of
					Excellence. In addition to consulting with product owners on
					experimental design, I ensure proper instrumentation is in place and
					build bespoke digital experiences in support of firm-wide testing and
					personalization to rapidly transform prototypes into production-ready
					experiences.
				</p>
				<p class="my-6">
					Previously, I served as Online Fundraising Manager at the Smithsonian
					Institution. In this role, I provided development, analytics, and data
					engineering/integration support to the SI Membership Coop's digital
					marketing and analytics center of excellence for practitioners across
					the Institution. My pet project involved dreaming up and implementing
					a new digital conversion rate optimization program rooted in Bayesian
					probability and supported by calculators for practitioners (built
					using R/Shiny, Python/Flask/Dash/Plotly/PyMC3, AWS, and D3.js).
				</p>
				<p class="my-6">
					In my free time, I enjoy kayaking, hiking with my partner and pups
					(Boh and Finn), amateur zymology, reading, playing video games,
					tinkering with new technologies, and learning the banjo (my neighbors
					love me).
				</p>
				<div class="flex flex-auto flex-row flex-wrap justify-around">
					<img
						class="block rounded-full my-4 w-[85%] md:w-[45%]"
						src={bohPhoto}
						alt="Boh"
					/>
					<img
						class="block rounded-full my-4 w-[85%] md:w-[45%]"
						src={finnPhoto}
						alt="Finn"
					/>
				</div>
				<div class="w-full">
					<span class="block text-center text-sm font-light"
						>I swear these are two different dogs.</span
					>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="w-full mt-6 mb-12">
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/theme/dracula.css"
	/>
	<!-- <GraphiQL fetcher={fetcher} /> -->
	<react:GraphiQL {fetcher} editorTheme="dracula" query={defaultQuery} />
</div>
