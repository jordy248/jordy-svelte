<script>
	import { session } from '$app/stores';

	import Spotify from '$lib/spotify/index.svelte';

	import liLogo from '$lib/assets/LI-In-Bug.png';
	import ghLogo from '$lib/assets/GitHub-Mark-Light-64px.png';
	import emLogo from '$lib/assets/envelope.svg';

	const socialLinks = [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/jordynelson/',
			imgAlt: 'LinkedIn',
			imgSrc: liLogo,
		},
		{
			name: 'GitHub',
			link: 'https://github.com/jordy248',
			imgAlt: 'Github',
			imgSrc: ghLogo,
		},
		// {
		//   name: 'Email',
		//   link: 'mailto:jordy@jordynelson.io',
		//   imgAlt: 'Email',
		//   imgSrc: emLogo,
		// }
	];

	const weekday = new Date().toLocaleDateString($session.user.language, {
		weekday: 'long',
	});
</script>

<footer
	class="block w-full mt-4 px-6 py-4 border-t border-neutral-600 brightness-90"
>
	<div
		class="w-full flex flex-col justify-center align-center sm:flex-row sm:justify-between"
	>
		<div
			class="box flex-[1_1_0] flex flex-row justify-center sm:justify-start mr-0 sm:mr-[auto] my-3"
		>
			<div>
				<div
					class="flex-[1_1_auto] w-full sm:w-auto flex flex-row justify-between items-center order-2 sm:order-1 my-3 footer-row-item"
				>
					{#each socialLinks as socialLink}
						<div class="flex-auto flex-auto flex flex-row justify-center mx-3">
							<a href={socialLink.link}>
								<img
									src={socialLink.imgSrc}
									alt={socialLink.imgAlt}
									class="w-7"
								/>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="box flex-[1_1_0] flex justify-center my-3">
			<div>
				<a
					href="http://madewithloveinbaltimore.org/"
					target="_blank"
					title="Made with ♥ in Baltimore"
					class="link text-neutral-200">Made with ♥ in Baltimore</a
				>
			</div>
		</div>
		<div
			class="box flex-[1_1_0] flex justify-center sm:justify-end ml-0 sm:ml-[auto] my-3"
		>
			<div>
				<span>Enjoy your {weekday || 'day'}</span>
			</div>
		</div>
	</div>

	<div class="w-full flex flex-col justify-center items-center">
		<Spotify />
	</div>
</footer>

<style></style>
