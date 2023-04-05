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
					title="Made with ♥ and Svelte in Baltimore"
					class="link text-neutral-200"
					>Made with ♥ and <svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#ff3e00"
						width="16px"
						height="16px"
						style="display: inline-block;"
						viewBox="0 0 24 24"
						role="img"
					>
						<path
							d="M20.68 3.17a7.3 7.3 0 0 0-9.8-2.1l-5.6 3.56a6.36 6.36 0 0 0-2.89 4.3 6.66 6.66 0 0 0 .67 4.33 6.14 6.14 0 0 0-.95 2.4 6.84 6.84 0 0 0 1.16 5.16 7.33 7.33 0 0 0 9.8 2.12l5.6-3.56a6.36 6.36 0 0 0 2.88-4.3 6.66 6.66 0 0 0-.67-4.32 6.79 6.79 0 0 0-.2-7.59zM10.32 21.13a4.43 4.43 0 0 1-4.76-1.77c-.65-.9-.89-2.01-.7-3.11l.11-.53.1-.33.3.2c.66.5 1.4.86 2.19 1.1l.2.07-.02.2c-.02.28.06.59.22.83.33.47.9.7 1.45.55.12-.04.24-.08.34-.14l5.58-3.56c.28-.18.46-.45.53-.77.06-.33-.02-.67-.2-.94-.33-.46-.9-.67-1.45-.53-.12.04-.25.09-.35.15l-2.11 1.34a4.43 4.43 0 0 1-5.9-1.28 4.1 4.1 0 0 1-.7-3.11A3.85 3.85 0 0 1 6.92 6.9l5.57-3.56c.35-.22.73-.38 1.14-.5 1.8-.47 3.7.24 4.76 1.76a4.12 4.12 0 0 1 .57 3.64l-.1.33-.29-.2a7.42 7.42 0 0 0-2.2-1.1l-.2-.06.02-.2c.02-.29-.06-.6-.22-.84-.33-.47-.9-.67-1.45-.53-.12.04-.24.08-.34.14L8.59 9.37c-.28.19-.46.45-.52.78-.06.32.02.67.2.93.32.47.9.67 1.44.53.13-.04.25-.08.35-.14l2.13-1.36c.35-.23.74-.4 1.14-.51 1.81-.47 3.7.24 4.76 1.77.65.9.9 2.01.72 3.1a3.85 3.85 0 0 1-1.75 2.6l-5.58 3.55a4.9 4.9 0 0 1-1.16.51z"
						/>
					</svg> in Baltimore</a
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
