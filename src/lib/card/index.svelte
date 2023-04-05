<script>
	export let obverseText;
	export let reverseText;
	export let obverseMarkup;
	export let reverseMarkup;

	const hasReverse = reverseText || reverseMarkup;
</script>

{#if hasReverse}
	<div class="card-container card-flips">
		<div class="card">
			<div class="card-face card-face--obverse">
				{#if obverseMarkup}
					<div>{@html obverseMarkup}</div>
				{:else}
					<span>{obverseText}</span>
				{/if}
			</div>
			<div class="card-face card-face--reverse">
				{#if reverseMarkup}
					<div>{@html reverseMarkup}</div>
				{:else}
					<span>{reverseText}</span>
				{/if}
			</div>
		</div>
	</div>
{:else}
	<div class="card-container">
		<div class="card">
			<div class="card-face card-face--obverse">
				{#if obverseMarkup}
					<div>{@html obverseMarkup}</div>
				{:else}
					<span>{obverseText}</span>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style type="scss">
	@import '../../styles/scss/_vars.scss';

	.card-container {
		position: relative;
		perspective: 2000px;
		margin: 1rem 0rem;

		&.card-flips {
			cursor: pointer;
			&:hover {
				.card {
					transform: rotateX(180deg);
				}
			}
		}

		.card {
			display: block;
			background: #e2e8f0;
			border-radius: 4px;
			inset: 0rem;
			min-height: 5rem;

			transition: transform 666ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
			transform-origin: center center;
			transform-style: preserve-3d;

			.card-face {
				position: absolute;
				backface-visibility: hidden;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				padding: 1rem 2rem;
				border-radius: 4px;
				inset: 0px;
				padding: 1rem;
				-webkit-box-pack: center;
				-webkit-box-align: center;

				&--obverse {
					color: #334155;
				}
				&--reverse {
					color: #334155;
					background: var(--color-neon-purple);
					transform: rotateX(180deg);
				}

				span {
					display: block;
				}
			}
		}
	}
</style>
